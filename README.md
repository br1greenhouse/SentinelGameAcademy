# Sentinel Game Academy

Sito statico (HTML/CSS/JS vanilla) che raccoglie **guide in italiano** per i giochi mobile strategici — quelli dove ti attaccano mentre dormi, lo scudo scade di notte e la guerra di alleanza parte all'alba.

La Academy è un progetto **autonomo**, ma è **presentata da Sentinel Notification Radar**: l'app che ascolta le notifiche dei tuoi giochi e fa scattare un allarme reale quando conta (attacco, rally, scudo, evento), anche a telefono in silenzioso.

> Guide non ufficiali create dalla community. I nomi e i contenuti dei giochi appartengono ai rispettivi proprietari.

## Rimandi a Sentinel

Tutti i riferimenti sono centralizzati in `data/games.js` (oggetto `SENTINEL`) e compaiono in tutto il sito:

- **App su Google Play** — Sentinel Notification Radar (`com.br1greenhouse.sentinel`): chip in header, blocchi sponsor, footer.
- **Sentinel Wall** — la bacheca community ufficiale (`br1greenhouse.github.io/sentinel-wall`): menu, blocchi sponsor, footer, pagina *Perché Sentinel*.
- **Privacy Policy** — footer e pagina *Perché Sentinel*.

## Caratteristiche

- 100% statico: nessun backend, nessun database, nessuna build
- **Multi-gioco**: un registro unico (`data/games.js`) alimenta home, hub dei giochi, menu, ricerca e navigazione
- Mobile-first, tema chiaro/scuro con memoria della scelta
- Ricerca interna **globale** su tutti i giochi (titoli, descrizioni, parole chiave)
- Breadcrumb, indice "In questa pagina" automatico, navigazione capitolo precedente/successivo
- Blocco "sponsor" Sentinel riusabile (home, hub gioco) generato via JS
- Box informativi standard, incluso `box-sentinel` per collegare un capitolo all'app
- Nessuna dipendenza JS esterna (solo i font Google via CSS)

## Struttura dei file

```
.
├── index.html                       # Home Academy: hero, sponsor, griglia giochi
├── sentinel.html                    # "Perché Sentinel": cos'è l'app e come usarla nei giochi
├── style.css                        # Stili (temi, layout, box, card gioco, blocco sponsor)
├── script.js                        # Chrome multi-gioco: header, menu, ricerca, footer, sponsor
├── README.md
├── assets/
│   └── favicon.svg                  # Icona (radar Sentinel + hazard)
├── data/
│   └── games.js                     # REGISTRO GIOCHI + oggetto SENTINEL (unica fonte)
├── games/
│   └── age-of-origins/              # Un gioco = una cartella
│       ├── index.html               # Hub del gioco (intro + griglia capitoli)
│       ├── 01-primi-passi.html
│       ├── ...                       # 19 capitoli
│       └── 19-changelog.html
└── templates/
    └── template-capitolo.html        # Modello per i nuovi capitoli
```

## Internazionalizzazione (i18n)

Lingue attive: **`it en es fr`** (le principali). Le altre lingue di Sentinel (`de pt ru zh ja ar ko hi`) sono disattivate finché non sono gestite anche a livello di contenuto; le loro traduzioni d'interfaccia restano nello storico git e si riattivano aggiungendo il codice a `LANGS`/`LANG_NAMES` in `data/i18n.js`.

**Come si sceglie la lingua** (in ordine): `?lang=xx` nell'URL → scelta salvata (`localStorage`) → default `en`. All'arrivo sul sito **si parte sempre in inglese** (nessun rilevamento dalla lingua del browser), finché l'utente non sceglie un'altra lingua dalla barra nel menu ☰. Cambiando lingua la pagina si ricarica con `?lang=xx`; i link interni portano con sé la lingua.

**Due livelli di traduzione:**

1. **Interfaccia** (menu, bottoni, footer, blocco Sentinel, badge, navigazione) → `data/i18n.js`, oggetto `UI` con una voce per lingua. Fallback automatico `lingua → EN → IT`, quindi per una nuova lingua traduci solo ciò che vuoi.
2. **Contenuti editoriali** (prosa dei capitoli) → l'**italiano è inline** nella pagina (sorgente); le altre lingue stanno in `content/<gioco>/<file>.js` nella variabile `PAGE_I18N` (chiave = codice lingua, valore = HTML del corpo di `<article>`). Se manca la traduzione si mostra IT/EN con un avviso.

