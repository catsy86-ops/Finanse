/**
 * Advanced Map Enhancements Module
 * Heatmaps, clustering, routing, measurements, export
 */

'use strict';

const MAP_ENHANCEMENTS = {
  heatmapEnabled: false,
  clusteringEnabled: true,
  routingMode: false,
  measurementMode: false,
  measurementPoints: [],
  selectedRoute: null,
  layerVisibility: {}
};

// ===== HEATMAP: Aktywność mieszkańców =====
function addActivityHeatmap() {
  const map = window.state.map;
  if (!map) return;

  // Data punktów aktywności bazowane na community data
  const activityPoints = [
    // Skwer przy Tarczowej - parki i spacery
    { lat: 53.4018, lng: 14.5535, weight: 0.9, activity: 'park' },
    { lat: 53.4020, lng: 14.5537, weight: 0.85, activity: 'park' },
    { lat: 53.4016, lng: 14.5533, weight: 0.8, activity: 'park' },
    
    // Boisko - sport
    { lat: 53.4030, lng: 14.5510, weight: 0.95, activity: 'sport' },
    { lat: 53.4032, lng: 14.5512, weight: 0.9, activity: 'sport' },
    
    // Bar Mleczny - jedzenie
    { lat: 53.4035, lng: 14.5528, weight: 0.88, activity: 'food' },
    { lat: 53.4033, lng: 14.5530, weight: 0.85, activity: 'food' },
    
    // Szkoła - edukacja
    { lat: 53.4010, lng: 14.5540, weight: 0.75, activity: 'edu' },
    { lat: 53.4012, lng: 14.5542, weight: 0.7, activity: 'edu' },
    
    // Apteka - usługi
    { lat: 53.4040, lng: 14.5515, weight: 0.7, activity: 'service' },
    { lat: 53.4038, lng: 14.5517, weight: 0.65, activity: 'service' },
  ];

  const heatmapData = {
    type: 'FeatureCollection',
    features: activityPoints.map(point => ({
      type: 'Feature',
      properties: {
        heat: point.weight,
        activity: point.activity
      },
      geometry: {
        type: 'Point',
        coordinates: [point.lng, point.lat]
      }
    }))
  };

  if (map.getSource('activity-heatmap')) {
    map.removeSource('activity-heatmap');
    map.removeLayer('activity-heatmap-layer');
  }

  map.addSource('activity-heatmap', {
    type: 'geojson',
    data: heatmapData
  });

  map.addLayer(
    {
      id: 'activity-heatmap-layer',
      type: 'heatmap',
      source: 'activity-heatmap',
      paint: {
        'heatmap-weight': [
          'interpolate',
          ['linear'],
          ['get', 'heat'],
          0,
          0,
          1,
          1
        ],
        'heatmap-intensity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          1,
          9,
          3
        ],
        'heatmap-color': [
          'interpolate',
          ['linear'],
          ['heatmap-density'],
          0,
          'rgba(0, 0, 255, 0)',
          0.1,
          'royalblue',
          0.3,
          'cyan',
          0.5,
          'lime',
          0.7,
          'yellow',
          1,
          'red'
        ],
        'heatmap-radius': [
          'interpolate',
          ['linear'],
          ['zoom'],
          0,
          2,
          9,
          20
        ],
        'heatmap-opacity': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7,
          1,
          9,
          0.8
        ]
      }
    },
    'water'
  );

  MAP_ENHANCEMENTS.heatmapEnabled = true;
  showToast('🔥 Mapa ciepła aktywności włączona');
}

function toggleActivityHeatmap() {
  const map = window.state.map;
  if (!map) return;

  const layer = map.getLayer('activity-heatmap-layer');
  if (!layer) {
    addActivityHeatmap();
    return;
  }

  const visibility = map.getLayoutProperty('activity-heatmap-layer', 'visibility');
  map.setLayoutProperty(
    'activity-heatmap-layer',
    'visibility',
    visibility === 'visible' ? 'none' : 'visible'
  );

  MAP_ENHANCEMENTS.heatmapEnabled = visibility !== 'visible';
  showToast(MAP_ENHANCEMENTS.heatmapEnabled ? '🔥 Heatmapa włączona' : '🔥 Heatmapa wyłączona');
}

