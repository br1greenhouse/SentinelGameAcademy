/* ============================================================
   Sentinel Game Academy — Registro dei giochi
   ------------------------------------------------------------
   UNICA FONTE DEI DATI per home, hub dei giochi, menu, ricerca
   e navigazione. Header, sidebar, footer e blocchi Sentinel sono
   generati da script.js; le stringhe d'interfaccia stanno in
   data/i18n.js.

   MULTILINGUA
   - Campi del gioco (genre, tagline, sentinel...) → oggetto  i18n
     con una chiave per lingua. Le lingue mancanti ripiegano su
     it (sorgente). Per ora sono compilati  it  ed  en.
   - Capitoli: il titolo/descrizione italiani sono i campi base;
     le traduzioni vanno in  c.<lang> = { title, desc }.

   PER AGGIUNGERE UN GIOCO:
   1. Crea la cartella  games/<id>/  con  index.html  e i capitoli.
   2. Aggiungi un oggetto all'array GAMES qui sotto (almeno i18n.it).
   PER AGGIUNGERE UN CAPITOLO:
   1. Copia templates/template-capitolo.html in  games/<id>/ .
   2. Aggiungi una riga all'array  chapters  del gioco.
   ============================================================ */

/* Riferimenti a Sentinel — usati ovunque nel sito (sponsor).
   Sentinel Notification Radar è l'app che dà senso alla Academy:
   controlla le notifiche dei tuoi giochi e fa scattare un allarme
   reale quando succede qualcosa di importante. */
var SENTINEL = {
  name: "Sentinel Notification Radar",
  short: "Sentinel",
  play: "https://play.google.com/store/apps/details?id=com.br1greenhouse.sentinel",
  wall: "https://br1greenhouse.github.io/sentinel-wall/",
  privacy: "https://br1greenhouse.github.io/sentinel-privacy-policy/",
  author: "Bernardo Bruno Serra"
};

