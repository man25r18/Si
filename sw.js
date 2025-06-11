const CACHE_NAME = 'calculator-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
  'https://unpkg.com/@babel/standalone/babel.min.js'
];

// Installazione del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aperta');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Errore durante il caching:', error);
        // Continua anche se alcuni file non possono essere messi in cache
        return Promise.resolve();
      })
  );
  // Forza l'attivazione immediata del nuovo service worker
  self.skipWaiting();
});

// Attivazione del Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Elimina le cache obsolete
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminazione cache obsoleta:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Prendi il controllo di tutte le pagine aperte
      return self.clients.claim();
    })
  );
});

// Gestione delle richieste (fetch)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Se la risorsa è in cache, restituiscila
        if (response) {
          return response;
        }

        // Altrimenti, prova a recuperarla dalla rete
        return fetch(event.request).then((response) => {
          // Controlla se la risposta è valida
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona la risposta perché può essere consumata solo una volta
          const responseToCache = response.clone();

          // Aggiungi la risorsa alla cache per le prossime volte
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Se la rete non è disponibile e la risorsa non è in cache,
          // restituisci una risposta di fallback per le pagine HTML
          if (event.request.destination === 'document') {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Gestione dei messaggi dal client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Gestione degli aggiornamenti in background
self.addEventListener('backgroundsync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Qui puoi implementare logica per sincronizzazione in background
  // Ad esempio, sincronizzare dati quando la connessione torna disponibile
  return Promise.resolve();
}
