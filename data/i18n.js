/* ============================================================
   Sentinel Game Academy — Internazionalizzazione (i18n)
   ------------------------------------------------------------
   Lingue attive: it en es fr (le lingue principali).
   Le altre lingue restano disattivate finché non sono gestite
   anche a livello di CONTENUTO (prosa dei capitoli); le loro
   traduzioni di interfaccia sono recuperabili dallo storico git.

   - LANGS ......... ordine e codici delle lingue attive
   - LANG_NAMES .... etichette dei bottoni della barra lingue
   - RTL_LANGS ..... lingue da destra a sinistra (nessuna attiva)
   - DEFAULT_LANG .. lingua di default all'arrivo sul sito
   - UI ............ stringhe d'INTERFACCIA per lingua

   Il motore (script.js) usa la funzione t(lang, chiave) con
   catena di fallback:  lingua richiesta → EN → IT → chiave.
   Quindi per una nuova lingua basta tradurre ciò che vuoi:
   le chiavi mancanti ripiegano automaticamente su EN/IT.

   NB: i CONTENUTI editoriali (prosa dei capitoli, home, pagina
   Sentinel) NON stanno qui: vivono nei file di content/ e
   nell'HTML sorgente italiano. Qui c'è solo l'interfaccia.
   ============================================================ */

var LANGS = ['it','en','es','fr'];

var LANG_NAMES = {
  it: 'IT', en: 'EN', es: 'ES', fr: 'FR'
};

var LANG_FLAGS = {
  it: '\u{1F1EE}\u{1F1F9}', en: '\u{1F1EC}\u{1F1E7}', es: '\u{1F1EA}\u{1F1F8}', fr: '\u{1F1EB}\u{1F1F7}'
};

var RTL_LANGS = [];
var DEFAULT_LANG = 'en';