// ===== CLUSTERING: Grupowanie markerów =====
function enableMarkerClustering() {
  const map = window.state.map;
  if (!map) return;

  // Create GeoJSON from markers
  const features = APP_DATA.places.map(place => ({
    type: 'Feature',
    properties: {
      id: place.id,
      name: place.name,
      category: place.cat
    },
    geometry: {
      type: 'Point',
      coordinates: [place.coords[0], place.coords[1]]
    }
  }));

  if (map.getSource('places-cluster')) {
    map.removeSource('places-cluster');
  }

  map.addSource('places-cluster', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: features
    },
    cluster: true,
    clusterMaxZoom: 14,
    clusterRadius: 50
  });

  // Cluster layer
  map.addLayer({
    id: 'clusters',
    type: 'circle',
    source: 'places-cluster',
    filter: ['has', 'point_count'],
    paint: {
      'circle-color': '#6c63ff',
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        20,
        100,
        30,
        750,
        40
      ],
      'circle-opacity': 0.8
    }
  });

  // Cluster count label
  map.addLayer({
    id: 'cluster-count',
    type: 'symbol',
    source: 'places-cluster',
    filter: ['has', 'point_count'],
    layout: {
      'text-field': '{point_count_abbreviated}',
      'text-font': ['Open Sans Semibold'],
      'text-size': 14
    },
    paint: {
      'text-color': '#ffffff'
    }
  });

  MAP_ENHANCEMENTS.clusteringEnabled = true;
  showToast('📍 Clustering markerów włączony');
}

// ===== ROUTING: Nawigacja między POI =====
function enableRouting(startPlaceId, endPlaceId) {
  const map = window.state.map;
  if (!map) return;

  const startPlace = APP_DATA.places.find(p => p.id === startPlaceId);
  const endPlace = APP_DATA.places.find(p => p.id === endPlaceId);

  if (!startPlace || !endPlace) {
    showToast('⚠️ Wybierz początek i koniec trasy');
    return;
  }

  // Simplified routing (direct line)
  const routeCoords = [
    [startPlace.coords[0], startPlace.coords[1]],
    [endPlace.coords[0], endPlace.coords[1]]
  ];

  // Calculate distance
  const distance = calculateDistance(
    startPlace.coords[1],
    startPlace.coords[0],
    endPlace.coords[1],
    endPlace.coords[0]
  );

  if (map.getSource('route')) {
    map.removeSource('route');
    map.removeLayer('route-line');
  }

  map.addSource('route', {
    type: 'geojson',
    data: {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: routeCoords
      }
    }
  });

  map.addLayer({
    id: 'route-line',
    type: 'line',
    source: 'route',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': '#ff6584',
      'line-width': 5,
      'line-opacity': 0.8,
      'line-dasharray': [3, 3]
    }
  });

  // Fit bounds
  const bounds = routeCoords.reduce(
    (bounds, coord) => bounds.extend(coord),
    new mapboxgl.LngLatBounds(routeCoords[0], routeCoords[0])
  );

  map.fitBounds(bounds, { padding: 100 });

  MAP_ENHANCEMENTS.selectedRoute = {
    start: startPlace.name,
    end: endPlace.name,
    distance: distance
  };

  showToast(`📍 Trasa: ${distance.toFixed(2)}km (spacer ~${Math.round(distance * 12)} min)`);
}

// ===== MEASUREMENT: Mierz odległości =====
function enableMeasurementMode() {
  const map = window.state.map;
  if (!map) return;

  MAP_ENHANCEMENTS.measurementMode = !MAP_ENHANCEMENTS.measurementMode;
  MAP_ENHANCEMENTS.measurementPoints = [];

  if (!MAP_ENHANCEMENTS.measurementMode) {
    // Disable measurement
    if (map.getSource('measurement')) {
      map.removeSource('measurement');
      map.removeLayer('measurement-line');
      map.removeLayer('measurement-points');
    }
    showToast('📏 Pomiar wyłączony');
    return;
  }

  showToast('📏 Kliknij na mapę aby zmierzyć odległość');

  // Add measurement layers
  if (!map.getSource('measurement')) {
    map.addSource('measurement', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: []
      }
    });

    map.addLayer({
      id: 'measurement-line',
      type: 'line',
      source: 'measurement',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: {
        'line-color': '#ff9900',
        'line-width': 3,
        'line-opacity': 0.8,
        'line-dasharray': [2, 2]
      }
    });

    map.addLayer({
      id: 'measurement-points',
      type: 'circle',
      source: 'measurement',
      paint: {
        'circle-color': '#ff9900',
        'circle-radius': 6,
        'circle-opacity': 0.9
      }
    });
  }

  // Click handler
  map.once('click', (e) => {
    addMeasurementPoint(e.lngLat);
  });
}

