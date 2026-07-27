/* Contenuto tradotto del capitolo — State of Survival / 04 Base & buildings.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Base & buildings</h1>
      <div class="hazard"></div>

      <h2>Headquarters (HQ)</h2>
      <p>The HQ is the central building; its level hard-caps every other building's level. As it grows, its interface unlocks tabs for Skins, Collection Sets, Settlement Bonus, Hero Appointment, Plasma Level, and Defense System.</p>

      <div class="table-wrap"><table>
        <tr><th>HQ Level</th><th>Notes</th><th>March Capacity</th></tr>
        <tr><td>1</td><td>Starting level</td><td>350</td></tr>
        <tr><td>10</td><td>Requires Hero Precinct 9 + Garage 9</td><td>7,720</td></tr>
        <tr><td>20</td><td>Requires Hero Precinct 19 + Range 19</td><td>38,000</td></tr>
        <tr><td>30</td><td>Requires Hero Precinct 29 + Barracks 29; ~39.5 days base build time pre-speedups</td><td>67,000</td></tr>
        <tr><td>31+</td><td>Becomes "Plasma Level" (HQ P1, P2…), requires the Institute of Plasma and a new resource, Plasma Cores</td><td>—</td></tr>
      </table></div>

      <p>Total cost from level 1 to 30 is roughly 1.26 billion Food, 1.26 billion Wood, 343 million Metal, and 93 million Gas — useful context for explaining why the game is a very long-term investment.</p>

      <div class="box box-nrc">
        <span class="box-title">Terminology note</span>
        Levels beyond 30 are called "Plasma Levels," not a renamed HQ tier — Plasma Level 1 unlocks expanded March Capacity, Plasma Level 4 unlocks Rally Capacity, and Plasma Level 5 unlocks "Special Forces" (T11) troops.
      </div>

      <h2>Key buildings (confirmed State of Survival roster)</h2>
      <ul>
        <li><strong>Headquarters (HQ)</strong> — central building, unlocks higher-level structures, increases march capacity.</li>
        <li><strong>Hero Precinct</strong> — upgrades heroes, hosts Hero Explore/Search, grants troop attack bonuses. (Functionally similar to a "hero academy" — don't confuse it with the Barracks below.)</li>
        <li><strong>Barricade</strong> — the wall/defense structure; slows enemy breach time and hosts assigned defending heroes.</li>
        <li><strong>Warehouse</strong> — protects resources from looting; also raises Trading Post listing capacity.</li>
        <li><strong>Event Billboard</strong> — collects event rewards, daily rewards, daily drop cards.</li>
        <li><strong>Lookout Tower</strong> — early warning for incoming marches; shows march size, ETA, and whether it's a rally or solo attack (max level ~22 for full detail).</li>
        <li><strong>Trading Post</strong> — spend Biocaps on items, or barter resources via a Market Stall.</li>
        <li><strong>Workshop</strong> — upgrade Chief Gear and Hero Gear.</li>
        <li><strong>Assembly Point</strong> — governs reinforcements received and "Timer Help" from allies; upgrades raise reinforcement capacity and timer-help duration/limits.</li>
        <li><strong>Hospital</strong> — heals wounded troops; capacity scales with level (see Chapter 3).</li>
        <li><strong>Enlistment Office</strong> — the overflow safety net for troops that would die once the Hospital is full (see Chapter 3).</li>
        <li><strong>Research Lab</strong> — houses Development, Battle and Economic research; can also incubate Biocaps.</li>
        <li><strong>Command Station</strong> — needed to launch rallies; upgrades increase rally capacity.</li>
        <li><strong>Blast Shelter</strong> — hides a march of troops for 15 min / 1h / 4h / 8h; sheltered troops can't be attacked or lost.</li>
        <li><strong>Range</strong> (trains Hunters), <strong>Garage</strong> (trains Riders), <strong>Barracks</strong> (trains Infantry).</li>
        <li><strong>Training Camps</strong> — boost training capacity and speed across all three troop-training buildings.</li>
        <li><strong>Institute of Plasma</strong> — unlocks advanced tech/troops at HQ level 31+.</li>
        <li><strong>M.I.G.O. Center</strong> — event hub, rankings, and related info.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Terminology note</span>
        No Embassy, Bank, "Furnace," Infirmary, or "Chief Charm" exists in State of Survival under those names — these belong to other games in the genre (Whiteout Survival, Last Shelter: Survival). Omit them or clearly relabel with SoS's real equivalents (Warehouse ≈ storage-protection, Hospital ≈ infirmary).
      </div>

      <h2>Recommended building priority order</h2>
      <ol>
        <li><strong>HQ first, always</strong> — it caps everything else.</li>
        <li><strong>Hero Precinct second</strong> — heroes contribute more combat value than raw troop stats, and its level gates hero level caps.</li>
        <li>Balance <strong>Barracks / Range / Garage together</strong> rather than maxing one troop type; many guides recommend pushing all three to level 16 relatively early to unlock Tier 6 troops.</li>
        <li>Keep <strong>Warehouse</strong> and <strong>Research Lab</strong> upgraded in parallel so resource protection and passive research bonuses don't fall behind.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Never leave a build queue empty, even overnight — this is the single biggest avoidable efficiency loss for F2P/low-spend accounts.
      </div>

      <p class="sentinel-hint">A build queue that finishes while you're not looking at the screen is wasted time: set up <strong>Sentinel</strong> on words like <code>construction</code> or <code>upgrade complete</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-f2p">
        <span class="box-title">F2P Focus</span>
        Rushing HQ to level 6 in the first 8 hours to unlock the second free build queue is one of the best-value early goals in the entire game.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>HQ first, then Hero Precinct, then the three troop-training structures in balance.</li>
        <li>Don't chase just one troop type: pushing all three structures to level 16 unlocks Tier 6 for all of them.</li>
        <li>Warehouse and Research Lab grow in parallel with everything else, not afterward.</li>
      </ul>
`,
  es: `
      <h1>Base y edificios</h1>
      <div class="hazard"></div>

      <h2>Cuartel General (HQ)</h2>
      <p>El HQ es el edificio central; su nivel limita rígidamente el nivel de cualquier otro edificio. A medida que crece, su interfaz desbloquea pestañas para Skins, Sets de Colección, Bono de Asentamiento, Asignación de Héroes, Nivel Plasma y Sistema de Defensa.</p>

      <div class="table-wrap"><table>
        <tr><th>Nivel de HQ</th><th>Notas</th><th>Capacidad de marcha</th></tr>
        <tr><td>1</td><td>Nivel inicial</td><td>350</td></tr>
        <tr><td>10</td><td>Requiere Hero Precinct 9 + Garage 9</td><td>7.720</td></tr>
        <tr><td>20</td><td>Requiere Hero Precinct 19 + Range 19</td><td>38.000</td></tr>
        <tr><td>30</td><td>Requiere Hero Precinct 29 + Barracks 29; ~39,5 días de construcción base antes de speedups</td><td>67.000</td></tr>
        <tr><td>31+</td><td>Se convierte en "Nivel Plasma" (HQ P1, P2…), requiere el Institute of Plasma y un nuevo recurso, los Plasma Cores</td><td>—</td></tr>
      </table></div>

      <p>El coste total del nivel 1 al 30 es de aproximadamente 1.260 millones de Food, 1.260 millones de Wood, 343 millones de Metal y 93 millones de Gas — un buen contexto para explicar por qué el juego es una inversión a muy largo plazo.</p>

      <div class="box box-nrc">
        <span class="box-title">Nota de terminología</span>
        Los niveles más allá del 30 se llaman "Niveles Plasma", no un tier de HQ renombrado — el Nivel Plasma 1 desbloquea una Capacidad de Marcha ampliada, el Nivel Plasma 4 desbloquea la Capacidad de Rally, y el Nivel Plasma 5 desbloquea las tropas "Special Forces" (T11).
      </div>

      <h2>Edificios clave (roster confirmado de State of Survival)</h2>
      <ul>
        <li><strong>Headquarters (HQ)</strong> — edificio central, desbloquea estructuras de nivel superior, aumenta la capacidad de marcha.</li>
        <li><strong>Hero Precinct</strong> — mejora a los héroes, alberga Hero Explore/Search, concede bonos de ataque a las tropas. (Funcionalmente similar a una "academia de héroes": no lo confundas con el Barracks de abajo.)</li>
        <li><strong>Barricade</strong> — la estructura de muro/defensa; ralentiza el tiempo de ruptura enemiga y alberga a los héroes defensores asignados.</li>
        <li><strong>Warehouse</strong> — protege los recursos del saqueo; también aumenta la capacidad de listado en el Trading Post.</li>
        <li><strong>Event Billboard</strong> — recoge las recompensas de eventos, las recompensas diarias y las cartas de drop diarias.</li>
        <li><strong>Lookout Tower</strong> — aviso anticipado de marchas entrantes; muestra el tamaño de la marcha, la ETA, y si es un rally o un ataque individual (nivel máximo ~22 para el detalle completo).</li>
        <li><strong>Trading Post</strong> — gasta Biocaps en objetos, o intercambia recursos mediante un Market Stall.</li>
        <li><strong>Workshop</strong> — mejora el Chief Gear y el Hero Gear.</li>
        <li><strong>Assembly Point</strong> — regula los refuerzos recibidos y el "Timer Help" de los aliados; las mejoras aumentan la capacidad de refuerzo y la duración/límites del timer help.</li>
        <li><strong>Hospital</strong> — cura a las tropas heridas; la capacidad escala con el nivel (ver capítulo 3).</li>
        <li><strong>Enlistment Office</strong> — la red de seguridad para el excedente de tropas que de otro modo morirían cuando el Hospital está lleno (ver capítulo 3).</li>
        <li><strong>Research Lab</strong> — alberga la investigación Development, Battle y Economic; también puede incubar Biocaps.</li>
        <li><strong>Command Station</strong> — necesaria para lanzar rallies; las mejoras aumentan la capacidad de rally.</li>
        <li><strong>Blast Shelter</strong> — esconde una marcha de tropas durante 15 min / 1h / 4h / 8h; las tropas refugiadas no pueden ser atacadas ni perderse.</li>
        <li><strong>Range</strong> (entrena Hunters), <strong>Garage</strong> (entrena Riders), <strong>Barracks</strong> (entrena Infantería).</li>
        <li><strong>Training Camps</strong> — potencian capacidad y velocidad de entrenamiento en los tres edificios de entrenamiento de tropas.</li>
        <li><strong>Institute of Plasma</strong> — desbloquea tecnología/tropas avanzadas en el nivel de HQ 31+.</li>
        <li><strong>M.I.G.O. Center</strong> — hub de eventos, clasificaciones e información relacionada.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Nota de terminología</span>
        No existe ninguna Embassy, Bank, "Furnace", Infirmary o "Chief Charm" en State of Survival bajo esos nombres — pertenecen a otros juegos del género (Whiteout Survival, Last Shelter: Survival). Omítelos o reasígnalos claramente con el equivalente real de SoS (Warehouse ≈ protección de almacenamiento, Hospital ≈ enfermería).
      </div>

      <h2>Orden de prioridad recomendado para la construcción</h2>
      <ol>
        <li><strong>HQ primero, siempre</strong> — limita todo lo demás.</li>
        <li><strong>Hero Precinct en segundo lugar</strong> — los héroes aportan más valor de combate que las estadísticas brutas de las tropas, y su nivel limita el tope de nivel de los héroes.</li>
        <li>Equilibra <strong>Barracks / Range / Garage juntos</strong> en lugar de maximizar un solo tipo de tropa; muchas guías recomiendan llevar los tres al nivel 16 relativamente pronto para desbloquear las tropas de Tier 6.</li>
        <li>Mantén <strong>Warehouse</strong> y <strong>Research Lab</strong> mejorados en paralelo para que la protección de recursos y los bonos de investigación pasivos no se queden atrás.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Nunca dejes una cola de construcción vacía, ni siquiera de noche — esta es la mayor pérdida de eficiencia evitable para cuentas F2P/de bajo gasto.
      </div>

      <p class="sentinel-hint">Una cola de construcción que termina mientras no miras la pantalla es tiempo perdido: configura <strong>Sentinel</strong> con palabras como <code>construction</code> o <code>upgrade complete</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-f2p">
        <span class="box-title">Para jugadores F2P</span>
        Llevar el HQ al nivel 6 en las primeras 8 horas para desbloquear la segunda cola de construcción gratuita es uno de los objetivos con mejor relación calidad-precio de todo el juego.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>HQ primero, luego Hero Precinct, luego las tres estructuras de entrenamiento de tropas en equilibrio.</li>
        <li>No persigas solo un tipo de tropa: llevar las tres estructuras al nivel 16 desbloquea el Tier 6 para todas.</li>
        <li>Warehouse y Research Lab crecen en paralelo con todo lo demás, no después.</li>
      </ul>
`,
  fr: `
      <h1>Base et bâtiments</h1>
      <div class="hazard"></div>

      <h2>Quartier Général (QG)</h2>
      <p>Le QG est le bâtiment central ; son niveau plafonne rigidement le niveau de tout autre bâtiment. À mesure qu'il grandit, son interface débloque des onglets pour les Skins, les Sets de Collection, le Bonus de Colonie, l'Assignation des Héros, le Niveau Plasma et le Système de Défense.</p>

      <div class="table-wrap"><table>
        <tr><th>Niveau QG</th><th>Notes</th><th>Capacité de marche</th></tr>
        <tr><td>1</td><td>Niveau de départ</td><td>350</td></tr>
        <tr><td>10</td><td>Nécessite Hero Precinct 9 + Garage 9</td><td>7 720</td></tr>
        <tr><td>20</td><td>Nécessite Hero Precinct 19 + Range 19</td><td>38 000</td></tr>
        <tr><td>30</td><td>Nécessite Hero Precinct 29 + Barracks 29 ; ~39,5 jours de construction de base avant speedups</td><td>67 000</td></tr>
        <tr><td>31+</td><td>Devient « Niveau Plasma » (QG P1, P2…), nécessite l'Institute of Plasma et une nouvelle ressource, les Plasma Cores</td><td>—</td></tr>
      </table></div>

      <p>Le coût total du niveau 1 au niveau 30 est d'environ 1,26 milliard de Food, 1,26 milliard de Wood, 343 millions de Metal et 93 millions de Gas — un bon contexte pour expliquer pourquoi le jeu est un investissement à très long terme.</p>

      <div class="box box-nrc">
        <span class="box-title">Note de terminologie</span>
        Les niveaux au-delà de 30 sont appelés « Niveaux Plasma », pas un tier de QG renommé — le Niveau Plasma 1 débloque une Capacité de Marche étendue, le Niveau Plasma 4 débloque la Capacité de Rally, et le Niveau Plasma 5 débloque les troupes « Special Forces » (T11).
      </div>

      <h2>Bâtiments clés (roster confirmé de State of Survival)</h2>
      <ul>
        <li><strong>Headquarters (QG)</strong> — bâtiment central, débloque des structures de niveau supérieur, augmente la capacité de marche.</li>
        <li><strong>Hero Precinct</strong> — améliore les héros, héberge Hero Explore/Search, accorde des bonus d'attaque aux troupes. (Fonctionnellement semblable à une « académie de héros » — ne le confonds pas avec le Barracks ci-dessous.)</li>
        <li><strong>Barricade</strong> — la structure de mur/défense ; ralentit le temps de percée ennemie et héberge les héros défenseurs assignés.</li>
        <li><strong>Warehouse</strong> — protège les ressources du pillage ; augmente aussi la capacité de mise en vente au Trading Post.</li>
        <li><strong>Event Billboard</strong> — collecte les récompenses d'événements, les récompenses quotidiennes et les cartes de drop quotidiennes.</li>
        <li><strong>Lookout Tower</strong> — alerte précoce pour les marches entrantes ; affiche la taille de la marche, l'ETA, et s'il s'agit d'un rally ou d'une attaque solo (niveau max ~22 pour le détail complet).</li>
        <li><strong>Trading Post</strong> — dépense des Biocaps en objets, ou échange des ressources via un Market Stall.</li>
        <li><strong>Workshop</strong> — améliore le Chief Gear et le Hero Gear.</li>
        <li><strong>Assembly Point</strong> — régit les renforts reçus et le « Timer Help » des alliés ; les améliorations augmentent la capacité de renfort et la durée/les limites du timer help.</li>
        <li><strong>Hospital</strong> — soigne les troupes blessées ; la capacité évolue avec le niveau (voir chapitre 3).</li>
        <li><strong>Enlistment Office</strong> — le filet de sécurité pour le surplus de troupes qui mourraient sinon quand l'Hospital est plein (voir chapitre 3).</li>
        <li><strong>Research Lab</strong> — héberge la recherche Development, Battle et Economic ; peut aussi incuber des Biocaps.</li>
        <li><strong>Command Station</strong> — nécessaire pour lancer des rallies ; les améliorations augmentent la capacité de rally.</li>
        <li><strong>Blast Shelter</strong> — cache une marche de troupes pendant 15 min / 1h / 4h / 8h ; les troupes abritées ne peuvent être attaquées ni perdues.</li>
        <li><strong>Range</strong> (entraîne les Hunters), <strong>Garage</strong> (entraîne les Riders), <strong>Barracks</strong> (entraîne l'Infanterie).</li>
        <li><strong>Training Camps</strong> — boostent la capacité et la vitesse d'entraînement dans les trois bâtiments d'entraînement de troupes.</li>
        <li><strong>Institute of Plasma</strong> — débloque une technologie/des troupes avancées au niveau QG 31+.</li>
        <li><strong>M.I.G.O. Center</strong> — hub d'événements, classements et infos associées.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Note de terminologie</span>
        Aucune Embassy, Bank, « Furnace », Infirmary, ou « Chief Charm » n'existe dans State of Survival sous ces noms — ils appartiennent à d'autres jeux du genre (Whiteout Survival, Last Shelter: Survival). Omets-les ou renomme-les clairement avec les vrais équivalents de SoS (Warehouse ≈ protection du stockage, Hospital ≈ infirmerie).
      </div>

      <h2>Ordre de priorité recommandé pour la construction</h2>
      <ol>
        <li><strong>Le QG d'abord, toujours</strong> — il plafonne tout le reste.</li>
        <li><strong>Le Hero Precinct en second</strong> — les héros apportent plus de valeur au combat que les statistiques brutes des troupes, et son niveau plafonne le niveau maximum des héros.</li>
        <li>Équilibre <strong>Barracks / Range / Garage ensemble</strong> plutôt que de maximiser un seul type de troupe ; de nombreux guides recommandent de pousser les trois au niveau 16 relativement tôt pour débloquer les troupes de Tier 6.</li>
        <li>Garde <strong>Warehouse</strong> et <strong>Research Lab</strong> améliorés en parallèle pour que la protection des ressources et les bonus de recherche passifs ne prennent pas de retard.</li>
      </ol>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Ne laisse jamais une file de construction vide, même la nuit — c'est la plus grande perte d'efficacité évitable pour les comptes F2P/petit budget.
      </div>

      <p class="sentinel-hint">Une file de construction qui se termine pendant que tu ne regardes pas l'écran, c'est du temps perdu : configure <strong>Sentinel</strong> sur des mots comme <code>construction</code> ou <code>upgrade complete</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-f2p">
        <span class="box-title">Focus F2P</span>
        Rusher le QG au niveau 6 dans les 8 premières heures pour débloquer la deuxième file de construction gratuite est l'un des objectifs au meilleur rapport qualité-prix de tout le jeu.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Le QG d'abord, puis le Hero Precinct, puis les trois structures d'entraînement de troupes en équilibre.</li>
        <li>Ne poursuis pas un seul type de troupe : pousser les trois structures au niveau 16 débloque le Tier 6 pour toutes.</li>
        <li>Warehouse et Research Lab grandissent en parallèle du reste, pas après.</li>
      </ul>
`
};