Aggiungere una lingua a un capitolo:
```js
// content/age-of-origins/01-primi-passi.js
var PAGE_I18N = {
  en: `<h1>First steps</h1> ...`,
  es: `<h1>Primeros pasos</h1> ...`   // aggiungi qui
};
```
Poi includi il file nella pagina (una riga prima di `script.js`) e, nei metadati del gioco (`data/games.js`), aggiungi il titolo/descrizione della lingua al capitolo (`en: { title, desc }`).

Stato attuale: **interfaccia in 4 lingue** (it/en/es/fr) e **contenuti editoriali completi in tutte e 4** — home, pagina Sentinel, hub del gioco e tutti i 19 capitoli hanno il file `content/…js` con le chiavi `en`, `es` ed `fr` (oltre all'italiano, sorgente inline nell'HTML). Aggiungere una quinta lingua = aggiungere la chiave corrispondente negli stessi 22 file (l'engine ripiega su EN→IT dove manca una traduzione).

**Pagine tradotte via `content/`** (una riga di `<script src="content/…js">` prima di `script.js`):
- `content/home.js` → home (`index.html`)
- `content/sentinel.js` → pagina *Perché Sentinel* (`sentinel.html`)
- `content/age-of-origins/index.js` → hub del gioco
- `content/age-of-origins/NN-*.js` → i 19 capitoli

Le pagine con blocchi dinamici (home, hub, Sentinel) mantengono nel loro HTML tradotto i `<div>` segnaposto (`sentinel-cta`, `games-grid`, `game-chapters`, `privacy-link`, `wall-link`), che `script.js` riempie dopo la sostituzione.

## Aggiungere un GIOCO

1. Crea la cartella `games/<id>/` (es. `games/clash-of-clans/`).
2. Copia dentro `templates/template-capitolo.html` per ogni capitolo (`01-....html`, ...) e crea un `index.html` per l'hub (parti da `games/age-of-origins/index.html`).
3. Apri `data/games.js` e aggiungi un oggetto all'array `GAMES`:
   ```js
   {
     id: "clash-of-clans",
     name: "Clash of Clans",
     aka: "",
     genre: "Strategia · Base building",
     publisher: "Supercell",
     icon: "⚔️",
     status: "published",           // "coming-soon" finché la guida non è pronta
     tagline: "Villaggio, clan war e leghe.",
     sentinel: "Perché Sentinel è utile PROPRIO per questo gioco (il gancio).",
     sentinelKeywords: "parole che un giocatore cercherebbe",
     chapters: [ /* vedi sotto */ ]
   }
   ```
4. Fatto: home, menu e ricerca si aggiornano da soli.

## Aggiungere un CAPITOLO a un gioco

1. Copia `templates/template-capitolo.html` in `games/<id>/` con nome tipo `20-argomento.html` e imposta `data-game="<id>"` nell'`<html>`.
2. Aggiungi una riga all'array `chapters` del gioco in `data/games.js`:
   ```js
   { num: "20", file: "20-argomento.html", title: "Nuovo argomento",
     desc: "Breve descrizione per hub e ricerca.",
     keywords: "parole chiave per la ricerca" },
   ```
3. Menu, ricerca, griglia dell'hub e navigazione prev/next si aggiornano da soli.

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub chiamato **esattamente** `SentinelGameAcademy`
   (il nome, comprese le maiuscole, determina l'URL del sito).
2. Carica tutti i file di questa cartella nella **root** del repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/br1greenhouse/SentinelGameAcademy.git
   git push -u origin main
   ```
3. Su GitHub: **Settings → Pages → Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main`, cartella `/ (root)`
4. Dopo 1–2 minuti il sito sarà online su:
   `https://br1greenhouse.github.io/SentinelGameAcademy/`

Il sito usa solo percorsi relativi (via `data-root` sull'`<html>`), quindi funziona
a qualsiasi sottopercorso senza modifiche. Il file `.nojekyll` nella root dice a
GitHub Pages di servire i file così come sono, senza processarli con Jekyll.

Il sito usa solo percorsi relativi, quindi funziona anche aprendo `index.html` in locale. Per un'anteprima identica a GitHub Pages:

```bash
python -m http.server 8000
# poi apri http://localhost:8000
```

## Immagini e licenza

Il progetto non usa immagini coperte da copyright: solo un'icona SVG originale, emoji e stili CSS. Contenuti delle guide a cura della community. Sentinel Notification Radar © Bernardo Bruno Serra.
