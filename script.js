/* ============================================================
   Sentinel Game Academy — chrome del sito + motore i18n
   ------------------------------------------------------------
   Dati:  data/games.js (GAMES, SENTINEL) e data/i18n.js
          (LANGS, LANG_NAMES, RTL_LANGS, DEFAULT_LANG, UI).
   Contenuti editoriali per pagina (opzionali): variabile
   globale  PAGE_I18N  definita da  content/... .

   LINGUA — ordine di scelta (come la privacy di Sentinel, con
   memoria della scelta per un sito multi-pagina):
     1) ?lang=xx nell'URL    2) localStorage    3) browser    4) EN
   Cambiare lingua ricarica la pagina con ?lang=xx: semplice e
   a prova di errore. I link interni generati qui portano con sé
   la lingua, così la navigazione la mantiene.
   ============================================================ */
(function () {
  "use strict";
  if (typeof GAMES === "undefined" || typeof UI === "undefined") return;

  /* ---------- Scelta della lingua ---------- */
  function validLang(l) { return l && LANGS.indexOf(l) !== -1 ? l : null; }
  function detectLang() {
    // 1) ?lang=xx nell'URL  2) scelta salvata  3) default (inglese).
    // Nessun rilevamento dalla lingua del browser: all'arrivo si parte
    // sempre in inglese, finché l'utente non sceglie un'altra lingua.
    var p = validLang((new URLSearchParams(location.search).get("lang") || "").toLowerCase());
    if (p) { try { localStorage.setItem("sga-lang", p); } catch (e) {} return p; }
    var s = null; try { s = validLang((localStorage.getItem("sga-lang") || "").toLowerCase()); } catch (e) {}
    if (s) return s;
    return DEFAULT_LANG;
  }
  var LANG = detectLang();
  var IS_RTL = RTL_LANGS.indexOf(LANG) !== -1;
  document.documentElement.setAttribute("lang", LANG);
  if (IS_RTL) document.documentElement.setAttribute("dir", "rtl");

  /* ---------- Helper i18n ---------- */
  function t(key, vars) {
    var s = (UI[LANG] && UI[LANG][key]) || (UI.en && UI.en[key]) || (UI.it && UI.it[key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  function gi(g, field) {
    return (g.i18n[LANG] && g.i18n[LANG][field]) || (g.i18n.en && g.i18n.en[field]) || g.i18n.it[field];
  }
  function chField(c, f) {
    if (LANG !== "it" && c[LANG] && c[LANG][f]) return c[LANG][f];
    if (LANG !== "it" && c.en && c.en[f]) return c.en[f];
    return c[f];
  }
  function setLang(l) {
    if (!validLang(l)) return;
    try { localStorage.setItem("sga-lang", l); } catch (e) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", l);
    location.href = u.toString();
  }
  window.SGA_setLang = setLang;

  /* ---------- Contesto pagina ---------- */
  var ROOT = document.documentElement.getAttribute("data-root") || ".";
  var GAME_ID = document.documentElement.getAttribute("data-game") || null;
  var FILE = (location.pathname.split("/").pop() || "index.html") || "index.html";
  var GAME = GAME_ID ? GAMES.find(function (g) { return g.id === GAME_ID; }) : null;
  var IS_HOME = !GAME_ID;
  var IS_HUB = !!GAME_ID && FILE === "index.html";
  var IS_CHAPTER = !!GAME_ID && FILE !== "index.html";

  function q(id) { return document.getElementById(id); }
  function esc(s) { var d = document.createElement("div"); d.textContent = s == null ? "" : s; return d.innerHTML; }
  function published(g) { return g.status === "published"; }
  function withLang(url) {
    if (!url || /^(https?:|mailto:|#)/.test(url)) return url;
    var hash = "", hi = url.indexOf("#");
    if (hi >= 0) { hash = url.slice(hi); url = url.slice(0, hi); }
    return url + (url.indexOf("?") >= 0 ? "&" : "?") + "lang=" + LANG + hash;
  }
  function gameHub(id) { return withLang(ROOT + "/games/" + id + "/index.html"); }
  function chapterUrl(id, file) { return withLang(ROOT + "/games/" + id + "/" + file); }
  function rootUrl(file) { return withLang(ROOT + "/" + file); }

  /* ---------- Tema chiaro/scuro ---------- */
  try {
    if (localStorage.getItem("sga-theme") === "light") document.documentElement.setAttribute("data-theme", "light");
  } catch (e) {}
  function toggleTheme() {
    var toLight = document.documentElement.getAttribute("data-theme") !== "light";
    if (toLight) document.documentElement.setAttribute("data-theme", "light");
    else document.documentElement.removeAttribute("data-theme");
    try { localStorage.setItem("sga-theme", toLight ? "light" : "dark"); } catch (e) {}
    var btn = q("theme-btn");
    if (btn) btn.textContent = toLight ? "☀" : "☾";
  }

  /* ---------- Header ---------- */
  var headerHost = q("app-header");
  if (headerHost) {
    var isLight = document.documentElement.getAttribute("data-theme") === "light";
    headerHost.innerHTML =
      '<header class="site-header">' +
      '  <button class="icon-btn" id="menu-btn" aria-label="Menu">&#9776;</button>' +
      '  <a class="brand" href="' + rootUrl("index.html") + '">Sentinel <span class="slash">//</span> <span class="tag">Academy</span></a>' +
      '  <a class="spon-chip" href="' + SENTINEL.play + '" target="_blank" rel="noopener" title="' + esc(SENTINEL.name) + '">&#9654; Sentinel</a>' +
      '  <button class="icon-btn" id="search-btn" aria-label="Search">&#128269;</button>' +
      '  <button class="icon-btn" id="theme-btn" aria-label="Theme">' + (isLight ? "☀" : "☾") + '</button>' +
      '</header>' +
      '<div class="search-panel" id="search-panel">' +
      '  <input type="search" id="search-input" placeholder="' + esc(t("searchPlaceholder")) + '" aria-label="Search">' +
      '  <div class="search-results" id="search-results"></div>' +
      '</div>';
  }

  /* ---------- Sidebar / menu (con barra lingue) ---------- */
  var sidebarHost = q("sidebar");
  if (sidebarHost) {
    var langBtns = LANGS.map(function (l) {
      return '<button class="lang-btn' + (l === LANG ? " active" : "") + '" onclick="SGA_setLang(\'' + l + '\')">' + LANG_NAMES[l] + '</button>';
    }).join("");

    var html = '<aside class="sidebar" id="sidebar-el">' +
      '<div class="close-row"><button class="icon-btn" id="close-menu" aria-label="Close">&#10005;</button></div>' +
      '<div class="lang-block"><h2>' + esc(t("langLabel")) + '</h2><div class="lang-bar">' + langBtns + '</div></div>' +
      '<nav>';

    html += '<a href="' + rootUrl("index.html") + '"' + (IS_HOME ? ' class="active"' : "") +
            '><span class="num">&#8962;</span><span>' + esc(t("menuHome")) + '</span></a>';

    html += '<h2>' + esc(t("menuGamesH")) + '</h2>';
    GAMES.forEach(function (g) {
      var active = (GAME_ID === g.id && IS_HUB) ? ' class="active"' : "";
      if (published(g)) {
        html += '<a href="' + gameHub(g.id) + '"' + active + '><span class="num">' + g.icon + '</span><span>' + esc(g.name) + '</span></a>';
      } else {
        html += '<a href="' + rootUrl("index.html") + '#giochi" class="soon"><span class="num">' + g.icon + '</span><span>' +
                esc(g.name) + ' <em class="soon-tag">' + esc(t("comingSoon")) + '</em></span></a>';
      }
    });

    if (GAME && GAME.chapters && GAME.chapters.length) {
      html += '<h2>' + esc(GAME.name) + '</h2>';
      html += '<a href="' + gameHub(GAME.id) + '"' + (IS_HUB ? ' class="active"' : "") +
              '><span class="num">&#9635;</span><span>' + esc(t("menuGameOverview")) + '</span></a>';
      GAME.chapters.forEach(function (c) {
        var active = (FILE === c.file) ? ' class="active"' : "";
        html += '<a href="' + chapterUrl(GAME.id, c.file) + '"' + active + '>' +
                '<span class="num">' + c.num + '</span><span>' + esc(chField(c, "title")) + '</span></a>';
      });
    }

    html += '<h2>' + esc(t("menuSentinelH")) + '</h2>';
    html += '<a href="' + rootUrl("sentinel.html") + '"' + (FILE === "sentinel.html" ? ' class="active"' : "") +
            '><span class="num">&#9673;</span><span>' + esc(t("menuWhySentinel")) + '</span></a>';
    html += '<a href="' + SENTINEL.wall + '" target="_blank" rel="noopener"><span class="num">&#128204;</span><span>' + esc(t("btnWall")) + ' <em class="ext">&#8599;</em></span></a>';
    html += '<a href="' + SENTINEL.play + '" target="_blank" rel="noopener"><span class="num">&#9654;</span><span>' + esc(t("menuGooglePlay")) + ' <em class="ext">&#8599;</em></span></a>';

    html += '</nav></aside><div class="overlay" id="overlay"></div>';
    sidebarHost.innerHTML = html;
  }

  /* ---------- Contenuti editoriali per lingua (PAGE_I18N) ----------
     Applica le traduzioni PRIMA di generare TOC/nav. L'italiano è
     la sorgente inline: si tocca solo quando la lingua non è it. */
  function applyPageContent() {
    var requested = LANG, shown = "it", used = null;
    if (LANG !== "it" && typeof PAGE_I18N !== "undefined") {
      var data = PAGE_I18N[LANG] || PAGE_I18N.en;
      used = PAGE_I18N[LANG] ? LANG : (PAGE_I18N.en ? "en" : null);
      if (data && used) {
        shown = used;
        if (typeof data === "string") {
          var art = document.querySelector("main article");
          if (art) art.innerHTML = data;
        } else {
          Object.keys(data).forEach(function (id) {
            var el = q(id);
            if (el) el.innerHTML = data[id];
          });
        }
      }
    }
    // Avviso quando la lingua richiesta non è quella mostrata
    var hasEditorial = (typeof PAGE_I18N !== "undefined") || IS_CHAPTER;
    if (requested !== "it" && shown !== requested && hasEditorial) {
      var mainEl = document.querySelector("main.content");
      if (mainEl) {
        var note = document.createElement("div");
        note.className = "i18n-fallback";
        note.innerHTML = esc(t("fallbackNotice"));
        var art2 = mainEl.querySelector("article");
        if (art2) art2.parentNode.insertBefore(note, art2);
        else mainEl.insertBefore(note, mainEl.firstChild);
      }
    }
  }
  applyPageContent();

  /* ---------- Blocco sponsor Sentinel (riusabile) ---------- */
  function sentinelCtaHtml() {
    var lead = GAME ? gi(GAME, "sentinel") : t("sponsorLead");
    var kicker = GAME ? t("sponsorKickerGame", { game: GAME.name }) : t("sponsorKicker");
    return '<section class="spon"><div class="spon-inner">' +
      '<div class="spon-kicker">// ' + esc(kicker) + '</div>' +
      '<h2 class="spon-title">' + esc(SENTINEL.name) + '</h2>' +
      '<p class="spon-lead">' + esc(lead) + '</p>' +
      '<div class="spon-actions">' +
      '  <a class="btn btn-play" href="' + SENTINEL.play + '" target="_blank" rel="noopener">&#9654; ' + esc(t("btnDownload")) + '</a>' +
      '  <a class="btn btn-ghost" href="' + SENTINEL.wall + '" target="_blank" rel="noopener">' + esc(t("btnWall")) + ' &#8599;</a>' +
      '</div>' +
      '<div class="spon-note">' + esc(t("sponsorNote")) + '</div>' +
      '</div></section>';
  }
  if (q("sentinel-cta")) q("sentinel-cta").innerHTML = sentinelCtaHtml();

  /* ---------- Griglia capitoli su hub del gioco ---------- */
  var chaptersHost = q("game-chapters");
  if (chaptersHost && GAME) {
    if (GAME.chapters && GAME.chapters.length) {
      chaptersHost.innerHTML = GAME.chapters.map(function (c) {
        return '<a class="card" href="' + chapterUrl(GAME.id, c.file) + '">' +
               '<span class="sez">Sez. ' + c.num + '</span>' +
               '<span class="c-title">' + esc(chField(c, "title")) + '</span>' +
               '<p class="c-desc">' + esc(chField(c, "desc")) + '</p></a>';
      }).join("");
    } else {
      chaptersHost.innerHTML = '<p class="empty">' + esc(t("gamesEmpty")) + '</p>';
    }
  }

  /* ---------- Griglia giochi sulla home ---------- */
  var gamesHost = q("games-grid");
  if (gamesHost) {
    gamesHost.innerHTML = GAMES.map(function (g) {
      var soon = !published(g);
      var open = soon ? '<div class="game-card is-soon" id="game-' + g.id + '">'
                      : '<a class="game-card" id="game-' + g.id + '" href="' + gameHub(g.id) + '">';
      var close = soon ? '</div>' : '</a>';
      return open +
        '<div class="game-top"><span class="game-icon">' + g.icon + '</span>' +
        (soon ? '<span class="badge badge-soon">' + esc(t("badgeSoon")) + '</span>'
              : '<span class="badge badge-live">' + esc(t("badgeLive")) + '</span>') + '</div>' +
        '<h3 class="game-name">' + esc(g.name) + (g.aka ? ' <span class="game-aka">/ ' + esc(g.aka) + '</span>' : '') + '</h3>' +
        '<div class="game-genre">' + esc(gi(g, "genre")) + '</div>' +
        '<p class="game-tagline">' + esc(gi(g, "tagline")) + '</p>' +
        '<div class="game-sentinel"><span class="gs-label">' + esc(t("whySentinelHere")) + '</span>' + esc(gi(g, "sentinel")) + '</div>' +
        (soon ? '<div class="game-cta soon">' + esc(t("guideInPrep")) + '</div>'
              : '<div class="game-cta">' + esc(t("openGuide")) + ' &#8594;</div>') +
      close;
    }).join("");
  }

  /* ---------- Footer ---------- */
  var footerHost = q("app-footer");
  if (footerHost) {
    footerHost.innerHTML =
      '<footer class="site-footer">' +
      '  <div class="hazard"></div>' +
      '  <div class="foot-spon"><strong>' + esc(SENTINEL.name) + '</strong> — ' + esc(t("sponsorLead")) +
      '    <div class="foot-links">' +
      '      <a href="' + SENTINEL.play + '" target="_blank" rel="noopener">Google Play</a> &middot; ' +
      '      <a href="' + SENTINEL.wall + '" target="_blank" rel="noopener">Sentinel Wall</a> &middot; ' +
      '      <a href="' + SENTINEL.privacy + '" target="_blank" rel="noopener">Privacy</a>' +
      '    </div>' +
      '  </div>' +
      '  <p class="foot-fine">' + esc(t("footFine1")) + '<br>' +
      esc(t("footFine2", { app: SENTINEL.name })) + '<br>&copy; 2026 ' + esc(SENTINEL.author) + '</p>' +
      '</footer>';
  }

  /* ---------- Menu open/close ---------- */
  var sidebarEl = q("sidebar-el"), overlay = q("overlay");
  function openMenu() { if (sidebarEl) { sidebarEl.classList.add("open"); overlay.classList.add("show"); } }
  function closeMenu() { if (sidebarEl) { sidebarEl.classList.remove("open"); overlay.classList.remove("show"); } }
  if (q("menu-btn")) q("menu-btn").addEventListener("click", openMenu);
  if (q("close-menu")) q("close-menu").addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);

  /* ---------- Ricerca globale ---------- */
  var INDEX = [];
  GAMES.forEach(function (g) {
    if (published(g)) {
      INDEX.push({
        gnum: g.icon, title: t("searchGuidePrefix") + g.name, game: g.name, desc: gi(g, "tagline"),
        hay: (g.name + " " + g.aka + " " + gi(g, "genre") + " " + gi(g, "tagline") + " " +
              g.i18n.it.sentinelKeywords + " " + (g.i18n.en ? g.i18n.en.sentinelKeywords : "")).toLowerCase(),
        url: gameHub(g.id)
      });
    }
    (g.chapters || []).forEach(function (c) {
      INDEX.push({
        gnum: c.num, title: chField(c, "title"), game: g.name, desc: chField(c, "desc"),
        hay: (g.name + " " + c.title + " " + (c.en ? c.en.title : "") + " " + c.desc + " " + c.keywords).toLowerCase(),
        url: chapterUrl(g.id, c.file)
      });
    });
  });

  var panel = q("search-panel"), input = q("search-input"), results = q("search-results");
  function openSearch() { if (!panel) return; panel.classList.add("open"); input.focus(); renderResults(input.value); }
  function closeSearch() { if (panel) panel.classList.remove("open"); }
  if (q("search-btn")) q("search-btn").addEventListener("click", function () {
    if (panel.classList.contains("open")) closeSearch(); else openSearch();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); closeSearch(); } });

  function renderResults(query) {
    if (!results) return;
    var terms = (query || "").toLowerCase().trim().split(/\s+/).filter(Boolean);
    var list = INDEX.filter(function (it) {
      if (!terms.length) return true;
      return terms.every(function (term) { return it.hay.indexOf(term) !== -1; });
    }).slice(0, 40);
    if (!list.length) { results.innerHTML = '<div class="search-empty">' + esc(t("searchEmpty")) + '</div>'; return; }
    results.innerHTML = list.map(function (it) {
      return '<a href="' + it.url + '">' +
             '<span class="r-title"><span class="num">' + esc(it.gnum) + '</span>' + esc(it.title) + '</span>' +
             '<span class="r-desc"><span class="r-game">' + esc(it.game) + '</span> · ' + esc(it.desc) + '</span></a>';
    }).join("");
  }
  if (input) input.addEventListener("input", function () { renderResults(input.value); });

  /* ---------- Breadcrumb ---------- */
  var bc = q("breadcrumb");
  if (bc && GAME) {
    var crumb = '<a href="' + rootUrl("index.html") + '">' + esc(t("crumbAcademy")) + '</a><span class="sep">/</span>';
    if (IS_CHAPTER) {
      var cur = (GAME.chapters || []).find(function (c) { return c.file === FILE; });
      crumb += '<a href="' + gameHub(GAME.id) + '">' + esc(GAME.name) + '</a>';
      if (cur) crumb += '<span class="sep">/</span>Sez. ' + cur.num + ' ' + esc(chField(cur, "title"));
    } else {
      crumb += esc(GAME.name);
    }
    bc.innerHTML = crumb;
  }

  /* ---------- Navigazione capitolo precedente/successivo ---------- */
  var cnav = q("chapter-nav");
  if (cnav && IS_CHAPTER && GAME) {
    var chs = GAME.chapters || [];
    var idx = chs.findIndex(function (c) { return c.file === FILE; });
    if (idx !== -1) {
      var out = "";
      if (idx > 0) {
        var p = chs[idx - 1];
        out += '<a class="prev" href="' + withLang(p.file) + '"><span class="dir">&#8592; ' + esc(t("navPrev")) + '</span>' + p.num + ". " + esc(chField(p, "title")) + "</a>";
      } else {
        out += '<a class="prev" href="' + withLang("index.html") + '"><span class="dir">&#8592; ' + esc(t("navBackTo")) + '</span>' + esc(GAME.name) + "</a>";
      }
      if (idx < chs.length - 1) {
        var n = chs[idx + 1];
        out += '<a class="next" href="' + withLang(n.file) + '"><span class="dir">' + esc(t("navNext")) + ' &#8594;</span>' + n.num + ". " + esc(chField(n, "title")) + "</a>";
      }
      cnav.innerHTML = out;
    }
  }

  /* ---------- Indice dei contenuti (TOC) automatico ---------- */
  var article = document.querySelector("main article");
  if (article && IS_CHAPTER) {
    var heads = article.querySelectorAll("h2");
    if (heads.length >= 3) {
      var items = "";
      heads.forEach(function (h, i) {
        if (!h.id) h.id = "sez-" + (i + 1);
        items += '<li><a href="#' + h.id + '">' + h.textContent + "</a></li>";
      });
      var toc = document.createElement("nav");
      toc.className = "toc";
      toc.innerHTML = "<strong>" + esc(t("tocTitle")) + "</strong><ol>" + items + "</ol>";
      var anchor = article.querySelector(".hazard") || article.querySelector("h1");
      if (anchor && anchor.nextSibling) anchor.parentNode.insertBefore(toc, anchor.nextSibling.nextSibling || anchor.nextSibling);
      else article.prepend(toc);
    }
  }

  if (q("theme-btn")) q("theme-btn").addEventListener("click", toggleTheme);
})();