function addMeasurementPoint(lngLat) {
  const map = window.state.map;
  MAP_ENHANCEMENTS.measurementPoints.push([lngLat.lng, lngLat.lat]);

  if (MAP_ENHANCEMENTS.measurementPoints.length > 1) {
    // Calculate total distance
    let totalDistance = 0;
    for (let i = 0; i < MAP_ENHANCEMENTS.measurementPoints.length - 1; i++) {
      const p1 = MAP_ENHANCEMENTS.measurementPoints[i];
      const p2 = MAP_ENHANCEMENTS.measurementPoints[i + 1];
      totalDistance += calculateDistance(p1[1], p1[0], p2[1], p2[0]);
    }

    showToast(`📏 Odległość: ${totalDistance.toFixed(2)}km`);
  }

  // Update measurement layer
  const data = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: MAP_ENHANCEMENTS.measurementPoints
        }
      },
      ...MAP_ENHANCEMENTS.measurementPoints.map(coord => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coord
        }
      }))
    ]
  };

  map.getSource('measurement').setData(data);

  if (MAP_ENHANCEMENTS.measurementMode) {
    map.once('click', (e) => {
      addMeasurementPoint(e.lngLat);
    });
  }
}

// ===== EXPORT: Pobierz mapę jako zdjęcie =====
function exportMapAsImage() {
  const map = window.state.map;
  if (!map) return;

  // Use Mapbox built-in canvas
  const canvas = map.getCanvas();
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = `mapa-lucznicza-${new Date().toISOString().split('T')[0]}.png`;
  link.click();

  showToast('📥 Mapa pobrana jako PNG');
}

// ===== GEOFENCING: Strefy zainteresowania =====
function addGeofences() {
  const map = window.state.map;
  if (!map) return;

  // Define zones around each category
  const zones = [
    {
      id: 'zone-sport',
      name: 'Strefa Sportowa',
      center: [14.5510, 53.4030],
      radius: 200, // meters
      color: '#ff6b6b'
    },
    {
      id: 'zone-food',
      name: 'Strefa Gastronomiczna',
      center: [14.5528, 53.4035],
      radius: 150,
      color: '#ffd93d'
    },
    {
      id: 'zone-family',
      name: 'Strefa Rodzinna',
      center: [14.5535, 53.4018],
      radius: 250,
      color: '#4ecdc4'
    }
  ];

  zones.forEach(zone => {
    // Create circle coordinates
    const circleCoords = [];
    const radius = zone.radius / 111320; // Convert meters to degrees
    for (let i = 0; i < 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      circleCoords.push([
        zone.center[0] + radius * Math.cos(angle),
        zone.center[1] + radius * Math.sin(angle)
      ]);
    }
    circleCoords.push(circleCoords[0]); // Close circle

    if (map.getSource(zone.id)) {
      map.removeSource(zone.id);
    }

    map.addSource(zone.id, {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [circleCoords]
        }
      }
    });

    map.addLayer({
      id: `${zone.id}-fill`,
      type: 'fill',
      source: zone.id,
      paint: {
        'fill-color': zone.color,
        'fill-opacity': 0.1
      }
    });

    map.addLayer({
      id: `${zone.id}-border`,
      type: 'line',
      source: zone.id,
      paint: {
        'line-color': zone.color,
        'line-width': 2,
        'line-opacity': 0.6,
        'line-dasharray': [4, 4]
      }
    });
  });

  showToast('🎯 Strefy zainteresowania dodane');
}

// ===== DISTANCE CALCULATION =====
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// ===== EXPORT =====
window.mapEnhancements = {
  addHeatmap: addActivityHeatmap,
  toggleHeatmap: toggleActivityHeatmap,
  enableClustering: enableMarkerClustering,
  routing: enableRouting,
  measurement: enableMeasurementMode,
  export: exportMapAsImage,
  geofences: addGeofences
};
