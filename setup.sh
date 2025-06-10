#!/bin/bash

# Script di setup automatico per Calculator PWA
# Questo script crea la struttura di cartelle e scarica le icone necessarie

echo "🚀 Setup Calculator PWA"
echo "======================="

# Crea le cartelle necessarie
echo "📁 Creazione struttura cartelle..."
mkdir -p public/icons
mkdir -p src
mkdir -p .github/workflows

echo "✅ Struttura cartelle creata!"

# Verifica se Node.js è installato
if ! command -v node &> /dev/null; then
    echo "❌ Node.js non trovato. Installa Node.js da https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js trovato: $(node --version)"

# Verifica se npm è installato
if ! command -v npm &> /dev/null; then
    echo "❌ npm non trovato. Installa npm"
    exit 1
fi

echo "✅ npm trovato: $(npm --version)"

# Installa le dipendenze
echo "📦 Installazione dipendenze..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dipendenze installate con successo!"
else
    echo "❌ Errore nell'installazione delle dipendenze"
    exit 1
fi

# Crea un'icona di base SVG per la PWA se non esiste
if [ ! -f "public/icons/icon-512x512.png" ]; then
    echo "🎨 Creazione icona di base..."
    
    # Crea un SVG semplice per l'icona della calcolatrice
    cat > temp_icon.svg << 'EOL'
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#1f2937"/>
  <rect x="60" y="80" width="392" height="352" rx="40" fill="white"/>
  <rect x="100" y="120" width="312" height="80" rx="20" fill="#111827"/>
  <circle cx="150" cy="280" r="30" fill="#374151"/>
  <circle cx="256" cy="280" r="30" fill="#374151"/>
  <circle cx="362" cy="280" r="30" fill="#374151"/>
  <circle cx="150" cy="340" r="30" fill="#374151"/>
  <circle cx="256" cy="340" r="30" fill="#374151"/>
  <circle cx="362" cy="340" r="30" fill="#374151"/>
  <circle cx="150" cy="400" r="30" fill="#374151"/>
  <circle cx="256" cy="400" r="30" fill="#374151"/>
  <circle cx="362" cy="400" r="30" fill="#f59e0b"/>
</svg>
EOL

    echo "📝 SVG creato. Per convertire in PNG installa ImageMagick o usa un tool online"
    echo "Comando per ImageMagick: convert temp_icon.svg -resize 512x512 public/icons/icon-512x512.png"
fi

# Crea favicon.ico di base
echo "🖼️  Creazione favicon..."
cat > public/favicon.ico << 'EOL'
iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAPBQTFRF////AAAA
EOL

echo "📋 Setup completato!"
echo ""
echo "🎯 Prossimi passi:"
echo "1. Crea icone PWA nella cartella public/icons/"
echo "2. Testa l'app: npm run dev"
echo "3. Build di produzione: npm run build"
echo "4. Carica su GitHub e attiva GitHub Pages"
echo ""
echo "📚 Per le icone PWA visita:"
echo "   https://www.pwabuilder.com/imageGenerator"
echo "   https://favicon.io/"
echo ""
echo "🚀 Avvia il server di sviluppo con: npm run dev"