var UI = {
  /* ---------------- ITALIANO (sorgente) ---------------- */
  it: {
    langLabel: "Lingua",
    searchPlaceholder: "Cerca un gioco o un argomento (es. rally, scudo, formazioni)...",
    searchEmpty: "Nessun risultato. Prova con un termine come \"rally\", \"scudo\" o il nome di un gioco.",
    searchGuidePrefix: "Guida ",
    menuHome: "Home Academy",
    menuGamesH: "Giochi",
    menuGameOverview: "Panoramica del gioco",
    menuSentinelH: "Sentinel",
    menuWhySentinel: "Perché Sentinel",
    menuGooglePlay: "Scarica su Google Play",
    comingSoon: "in arrivo",
    badgeLive: "Guida completa",
    badgeSoon: "In arrivo",
    whySentinelHere: "// Perché Sentinel qui",
    openGuide: "Apri la guida",
    guideInPrep: "Guida in preparazione",
    gamesEmpty: "Guida in lavorazione. Nel frattempo, tieni Sentinel di guardia alle tue notifiche.",
    sponsorKicker: "Presentato da Sentinel",
    sponsorKickerGame: "Sentinel per {game}",
    sponsorLead: "Controlla le notifiche dei tuoi giochi e fa scattare un allarme reale quando vieni attaccato — anche a telefono in silenzioso o schermo spento.",
    btnDownload: "Scarica su Google Play",
    btnWall: "Sentinel Wall",
    sponsorNote: "// Gratis: fino a 3 schede di monitoraggio. Tutto in locale sul telefono, nessun dato inviato a server esterni.",
    footFine1: "Sentinel Game Academy — manuale non ufficiale creato dalla community.",
    footFine2: "Presentato da {app}. Nomi e contenuti dei giochi appartengono ai rispettivi proprietari.",
    crumbAcademy: "Academy",
    navPrev: "Precedente",
    navNext: "Successivo",
    navBackTo: "Torna a",
    tocTitle: "In questa pagina",
    fallbackNotice: "Questo contenuto non è ancora disponibile nella tua lingua."
  },

  /* ---------------- ENGLISH (fallback) ---------------- */
  en: {
    langLabel: "Language",
    searchPlaceholder: "Search a game or a topic (e.g. rally, shield, formations)...",
    searchEmpty: "No results. Try a term like \"rally\", \"shield\" or a game name.",
    searchGuidePrefix: "Guide ",
    menuHome: "Academy home",
    menuGamesH: "Games",
    menuGameOverview: "Game overview",
    menuSentinelH: "Sentinel",
    menuWhySentinel: "Why Sentinel",
    menuGooglePlay: "Get it on Google Play",
    comingSoon: "coming soon",
    badgeLive: "Full guide",
    badgeSoon: "Coming soon",
    whySentinelHere: "// Why Sentinel here",
    openGuide: "Open the guide",
    guideInPrep: "Guide in progress",
    gamesEmpty: "Guide in the works. In the meantime, keep Sentinel watching your notifications.",
    sponsorKicker: "Presented by Sentinel",
    sponsorKickerGame: "Sentinel for {game}",
    sponsorLead: "Watches your games' notifications and fires a real alarm when you're attacked — even on silent or with the screen off.",
    btnDownload: "Get it on Google Play",
    btnWall: "Sentinel Wall",
    sponsorNote: "// Free: up to 3 monitoring cards. Everything runs locally on your phone, no data sent to external servers.",
    footFine1: "Sentinel Game Academy — unofficial manual made by the community.",
    footFine2: "Presented by {app}. Game names and content belong to their respective owners.",
    crumbAcademy: "Academy",
    navPrev: "Previous",
    navNext: "Next",
    navBackTo: "Back to",
    tocTitle: "On this page",
    fallbackNotice: "This content isn't available in your language yet."
  },

  /* ---------------- ESPAÑOL ---------------- */
  es: {
    langLabel: "Idioma",
    searchPlaceholder: "Busca un juego o un tema (p. ej. rally, escudo, formaciones)...",
    searchEmpty: "Sin resultados. Prueba con un término como \"rally\", \"escudo\" o el nombre de un juego.",
    searchGuidePrefix: "Guía ",
    menuHome: "Inicio Academy",
    menuGamesH: "Juegos",
    menuGameOverview: "Resumen del juego",
    menuSentinelH: "Sentinel",
    menuWhySentinel: "Por qué Sentinel",
    menuGooglePlay: "Descargar en Google Play",
    comingSoon: "próximamente",
    badgeLive: "Guía completa",
    badgeSoon: "Próximamente",
    whySentinelHere: "// Por qué Sentinel aquí",
    openGuide: "Abrir la guía",
    guideInPrep: "Guía en preparación",
    gamesEmpty: "Guía en preparación. Mientras tanto, deja que Sentinel vigile tus notificaciones.",
    sponsorKicker: "Presentado por Sentinel",
    sponsorKickerGame: "Sentinel para {game}",
    sponsorLead: "Vigila las notificaciones de tus juegos y dispara una alarma real cuando te atacan, incluso en silencio o con la pantalla apagada.",
    btnDownload: "Descargar en Google Play",
    btnWall: "Sentinel Wall",
    sponsorNote: "// Gratis: hasta 3 tarjetas de monitoreo. Todo funciona localmente en tu teléfono, sin enviar datos a servidores externos.",
    footFine1: "Sentinel Game Academy — manual no oficial creado por la comunidad.",
    footFine2: "Presentado por {app}. Los nombres y contenidos de los juegos pertenecen a sus respectivos propietarios.",
    crumbAcademy: "Academy",
    navPrev: "Anterior",
    navNext: "Siguiente",
    navBackTo: "Volver a",
    tocTitle: "En esta página",
    fallbackNotice: "Este contenido aún no está disponible en tu idioma."
  },

  /* ---------------- FRANÇAIS ---------------- */
  fr: {
    langLabel: "Langue",
    searchPlaceholder: "Cherche un jeu ou un sujet (ex. rally, bouclier, formations)...",
    searchEmpty: "Aucun résultat. Essaie un terme comme « rally », « bouclier » ou le nom d'un jeu.",
    searchGuidePrefix: "Guide ",
    menuHome: "Accueil Academy",
    menuGamesH: "Jeux",
    menuGameOverview: "Aperçu du jeu",
    menuSentinelH: "Sentinel",
    menuWhySentinel: "Pourquoi Sentinel",
    menuGooglePlay: "Télécharger sur Google Play",
    comingSoon: "bientôt",
    badgeLive: "Guide complet",
    badgeSoon: "Bientôt",
    whySentinelHere: "// Pourquoi Sentinel ici",
    openGuide: "Ouvrir le guide",
    guideInPrep: "Guide en préparation",
    gamesEmpty: "Guide en préparation. En attendant, laisse Sentinel surveiller tes notifications.",
    sponsorKicker: "Présenté par Sentinel",
    sponsorKickerGame: "Sentinel pour {game}",
    sponsorLead: "Surveille les notifications de tes jeux et déclenche une vraie alarme quand tu es attaqué — même en silencieux ou écran éteint.",
    btnDownload: "Télécharger sur Google Play",
    btnWall: "Sentinel Wall",
    sponsorNote: "// Gratuit : jusqu'à 3 fiches de surveillance. Tout fonctionne localement sur ton téléphone, aucune donnée envoyée à des serveurs externes.",
    footFine1: "Sentinel Game Academy — manuel non officiel créé par la communauté.",
    footFine2: "Présenté par {app}. Les noms et contenus des jeux appartiennent à leurs propriétaires respectifs.",
    crumbAcademy: "Academy",
    navPrev: "Précédent",
    navNext: "Suivant",
    navBackTo: "Retour à",
    tocTitle: "Sur cette page",
    fallbackNotice: "Ce contenu n'est pas encore disponible dans ta langue."
  }
};
