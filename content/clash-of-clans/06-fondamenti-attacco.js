/* Contenuto tradotto del capitolo — Clash of Clans / 06 Attack fundamentals.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Attack fundamentals</h1>
      <div class="hazard"></div>
      <p class="lead">Before learning strategies with a name, you need the fundamentals that apply to every attack: how to read a base, how to shape a lane, how to time spells correctly.</p>

      <h2>Scouting</h2>
      <p>Before deploying anything, check the enemy Town Hall's placement, how much defensive coverage overlaps, hints of trap density, and — critically — the visible Clan Castle troop indicator. Identify the side of the base with the weakest defensive coverage before choosing where to commit.</p>

      <h2>Funneling</h2>
      <p>Troops path toward the nearest building and route around Walls rather than through them, so left alone they tend to spread out along a base's outer edge instead of driving into the core. A "funnel" is created by clearing or luring outer buildings on two sides of an entry point so the main army compresses into a single lane toward the center. Weak funneling is one of the most common reasons an otherwise-good army fails to reach the core.</p>

      <h2>Troop roles</h2>
      <p>Compositions generally combine three roles: <strong>tanks</strong> that absorb damage and shape pathing (Golem, Root Rider, Super Yeti, Electro Titan, P.E.K.K.A), <strong>support/utility</strong> troops that disable defenses or clear clustered buildings (Witches, Bowlers, Throwers, Healers), and <strong>damage/finishers</strong> that punch through remaining structures (Dragons, Miners, Hog Riders, Balloons). Heroes act as flexible hybrid pieces: tanking, sniping specific defenses with equipment, or mopping up.</p>

      <h2>Spell timing</h2>
      <p>Rage is most valuable dropped where troops are already clustered on a high-value target, not the instant they're deployed. Freeze is best saved for the highest-DPS defenses (Inferno Towers, Monolith, X-Bows) or for Clan Castle troops that couldn't be lured out. Poison should land directly on Clan Castle troops — a poisoned defender left with nothing to fight will walk out of the cloud, so attacking troops need to engage while the poison is still active. Invisibility is often preferred over Freeze for shepherding slow or fragile troops (Electro Dragons, Balloons, Root Riders) through danger zones, since it removes targeting entirely rather than just disabling the defense for a while.</p>

      <h2>Handling Clan Castle troops</h2>
      <p>Standard practice is to <strong>lure</strong> defending Clan Castle troops out with a handful of cheap units, ideally to a spot outside the range of the base's other defenses (corners near Builder Huts are commonly cited as safe luring spots), before committing the main army.</p>

      <h2>Star ratings and destruction percentage</h2>
      <p>Up to three Stars are available per attack: one for destroying the Town Hall, one for reaching roughly 50% destruction, one for reaching 100% (or near). A true 3-star requires both the Town Hall destroyed and full destruction. In clan wars, a clan's overall percentage is the sum of each member's <em>best</em> single attack against their assigned target, not every attempt made.</p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Dropping the whole army in one spot without first shaping a lane. Clear or lure outer buildings on the chosen side before committing the main force, rather than spamming troops and hoping they converge on their own.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Always watch the whole attack before judging it a success or a failure: an attack that looks rocky in the first few seconds can still close out at 3 stars if the funnel holds and spells land at the right moment.
      </div>
`,
  es: `
      <h1>Fundamentos de ataque</h1>
      <div class="hazard"></div>
      <p class="lead">Antes de aprender estrategias con nombre propio, hacen falta los fundamentos que se aplican a cualquier ataque: cómo leer una base, cómo formar un pasillo, cómo lanzar los hechizos en el momento correcto.</p>

      <h2>Reconocimiento (scouting)</h2>
      <p>Antes de desplegar nada, comprueba la posición del Ayuntamiento enemigo, cuánto se solapa la cobertura defensiva, indicios de densidad de trampas y — crucialmente — el indicador visible de tropas del Castillo del Clan. Identifica el lado de la base con la cobertura defensiva más débil antes de elegir dónde comprometerte.</p>

      <h2>Formar un pasillo (funneling)</h2>
      <p>Las tropas se dirigen al edificio más cercano y rodean los Muros en vez de atravesarlos, así que si se las deja solas tienden a dispersarse por el borde exterior de la base en vez de dirigirse al núcleo. Un "pasillo" se crea limpiando o atrayendo edificios exteriores a ambos lados de un punto de entrada, para que el ejército principal se comprima en un único carril hacia el centro. Un pasillo débil es una de las razones más comunes por las que un ejército por lo demás bueno no llega al núcleo.</p>

      <h2>Roles de las tropas</h2>
      <p>Las composiciones suelen combinar tres roles: <strong>tanques</strong> que absorben daño y guían el camino (Golem, Jinete de Raíces, Super Yeti, Titán Eléctrico, P.E.K.K.A), <strong>soporte/utilidad</strong> que desactiva defensas o limpia edificios agrupados (Brujas, Bowler, Lanzadores, Sanadoras), y <strong>daño/rematadores</strong> que atraviesan las estructuras restantes (Dragones, Mineros, Jinetes Jabalí, Globos). Los Héroes actúan como piezas híbridas flexibles: tanqueando, francotirando defensas concretas con su equipo, o limpiando al final.</p>

      <h2>Tiempo de los hechizos</h2>
      <p>La Furia rinde más lanzada donde las tropas ya están agrupadas sobre un objetivo de valor, no en el instante en que se despliegan. La Congelación conviene guardarla para las defensas de mayor DPS (Torres Infernales, Monolith, X-Bow) o para tropas del Castillo del Clan que no se pudieron atraer fuera. El Veneno debe caer directamente sobre las tropas del Castillo del Clan — un defensor envenenado sin nada que combatir sale de la nube, así que las tropas atacantes deben combatir mientras el veneno sigue activo. La Invisibilidad suele preferirse a la Congelación para escoltar tropas lentas o frágiles (Dragones Eléctricos, Globos, Jinetes de Raíces) por zonas de peligro, ya que elimina el bersagliamento por completo en vez de solo desactivar la defensa un rato.</p>

      <h2>Gestionar las tropas del Castillo del Clan</h2>
      <p>La práctica estándar es <strong>atraer</strong> a las tropas defensoras del Castillo del Clan con un puñado de unidades baratas, idealmente a un punto fuera del alcance de las demás defensas de la base (las esquinas cerca de las Cabañas de Constructor se citan a menudo como puntos de atracción seguros), antes de comprometer el ejército principal.</p>

      <h2>Estrellas y porcentaje de destrucción</h2>
      <p>Hay hasta tres Estrellas disponibles por ataque: una por destruir el Ayuntamiento, una por alcanzar aproximadamente el 50% de destrucción, una por alcanzar el 100% (o casi). Un verdadero 3 estrellas requiere tanto el Ayuntamiento destruido como la destrucción total. En las guerras de clan, el porcentaje global del clan es la suma del <em>mejor</em> ataque individual de cada miembro contra su objetivo asignado, no de cada intento realizado.</p>

      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        Soltar todo el ejército en un solo punto sin formar antes un pasillo. Limpia o atrae los edificios exteriores del lado elegido antes de comprometer la fuerza principal, en vez de spamear tropas esperando que converjan solas.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Mira siempre el ataque completo antes de juzgarlo un éxito o un fracaso: un ataque que parece ir mal en los primeros segundos puede aun así cerrar en 3 estrellas si el pasillo aguanta y los hechizos caen en el momento correcto.
      </div>
`,
  fr: `
      <h1>Fondamentaux de l'attaque</h1>
      <div class="hazard"></div>
      <p class="lead">Avant d'apprendre des stratégies qui portent un nom, il faut les fondamentaux qui s'appliquent à toute attaque : comment lire une base, comment créer un couloir, comment placer les sorts au bon moment.</p>

      <h2>Reconnaissance (scouting)</h2>
      <p>Avant de déployer quoi que ce soit, vérifie l'emplacement de l'Hôtel de Ville ennemi, le chevauchement de la couverture défensive, les indices de densité de pièges et — surtout — l'indicateur visible des troupes du Château de Clan. Repère le côté de la base à la couverture défensive la plus faible avant de choisir où t'engager.</p>

      <h2>Créer un couloir (funneling)</h2>
      <p>Les troupes se dirigent vers le bâtiment le plus proche et contournent les Murs plutôt que de les traverser, donc laissées à elles-mêmes elles tendent à s'étaler sur le bord extérieur de la base plutôt qu'à foncer vers le centre. Un « couloir » se crée en nettoyant ou en attirant les bâtiments extérieurs de part et d'autre d'un point d'entrée, pour que l'armée principale se comprime en une seule voie vers le centre. Un couloir mal formé est l'une des raisons les plus courantes pour lesquelles une armée par ailleurs bonne n'atteint pas le cœur de la base.</p>

      <h2>Rôles des troupes</h2>
      <p>Les compositions combinent généralement trois rôles : les <strong>tanks</strong> qui absorbent les dégâts et guident le trajet (Golem, Cavalier des Racines, Super Yeti, Titan Électrique, P.E.K.K.A), le <strong>soutien/utilité</strong> qui désactive les défenses ou nettoie les bâtiments regroupés (Sorcières, Bowlers, Lanceurs, Guérisseuses), et les <strong>finisseurs</strong> qui percent les structures restantes (Dragons, Mineurs, Cavaliers Sanglier, Ballons). Les Héros agissent comme des pièces hybrides flexibles : ils tankent, snipent des défenses précises avec leur équipement, ou nettoient en fin d'attaque.</p>

      <h2>Timing des sorts</h2>
      <p>La Rage rapporte le plus lâchée là où les troupes sont déjà regroupées sur une cible de valeur, pas à l'instant du déploiement. Le Gel est à réserver aux défenses au DPS le plus élevé (Tours Infernales, Monolith, X-Bow) ou aux troupes du Château de Clan qu'on n'a pas pu attirer dehors. Le Poison doit tomber directement sur les troupes du Château de Clan — un défenseur empoisonné sans rien à combattre sort du nuage, donc les troupes attaquantes doivent engager le combat pendant que le poison est encore actif. L'Invisibilité est souvent préférée au Gel pour escorter des troupes lentes ou fragiles (Dragons Électriques, Ballons, Cavaliers des Racines) à travers des zones dangereuses, car elle supprime totalement le ciblage plutôt que de simplement désactiver la défense un moment.</p>

      <h2>Gérer les troupes du Château de Clan</h2>
      <p>La pratique standard consiste à <strong>attirer</strong> les troupes défensives du Château de Clan avec une poignée d'unités bon marché, idéalement vers un point hors de portée des autres défenses de la base (les coins près des Cabanes de Constructeur sont souvent cités comme des points d'attraction sûrs), avant d'engager l'armée principale.</p>

      <h2>Étoiles et pourcentage de destruction</h2>
      <p>Jusqu'à trois Étoiles sont disponibles par attaque : une pour la destruction de l'Hôtel de Ville, une pour environ 50 % de destruction atteints, une pour 100 % (ou presque). Un vrai 3 étoiles exige à la fois l'Hôtel de Ville détruit et la destruction complète. En guerre de clan, le pourcentage global du clan est la somme de la <em>meilleure</em> attaque individuelle de chaque membre contre sa cible assignée, pas de chaque tentative effectuée.</p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Lâcher toute l'armée au même endroit sans avoir d'abord formé un couloir. Nettoie ou attire les bâtiments extérieurs du côté choisi avant d'engager la force principale, plutôt que de spammer des troupes en espérant qu'elles convergent d'elles-mêmes.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Regarde toujours l'attaque en entier avant de la juger réussie ou ratée : une attaque qui semble mal partir dans les premières secondes peut quand même finir à 3 étoiles si le couloir tient et si les sorts tombent au bon moment.
      </div>
`
};