var GAMES = [
  {
    id: "age-of-origins",
    name: "Age of Origins",
    aka: "Age of Z Origins",
    publisher: "Camel Games",
    icon: "🧟",
    status: "published",           // "published" | "coming-soon"
    i18n: {
      it: {
        genre: "Strategia MMO · Zombie/War",
        tagline: "Sopravvivi agli zombie, cresci e vinci le guerre di alleanza.",
        sentinel: "Ti sveglia quando la città è sotto attacco o parte un rally, anche alle 3 di notte con il telefono in silenzioso. Metti in guardia lo scudo prima che scada e non perdere più un ospedale pieno di truppe.",
        sentinelKeywords: "attacco rally scudo bubble sotto attacco guerra sveglia notte allarme"
      },
      en: {
        genre: "Strategy MMO · Zombie/War",
        tagline: "Survive the zombies, grow, and win alliance wars.",
        sentinel: "Wakes you up when your city is under attack or a rally starts — even at 3 AM with your phone on silent. Guard your shield before it expires and never lose a hospital full of troops again.",
        sentinelKeywords: "attack rally shield bubble under attack war wake night alarm"
      }
    },
    chapters: [
      { num: "01", file: "01-primi-passi.html",       title: "Primi passi",            desc: "Cos'è Age of Origins, obiettivi, errori dei primi giorni, routine giornaliera.", keywords: "inizio base tutorial principiante città comandante mondo routine start beginner", en: { title: "First steps",           desc: "What Age of Origins is, goals, early-day mistakes and a daily routine." } },
      { num: "02", file: "02-risorse.html",           title: "Risorse",                desc: "Food, Oil, Steel, Minerals: raccolta, protezione, speed-up e farm account.",     keywords: "food oil steel minerals raccolta farm speedup protezione depot resources", en: { title: "Resources",             desc: "Food, Oil, Steel, Minerals: gathering, protection, speed-ups and farm accounts." } },
      { num: "03", file: "03-citta-edifici.html",     title: "Città ed edifici",       desc: "Main Hall, Academy, Hospital e priorità di upgrade.",                             keywords: "main hall academy hospital depot embassy garage factory camp workshop upgrade edifici buildings city", en: { title: "City & buildings",      desc: "Main Hall, Academy, Hospital and upgrade priorities." } },
      { num: "04", file: "04-ricerche.html",          title: "Ricerche",               desc: "Rami Development, Battle, Defense, Economy e priorità per profilo.",              keywords: "ricerca academy development battle defense economy tecnologia priorità research tech", en: { title: "Research",              desc: "Development, Battle, Defense, Economy branches and priorities by profile." } },
      { num: "05", file: "05-truppe.html",            title: "Truppe",                 desc: "Tipologie, tier, attributi e gestione delle unità.",                              keywords: "truppe tier fighter shooter vehicle melee mid range long range addestramento promozione troops units", en: { title: "Troops",                desc: "Types, tiers, attributes and how to manage your units." } },
      { num: "06", file: "06-combattimento.html",     title: "Combattimento",          desc: "Come funziona una battaglia, fleet, rally, tile e battle report.",                keywords: "battaglia combattimento fleet rally tile attacco difesa ospedale report perdite combat battle", en: { title: "Combat",                desc: "How a battle works: fleets, rallies, tiles and the battle report." } },
      { num: "07", file: "07-formazioni.html",        title: "Formazioni",             desc: "Formazioni per mostri, PvP, difesa e la 1-1-98.",                                 keywords: "formazione 1-1-98 mostri pvp difesa long range mid range composizione formation", en: { title: "Formations",            desc: "Formations for monsters, PvP, defense and the famous 1-1-98." } },
      { num: "08", file: "08-ufficiali.html",         title: "Ufficiali",              desc: "Director, Strategy, Warfare: stelle, skill e setup.",                             keywords: "ufficiali officer director strategy warfare stelle skill medaglie setup officers", en: { title: "Officers",              desc: "Director, Strategy, Warfare: stars, skills and setups." } },
      { num: "09", file: "09-comandante.html",        title: "Comandante",             desc: "Talenti, skill, equipaggiamento, medaglie e VIP.",                                keywords: "comandante talenti skill equipaggiamento medaglie vip crescita commander", en: { title: "Commander",             desc: "Talents, skills, gear, medals and VIP." } },
      { num: "10", file: "10-titani.html",            title: "Titani",                 desc: "Sblocco, potenziamento, talent tree e materiali.",                                keywords: "titani titan sblocco potenziamento talent tree materiali titans", en: { title: "Titans",                desc: "Unlocking, upgrading, talent tree and materials." } },
      { num: "11", file: "11-warplane.html",          title: "Warplane",               desc: "Ruolo dell'aereo, componenti, skill e sinergie.",                                 keywords: "warplane aereo componenti skill potenziamento sinergia plane", en: { title: "Warplane",              desc: "The plane's role, components, skills and synergies." } },
      { num: "12", file: "12-alleanza.html",          title: "Alleanza",               desc: "Donazioni, aiuti, territorio, ruoli R1-R5 e comportamento.",                      keywords: "alleanza donazioni aiuti territorio fortezza flag ruoli r4 r5 regole alliance", en: { title: "Alliance",              desc: "Donations, helps, territory, R1-R5 roles and etiquette." } },
      { num: "13", file: "13-eventi.html",            title: "Eventi",                 desc: "Strongest Commander, Void War, Frenzy, Doom e come prepararsi.",                  keywords: "eventi strongest commander battle frenzy void war duel dominance elite wars zombie uprise bounty medici doom mother events", en: { title: "Events",                desc: "Strongest Commander, Void War, Frenzy, Doom and how to prepare." } },
      { num: "14", file: "14-strategia-f2p.html",     title: "Strategia F2P",          desc: "Crescere senza spendere: priorità, risparmio, sicurezza.",                        keywords: "f2p free to play gratis priorità speedup risparmio bersaglio", en: { title: "F2P strategy",          desc: "Growing without spending: priorities, saving and staying safe." } },
      { num: "15", file: "15-strategia-spender.html", title: "Strategia per spender",  desc: "Spender leggero, medio e whale: dove conviene spendere.",                          keywords: "spender whale pacchetti spesa soldi vip acquisti spending", en: { title: "Spender strategy",      desc: "Light, medium and whale spenders: where spending pays off." } },
      { num: "16", file: "16-strategia-nrc.html",     title: "Strategia alleanza NRC", desc: "Regole operative, ruoli, gestione eventi e guerre della NRC.",                    keywords: "nrc regole alleanza guerra eventi reclutamento protezione comunicazione", en: { title: "NRC alliance strategy", desc: "NRC operating rules, roles, event and war management." } },
      { num: "17", file: "17-glossario.html",         title: "Glossario",              desc: "Bubble, KE, LRA, MRA, tile, rally e tutti i termini del gioco.",                  keywords: "glossario termini bubble shield ke void frenzy bp lra mra fleet tile farm rally sos reset whale f2p p2w glossary", en: { title: "Glossary",              desc: "Bubble, KE, LRA, MRA, tile, rally and every in-game term explained." } },
      { num: "18", file: "18-faq.html",               title: "FAQ",                    desc: "Domande frequenti su basi, eventi, truppe, ufficiali e alleanza.",                keywords: "faq domande risposte aiuto dubbi questions", en: { title: "FAQ",                   desc: "Frequently asked questions on bases, events, troops, officers and alliance." } },
      { num: "19", file: "19-changelog.html",         title: "Changelog",              desc: "Registro degli aggiornamenti della guida.",                                       keywords: "changelog aggiornamenti versioni modifiche registro updates", en: { title: "Changelog",             desc: "Log of updates to the guide." } }
    ]
  },

  /* ---- Giochi in arrivo (nessun capitolo ancora) ---- */
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    aka: "",
    publisher: "Supercell",
    icon: "⚔️",
    status: "coming-soon",
    i18n: {
      it: {
        genre: "Strategia · Base building",
        tagline: "Villaggio, clan war e leghe: la guida arriva presto.",
        sentinel: "Non perdere più l'inizio della fase di attacco della Clan War: Sentinel ti sveglia quando parte la battle day, così pianifichi gli attacchi con calma invece di scoprirlo a war finita.",
        sentinelKeywords: "clan war battle day attacco lega notifica sveglia"
      },
      en: {
        genre: "Strategy · Base building",
        tagline: "Village, clan war and leagues: guide coming soon.",
        sentinel: "Never miss the start of the Clan War attack phase again: Sentinel wakes you when battle day begins, so you plan your attacks calmly instead of finding out after the war is over.",
        sentinelKeywords: "clan war battle day attack league notification wake"
      }
    },
    chapters: []
  },
  {
    id: "whiteout-survival",
    name: "Whiteout Survival",
    aka: "",
    publisher: "Century Games",
    icon: "❄️",
    status: "coming-soon",
    i18n: {
      it: {
        genre: "Strategia MMO · Survival",
        tagline: "Sopravvivenza nel gelo e guerre di stato: guida in lavorazione.",
        sentinel: "Ti avvisa quando la tua città viene attaccata o quando parte un evento di stato mentre sei offline, così esci dallo scudo solo quando serve e non ti trovi rasato al risveglio.",
        sentinelKeywords: "attacco stato evento scudo shield guerra sveglia offline"
      },
      en: {
        genre: "Strategy MMO · Survival",
        tagline: "Survival in the frost and state wars: guide in the works.",
        sentinel: "Alerts you when your city is attacked or a state event starts while you're offline, so you drop your shield only when needed and don't wake up wiped out.",
        sentinelKeywords: "attack state event shield war wake offline"
      }
    },
    chapters: []
  },
  {
    id: "last-war-survival",
    name: "Last War: Survival",
    aka: "",
    publisher: "Fun Games For Free",
    icon: "🪖",
    status: "coming-soon",
    i18n: {
      it: {
        genre: "Strategia MMO · War",
        tagline: "Basi, eroi e guerre di alleanza: presto la guida completa.",
        sentinel: "Rally in arrivo, base sotto attacco, scudo in scadenza: Sentinel trasforma la notifica del gioco in un allarme reale che non puoi ignorare, anche di notte.",
        sentinelKeywords: "rally attacco base scudo alleanza guerra allarme notte"
      },
      en: {
        genre: "Strategy MMO · War",
        tagline: "Bases, heroes and alliance wars: full guide coming soon.",
        sentinel: "Incoming rally, base under attack, shield about to expire: Sentinel turns the game's notification into a real alarm you can't ignore, even at night.",
        sentinelKeywords: "rally attack base shield alliance war alarm night"
      }
    },
    chapters: []
  }
];
