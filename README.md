# 🧮 Calcolatrice PWA

Una calcolatrice elegante in stile iOS, completamente funzionale come Progressive Web App (PWA) installabile su dispositivi mobili e desktop.

## ✨ Caratteristiche

- 📱 **Responsive Design**: Interfaccia ottimizzata per dispositivi mobili e desktop
- 🔄 **Orientamento Dinamico**: Layout che si adatta automaticamente a portrait e landscape
- 📲 **PWA Completa**: Installabile sulla home screen del dispositivo
- 🎨 **Design iOS-Style**: Interfaccia elegante ispirata al design Apple
- 🚀 **Offline Ready**: Funziona anche senza connessione internet
- 🔒 **Modalità Segreta**: Funzionalità nascosta per risultati personalizzati

## 🚀 Demo Live

Visita la demo live: [https://tuonome.github.io/calculator-pwa](https://tuonome.github.io/calculator-pwa)

## 📱 Installazione su Mobile

### iOS (Safari)
1. Apri l'app nel browser Safari
2. Tocca il pulsante "Condividi" (quadrato con freccia)
3. Scorri e tocca "Aggiungi alla schermata Home"
4. Tocca "Aggiungi" per confermare

### Android (Chrome)
1. Apri l'app nel browser Chrome
2. Tocca il menu (tre puntini) in alto a destra
3. Tocca "Aggiungi alla schermata Home"
4. Tocca "Aggiungi" per confermare

## 🛠️ Sviluppo Locale

### Prerequisiti
- Node.js (versione 14 o superiore)
- npm o yarn

### Installazione
```bash
# Clona il repository
git clone https://github.com/tuonome/calculator-pwa.git

# Entra nella directory
cd calculator-pwa

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

L'app sarà disponibile su `http://localhost:3000`

### Build per Produzione
```bash
# Crea la build di produzione
npm run build

# Serve la build localmente per testare
npm start
```

## 📂 Struttura del Progetto

```
calculator-pwa/
├── public/
│   ├── icons/              # Icone PWA di varie dimensioni
│   ├── index.html          # Template HTML principale
│   ├── manifest.json       # Manifest PWA
│   └── favicon.ico         # Favicon
├── src/
│   ├── Calculator.js       # Componente principale della calcolatrice
│   └── index.js           # Entry point dell'app
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions per il deploy automatico
├── webpack.config.js      # Configurazione Webpack
├── package.json          # Dipendenze e script
└── README.md            # Questo file
```

## 🎯 Funzionalità

### Operazioni Base
- ➕ Addizione
- ➖ Sottrazione
- ✖️ Moltiplicazione
- ➗ Divisione
- 📊 Percentuale
- ➕➖ Cambio segno
- 🔄 Reset (AC)

### Modalità Segreta
- Doppio tap sul display per accedere alla modalità segreta
- Permette di impostare risultati personalizzati per qualsiasi calcolo
- Utile per scherzi o situazioni particolari

## 🔧 Tecnologie Utilizzate

- **React 18**: Libreria JavaScript per l'interfaccia utente
- **Webpack 5**: Bundler e build tool
- **Tailwind CSS**: Framework CSS utility-first
- **Workbox**: Service Worker per funzionalità PWA
- **GitHub Actions**: CI/CD per deploy automatico

## 🌐 Deploy su GitHub Pages

1. **Fork del Repository**
   ```bash
   # Clona il tuo fork
   git clone https://github.com/TUO-USERNAME/calculator-pwa.git
   ```

2. **Configurazione GitHub Pages**
   - Vai su Settings → Pages
   - Source: "GitHub Actions"
   - Il deploy avverrà automaticamente ad ogni push su `main`

3. **Personalizzazione**
   - Modifica `package.json` con i tuoi dati
   - Aggiorna i link nel README
   - Personalizza i colori e lo stile se desiderato

## 📱 Creazione Icone PWA

Per creare le icone necessarie per la PWA, puoi usare uno di questi strumenti:

### Opzione 1: Strumenti Online
- [PWA Builder](https://www.pwabuilder.com/imageGenerator)
- [Favicon Generator](https://favicon.io/)
- [Real Favicon Generator](https://realfavicongenerator.net/)

### Opzione 2: Script Automatico
```bash
# Installa sharp per ridimensionamento immagini
npm install -g sharp-cli

# Crea tutte le dimensioni da un'immagine 512x512
sharp -i icon-512.png -o icon-72x72.png --resize 72
sharp -i icon-512.png -o icon-96x96.png --resize 96
sharp -i icon-512.png -o icon-128x128.png --resize 128
sharp -i icon-512.png -o icon-144x144.png --resize 144
sharp -i icon-512.png -o icon-152x152.png --resize 152
sharp -i icon-512.png -o icon-192x192.png --resize 192
sharp -i icon-512.png -o icon-384x384.png --resize 384
```

## 🎨 Personalizzazione

### Colori
Modifica i colori in `src/Calculator.js`:
```javascript
// Operatori (attualmente arancione)
'bg-amber-500 hover:bg-amber-400'

// Numeri (attualmente grigio scuro)
'bg-gray-700 hover:bg-gray-600'

// Funzioni (attualmente grigio medio)
'bg-gray-500 hover:bg-gray-400'
```

### Layout
Per modificare il layout dei pulsanti, modifica gli array `portraitButtons` e `landscapeButtons`.

## 🚀 Comandi Disponibili

```bash
# Sviluppo
npm run dev          # Avvia il dev server
npm run build        # Build di produzione
npm start           # Serve la build localmente

# Utility
npm run lint        # Verifica il codice
npm run test        # Esegue i test (se implementati)
```

## 📋 Checklist per il Deploy

- [ ] Crea il repository su GitHub
- [ ] Clona il codice localmente
- [ ] Installa le dipendenze (`npm install`)
- [ ] Testa localmente (`npm run dev`)
- [ ] Crea le icone PWA nella cartella `public/icons/`
- [ ] Personalizza `manifest.json` con i tuoi dati
- [ ] Aggiorna i link nel README
- [ ] Commit e push su GitHub
- [ ] Attiva GitHub Pages nelle impostazioni
- [ ] Testa l'app su dispositivi mobili
- [ ] Verifica l'installazione PWA

## 🐛 Risoluzione Problemi

### L'app non si installa come PWA
- Verifica che il manifest.json sia accessibile
- Controlla che tutte le icone esistano
- Assicurati che il sito sia servito via HTTPS

### Errori di build
- Verifica le versioni Node.js (>= 14)
- Pulisci la cache npm: `npm cache clean --force`
- Reinstalla le dipendenze: `rm -rf node_modules && npm install`

### Problemi di layout mobile
- Testa su dispositivi reali, non solo emulatori
- Verifica il viewport meta tag
- Controlla le dimensioni dei pulsanti (minimo 44px)

## 📄 Licenza

MIT License - Vedi il file [LICENSE](LICENSE) per i dettagli.

## 🤝 Contribuire

1. Fork del progetto
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📞 Contatti

Se hai domande o suggerimenti, apri un issue su GitHub!

---

**Fatto con ❤️ e React**
