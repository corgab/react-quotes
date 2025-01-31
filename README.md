# Generatore di Citazioni Casuali

Un'applicazione React che genera citazioni casuali da un'API esterna. L'obiettivo di questo progetto è di imparare come interagire con le API in React utilizzando Axios, gestire lo stato e implementare una logica di caricamento.

## Tecnologie Utilizzate

- **React**: Una libreria JavaScript per la creazione di interfacce utente.
- **Axios**: Una libreria per fare richieste HTTP, utilizzata per comunicare con l'API.
- **Bootstrap**: Un framework CSS per il design e la struttura dell'interfaccia utente.

## Funzionalità

- **Generazione casuale di citazioni**: Ogni volta che premi il pulsante "Genera nuova citazione", l'applicazione recupera una citazione casuale da un'API.
- **Gestione del caricamento**: Mostra un messaggio "Caricando..." mentre l'app recupera i dati.
- **Stato dinamico**: L'app aggiorna dinamicamente la citazione mostrata senza bisogno di ricaricare la pagina.

## Installazione e Setup

1. **Clona il repository**:
   Se non l'hai già fatto, clona il progetto nel tuo ambiente locale:

   ```bash
   git clone https://github.com/corgab/react-quotes.git
   cd react-quotes
   ```

2. **Installa le dipendenze**:
   Assicurati di avere Node.js e npm (o yarn) installati. Poi esegui il comando:

   ```bash
   npm install
   ```

3. **Avvia l'app**:
   Dopo aver installato le dipendenze, avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
   L'app sarà disponibile su [http://localhost:5173](http://localhost:5173).

## Struttura del Progetto

```
/generatore-di-citazioni
  ├── /src
  │   ├── App.js             # Componente principale
  │   ├── index.js           # Punto di ingresso dell'app
  │   ├── /assets            # Eventuali immagini o risorse statiche
  ├── /public
  │   ├── index.html         # HTML principale
  ├── package.json           # Configurazione e dipendenze
```

## Dettagli sull'implementazione

### 1. **Funzione `fetchQuote`**

La funzione `fetchQuote` viene eseguita al caricamento del componente (grazie a `useEffect`) e ogni volta che premi il pulsante "Genera nuova citazione". Essa invia una richiesta HTTP GET all'API di citazioni **quotable.io** (un'API gratuita di citazioni casuali) e aggiorna lo stato con il risultato. La funzione gestisce anche lo stato di caricamento tramite `setLoading`.

### 2. **Stato con `useState`**

Utilizziamo lo hook `useState` per memorizzare e gestire i seguenti dati:

- `quote`: La citazione che verrà mostrata.
- `loading`: Una variabile booleana che indica se l'app è in fase di caricamento dei dati.

### 3. **Effetto con `useEffect`**

L'hook `useEffect` viene usato per eseguire la funzione `fetchQuote` solo una volta quando il componente viene montato (prima che l'utente interagisca con l'app). Inoltre, `fetchQuote` viene chiamato ogni volta che l'utente clicca sul pulsante per ottenere una nuova citazione.

### 4. **Bootstrap per il Design**

L'app utilizza **Bootstrap** per semplificare la parte di layout e design. In particolare, viene utilizzato per centrare il contenuto e creare uno stile pulito e responsivo.

## Come funziona l'app

1. All'avvio dell'app, viene recuperata una citazione casuale dall'API `quotable.io`.
2. L'utente può premere il pulsante "Genera nuova citazione" per ottenere una citazione diversa.
3. Un messaggio di caricamento viene mostrato finché l'API non restituisce la nuova citazione.
4. La citazione aggiornata viene mostrata sull'interfaccia utente.

---

Grazie per aver dato un'occhiata al progetto! 😊
