# Sentinel Game Academy — SEO multilingua: l'inglese deve diventare la versione primaria indicizzata da Google

Repo: `br1greenhouse/SentinelGameAcademy` · Live: https://br1greenhouse.github.io/SentinelGameAcademy/

## Problema

Il sito è statico (GitHub Pages, HTML/CSS/JS vanilla). La lingua è gestita client-side da `script.js`: di default parte in inglese (nessuna rilevazione da browser, `DEFAULT_LANG = 'en'`), e il corpo dei contenuti (`<article>`) viene sostituito a runtime leggendo `PAGE_I18N` dai file in `content/**/*.js`. Quindi il *testo visibile* che un crawler che esegue JS vedrebbe di default è già corretto (inglese).

Il problema è nei metadati SEO: `<title>`, `meta description`, `og:title`, `og:description`, `og:locale`, `twitter:title/description` sono scritti **staticamente in italiano** nel sorgente HTML di ogni pagina, e `script.js` non li aggiorna mai, qualunque lingua venga scelta. Risultato: titolo e snippet mostrati da Google nei risultati di ricerca resterebbero in italiano anche per la versione che dovrebbe essere quella primaria (inglese).

Problemi collegati:
- Nessun tag `hreflang`: le lingue vivono sulla stessa URL via `?lang=xx`, quindi Google tende a trattarle come varianti della stessa pagina invece che come versioni linguistiche distinte.
- `en.html` (root e per-gioco) è solo una pagina di redirect con `meta robots noindex` e canonical verso `index.html?lang=en` — corretta così, non va toccata.
- La proprietà Google Search Console è stata verificata sull'URL sbagliato: `https://br1greenhouse.github.io/SentinelGameAcademy/en.html/` invece della root `https://br1greenhouse.github.io/SentinelGameAcademy/`. Va corretta prima di inviare la sitemap.

## Decisione presa

L'inglese diventa la lingua "sorgente" per tutti i metadati SEO (title, description, og:*, twitter:*, og:locale) su tutto il sito. L'italiano resta disponibile ma come variante secondaria, caricata/applicata via JS quando l'utente la seleziona — stesso pattern già usato per i contenuti editoriali (`PAGE_I18N`) e le stringhe di interfaccia (`UI` in `data/i18n.js`), solo esteso ai tag `<head>`.

## Spunti per la risoluzione

- Per le pagine capitolo (`games/*/NN-*.html`, ~149 file): hanno solo `<title>`, niente meta description/og. Il titolo inglese corretto per ciascun capitolo è già disponibile in `data/games.js` (`chapters[].en.title`) — generabile a partire da lì invece che tradotto a mano.
- Per home (`index.html`), `sentinel.html` e le hub page per gioco (`games/*/index.html`, 9 file): hanno title/description/og/twitter completi. Il copy inglese "approvato" per il sito esiste già in `en.html` (title/og/description a livello sito) e in `data/games.js` (`i18n.en.tagline`/`genre`/`sentinel` per gioco) — riusabile come fonte invece di ritradurre da zero.
- `script.js` già calcola `LANG` e aggiorna `document.documentElement.lang` + il corpo tramite `PAGE_I18N`; andrebbe esteso con una funzione analoga che, usando un piccolo oggetto dati per pagina, aggiorni anche `document.title` e i meta tag quando l'utente cambia lingua, così l'italiano resta corretto per chi lo sceglie esplicitamente, ma il sorgente statico (quello indicizzato di default da Google) è inglese.
- Non serve toccare `en.html` né la logica di rilevamento lingua (già di default EN).
- Da correggere separatamente in Search Console: proprietà sulla root del sito (non su `en.html`), poi verifica e invio sitemap.

Ho già validato l'approccio (patch di prova sui titoli dei 149 capitoli + head di `index.html`) in un clone locale: è meccanico e automatizzabile via script, non richiede traduzioni manuali pagina per pagina.
