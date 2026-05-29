/**
 * Vercel Serverless Function — ZDiTM API Proxy
 * Bypasses CORS restrictions from ZDiTM Szczecin API
 * Fetches real-time departure data for trams and buses
 * 
 * Endpoint: /api/zditm-departures?stops=Łucznicza,Tarczowa
 */

export default async function handler(req, res) {
  try {
    // Get stop names from query
    const { stops } = req.query;
    if (!stops) {
      return res.status(400).json({ error: 'Missing stops parameter' });
    }

    const stopList = Array.isArray(stops) ? stops : [stops];
    
    // Fetch stops data from ZDiTM to get stop IDs
    const stopsUrl = 'http://api.zditm.szczecin.pl/v1/stops';
    const stopsRes = await fetch(stopsUrl, {
      timeout: 5000,
      headers: {
        'User-Agent': 'SzczecinGuide/1.0 (+http://szn-theta.vercel.app)',
        'Accept': 'application/json',
      },
    });

    if (!stopsRes.ok) {
      console.error('ZDiTM stops fetch failed:', stopsRes.status, stopsRes.statusText);
      // Fallback: return simulated data on API failure
      return res.status(200).json({
        source: 'simulated',
        message: 'ZDiTM API unavailable — using simulated data',
        departures: generateSimulatedDepartures(),
      });
    }

    const stopsData = await stopsRes.json();
    const stops = stopsData.data || [];

    // Find matching stops by name
    const matchingStops = stops.filter(s => 
      stopList.some(name => s.name?.toLowerCase().includes(name.toLowerCase()))
    );

    if (matchingStops.length === 0) {
      // No matching stops found — return simulated
      return res.status(200).json({
        source: 'simulated',
        message: 'Stops not found in ZDiTM database',
        departures: generateSimulatedDepartures(),
      });
    }

    // Fetch departures for each matching stop
    const allDepartures = [];
    for (const stop of matchingStops.slice(0, 3)) {
      try {
        const depUrl = `http://api.zditm.szczecin.pl/v1/displays/${stop.id}`;
        const depRes = await fetch(depUrl, {
          timeout: 5000,
          headers: {
            'User-Agent': 'SzczecinGuide/1.0 (+http://szn-theta.vercel.app)',
            'Accept': 'application/json',
          },
        });

        if (depRes.ok) {
          const depData = await depRes.json();
          const lines = depData.lines || [];
          
          lines.forEach(line => {
            const departures = line.departures || [];
            departures.slice(0, 3).forEach(dep => {
              allDepartures.push({
                line: String(line.lineNumber || line.name || ''),
                type: line.type || 'bus',
                dest: line.direction || 'Nieznany kierunek',
                stop: stop.name,
                time: dep.plannedTime || dep.estimatedTime || dep.time,
                realtime: !!dep.estimatedTime,
              });
            });
          });
        }
      } catch (err) {
        console.warn(`Failed to fetch departures for stop ${stop.id}:`, err.message);
      }
    }

    // If we got some real data, sort and return
    if (allDepartures.length > 0) {
      // Parse times and calculate minutes remaining
      const enriched = allDepartures.map(d => {
        let minsLeft = 0;
        if (d.time) {
          try {
            const depTime = new Date(d.time);
            minsLeft = Math.max(0, Math.round((depTime - new Date()) / 60000));
          } catch (e) {
            minsLeft = Math.floor(Math.random() * 15) + 1;
          }
        }
        return { ...d, minsLeft };
      });

      enriched.sort((a, b) => a.minsLeft - b.minsLeft);

      return res.status(200).json({
        source: 'zditm-real',
        timestamp: new Date().toISOString(),
        departures: enriched.slice(0, 20),
      });
    }

    // Fallback to simulated if no real data
    return res.status(200).json({
      source: 'simulated',
      message: 'No real-time data available',
      departures: generateSimulatedDepartures(),
    });

  } catch (err) {
    console.error('Proxy error:', err);
    
    // Always return simulated data on error to prevent app breakage
    return res.status(200).json({
      source: 'simulated',
      error: err.message,
      departures: generateSimulatedDepartures(),
    });
  }
}

/**
 * Generate realistic simulated departures as fallback
 */
function generateSimulatedDepartures() {
  const LINES = [
    { num: '3',   type: 'tram', color: '#e74c3c', dest: 'Centrum' },
    { num: '7',   type: 'tram', color: '#c0392b', dest: 'Dworzec Główny' },
    { num: '12',  type: 'tram', color: '#e74c3c', dest: 'Plac Rodła' },
    { num: '51',  type: 'bus',  color: '#2980b9', dest: 'Centrum' },
    { num: '64',  type: 'bus',  color: '#3498db', dest: 'Dworzec Niebuszewo' },
    { num: '78',  type: 'bus',  color: '#2980b9', dest: 'Centrum' },
    { num: '103', type: 'bus',  color: '#1abc9c', dest: 'Osiedle Zawadzkiego' },
  ];

  const STOPS = ['Łucznicza', 'Tarczowa', 'Osiedle Łucznicza'];
  const departures = [];

  LINES.forEach(line => {
    const count = 2 + Math.floor(Math.random() * 2);
    let baseMins = 1 + Math.floor(Math.random() * 8);

    for (let i = 0; i < count; i++) {
      departures.push({
        line: line.num,
        type: line.type,
        dest: line.dest,
        stop: STOPS[Math.floor(Math.random() * STOPS.length)],
        minsLeft: baseMins,
        realtime: false,
      });
      baseMins += 3 + Math.floor(Math.random() * 10);
    }
  });

  departures.sort((a, b) => a.minsLeft - b.minsLeft);
  return departures.slice(0, 20);
}
