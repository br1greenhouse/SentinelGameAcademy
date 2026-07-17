/* Contenuto tradotto del capitolo — Clash of Clans / 14 Economy systems & recurring events.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Economy systems & recurring events</h1>
      <div class="hazard"></div>
      <p class="lead">Gold Pass, the Trader, Star Bonus and Shields are the systems that set the daily and seasonal rhythm of the game, beyond just building growth.</p>

      <h2>Gold Pass (Season Challenges)</h2>
      <p>The paid seasonal pass was reworked: instead of an expiring challenge list, <strong>8 always-available Daily Tasks</strong> earn Stamps toward a stackable Stamp Card, feeding a <strong>40-tier reward track</strong> where some tiers let players choose between two rewards. The old Season Bank was replaced by the <strong>Hoggy Bank</strong>, which starts at full size immediately and scales with Town Hall level; owning the Gold Pass applies a 5x payout multiplier when it's cashed out at season's end.</p>

      <div class="box box-f2p">
        <span class="box-title">F2P Note</span>
        Non-paying players still fill and claim the Hoggy Bank and complete Daily Tasks for track progress; they simply don't get the 5x cash-out multiplier or the tier's paid-only rewards.
      </div>

      <h2>The Trader & Magic Items</h2>
      <p>The <strong>Trader</strong> appears once a village reaches Town Hall 6, offering Magic Items for Gems, event currency, or Raid Medals, with offers rotating weekly. Magic Items include:</p>
      <div class="table-wrap"><table>
        <tr><th>Category</th><th>Examples</th><th>Function</th></tr>
        <tr><td>Books</td><td>Book of Fighting, Building, Spells, Heroes, Everything</td><td>Instantly complete one in-progress upgrade.</td></tr>
        <tr><td>Potions</td><td>Power, Resource, Training, Builder, Hero Potions</td><td>Temporary boosts to troop stats, resource production, builder speed, or hero cooldowns.</td></tr>
        <tr><td>Runes</td><td>Rune of Gold, Elixir, Dark Elixir, Builder Gold, Builder Elixir</td><td>Instantly fill the matching storage.</td></tr>
        <tr><td>Hammers</td><td>Hammer of Fighting, Building, Spells, Heroes</td><td>Instantly max a troop/building/spell/hero to the highest level currently unlockable — stronger than a Book, which only completes what's already in progress.</td></tr>
        <tr><td>Misc</td><td>Wall Ring, Shovel of Obstacles</td><td>Instantly upgrade one Wall segment, or remove an obstacle without needing a free Builder.</td></tr>
      </table></div>

      <h2>Star Bonus</h2>
      <p>A daily resource bonus (Gold, Elixir, Dark Elixir, and at higher Town Halls, Ore) awarded once 5 Stars are earned from attacking other villages within a rolling 24-hour window, scaling with Town Hall level and league.</p>

      <h2>Friendly Challenges</h2>
      <p>Any clan member can post a no-risk challenge in clan chat — no Trophy loss, no resource loss, no Shield consumption — making it the standard way to test a new base layout or attack composition before using it for real.</p>

      <h2>Resource & Gem management</h2>
      <p>Farming (protecting/generating loot) and pushing (protecting Trophies/league rank) are somewhat opposed goals — a farming base often exposes the Town Hall to bait an easy partial win while burying storages, while a pushing base protects the core at the expense of storages. A common approach is to farm steadily at a comfortable Trophy range to fund upgrades, then push once resource needs for the current upgrade queue are met.</p>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        For new or gem-conservative players, the highest-value Gem purchase in the game is unlocking additional Builders — going from 4 to 5 (and eventually a 6th via Builder Base's B.O.B. progression) permanently speeds up the entire upgrade queue. Community guidance consistently ranks this above speeding up individual upgrades or buying resources directly.
      </div>

      <h2>Shields and Guard</h2>
      <p><strong>Shields</strong> are earned automatically when a base is significantly destroyed in a casual Battles-mode attack, temporarily preventing further attacks; a <strong>Guard</strong> state extends this protection while still letting the player attack freely. A Personal Break Timer prevents indefinite invulnerability from simply staying logged in.</p>

      <p class="sentinel-hint">When your Shield is about to expire or a Gold Pass task completes, the game sends a notification that's easy to lose among everything else. <strong>Sentinel</strong> can watch for words like <code>shield</code> or <code>gold pass</code> and alert you with a real alarm, even on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Don't open chests and items at random: many count for event points too if opened on the right day. Keep them in your inventory, where they're 100% safe, until you know exactly when they'll help most.
      </div>
`,
  es: `
      <h1>Sistemas económicos y eventos recurrentes</h1>
      <div class="hazard"></div>
      <p class="lead">El Gold Pass, el Trader, el Star Bonus y los Escudos son los sistemas que marcan el ritmo diario y estacional del juego, más allá del crecimiento de edificios.</p>

      <h2>Gold Pass (Season Challenges)</h2>
      <p>El pase estacional de pago se rediseñó: en vez de una lista de desafíos con caducidad, <strong>8 Tareas Diarias</strong> siempre disponibles ganan Sellos hacia una Tarjeta de Sellos acumulable, que alimenta una ruta de recompensas de <strong>40 niveles</strong> donde algunos niveles dejan elegir entre dos recompensas. El antiguo Season Bank fue reemplazado por el <strong>Hoggy Bank</strong>, que empieza a tamaño completo de inmediato y escala con el nivel de Ayuntamiento; tener el Gold Pass aplica un multiplicador de pago de 5x al cobrarlo al final de la temporada.</p>

      <div class="box box-f2p">
        <span class="box-title">Nota F2P</span>
        Los jugadores que no pagan también llenan y reclaman el Hoggy Bank y completan las Tareas Diarias para avanzar en la ruta; simplemente no obtienen el multiplicador de 5x al cobrar ni las recompensas exclusivas de pago de cada nivel.
      </div>

      <h2>El Trader y los Objetos Mágicos</h2>
      <p>El <strong>Trader</strong> aparece cuando una aldea alcanza Ayuntamiento 6, ofreciendo Objetos Mágicos a cambio de Gemas, moneda de evento o Medallas de Asalto, con ofertas que rotan semanalmente. Los Objetos Mágicos incluyen:</p>
      <div class="table-wrap"><table>
        <tr><th>Categoría</th><th>Ejemplos</th><th>Función</th></tr>
        <tr><td>Libros</td><td>Libro de Combate, Construcción, Hechizos, Héroes, Todo</td><td>Completa al instante una mejora en curso.</td></tr>
        <tr><td>Pociones</td><td>Poción de Poder, Recursos, Entrenamiento, Constructor, Héroe</td><td>Bonos temporales a estadísticas de tropas, producción de recursos, velocidad de constructores o tiempos de recarga de héroes.</td></tr>
        <tr><td>Runas</td><td>Runa de Oro, Elixir, Dark Elixir, Builder Gold, Builder Elixir</td><td>Llena al instante el almacén correspondiente.</td></tr>
        <tr><td>Martillos</td><td>Martillo de Combate, Construcción, Hechizos, Héroes</td><td>Lleva al instante al máximo actualmente desbloqueable una tropa/edificio/hechizo/héroe — más fuerte que un Libro, que solo completa lo que ya está en curso.</td></tr>
        <tr><td>Varios</td><td>Anillo de Muros, Pala de Obstáculos</td><td>Mejora al instante un tramo de Muro, o elimina un obstáculo sin necesitar un Constructor libre.</td></tr>
      </table></div>

      <h2>Star Bonus</h2>
      <p>Un bono diario de recursos (Oro, Elixir, Dark Elixir y, en Ayuntamientos más altos, Mineral) otorgado al ganar 5 Estrellas atacando otras aldeas dentro de una ventana móvil de 24 horas, escalando con el nivel de Ayuntamiento y la liga.</p>

      <h2>Desafíos Amistosos</h2>
      <p>Cualquier miembro del clan puede publicar un desafío sin riesgo en el chat del clan — sin pérdida de Trofeos, sin pérdida de recursos, sin consumo de Escudo — convirtiéndolo en la forma estándar de probar un nuevo diseño de base o composición de ataque antes de usarlo de verdad.</p>

      <h2>Gestión de recursos y Gemas</h2>
      <p>Farmear (proteger/generar botín) y pushear (proteger Trofeos/posición de liga) son objetivos algo opuestos — una base de farmeo suele exponer el Ayuntamiento para ofrecer una victoria parcial fácil mientras entierra los almacenes, mientras que una base de push protege el núcleo a costa de los almacenes. Un enfoque común es farmear de forma estable en un rango de Trofeos cómodo para financiar mejoras, y luego pushear una vez cubiertas las necesidades de recursos de la cola de mejoras actual.</p>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Para jugadores nuevos o conservadores con las Gemas, la compra de Gemas de mayor valor en el juego es desbloquear Constructores adicionales — pasar de 4 a 5 (y eventualmente un sexto vía la progresión B.O.B. de la Builder Base) acelera permanentemente toda la cola de mejoras. La comunidad lo coloca constantemente por encima de acelerar mejoras individuales o comprar recursos directamente.
      </div>

      <h2>Escudo y Guard</h2>
      <p>El <strong>Escudo</strong> se activa automáticamente cuando una base es destruida de forma significativa en un ataque casual en modo Battles, impidiendo temporalmente más ataques; un estado de <strong>Guard</strong> extiende esta protección dejando al jugador atacar libremente. Un Temporizador de Descanso Personal impide la invulnerabilidad indefinida por el simple hecho de seguir conectado.</p>

      <p class="sentinel-hint">Cuando tu Escudo está a punto de expirar o se completa una tarea del Gold Pass, el juego envía una notificación fácil de perder entre las demás. <strong>Sentinel</strong> puede vigilar palabras como <code>shield</code> o <code>gold pass</code> y avisarte con una alarma real, incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        No abras cofres y objetos al azar: muchos también cuentan como puntos de evento si se abren el día correcto. Guárdalos en tu inventario, donde están 100% seguros, hasta que sepas exactamente cuándo te ayudarán más.
      </div>
`,
  fr: `
      <h1>Systèmes économiques et événements récurrents</h1>
      <div class="hazard"></div>
      <p class="lead">Le Gold Pass, le Trader, le Star Bonus et les Boucliers sont les systèmes qui rythment le jeu au quotidien et par saison, au-delà de la simple croissance des bâtiments.</p>

      <h2>Gold Pass (Season Challenges)</h2>
      <p>Le pass saisonnier payant a été retravaillé : au lieu d'une liste de défis expirant, <strong>8 Tâches Quotidiennes</strong> toujours disponibles rapportent des Tampons vers une Carte à Tampons cumulable, alimentant un parcours de récompenses à <strong>40 paliers</strong> où certains paliers laissent choisir entre deux récompenses. L'ancien Season Bank a été remplacé par le <strong>Hoggy Bank</strong>, qui démarre immédiatement à taille pleine et évolue avec le niveau d'Hôtel de Ville ; posséder le Gold Pass applique un multiplicateur de gains x5 à l'encaissement en fin de saison.</p>

      <div class="box box-f2p">
        <span class="box-title">Note F2P</span>
        Les joueurs non payants remplissent et récupèrent aussi le Hoggy Bank et complètent les Tâches Quotidiennes pour avancer sur le parcours ; ils n'obtiennent simplement pas le multiplicateur x5 à l'encaissement ni les récompenses payantes de chaque palier.
      </div>

      <h2>Le Trader et les Objets Magiques</h2>
      <p>Le <strong>Trader</strong> apparaît une fois qu'un village atteint l'Hôtel de Ville 6, proposant des Objets Magiques contre des Gemmes, de la monnaie d'événement ou des Médailles de Raid, avec des offres tournant chaque semaine. Les Objets Magiques incluent :</p>
      <div class="table-wrap"><table>
        <tr><th>Catégorie</th><th>Exemples</th><th>Fonction</th></tr>
        <tr><td>Livres</td><td>Livre de Combat, Construction, Sorts, Héros, Tout</td><td>Termine instantanément une amélioration en cours.</td></tr>
        <tr><td>Potions</td><td>Potion de Puissance, Ressources, Entraînement, Constructeur, Héros</td><td>Boosts temporaires aux statistiques des troupes, à la production de ressources, à la vitesse des constructeurs ou aux temps de recharge des héros.</td></tr>
        <tr><td>Runes</td><td>Rune d'Or, d'Elixir, de Dark Elixir, de Builder Gold, de Builder Elixir</td><td>Remplit instantanément la réserve correspondante.</td></tr>
        <tr><td>Marteaux</td><td>Marteau de Combat, Construction, Sorts, Héros</td><td>Monte instantanément au maximum actuellement débloquable une troupe/bâtiment/sort/héros — plus puissant qu'un Livre, qui ne fait que terminer ce qui est déjà en cours.</td></tr>
        <tr><td>Divers</td><td>Anneau de Murs, Pelle à Obstacles</td><td>Améliore instantanément un segment de Mur, ou retire un obstacle sans avoir besoin d'un Constructeur libre.</td></tr>
      </table></div>

      <h2>Star Bonus</h2>
      <p>Un bonus quotidien de ressources (Or, Elixir, Dark Elixir, et aux Hôtels de Ville supérieurs, Minerai) accordé une fois 5 Étoiles gagnées en attaquant d'autres villages dans une fenêtre glissante de 24 heures, évoluant avec le niveau d'Hôtel de Ville et la ligue.</p>

      <h2>Défis Amicaux</h2>
      <p>N'importe quel membre du clan peut poster un défi sans risque dans le chat de clan — aucune perte de Trophées, aucune perte de ressources, aucune consommation de Bouclier — en faisant le moyen standard de tester un nouvel agencement de base ou une nouvelle composition d'attaque avant de l'utiliser pour de vrai.</p>

      <h2>Gestion des ressources et des Gemmes</h2>
      <p>Farmer (protéger/générer du butin) et pousser (protéger les Trophées/le classement en ligue) sont des objectifs quelque peu opposés — une base de farming expose souvent l'Hôtel de Ville pour offrir une victoire partielle facile tout en enterrant les réserves, tandis qu'une base de push protège le cœur au détriment des réserves. Une approche courante consiste à farmer régulièrement dans une fourchette de Trophées confortable pour financer les améliorations, puis à pousser une fois les besoins en ressources de la file d'amélioration actuelle couverts.</p>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Pour les joueurs nouveaux ou économes en Gemmes, l'achat de Gemmes le plus rentable du jeu est de débloquer des Constructeurs supplémentaires — passer de 4 à 5 (et éventuellement un 6ème via la progression B.O.B. de la Builder Base) accélère pour toujours l'ensemble de la file d'amélioration. La communauté place systématiquement cela au-dessus d'accélérer des améliorations individuelles ou d'acheter des ressources directement.
      </div>

      <h2>Bouclier et Guard</h2>
      <p>Le <strong>Bouclier</strong> s'obtient automatiquement quand une base est significativement détruite lors d'une attaque décontractée en mode Battles, empêchant temporairement d'autres attaques ; un état de <strong>Guard</strong> prolonge cette protection tout en laissant le joueur attaquer librement. Une Minuterie de Pause Personnelle empêche une invulnérabilité indéfinie simplement en restant connecté.</p>

      <p class="sentinel-hint">Quand ton Bouclier est sur le point d'expirer ou qu'une tâche du Gold Pass se termine, le jeu envoie une notification facile à perdre parmi toutes les autres. <strong>Sentinel</strong> peut surveiller des mots comme <code>shield</code> ou <code>gold pass</code> et t'alerter avec une vraie alarme, même en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        N'ouvre pas les coffres et objets au hasard : beaucoup comptent aussi pour des points d'événement s'ils sont ouverts le bon jour. Garde-les dans ton inventaire, où ils sont sûrs à 100 %, jusqu'à savoir exactement quand ils t'aideront le plus.
      </div>
`
};
