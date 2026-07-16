/* Contenuto tradotto della HOME (index.html).
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   IMPORTANTE: mantenere i <div id="sentinel-cta"> e id="games-grid">,
   che vengono riempiti da script.js dopo la sostituzione. */
var PAGE_I18N = {
  en: `
      <p class="hero-kicker">// real games · real guides · real alarms</p>
      <h1 class="hero-h1">Sentinel <span class="accent">Game Academy</span></h1>
      <div class="hazard"></div>

      <p class="lead">The field manual for strategic mobile games — the ones where you get attacked while you sleep, your shield expires at night and the alliance war kicks off at dawn. Clear guides, and the app that wakes you when it truly matters.</p>

      <h2>What the Academy is</h2>
      <p>The <strong>Sentinel Game Academy</strong> collects complete guides for the games where <strong>vigilance</strong> makes the difference: strategy, war games, survival. These are slow, long-term games where you win through consistency — but where a single attack missed in your sleep can burn weeks of progress.</p>
      <p>That's why the Academy is <strong>presented by Sentinel Notification Radar</strong>: read the guide here, keep Sentinel on guard on your phone.</p>

      <!-- Blocco sponsor Sentinel (generato da script.js) -->
      <div id="sentinel-cta"></div>

      <h2 id="giochi">The games</h2>
      <p>Pick your game. Each card also explains <em>why</em> Sentinel is useful right there.</p>
      <div class="games-grid" id="games-grid"></div>

      <div class="box box-sentinel">
        <span class="box-title">// Note</span>
        Can't find your game? Guides arrive one at a time. In the meantime the principle holds for all of them: if a game sends you a notification when you're attacked, <a href="sentinel.html">Sentinel</a> turns it into a real alarm you can't ignore.
      </div>

      <h2>How to use the site</h2>
      <ul>
        <li><strong>Menu ☰</strong> top left: all games and chapters.</li>
        <li><strong>Search 🔍</strong>: look for a game or a topic (e.g. <code>rally</code>, <code>shield</code>, <code>formations</code>) across all guides.</li>
        <li><strong>▶ Sentinel</strong> at the top: takes you straight to the app on Google Play.</li>
        <li><strong>Theme ☾/☀</strong>: switch between dark and light.</li>
      </ul>
`
};
