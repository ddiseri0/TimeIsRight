# TimeCosting App

TimeCosting App è un'applicazione Angular pensata per aiutarti a quantificare il «costo in ore di lavoro» di un acquisto. Data una serie di parametri (stipendio, ore lavorative, spese fisse, prezzo dell’oggetto), l’app calcola quante ore di lavoro sono necessarie per coprire il costo dell’oggetto scelto.

## 📋 Indice

- [Caratteristiche Principali](#-caratteristiche-principali)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Architettura del Progetto](#-architettura-del-progetto)
- [Requisiti](#-requisiti)
- [Installazione e Avvio](#-installazione-e-avvio)
- [Esecuzione dei Test](#-esecuzione-dei-test)
- [Branching e Git Flow](#-branching-e-git-flow)
- [Struttura delle Cartelle](#-struttura-delle-cartelle)
- [Linee Guida per i Contributi](#-linee-guida-per-i-contributi)
- [Licenza](#-licenza)

## 🎯 Caratteristiche Principali

- **Calcolo delle ore per euro**: determina quante ore di lavoro equivalgono a 1€ netto, considerando stipendio e spese fisse.
- **Costo in ore per oggetto**: data la tariffa oraria (ore/€) e il prezzo di un oggetto, calcola quante ore di lavoro servono.
- **Reactive Forms**: gestione e validazione dinamica dei campi di input (stipendio, ore, spese e prezzo).
- **Angular Material UI**: interfaccia pulita e responsiva con componenti Material (Card, FormField, Input, Button, Icon).
- **Test unitari**: copertura >80% su servizi e componenti tramite Jasmine e Karma.

## 🛠️ Tecnologie Utilizzate

- Angular 20
- TypeScript
- Angular Material
- SCSS
- Jasmine & Karma (unit test)
- Git & GitHub
- GitHub Actions (CI per esecuzione test su push e PR)

## 🏗️ Architettura del Progetto

- **AppModule**: modulo principale che bootstrappa l’app, configura il router e importa i moduli Angular Material.
- **CoreModule** (in sviluppo - TIME-3): conterrà i servizi singleton e configurazioni globali.
- **SharedModule** (in sviluppo - TIME-3): conterrà componenti, pipe e direttive riutilizzabili e l’import di moduli comuni (ReactiveFormsModule, CommonModule, Material).
- **Feature Module**: modulo lazy-loaded (via routing) che include il componente `CalculatorFormComponent` per la logica di calcolo.

## 🚀 Requisiti

- Node.js (>=18.x)
- npm (>=9.x) o Yarn
- Angular CLI (>=20.x)

## ▶️ Installazione e Avvio

1. **Clona il repository**
   ```bash
   git clone git@github.com:<tuo-utente>/time-costing-app.git
   cd time-costing-app/frontend
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   ng serve --open
   ```
   L’app partirà automaticamente su `http://localhost:4200/`.

## ✅ Esecuzione dei Test

Per eseguire i test unitari e visualizzare la copertura:

```bash
ng test --code-coverage
```

Il report di coverage sarà disponibile in `coverage/`.

## 🌿 Branching e Git Flow

Seguiamo un workflow basato su Git Flow con i branch principali:

- `master` → versione di produzione (tag vX.Y.Z)
- `develop` → integrazione delle feature
- `feature/<nome-feature>` → sviluppo di nuove funzionalità

Commit convenzionali: `feat:`, `fix:`, `chore:`, `test:`, `style:`

Esempio di feature branch:
```bash
git checkout develop
git checkout -b feature/calculation-service
# implementi la feature
git commit -m "feat(calc): implement CalculationService"
git push -u origin feature/calculation-service
```

## 📂 Struttura delle Cartelle

```
frontend/
├── src/app/
│   ├── app.module.ts
│   ├── app.routes.ts
│   ├── app.component.ts
│   ├── core/          # TIME-3
│   ├── shared/        # TIME-3
│   └── features/
│       └── calculator/
│           ├── calculator.module.ts
│           └── calculator-form/
│               ├── calculator-form.component.ts
│               ├── .html/.scss/.spec.ts
├── angular.json
├── package.json
└── README.md
```

## 🛠️ Roadmap dei Ticket

Di seguito i ticket Jira che hanno guidato la realizzazione dell'app, con descrizione dettagliata:

- **TIME-1: Scaffold Angular app**
  - Generazione del progetto base con Angular CLI, routing e SCSS.
  - Configurazione iniziale .gitignore e ambiente di sviluppo.

- **TIME-2: Setup Angular Material**
  - Installazione di Angular Material tramite `ng add`.
  - Configurazione di `BrowserAnimationsModule` e importazione dei moduli Material di base.

- **TIME-3: Struttura a Moduli**
  - Creazione di `CoreModule`, `SharedModule` e `CalculatorModule`.
  - Configurazione del lazy loading per il modulo calcolatore.

- **TIME-4: CalculationService**
  - Implementazione dei metodi `computeHoursPerEuro` e `computeCostInHours`.
  - Scrittura dei test unitari per copertura delle logiche di calcolo.

- **TIME-5: CalculatorFormComponent**
  - Creazione del componente con Reactive Forms.
  - Realizzazione della UI con Angular Material e test di integrazione.

- **TIME-6: Styling e Layout**
  - Rifinitura degli stili SCSS globali e component-specific.
  - Aggiunta di variabili, mixin e breakpoint per responsive design.

- **TIME-7: Coverage Unit Tests**
  - Aggiunta di test supplementari per raggiungere >80% di coverage.
  - Verifica dei casi limite e validazioni dei form.

- **TIME-8: CI con GitHub Actions**
  - Configurazione della pipeline CI per esecuzione automatica dei test.
  - Aggiunta del file `.github/workflows/ci.yml`.

- **TIME-9: Preparazione Ionic/Capacitor (opzionale)**
  - Setup iniziale per futuro porting mobile con Ionic e Capacitor.
  - Integrazione di IonicModule e strutturazione delle cartelle.

## 🤝 Linee Guida per i Contributi

1. Apri un issue per discutere una nuova feature.
2. Crea un branch `feature/…` basato su `develop`.
3. Scrivi codice documentato, aggiungi test e aggiorna il README se necessario.
4. Apri una Pull Request verso `develop`, assegnando il reviewer.
5. Al merge, elimina il branch remoto.
