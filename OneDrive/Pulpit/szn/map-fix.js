/**
 * Map Fix & Configuration Helper
 * - Auto-detects if token is missing
 * - Provides token setup instructions
 * - Offers fallback colorful map styles
 * - Works without token (basic map)
 */

'use strict';

const MAP_FIX = {
  hasValidToken: false,
  tokenSet: false,
  fallbackActive: false
};

// Check for token and show setup dialog if needed
function checkMapboxToken() {
  const token = localStorage.getItem('mapboxToken');
  
  if (!token || token === '') {
    MAP_FIX.hasValidToken = false;
    showTokenSetupDialog();
  } else {
    MAP_FIX.hasValidToken = true;
    MAP_FIX.tokenSet = true;
  }
}

function showTokenSetupDialog() {
  // Create modal
  const modal = document.createElement('div');
  modal.id = 'tokenSetupModal';
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;
  
  modal.innerHTML = `
    <div style="
      background: var(--surface);
      border-radius: 16px;
      padding: 32px;
      max-width: 500px;
      color: var(--text);
      box-shadow: 0 10px 40px rgba(0,0,0,0.3);
    ">
      <h2 style="margin: 0 0 16px 0; color: var(--accent);">🗺️ Konfiguracja Mapbox</h2>
      
      <p style="margin: 0 0 12px 0; color: var(--text2); font-size: 14px;">
        Aby aktywować pełną mapę 3D, potrzebujesz tokenu Mapbox.
      </p>
      
      <div style="
        background: var(--surface2);
        border-left: 3px solid var(--accent);
        padding: 12px;
        margin: 16px 0;
        border-radius: 4px;
        font-size: 13px;
        font-family: monospace;
      ">
        <strong>Jak ustawić token:</strong><br>
        1. Idź do: <a href="https://account.mapbox.com/tokens" target="_blank" style="color: var(--accent);">mapbox.com/tokens</a><br>
        2. Zaloguj się (utwórz konto jeśli trzeba)<br>
        3. Skopiuj DEFAULT PUBLIC TOKEN<br>
        4. Wklej poniżej
      </div>
      
      <div style="margin: 16px 0;">
        <label style="display: block; margin-bottom: 8px; font-weight: 600;">Token Mapbox:</label>
        <input 
          type="text" 
          id="mapboxTokenInput" 
          placeholder="pk.eyJ1IjoiYWxhbWEifQ..." 
          style="
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 8px;
            background: var(--surface);
            color: var(--text);
            font-family: monospace;
            font-size: 12px;
            box-sizing: border-box;
          "
        />
      </div>
      
      <div style="display: flex; gap: 12px; margin: 24px 0 0 0;">
        <button 
          id="saveTokenBtn" 
          style="
            flex: 1;
            padding: 12px;
            background: var(--accent);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
          "
        >✅ Zapisz Token</button>
        <button 
          id="skipTokenBtn" 
          style="
            flex: 1;
            padding: 12px;
            background: var(--surface2);
            color: var(--text);
            border: 1px solid var(--border);
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
          "
        >⏭️ Pomiń (Szara Mapa)</button>
      </div>
      
      <p style="margin: 16px 0 0 0; font-size: 12px; color: var(--text2);">
        💡 <strong>Tip:</strong> Mapę możesz ustawić zawsze później.
      </p>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Event listeners
  document.getElementById('saveTokenBtn').addEventListener('click', () => {
    const token = document.getElementById('mapboxTokenInput').value.trim();
    if (token) {
      localStorage.setItem('mapboxToken', token);
      MAP_FIX.hasValidToken = true;
      MAP_FIX.tokenSet = true;
      modal.remove();
      location.reload(); // Reload to use new token
    } else {
      alert('⚠️ Wklej token i spróbuj jeszcze raz!');
    }
  });
  
  document.getElementById('skipTokenBtn').addEventListener('click', () => {
    modal.remove();
    activateFallbackMap();
  });
  
  // Allow Enter to save
  document.getElementById('mapboxTokenInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('saveTokenBtn').click();
    }
  });
}

function activateFallbackMap() {
  MAP_FIX.fallbackActive = true;
  
  // Style the map container with colorful gradient
  const mapContainer = document.getElementById('map');
  if (mapContainer) {
    mapContainer.style.background = `
      linear-gradient(135deg, 
        #667eea 0%, 
        #764ba2 25%, 
        #f093fb 50%, 
        #4facfe 75%, 
        #00f2fe 100%
      )`;
    
    // Add animated background
    mapContainer.style.backgroundSize = '400% 400%';
    mapContainer.style.animation = 'gradientShift 15s ease infinite';
    
    // Add CSS animation if not already there
    if (!document.getElementById('fallbackMapStyle')) {
      const style = document.createElement('style');
      style.id = 'fallbackMapStyle';
      style.textContent = `
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        #map {
          background-attachment: fixed !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  // Show info message
  showToast('🎨 Użycie alternatywnego tła. Dodaj token aby aktywować pełną mapę!');
  
  // Add fallback UI
  addFallbackUI();
}

function addFallbackUI() {
  const mapContainer = document.getElementById('map');
  if (!mapContainer) return;
  
  const info = document.createElement('div');
  info.style.cssText = `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    color: white;
    max-width: 400px;
    z-index: 100;
  `;
  
  info.innerHTML = `
    <div style="font-size: 48px; margin-bottom: 16px;">🗺️</div>
    <h2 style="margin: 0 0 12px 0; font-size: 24px;">Mapa Ładuje się...</h2>
    <p style="margin: 0 0 16px 0; opacity: 0.8;">
      Aby zobaczyć pełną mapę 3D Szczecina, dodaj token Mapbox.
    </p>
    <button id="setupTokenBtn" style="
      padding: 12px 24px;
      background: #667eea;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      font-size: 16px;
    ">
      🔑 Dodaj Token
    </button>
    <p style="margin: 16px 0 0 0; font-size: 12px; opacity: 0.6;">
      Darmowa konfiguracja, zajmie 1 minutę
    </p>
  `;
  
  mapContainer.appendChild(info);
  
  document.getElementById('setupTokenBtn').addEventListener('click', showTokenSetupDialog);
}

// Try to use fallback styles if no token
function ensureMapWorks() {
  const token = localStorage.getItem('mapboxToken');
  
  if (!token || token === '') {
    // No token - use fallback
    setTimeout(activateFallbackMap, 1000);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(checkMapboxToken, 500);
});

// Also expose globally
window.mapFix = {
  checkToken: checkMapboxToken,
  showSetup: showTokenSetupDialog,
  activateFallback: activateFallbackMap,
  ensureWorks: ensureMapWorks
};
