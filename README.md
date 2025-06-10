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
- Doppio tap sul display per accedere
