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
`,
  es: `
      <p class="hero-kicker">// juegos reales · guías reales · alarmas reales</p>
      <h1 class="hero-h1">Sentinel <span class="accent">Game Academy</span></h1>
      <div class="hazard"></div>

      <p class="lead">El manual de campo de los juegos móviles estratégicos — esos en los que te atacan mientras duermes, el escudo caduca de noche y la guerra de alianza empieza al amanecer. Guías claras, y la app que te despierta cuando de verdad importa.</p>

      <h2>Qué es la Academy</h2>
      <p>La <strong>Sentinel Game Academy</strong> reúne guías completas para los juegos donde la <strong>vigilancia</strong> marca la diferencia: estrategia, war games, survival. Son juegos lentos y a largo plazo, donde se gana con constancia — pero donde un solo ataque perdido mientras dormías puede quemar semanas de progreso.</p>
      <p>Por eso la Academy está <strong>presentada por Sentinel Notification Radar</strong>: lee la guía aquí, deja a Sentinel vigilando tu teléfono.</p>

      <!-- Blocco sponsor Sentinel (generato da script.js) -->
      <div id="sentinel-cta"></div>

      <h2 id="giochi">Los juegos</h2>
      <p>Elige tu juego. Cada ficha explica también <em>por qué</em> Sentinel es útil justo ahí.</p>
      <div class="games-grid" id="games-grid"></div>

      <div class="box box-sentinel">
        <span class="box-title">// Nota</span>
        ¿No encuentras tu juego? Las guías llegan una a una. Mientras tanto el principio vale para todos: si un juego te manda una notificación cuando te atacan, <a href="sentinel.html">Sentinel</a> la convierte en una alarma real que no puedes ignorar.
      </div>

      <h2>Cómo usar el sitio</h2>
      <ul>
        <li><strong>Menú ☰</strong> arriba a la izquierda: todos los juegos y capítulos.</li>
        <li><strong>Buscar 🔍</strong>: busca un juego o un tema (p. ej. <code>rally</code>, <code>escudo</code>, <code>formaciones</code>) en todas las guías.</li>
        <li><strong>▶ Sentinel</strong> arriba: te lleva directo a la app en Google Play.</li>
        <li><strong>Tema ☾/☀</strong>: cambia entre oscuro y claro.</li>
      </ul>
`
};
