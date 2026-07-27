/* Contenuto tradotto del capitolo — Whiteout Survival / 06 Troops & Combat Mechanics.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Troops & combat mechanics</h1>
      <div class="hazard"></div>

      <h2>Troop types & counter system</h2>
      <p>Three troop types form a rock-paper-scissors loop: <strong>Infantry beats Lancer, Lancer beats Marksman, Marksman beats Infantry.</strong></p>
      <ul>
        <li><strong>Infantry</strong> — front-line tank, high defense/durability, positioned in the front row.</li>
        <li><strong>Lancer</strong> — balanced mobile/burst unit, positioned in the middle row; some skills let Lancers bypass the front row to strike Marksmen directly.</li>
        <li><strong>Marksman</strong> — highest raw attack but lowest durability, positioned in the back row.</li>
      </ul>
      <p>A commonly cited baseline attacking ratio is 50% Infantry / 20% Lancer / 30% Marksman, adjusted to directly counter whatever the enemy fields. Combat is turn-based: both sides pick targets and attack simultaneously each turn, with units generally targeting the enemy's front row first and only advancing to the next row once it's cleared.</p>

      <h2>Troop tiers & upgrading</h2>
      <p>Troops are tiered from T1 up through the current ceiling — as of this writing, <strong>T1-T10 (standard), then T11 "Helios," then T12 "Exalted"</strong> (the newest tier). Camps (Infantry/Lancer/Marksman) gate raw tier access as they level up; the <strong>War Academy</strong> governs unlocking T11/T12 specifically via its own tech tree (see Chapter 7 for how this differs from the main Research Center).</p>
      <p>Two distinct upgrade concepts are worth keeping separate, since they're a common point of player confusion:</p>
      <ul>
        <li><strong>Promotion</strong> — once a troop camp reaches its promotion threshold, existing lower-tier troops can be converted directly into the highest currently-trainable tier, rather than only training brand-new troops from T1 up.</li>
        <li><strong>Fire Crystal upgrade</strong> — once a camp is leveled past 30 using Fire Crystals, it produces a stronger version of the <em>same tier</em> (an "FC-tier" troop), not a jump to the next numbered tier. Promotion changes the tier number; the Fire Crystal camp upgrade strengthens the current tier.</li>
      </ul>
      <p>T12 "Exalted" specifically requires already owning T11 troops, building a new <strong>Crystal Energy Institute</strong>, and unlocking the War Academy's "Flame Tech" research branch — a genuinely late-game, multi-month (or longer) investment rather than a short-term goal.</p>

      <h2>March, rally & garrison</h2>
      <ul>
        <li><strong>March/Deployment Capacity</strong> (how many troops one march can carry) scales with Command Center level and the Research Center's "Regimental Expansion" line.</li>
        <li><strong>Formations</strong> — saved troop-ratio and hero presets, unlockable from around Command Center level 10, with several preset slots available for quick reuse.</li>
        <li><strong>Rally</strong> — multiple players' marches combined against one powerful target (a boss, or an enemy city/fortress). Rally capacity is a separate, larger stat than march capacity. In a rally, the initiator's full hero skill set is active, while each joining player contributes only their first hero slot's skill.</li>
        <li><strong>Garrison</strong> — troops (plus any alliance reinforcements) defending a city under attack. The defender with the highest stat bonuses is automatically used as the garrison's bonus source, and each reinforcing ally contributes their primary hero skill only. Community guidance treats a defense as "successful" once defenders eliminate over half the attacking force.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Time reinforcements to arrive <em>between</em> incoming attacks, so a garrison stays freshly topped up rather than being caught depleted right before the next hit lands.
      </div>

      <h2>Combat Power</h2>
      <p>Century Games describes "Squad Power" only as "a special formula based on Hero Power and Troop Level," without publishing exact weights. In practice, Power is a composite of troop tier and count, hero level/stars/gear/skills, Chief Gear and completed Research — there is no single public formula, so it's best to describe Power as a composite score rather than present an invented equation.</p>

      <h2>Healing & troop loss</h2>
      <p>The <strong>Infirmary</strong> holds wounded troops after a costly battle so they can be healed rather than lost permanently; when it's full, a large share of overflow goes to the Enlistment Office and can still be recovered, while the remainder is lost. Casualty rates vary meaningfully by battle type: some PvP battle types have a notable outright-death percentage on the losing side, while several PvE events (Bear Hunt, Frostfire Mine, Foundry Battle) either deal no damage back to players or grant temporarily uncapped Infirmary capacity, removing the risk of permanent troop loss during those specific events.</p>

      <p class="sentinel-hint">An incoming rally or a garrison under attack can land at any moment: set up <strong>Sentinel</strong> on words like <code>attack</code>, <code>rally</code> or <code>incoming</code> to turn that notification into a real alarm you'll hear even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Quick tips</h2>
      <ul>
        <li>Don't confuse Promotion (changes the tier number) with the Fire Crystal upgrade (strengthens the same tier).</li>
        <li>Take advantage of uncapped-Infirmary events (Bear Hunt, Frostfire, Foundry Battle) to safely train aggressive compositions.</li>
        <li>T12 "Exalted" is a multi-month goal: don't rush it if your camps and War Academy aren't ready yet.</li>
      </ul>
`,
  es: `
      <h1>Tropas y mecánicas de combate</h1>
      <div class="hazard"></div>

      <h2>Tipos de tropa y sistema de contras</h2>
      <p>Tres tipos de tropa forman un ciclo de piedra-papel-tijera: <strong>Infantería vence a Lancero, Lancero vence a Tirador, Tirador vence a Infantería.</strong></p>
      <ul>
        <li><strong>Infantería</strong> — tanque de primera línea, alta defensa/resistencia, posicionada en la fila delantera.</li>
        <li><strong>Lancero</strong> — unidad equilibrada móvil/de daño explosivo, posicionada en la fila central; algunas habilidades permiten a los Lanceros saltarse la fila delantera para golpear directamente a los Tiradores.</li>
        <li><strong>Tirador</strong> — máximo ataque bruto pero menor resistencia, posicionado en la retaguardia.</li>
      </ul>
      <p>Una proporción de ataque base comúnmente citada es 50% Infantería / 20% Lancero / 30% Tirador, ajustada para contrarrestar directamente lo que despliegue el enemigo. El combate es por turnos: ambos bandos eligen objetivos y atacan simultáneamente cada turno, con las unidades apuntando generalmente primero a la fila delantera enemiga y avanzando a la siguiente fila solo una vez despejada la anterior.</p>

      <h2>Tiers de tropa y mejora</h2>
      <p>Las tropas tienen un tier que va de T1 hasta el límite actual — al momento de escribir esto, <strong>T1-T10 (estándar), luego T11 "Helios", luego T12 "Exalted"</strong> (el tier más nuevo). Los cuarteles (Infantería/Lancero/Tirador) regulan el acceso a los tiers brutos a medida que suben de nivel; la <strong>Academia de Guerra</strong> gobierna el desbloqueo de T11/T12 específicamente mediante su propio árbol tecnológico (ver capítulo 7 para en qué se diferencia del Centro de Investigación principal).</p>
      <p>Vale la pena mantener separados dos conceptos de mejora distintos, ya que son un punto común de confusión entre jugadores:</p>
      <ul>
        <li><strong>Promoción</strong> — una vez que un cuartel alcanza su umbral de promoción, las tropas de tier inferior ya existentes pueden convertirse directamente en el tier más alto entrenable actualmente, en vez de tener que entrenar solo tropas nuevas desde T1.</li>
        <li><strong>Mejora con Cristal de Fuego</strong> — una vez que un cuartel supera el nivel 30 usando Cristales de Fuego, produce una versión más fuerte del <em>mismo tier</em> (una tropa "de tier FC"), no un salto al siguiente tier numerado. La Promoción cambia el número de tier; la mejora con Cristal de Fuego refuerza el tier actual.</li>
      </ul>
      <p>T12 "Exalted" requiere específicamente ya poseer tropas T11, construir un nuevo <strong>Instituto de Energía de Cristal</strong>, y desbloquear la rama de investigación "Tecnología de Llama" de la Academia de Guerra — una inversión genuinamente de final de juego, de varios meses o más, no un objetivo a corto plazo.</p>

      <h2>Marcha, rally y guarnición</h2>
      <ul>
        <li><strong>Capacidad de marcha/despliegue</strong> (cuántas tropas puede llevar una marcha) escala con el nivel del Command Center y la línea "Expansión de Regimientos" del Centro de Investigación.</li>
        <li><strong>Formaciones</strong> — preajustes guardados de proporción de tropas y héroes, desbloqueables aproximadamente desde el nivel 10 del Command Center, con varias ranuras de preajuste disponibles para reutilización rápida.</li>
        <li><strong>Rally</strong> — las marchas de varios jugadores combinadas contra un solo objetivo poderoso (un jefe, o una ciudad/fortaleza enemiga). La capacidad de rally es una estadística separada y mayor que la de marcha. En un rally, todo el conjunto de habilidades de héroe del iniciador está activo, mientras que cada jugador que se une contribuye solo con la habilidad de su primera ranura de héroe.</li>
        <li><strong>Guarnición</strong> — tropas (más cualquier refuerzo de alianza) defendiendo una ciudad bajo ataque. El defensor con los mayores bonos de estadísticas se usa automáticamente como fuente de bono de la guarnición, y cada aliado que refuerza contribuye solo con la habilidad de su héroe principal. La orientación de la comunidad considera una defensa "exitosa" cuando los defensores eliminan más de la mitad de la fuerza atacante.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Calcula el tiempo de tus refuerzos para que lleguen <em>entre</em> ataques entrantes, así la guarnición se mantiene siempre reabastecida en vez de ser sorprendida agotada justo antes del siguiente golpe.
      </div>

      <h2>Poder de combate</h2>
      <p>Century Games describe el "Poder de Escuadra" solo como "una fórmula especial basada en el Poder de Héroe y el Nivel de Tropa", sin publicar los pesos exactos. En la práctica, el Poder es un compuesto del tier y cantidad de tropas, nivel/estrellas/equipo/habilidades de héroes, Equipo del Jefe e Investigación completada — no existe una fórmula pública única, así que lo mejor es describir el Poder como una puntuación compuesta en vez de presentar una ecuación inventada.</p>

      <h2>Curación y pérdida de tropas</h2>
      <p>La <strong>Enfermería</strong> retiene a las tropas heridas tras una batalla costosa para que puedan curarse en vez de perderse permanentemente; cuando está llena, una gran parte del excedente va a la Oficina de Alistamiento y aún se puede recuperar, mientras que el resto se pierde. Las tasas de bajas varían notablemente según el tipo de batalla: algunos tipos de batalla PvP tienen un porcentaje notable de muerte definitiva en el bando perdedor, mientras que varios eventos PvE (Bear Hunt, Mina de Frostfire, Foundry Battle) o no infligen daño de vuelta a los jugadores o conceden capacidad de Enfermería temporalmente ilimitada, eliminando el riesgo de pérdida permanente de tropas durante esos eventos específicos.</p>

      <p class="sentinel-hint">Un rally entrante o una guarnición bajo ataque pueden llegar en cualquier momento: configura <strong>Sentinel</strong> con palabras como <code>attack</code>, <code>rally</code> o <code>incoming</code> para convertir esa notificación en una alarma real que oirás incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>No confundas la Promoción (cambia el número de tier) con la mejora de Cristal de Fuego (refuerza el mismo tier).</li>
        <li>Aprovecha los eventos de Enfermería ilimitada (Bear Hunt, Frostfire, Foundry Battle) para entrenar composiciones agresivas con seguridad.</li>
        <li>T12 "Exalted" es un objetivo de varios meses: no te apresures si tus cuarteles y la Academia de Guerra aún no están listos.</li>
      </ul>
`,
  fr: `
      <h1>Troupes et mécaniques de combat</h1>
      <div class="hazard"></div>

      <h2>Types de troupes et système de contres</h2>
      <p>Trois types de troupes forment un cycle pierre-feuille-ciseaux : <strong>l'Infanterie bat le Lancier, le Lancier bat le Tireur, le Tireur bat l'Infanterie.</strong></p>
      <ul>
        <li><strong>Infanterie</strong> — tank de première ligne, haute défense/résistance, positionnée au premier rang.</li>
        <li><strong>Lancier</strong> — unité mobile/burst équilibrée, positionnée au rang central ; certaines compétences permettent aux Lanciers de contourner le premier rang pour frapper directement les Tireurs.</li>
        <li><strong>Tireur</strong> — attaque brute la plus élevée mais résistance la plus faible, positionné à l'arrière.</li>
      </ul>
      <p>Un ratio d'attaque de base souvent cité est 50% Infanterie / 20% Lancier / 30% Tireur, ajusté pour contrer directement ce que déploie l'ennemi. Le combat se déroule au tour par tour : les deux camps choisissent leurs cibles et attaquent simultanément à chaque tour, les unités ciblant généralement d'abord le premier rang ennemi et n'avançant vers le rang suivant qu'une fois celui-ci dégagé.</p>

      <h2>Tiers de troupes et amélioration</h2>
      <p>Les troupes ont un tier allant de T1 jusqu'au plafond actuel — au moment de cette rédaction, <strong>T1-T10 (standard), puis T11 "Helios", puis T12 "Exalted"</strong> (le tier le plus récent). Les casernes (Infanterie/Lancier/Tireur) conditionnent l'accès brut aux tiers à mesure qu'elles montent de niveau ; l'<strong>Académie de Guerre</strong> régit spécifiquement le déblocage de T11/T12 via son propre arbre technologique (voir chapitre 7 pour la différence avec le Centre de Recherche principal).</p>
      <p>Deux concepts d'amélioration distincts méritent d'être bien séparés, car ils sont une source fréquente de confusion chez les joueurs :</p>
      <ul>
        <li><strong>Promotion</strong> — une fois qu'une caserne atteint son seuil de promotion, les troupes de tier inférieur existantes peuvent être converties directement dans le tier le plus élevé actuellement entraînable, au lieu de devoir entraîner uniquement de nouvelles troupes depuis T1.</li>
        <li><strong>Amélioration par Cristal de Feu</strong> — une fois qu'une caserne dépasse le niveau 30 grâce aux Cristaux de Feu, elle produit une version plus forte du <em>même tier</em> (une troupe "de tier FC"), pas un saut vers le tier numéroté suivant. La Promotion change le numéro du tier ; l'amélioration par Cristal de Feu renforce le tier actuel.</li>
      </ul>
      <p>Le T12 "Exalted" nécessite spécifiquement de déjà posséder des troupes T11, de construire un nouvel <strong>Institut d'Énergie Cristalline</strong>, et de débloquer la branche de recherche "Technologie de Flamme" de l'Académie de Guerre — un investissement véritablement de fin de jeu, sur plusieurs mois ou plus, et non un objectif à court terme.</p>

      <h2>Marche, rallye et garnison</h2>
      <ul>
        <li><strong>Capacité de marche/déploiement</strong> (combien de troupes une marche peut transporter) augmente avec le niveau du Command Center et la ligne "Expansion des Régiments" du Centre de Recherche.</li>
        <li><strong>Formations</strong> — préréglages sauvegardés de ratio de troupes et de héros, débloquables à partir d'environ le niveau 10 du Command Center, avec plusieurs emplacements de préréglage disponibles pour une réutilisation rapide.</li>
        <li><strong>Rallye</strong> — les marches de plusieurs joueurs combinées contre une seule cible puissante (un boss, ou une ville/forteresse ennemie). La capacité de rallye est une statistique séparée et plus grande que la capacité de marche. Dans un rallye, l'ensemble complet des compétences de héros de l'initiateur est actif, tandis que chaque joueur qui rejoint ne contribue qu'avec la compétence de son premier emplacement de héros.</li>
        <li><strong>Garnison</strong> — troupes (plus d'éventuels renforts d'alliance) défendant une ville attaquée. Le défenseur ayant les bonus de statistiques les plus élevés est automatiquement utilisé comme source de bonus de la garnison, et chaque allié en renfort ne contribue qu'avec la compétence de son héros principal. Les recommandations communautaires considèrent une défense comme "réussie" dès que les défenseurs éliminent plus de la moitié de la force attaquante.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Planifie l'arrivée de tes renforts <em>entre</em> les attaques entrantes, afin que la garnison reste toujours fraîchement approvisionnée plutôt que d'être prise à court juste avant le prochain coup.
      </div>

      <h2>Puissance de combat</h2>
      <p>Century Games décrit la "Puissance d'Escouade" uniquement comme "une formule spéciale basée sur la Puissance de Héros et le Niveau des Troupes", sans publier les pondérations exactes. En pratique, la Puissance est un composite du tier et du nombre de troupes, du niveau/des étoiles/de l'équipement/des compétences des héros, de l'Équipement du Chef et de la Recherche accomplie — il n'existe pas de formule publique unique, donc il vaut mieux décrire la Puissance comme un score composite plutôt que de présenter une équation inventée.</p>

      <h2>Soins et perte de troupes</h2>
      <p>L'<strong>Infirmerie</strong> retient les troupes blessées après une bataille coûteuse afin qu'elles puissent être soignées plutôt que perdues définitivement ; quand elle est pleine, une grande partie du surplus va au Bureau d'Enrôlement et peut encore être récupérée, tandis que le reste est perdu. Les taux de pertes varient sensiblement selon le type de bataille : certains types de bataille PvP ont un pourcentage notable de mort définitive côté perdant, tandis que plusieurs événements PvE (Bear Hunt, Mine de Frostfire, Foundry Battle) n'infligent aucun dégât en retour aux joueurs ou accordent une capacité d'Infirmerie temporairement illimitée, supprimant le risque de perte définitive de troupes pendant ces événements spécifiques.</p>

      <p class="sentinel-hint">Un rallye entrant ou une garnison attaquée peuvent survenir à tout moment : configure <strong>Sentinel</strong> sur des mots comme <code>attack</code>, <code>rally</code> ou <code>incoming</code> pour transformer cette notification en une vraie alarme que tu entendras même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Ne confonds pas la Promotion (change le numéro de tier) avec l'amélioration par Cristal de Feu (renforce le même tier).</li>
        <li>Profite des événements à Infirmerie illimitée (Bear Hunt, Frostfire, Foundry Battle) pour entraîner en toute sécurité des compositions agressives.</li>
        <li>Le T12 "Exalted" est un objectif de plusieurs mois : ne le précipite pas si tes casernes et ton Académie de Guerre ne sont pas encore prêtes.</li>
      </ul>
`
};
