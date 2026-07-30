/* ============================================================
   Sentinel Game Academy — Copy SEO per pagina (title/description/og)
   ------------------------------------------------------------
   Fonte unica per il copy dei metadati <head> delle pagine "hub"
   (home, sentinel.html, le 8 hub di gioco). Solo it/en per ogni
   voce: es/fr ricadono su en, stessa convenzione già usata in
   data/games.js (gi()) e data/i18n.js (t()).

   USO:
   - tools/seo_sync.py legge questo file per generare i tag
     statici <head> in inglese (title, description, meta og e twitter)
     di ogni pagina hub.
   - script.js legge questo file a runtime per correggere
     document.title quando un visitatore sceglie esplicitamente
     it/es/fr (vedi seoField() in script.js).

   Le pagine capitolo (games/ID/NN-slug.html) NON sono qui: il loro
   title/description si generano direttamente da data/games.js
   (chapters[].title/.en.title/.desc/.en.desc), niente duplicazione.
   ============================================================ */
var SEO = {
  home: {
    it: {
      title: "Sentinel Game Academy — Il manuale dei giochi dove Sentinel fa la differenza",
      description: "Sentinel Game Academy: il manuale dei giochi mobile strategici dove non puoi permetterti di perdere un attacco. Guide in italiano e Sentinel Notification Radar che ti sveglia quando conta.",
      ogTitle: "🧟⚔️ Sentinel Game Academy — Il manuale dei giochi dove la vigilanza vince",
      ogDescription: "Guide complete per war game e survival mobile: un attacco perso nel sonno può bruciare settimane di progressi. Scegli il tuo gioco."
    },
    en: {
      title: "🧟⚔️ Sentinel Game Academy — The manual for games where vigilance wins",
      description: "Complete guides for strategic mobile & war games: a single attack missed in your sleep can burn weeks of progress. Pick your game.",
      ogTitle: "🧟⚔️ Sentinel Game Academy — The manual for games where vigilance wins",
      ogDescription: "Complete guides for strategic mobile & war games: a single attack missed in your sleep can burn weeks of progress. Pick your game."
    }
  },

  sentinel: {
    it: {
      title: "Perché Sentinel — L'allarme reale per i tuoi giochi · Sentinel Game Academy",
      description: "Sentinel Notification Radar per i gamer: trasforma le notifiche dei tuoi giochi (attacco, rally, scudo, guerra di alleanza) in allarmi reali, anche a telefono in silenzioso. Come funziona e come impostarlo.",
      ogTitle: "📡 Perché Sentinel — l'allarme reale per i tuoi giochi",
      ogDescription: "Sentinel Notification Radar per i gamer: trasforma le notifiche dei tuoi giochi in allarmi reali, anche a telefono in silenzioso. Come funziona e come impostarlo."
    },
    en: {
      title: "📡 Why Sentinel — the real alarm for your games",
      description: "Sentinel Notification Radar for gamers: turns your games' notifications (attack, rally, shield, alliance war) into real alarms, even with your phone on silent. How it works and how to set it up.",
      ogTitle: "📡 Why Sentinel — the real alarm for your games",
      ogDescription: "Sentinel Notification Radar for gamers: turns your games' notifications (attack, rally, shield, alliance war) into real alarms, even with your phone on silent. How it works and how to set it up."
    }
  },

  games: {
    "age-of-origins": {
      it: {
        title: "Age of Origins — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Age of Origins: risorse, truppe, formazioni, ufficiali, titani, eventi e strategie F2P. Parte della Sentinel Game Academy.",
        ogTitle: "🧟 Age of Origins — Sopravvivi, cresci, vinci le guerre",
        ogDescription: "Risorse, truppe, formazioni, ufficiali, titani ed eventi: la guida completa in italiano per non farti sorprendere di notte."
      },
      en: {
        title: "🧟 Age of Origins — Survive, grow, win the wars",
        description: "Resources, troops, formations, officers, titans and events: the complete guide in English so night attacks never catch you off guard.",
        ogTitle: "🧟 Age of Origins — Survive, grow, win the wars",
        ogDescription: "Resources, troops, formations, officers, titans and events: the complete guide in English so night attacks never catch you off guard."
      }
    },
    "clash-of-clans": {
      it: {
        title: "Clash of Clans — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Clash of Clans: Municipio, difese, truppe, eroi, guerre di clan, Builder Base e Clan Capital. Parte della Sentinel Game Academy.",
        ogTitle: "⚔️ Clash of Clans — La guida che ti serve per vincere",
        ogDescription: "Municipio, difese, eroi, guerre di clan, Builder Base e Clan Capital: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "⚔️ Clash of Clans — The guide you actually need to win",
        description: "Town Hall, defenses, heroes, clan wars, Builder Base and Clan Capital: the complete guide in English, chapter by chapter.",
        ogTitle: "⚔️ Clash of Clans — The guide you actually need to win",
        ogDescription: "Town Hall, defenses, heroes, clan wars, Builder Base and Clan Capital: the complete guide in English, chapter by chapter."
      }
    },
    "whiteout-survival": {
      it: {
        title: "Whiteout Survival — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Whiteout Survival: Fornace, eroi, truppe, alleanza, Pet e guerre di Stato (SvS). Parte della Sentinel Game Academy.",
        ogTitle: "❄️ Whiteout Survival — La guida che ti serve per sopravvivere",
        ogDescription: "Fornace, eroi, truppe, alleanza, Pet e guerre di Stato: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "❄️ Whiteout Survival — The guide you actually need to survive",
        description: "Furnace, heroes, troops, alliance, Pets and State wars: the complete guide in English, chapter by chapter.",
        ogTitle: "❄️ Whiteout Survival — The guide you actually need to survive",
        ogDescription: "Furnace, heroes, troops, alliance, Pets and State wars: the complete guide in English, chapter by chapter."
      }
    },
    "last-war-survival": {
      it: {
        title: "Last War: Survival — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Last War: Survival: base, eroi, truppe, alleanza, Arms Race e stagioni. Parte della Sentinel Game Academy.",
        ogTitle: "🪖 Last War: Survival — La guida che ti serve per sopravvivere",
        ogDescription: "Base, eroi, truppe, alleanza, Arms Race e stagioni: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "🪖 Last War: Survival — The guide you actually need to survive",
        description: "Base, heroes, troops, alliance, Arms Race and seasons: the complete guide in English, chapter by chapter.",
        ogTitle: "🪖 Last War: Survival — The guide you actually need to survive",
        ogDescription: "Base, heroes, troops, alliance, Arms Race and seasons: the complete guide in English, chapter by chapter."
      }
    },
    "state-of-survival": {
      it: {
        title: "State of Survival — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per State of Survival: base, eroi, truppe, alleanza, eventi e strategia F2P. Parte della Sentinel Game Academy.",
        ogTitle: "☣️ State of Survival — La guida che ti serve per sopravvivere",
        ogDescription: "Base, eroi, truppe, alleanza ed eventi: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "☣️ State of Survival — The guide you actually need to survive",
        description: "Base, heroes, troops, alliance and events: the complete guide in English, chapter by chapter.",
        ogTitle: "☣️ State of Survival — The guide you actually need to survive",
        ogDescription: "Base, heroes, troops, alliance and events: the complete guide in English, chapter by chapter."
      }
    },
    "rise-of-kingdoms": {
      it: {
        title: "Rise of Kingdoms — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Rise of Kingdoms: civiltà, comandanti, alleanza, KvK e strategia F2P. Parte della Sentinel Game Academy.",
        ogTitle: "🏰 Rise of Kingdoms — La guida che ti serve per governare il tuo regno",
        ogDescription: "Civiltà, comandanti, alleanza e guerre KvK: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "🏰 Rise of Kingdoms — The guide you actually need to rule your kingdom",
        description: "Civilizations, commanders, alliance and KvK wars: the complete guide in English, chapter by chapter.",
        ogTitle: "🏰 Rise of Kingdoms — The guide you actually need to rule your kingdom",
        ogDescription: "Civilizations, commanders, alliance and KvK wars: the complete guide in English, chapter by chapter."
      }
    },
    "lords-mobile": {
      it: {
        title: "Lords Mobile — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Lords Mobile: eroi, truppe, gilda, KvK e strategia F2P. Parte della Sentinel Game Academy.",
        ogTitle: "👑 Lords Mobile — La guida che ti serve per governare il tuo Regno",
        ogDescription: "Eroi, truppe, gilda e guerre KvK: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "👑 Lords Mobile — The guide you actually need to rule your Kingdom",
        description: "Heroes, troops, guild and KvK wars: the complete guide in English, chapter by chapter.",
        ogTitle: "👑 Lords Mobile — The guide you actually need to rule your Kingdom",
        ogDescription: "Heroes, troops, guild and KvK wars: the complete guide in English, chapter by chapter."
      }
    },
    "evony-tkr": {
      it: {
        title: "Evony: The King's Return — Guida completa · Sentinel Game Academy",
        description: "Guida strategica in italiano per Evony: The King's Return: Culture, Generali, truppe, alleanza e Server vs Server. Parte della Sentinel Game Academy.",
        ogTitle: "🐉 Evony: The King's Return — La guida che ti serve per governare il tuo Regno",
        ogDescription: "Culture, Generali, truppe e Server War: la guida completa in italiano, capitolo per capitolo."
      },
      en: {
        title: "🐉 Evony: The King's Return — The guide you actually need to rule your Kingdom",
        description: "Cultures, Generals, troops, alliances and Server Wars: the complete guide in English, chapter by chapter.",
        ogTitle: "🐉 Evony: The King's Return — The guide you actually need to rule your Kingdom",
        ogDescription: "Cultures, Generals, troops, alliances and Server Wars: the complete guide in English, chapter by chapter."
      }
    }
  }
};

var OG_LOCALE_MAP = { it: "it_IT", en: "en_US", es: "es_ES", fr: "fr_FR" };
