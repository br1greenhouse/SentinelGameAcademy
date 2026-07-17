/* Contenuto tradotto del capitolo — Clash of Clans / 01 First steps.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>First steps</h1>
      <div class="hazard"></div>

      <h2>What Clash of Clans is</h2>
      <p><strong>Clash of Clans</strong> is a mobile strategy game where you build a village, train troops and heroes, and attack other players' villages to earn resources, Trophies and Stars. Everything revolves around the <strong>Town Hall</strong>: its level determines what you can build, research and train.</p>
      <p>Beyond the main village (Home Village) there are three connected modes: the <strong>Builder Base</strong>, the <strong>Clan Capital</strong>, and <strong>clan</strong> life (wars, leagues, donations). This is a game that rewards consistency over rushing: keep your building, research and training queues full at all times.</p>

      <h2>Goal of the game</h2>
      <ul>
        <li><strong>Short term:</strong> grow your Town Hall, unlock better troops and heroes, defend your village.</li>
        <li><strong>Medium term:</strong> join an active clan, take part in wars and Clan Games, climb the league.</li>
        <li><strong>Long term:</strong> max out Town Hall and heroes, compete in Clan War Leagues and Ranked/Legend League.</li>
      </ul>

      <h2>The four layers of play</h2>
      <div class="table-wrap"><table>
        <tr><th>Layer</th><th>What it is</th><th>Why it matters</th></tr>
        <tr><td>Home Village</td><td>The main village with Town Hall, buildings and troops</td><td>The heart of the game: everything else supports it</td></tr>
        <tr><td>Builder Base</td><td>A second village (unlocked at Town Hall 4 by repairing the Boat)</td><td>Faster pace, asynchronous battles, separate resources</td></tr>
        <tr><td>Clan Capital</td><td>A shared clan base, built with Capital Gold</td><td>Cooperative: upgraded together and used during Raid Weekends</td></tr>
        <tr><td>Clan</td><td>Your group of players</td><td>Wars, Clan War League, Clan Games, donations</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Don't push all four layers evenly: the Home Village comes first. Layer in Builder Base, Clan Capital and competitive Clan War League play once your main village routine (upgrade queue, training, daily attacks) feels solid.
      </div>

      <h2>Mistakes to avoid in the early days</h2>
      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        <ul>
          <li><strong>Upgrading everything evenly</strong> instead of prioritizing Laboratory and Heroes.</li>
          <li><strong>Leaving Heroes idle</strong> for too long: while upgrading, they can't be used in attacks.</li>
          <li><strong>Wasting Gems</strong> on buying resources instead of unlocking extra Builders.</li>
          <li><strong>Not joining a clan</strong>: playing solo means missing donations, helps and access to wars and Clan Games.</li>
          <li><strong>Ignoring traps</strong>: a few well-placed traps stop far more attacks than none at all.</li>
        </ul>
      </div>

      <h2>A basic daily routine</h2>
      <p>10-20 focused minutes a day are enough. In order:</p>
      <ol>
        <li>Check that <strong>Laboratory, Heroes and building queues</strong> aren't idle.</li>
        <li>Attack in <strong>Battles</strong> (or Ranked Battles from Town Hall 7) for the daily Star Bonus and to gather resources.</li>
        <li>Make your <strong>clan donations</strong> and fulfill requests from clanmates.</li>
        <li>Check whether a <strong>clan war</strong> is running: Preparation Day or Battle Day.</li>
        <li>If it's open, use your <strong>Raid Weekend</strong> attacks in the Clan Capital.</li>
        <li>Check the <strong>Trader</strong> and any active <strong>Clan Games</strong> tasks.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        At any Town Hall level: the Laboratory and active Heroes should almost never sit idle. Everything else (Walls, defensive buildings, resource buildings) gets filled in around those two priorities.
      </div>

      <div class="box box-f2p">
        <span class="box-title">F2P Note</span>
        The best Gem purchase for an F2P player isn't speeding up an upgrade: it's unlocking <strong>extra Builders</strong> (from the fourth onward). One more Builder permanently speeds up your entire upgrade queue. See the <a href="15-strategia-f2p.html">F2P Strategy</a> chapter.
      </div>

      <div class="box box-sentinel">
        <span class="box-title">// Why Sentinel here</span>
        Your village gets hit when you least expect it: an attack while you're at work, the war moving into Battle Day, the Raid Weekend opening for the weekend. Set up <strong>Sentinel</strong> to watch Clash of Clans notifications for words like <code>attack</code>, <code>war</code> or <code>raid</code>: it turns them into a real alarm that bypasses silent mode. See <a href="../../sentinel.html">how to set it up</a>.
      </div>
`,
  es: `
      <h1>Primeros pasos</h1>
      <div class="hazard"></div>

      <h2>Qué es Clash of Clans</h2>
      <p><strong>Clash of Clans</strong> es un juego de estrategia para móvil en el que construyes una aldea, entrenas tropas y héroes, y atacas las aldeas de otros jugadores para ganar recursos, Trofeos y Estrellas. Todo gira en torno al <strong>Ayuntamiento</strong>: su nivel determina qué puedes construir, investigar y entrenar.</p>
      <p>Además de la aldea principal (Home Village) existen otros tres modos conectados: la <strong>Builder Base</strong>, el <strong>Clan Capital</strong> y la vida de <strong>clan</strong> (guerras, ligas, donaciones). Es un juego que premia la constancia más que la prisa: mantén siempre llenas las colas de construcción, investigación y entrenamiento.</p>

      <h2>Objetivo del juego</h2>
      <ul>
        <li><strong>Corto plazo:</strong> hacer crecer el Ayuntamiento, desbloquear mejores tropas y héroes, defender la aldea.</li>
        <li><strong>Medio plazo:</strong> unirte a un clan activo, participar en guerras y Clan Games, subir de liga.</li>
        <li><strong>Largo plazo:</strong> maximizar Ayuntamiento y héroes, competir en Clan War League y en Ranked/Legend League.</li>
      </ul>

      <h2>Los cuatro niveles de juego</h2>
      <div class="table-wrap"><table>
        <tr><th>Nivel</th><th>Qué es</th><th>Por qué importa</th></tr>
        <tr><td>Home Village</td><td>La aldea principal con Ayuntamiento, edificios y tropas</td><td>El corazón del juego: todo lo demás lo respalda</td></tr>
        <tr><td>Builder Base</td><td>Una segunda aldea (se desbloquea en Ayuntamiento 4 reparando el Barco)</td><td>Ritmo más rápido, batallas asíncronas, recursos separados</td></tr>
        <tr><td>Clan Capital</td><td>Una base compartida por el clan, construida con Capital Gold</td><td>Cooperativo: se mejora en conjunto y se usa en los Raid Weekend</td></tr>
        <tr><td>Clan</td><td>Tu grupo de jugadores</td><td>Guerras, Clan War League, Clan Games, donaciones</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        No empujes los cuatro niveles por igual: la Home Village va primero. Suma Builder Base, Clan Capital y Clan War League competitiva cuando la rutina de la aldea principal (cola de mejoras, entrenamiento, ataques diarios) ya sea sólida.
      </div>

      <h2>Errores que evitar en los primeros días</h2>
      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        <ul>
          <li><strong>Mejorar todo por igual</strong> en vez de priorizar Laboratorio y Héroes.</li>
          <li><strong>Dejar a los Héroes parados</strong> demasiado tiempo: mientras están en mejora no puedes usarlos en ataque.</li>
          <li><strong>Malgastar Gemas</strong> comprando recursos en vez de desbloquear Constructores extra.</li>
          <li><strong>No unirte a un clan</strong>: en solitario pierdes donaciones, ayudas y acceso a guerras y Clan Games.</li>
          <li><strong>Ignorar las trampas</strong>: pocas trampas bien colocadas detienen muchos más ataques que ninguna.</li>
        </ul>
      </div>

      <h2>Rutina diaria básica</h2>
      <p>Bastan 10-20 minutos al día bien aprovechados. En orden:</p>
      <ol>
        <li>Comprueba que <strong>Laboratorio, Héroes y colas de construcción</strong> no estén paradas.</li>
        <li>Ataca en <strong>Battles</strong> (o Ranked Battles desde Ayuntamiento 7) para el Star Bonus diario y para recolectar recursos.</li>
        <li>Haz tus <strong>donaciones de clan</strong> y cumple las peticiones de tus compañeros.</li>
        <li>Comprueba si hay una <strong>guerra de clan</strong> en curso: Preparation Day o Battle Day.</li>
        <li>Si está abierto, usa tus ataques del <strong>Raid Weekend</strong> en el Clan Capital.</li>
        <li>Revisa el <strong>Trader</strong> y las tareas de <strong>Clan Games</strong> si están activas.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        En cualquier nivel de Ayuntamiento: el Laboratorio y los Héroes activos casi nunca deberían estar parados. Todo lo demás (muros, edificios defensivos, edificios de recursos) se rellena alrededor de estas dos prioridades.
      </div>

      <div class="box box-f2p">
        <span class="box-title">Nota F2P</span>
        La mejor compra de Gemas para un jugador F2P no es acelerar una mejora: es desbloquear <strong>Constructores adicionales</strong> (a partir del cuarto). Un Constructor más acelera para siempre toda la cola de mejoras. Ver el capítulo <a href="15-strategia-f2p.html">Estrategia F2P</a>.
      </div>

      <div class="box box-sentinel">
        <span class="box-title">// Por qué Sentinel aquí</span>
        Tu aldea recibe golpes cuando menos te lo esperas: un ataque mientras trabajas, la guerra que entra en Día de Batalla, el Raid Weekend que se abre el fin de semana. Configura <strong>Sentinel</strong> para que vigile las notificaciones de Clash of Clans con palabras como <code>attack</code>, <code>war</code> o <code>raid</code>: las convierte en una alarma real que evita el silencio. Mira <a href="../../sentinel.html">cómo configurarlo</a>.
      </div>
`,
  fr: `
      <h1>Premiers pas</h1>
      <div class="hazard"></div>

      <h2>Qu'est-ce que Clash of Clans</h2>
      <p><strong>Clash of Clans</strong> est un jeu de stratégie mobile où tu construis un village, entraînes des troupes et des héros, et attaques les villages d'autres joueurs pour gagner des ressources, des Trophées et des Étoiles. Tout tourne autour de l'<strong>Hôtel de Ville</strong> : son niveau détermine ce que tu peux construire, rechercher et entraîner.</p>
      <p>Au-delà du village principal (Home Village), trois autres modes sont connectés : la <strong>Builder Base</strong>, le <strong>Clan Capital</strong> et la vie de <strong>clan</strong> (guerres, ligues, dons). C'est un jeu qui récompense la régularité plus que la précipitation : garde toujours pleines tes files de construction, recherche et entraînement.</p>

      <h2>Objectif du jeu</h2>
      <ul>
        <li><strong>Court terme :</strong> faire grandir l'Hôtel de Ville, débloquer de meilleures troupes et héros, défendre le village.</li>
        <li><strong>Moyen terme :</strong> rejoindre un clan actif, participer aux guerres et aux Clan Games, monter en ligue.</li>
        <li><strong>Long terme :</strong> maximiser Hôtel de Ville et héros, rivaliser en Clan War League et en Ranked/Legend League.</li>
      </ul>

      <h2>Les quatre niveaux de jeu</h2>
      <div class="table-wrap"><table>
        <tr><th>Niveau</th><th>Ce que c'est</th><th>Pourquoi ça compte</th></tr>
        <tr><td>Home Village</td><td>Le village principal avec Hôtel de Ville, bâtiments et troupes</td><td>Le cœur du jeu : tout le reste en dépend</td></tr>
        <tr><td>Builder Base</td><td>Un second village (débloqué à l'Hôtel de Ville 4 en réparant le Bateau)</td><td>Rythme plus rapide, batailles asynchrones, ressources séparées</td></tr>
        <tr><td>Clan Capital</td><td>Une base partagée par le clan, construite avec du Capital Gold</td><td>Coopératif : amélioré ensemble et utilisé lors des Raid Weekend</td></tr>
        <tr><td>Clan</td><td>Ton groupe de joueurs</td><td>Guerres, Clan War League, Clan Games, dons</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Ne pousse pas les quatre niveaux à égalité : le Home Village passe avant tout. Ajoute Builder Base, Clan Capital et la Clan War League compétitive une fois que la routine du village principal (file d'amélioration, entraînement, attaques quotidiennes) est solide.
      </div>

      <h2>Erreurs à éviter dans les premiers jours</h2>
      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        <ul>
          <li><strong>Améliorer tout à égalité</strong> au lieu de prioriser Laboratoire et Héros.</li>
          <li><strong>Laisser les Héros inactifs</strong> trop longtemps : en amélioration, ils sont indisponibles en attaque.</li>
          <li><strong>Gaspiller des Gemmes</strong> en achetant des ressources au lieu de débloquer des Constructeurs supplémentaires.</li>
          <li><strong>Ne pas rejoindre de clan</strong> : seul, tu perds dons, aides et accès aux guerres et Clan Games.</li>
          <li><strong>Ignorer les pièges</strong> : quelques pièges bien placés arrêtent bien plus d'attaques qu'aucun.</li>
        </ul>
      </div>

      <h2>Routine quotidienne de base</h2>
      <p>10 à 20 minutes par jour bien utilisées suffisent. Dans l'ordre :</p>
      <ol>
        <li>Vérifie que <strong>Laboratoire, Héros et files de construction</strong> ne sont pas à l'arrêt.</li>
        <li>Attaque en <strong>Battles</strong> (ou Ranked Battles dès l'Hôtel de Ville 7) pour le Star Bonus quotidien et pour récolter des ressources.</li>
        <li>Fais tes <strong>dons de clan</strong> et réponds aux demandes des membres.</li>
        <li>Vérifie si une <strong>guerre de clan</strong> est en cours : Preparation Day ou Battle Day.</li>
        <li>Si c'est ouvert, utilise tes attaques du <strong>Raid Weekend</strong> dans le Clan Capital.</li>
        <li>Vérifie le <strong>Trader</strong> et les objectifs des <strong>Clan Games</strong> s'ils sont actifs.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        À n'importe quel niveau d'Hôtel de Ville : le Laboratoire et les Héros actifs ne doivent presque jamais rester inactifs. Tout le reste (murs, bâtiments défensifs, bâtiments de ressources) se remplit autour de ces deux priorités.
      </div>

      <div class="box box-f2p">
        <span class="box-title">Note F2P</span>
        Le meilleur achat de Gemmes pour un joueur F2P n'est pas d'accélérer une amélioration : c'est de débloquer des <strong>Constructeurs supplémentaires</strong> (à partir du quatrième). Un Constructeur de plus accélère pour toujours toute la file d'amélioration. Voir le chapitre <a href="15-strategia-f2p.html">Stratégie F2P</a>.
      </div>

      <div class="box box-sentinel">
        <span class="box-title">// Pourquoi Sentinel ici</span>
        Ton village est frappé quand tu t'y attends le moins : une attaque pendant que tu travailles, la guerre qui entre en Jour de Bataille, le Raid Weekend qui s'ouvre pour le week-end. Configure <strong>Sentinel</strong> pour surveiller les notifications de Clash of Clans avec des mots comme <code>attack</code>, <code>war</code> ou <code>raid</code> : il les transforme en une vraie alarme qui contourne le mode silencieux. Voir <a href="../../sentinel.html">comment le configurer</a>.
      </div>
`
};
