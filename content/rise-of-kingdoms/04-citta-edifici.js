/* Contenuto tradotto del capitolo — Rise of Kingdoms / 04 City building priorities.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>City & buildings</h1>
      <div class="hazard"></div>
      <p class="lead">City Hall, Wall, Academy and the recommended build order to grow without bottlenecks.</p>

      <div class="box box-nrc">
        <span class="box-title">Terminology note</span>
        This manual uses <strong>City Hall</strong> as the core building name — it is the building that gates the level of every other structure in your city, unlocks new building types, troop tiers, and research tiers, and increases march/rally capacity. (There is no building literally called "Command Center" in Rise of Kingdoms.)
      </div>

      <h2>Recommended build order for new accounts</h2>
      <ol>
        <li><strong>City Hall</strong> — always your top priority; push it as far as your resources allow.</li>
        <li><strong>Wall</strong> — must be kept close to City Hall's level; it's a prerequisite for further City Hall upgrades, it garrisons commanders, and prevents your city from being forcibly relocated if its durability hits zero in combat.</li>
        <li><strong>Farm / Lumber Mill / Quarry / Gold Mine</strong> — your resource-production buildings; every other upgrade's cost scales off these.</li>
        <li><strong>Storehouse</strong> — protects a flat amount of each resource from being plundered by attackers (chapter 5).</li>
        <li><strong>Academy</strong> — you cannot research while it's upgrading, but it's treated as a top-tier permanent priority alongside City Hall since research scales your entire account.</li>
        <li><strong>Hospital</strong> — occasionally a direct City Hall upgrade requirement, and increasingly critical once you're active in PvP/KvK, since it protects wounded troops from being permanently lost.</li>
        <li><strong>Barracks / Archery Range / Stable / Siege Workshop</strong> — upgrade in parallel with City Hall to unlock higher troop tiers. A common rule of thumb: only push these further once your Hospital capacity can absorb the losses a bigger army implies.</li>
        <li><strong>Alliance Center</strong> — governs your Alliance Help capacity, garrison size, and rally/reinforcement capacity.</li>
        <li><strong>Scout Camp</strong> and <strong>Trading Post</strong> — smaller secondary buildings worth a quick upgrade pass: faster/farther scouting, and lower tax plus faster resource transfers to allies or farm accounts.</li>
      </ol>

      <h2>City Hall milestones</h2>
      <ul>
        <li><strong>CH 4</strong> unlocks the Stable.</li>
        <li><strong>CH 5</strong> unlocks the Siege Workshop, a 2nd March Queue, the Shop, and a 2nd Lumber Mill.</li>
        <li><strong>CH 6</strong> unlocks an Academy tier jump, a 2nd Hospital, and the 1st Quarry.</li>
        <li>Mid-game milestones (roughly CH 16, 21, 25) unlock mid- and top-tier troops and extra dispatch/march queues; <strong>CH 25</strong> is the point at which most accounts pivot fully onto Castle and Academy upgrades to chase Tier 5 troops.</li>
        <li><strong>VIP 6</strong> permanently unlocks the <strong>second building queue</strong> — this is one of the single most commonly recommended "rush this first" milestones for new players (chapter 6).</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Resource-production buildings (Farm, Lumber Mill, Quarry, Gold Mine) only store about 10 hours' worth of output before they cap out. Collect roughly twice a day so nothing goes to waste — production sitting uncollected inside the building is also safe from raids.
      </div>

      <h2>Alliance Center and Alliance Help</h2>
      <p>Alliance members can send "Alliance Help" to speed up your building, research, and troop-healing queues (not troop training or gathering). Each individual help removes 1% of the remaining time, or 1 minute — whichever is greater. The base cap is 5 helps per queued task, plus 1 extra help per Alliance Center level.</p>

      <p class="sentinel-hint">A building, research or training queue left empty is progress lost forever: set up <strong>Sentinel</strong> on words like <code>construction</code> or <code>research complete</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Leaving a builder, research, or training queue empty "just for a bit." Time, not raw materials, is the scarcest resource in Rise of Kingdoms — an idle queue is wasted progress you can never get back.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>City Hall and Wall should always be kept at close levels to each other.</li>
        <li>VIP 6 is worth doubling your construction speed: rush it early.</li>
        <li>Collect produced resources roughly twice a day before they cap out.</li>
      </ul>
`,
  es: `
      <h1>Ciudad y edificios</h1>
      <div class="hazard"></div>
      <p class="lead">City Hall, Wall, Academy y el orden de construcción recomendado para crecer sin cuellos de botella.</p>

      <div class="box box-nrc">
        <span class="box-title">Nota terminológica</span>
        Este manual usa <strong>City Hall</strong> como nombre del edificio central — es el edificio que limita el nivel de cualquier otra estructura en tu ciudad, desbloquea nuevos tipos de edificio, tiers de tropa y tiers de investigación, y aumenta la capacidad de marcha/rally. (No existe un edificio llamado literalmente "Command Center" en Rise of Kingdoms.)
      </div>

      <h2>Orden de construcción recomendado para cuentas nuevas</h2>
      <ol>
        <li><strong>City Hall</strong> — siempre tu prioridad principal; empújalo tanto como tus recursos permitan.</li>
        <li><strong>Wall</strong> — debe mantenerse cerca del nivel del City Hall; es un requisito para más mejoras del City Hall, guarnece comandantes, y evita que tu ciudad sea reubicada a la fuerza si su durabilidad llega a cero en combate.</li>
        <li><strong>Farm / Lumber Mill / Quarry / Gold Mine</strong> — tus edificios de producción de recursos; el coste de cualquier otra mejora escala en base a ellos.</li>
        <li><strong>Storehouse</strong> — protege una cantidad fija de cada recurso del saqueo de atacantes (capítulo 5).</li>
        <li><strong>Academy</strong> — no puedes investigar mientras se mejora, pero se trata como una prioridad permanente de primer nivel junto al City Hall, ya que la investigación escala toda tu cuenta.</li>
        <li><strong>Hospital</strong> — a veces es un requisito directo para la mejora del City Hall, y cada vez más crítico una vez que estás activo en PvP/KvK, ya que protege a las tropas heridas de perderse de forma permanente.</li>
        <li><strong>Barracks / Archery Range / Stable / Siege Workshop</strong> — mejóralos en paralelo con el City Hall para desbloquear tiers de tropa más altos. Una regla práctica común: empújalos más solo cuando la capacidad de tu Hospital pueda absorber las pérdidas que implica un ejército más grande.</li>
        <li><strong>Alliance Center</strong> — rige tu capacidad de Alliance Help, el tamaño de la guarnición y la capacidad de rally/refuerzo.</li>
        <li><strong>Scout Camp</strong> y <strong>Trading Post</strong> — edificios secundarios menores que merecen una mejora rápida: exploración más rápida/lejana, y menor impuesto más transferencias de recursos más rápidas a aliados o cuentas farm.</li>
      </ol>

      <h2>Hitos del City Hall</h2>
      <ul>
        <li><strong>CH 4</strong> desbloquea el Stable.</li>
        <li><strong>CH 5</strong> desbloquea el Siege Workshop, una 2ª cola de marcha, la Shop, y un 2º Lumber Mill.</li>
        <li><strong>CH 6</strong> desbloquea un salto de tier de Academy, un 2º Hospital, y la 1ª Quarry.</li>
        <li>Los hitos de mitad de partida (aproximadamente CH 16, 21, 25) desbloquean tropas de tier medio y superior y colas de despacho/marcha extra; <strong>CH 25</strong> es el punto en que la mayoría de las cuentas se vuelca por completo en mejoras de Castle y Academy para perseguir tropas de Tier 5.</li>
        <li><strong>VIP 6</strong> desbloquea permanentemente la <strong>segunda cola de construcción</strong> — es uno de los hitos "prioriza esto primero" más recomendados para jugadores nuevos (capítulo 6).</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Los edificios de producción de recursos (Farm, Lumber Mill, Quarry, Gold Mine) solo almacenan unas 10 horas de producción antes de saturarse. Recoge más o menos dos veces al día para que no se desperdicie nada — la producción sin recoger dentro del edificio también está a salvo de saqueos.
      </div>

      <h2>Alliance Center y Alliance Help</h2>
      <p>Los miembros de la alianza pueden enviar "Alliance Help" para acelerar tus colas de construcción, investigación y curación de tropas (no el entrenamiento de tropas ni la recolección). Cada ayuda individual elimina el 1% del tiempo restante, o 1 minuto — lo que sea mayor. El tope base es de 5 ayudas por tarea en cola, más 1 ayuda extra por cada nivel del Alliance Center.</p>

      <p class="sentinel-hint">Una cola de construcción, investigación o entrenamiento vacía es progreso perdido para siempre: configura <strong>Sentinel</strong> con palabras como <code>construction</code> o <code>research complete</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Dejar vacía una cola de constructores, investigación o entrenamiento "solo por un momento". El tiempo, no las materias primas, es el recurso más escaso en Rise of Kingdoms — una cola inactiva es progreso que nunca podrás recuperar.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>City Hall y Wall siempre deben mantenerse en niveles cercanos entre sí.</li>
        <li>VIP 6 vale tanto como duplicar tu velocidad de construcción: persíguelo pronto.</li>
        <li>Recoge los recursos producidos más o menos dos veces al día antes de que se saturen.</li>
      </ul>
`,
  fr: `
      <h1>Ville et bâtiments</h1>
      <div class="hazard"></div>
      <p class="lead">City Hall, Wall, Academy et l'ordre de construction recommandé pour progresser sans goulots d'étranglement.</p>

      <div class="box box-nrc">
        <span class="box-title">Note terminologique</span>
        Ce guide utilise <strong>City Hall</strong> comme nom du bâtiment central — c'est le bâtiment qui plafonne le niveau de toute autre structure de ta ville, débloque de nouveaux types de bâtiments, tiers de troupes et tiers de recherche, et augmente la capacité de marche/rally. (Il n'existe pas de bâtiment littéralement appelé « Command Center » dans Rise of Kingdoms.)
      </div>

      <h2>Ordre de construction recommandé pour les nouveaux comptes</h2>
      <ol>
        <li><strong>City Hall</strong> — toujours ta priorité absolue ; pousse-le aussi loin que tes ressources le permettent.</li>
        <li><strong>Wall</strong> — doit rester proche du niveau du City Hall ; c'est un prérequis pour de nouvelles améliorations du City Hall, il garnit les commandants, et empêche ta ville d'être relocalisée de force si sa durabilité tombe à zéro en combat.</li>
        <li><strong>Farm / Lumber Mill / Quarry / Gold Mine</strong> — tes bâtiments de production de ressources ; le coût de toute autre amélioration est basé dessus.</li>
        <li><strong>Storehouse</strong> — protège une quantité fixe de chaque ressource contre le pillage des attaquants (chapitre 5).</li>
        <li><strong>Academy</strong> — tu ne peux pas faire de recherche pendant qu'elle est en amélioration, mais elle est traitée comme une priorité permanente de premier plan aux côtés du City Hall, car la recherche fait progresser tout ton compte.</li>
        <li><strong>Hospital</strong> — parfois un prérequis direct pour une amélioration du City Hall, et de plus en plus critique une fois actif en PvP/KvK, car il protège les troupes blessées d'une perte définitive.</li>
        <li><strong>Barracks / Archery Range / Stable / Siege Workshop</strong> — à améliorer en parallèle du City Hall pour débloquer des tiers de troupes supérieurs. Une règle courante : ne les pousse plus loin que lorsque la capacité de ton Hospital peut absorber les pertes qu'implique une armée plus grande.</li>
        <li><strong>Alliance Center</strong> — régit ta capacité d'Alliance Help, la taille de la garnison et la capacité de rally/renfort.</li>
        <li><strong>Scout Camp</strong> et <strong>Trading Post</strong> — bâtiments secondaires mineurs qui méritent une amélioration rapide : exploration plus rapide/lointaine, et taxe réduite plus transferts de ressources plus rapides vers alliés ou comptes farm.</li>
      </ol>

      <h2>Paliers du City Hall</h2>
      <ul>
        <li><strong>CH 4</strong> débloque le Stable.</li>
        <li><strong>CH 5</strong> débloque le Siege Workshop, une 2e file de marche, le Shop, et un 2e Lumber Mill.</li>
        <li><strong>CH 6</strong> débloque un saut de tier de l'Academy, un 2e Hospital, et la 1ère Quarry.</li>
        <li>Les paliers de milieu de partie (environ CH 16, 21, 25) débloquent des troupes de tier moyen et haut ainsi que des files de dispatch/marche supplémentaires ; <strong>CH 25</strong> est le point où la plupart des comptes basculent entièrement sur les améliorations du Castle et de l'Academy pour viser les troupes de Tier 5.</li>
        <li><strong>VIP 6</strong> débloque de façon permanente la <strong>deuxième file de construction</strong> — c'est l'un des paliers « fonce sur ça en premier » les plus recommandés pour les nouveaux joueurs (chapitre 6).</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Les bâtiments de production de ressources (Farm, Lumber Mill, Quarry, Gold Mine) ne stockent qu'environ 10 heures de production avant de saturer. Récolte environ deux fois par jour pour ne rien gaspiller — la production non récoltée dans le bâtiment est aussi à l'abri des raids.
      </div>

      <h2>Alliance Center et Alliance Help</h2>
      <p>Les membres de l'alliance peuvent envoyer de l'« Alliance Help » pour accélérer tes files de construction, de recherche et de soins des troupes (pas l'entraînement des troupes ni la récolte). Chaque aide individuelle retire 1% du temps restant, ou 1 minute — selon le plus grand des deux. Le plafond de base est de 5 aides par tâche en file, plus 1 aide supplémentaire par niveau d'Alliance Center.</p>

      <p class="sentinel-hint">Une file de construction, de recherche ou d'entraînement laissée vide, c'est du progrès perdu pour toujours : configure <strong>Sentinel</strong> sur des mots comme <code>construction</code> ou <code>research complete</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Laisser une file de constructeurs, de recherche ou d'entraînement vide « juste un instant ». Le temps, pas les matières premières, est la ressource la plus rare dans Rise of Kingdoms — une file inactive, c'est du progrès que tu ne récupéreras jamais.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>City Hall et Wall doivent toujours être maintenus à des niveaux proches l'un de l'autre.</li>
        <li>Le VIP 6 vaut le coup de doubler ta vitesse de construction : fonce dessus tôt.</li>
        <li>Récolte les ressources produites environ deux fois par jour avant qu'elles ne saturent.</li>
      </ul>
`
};
