/* Contenuto tradotto del capitolo — Clash of Clans / 08 Base building philosophy.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Base building philosophy</h1>
      <div class="hazard"></div>
      <p class="lead">The same building blocks — Walls, compartmentalization, trap placement, splash coverage — apply to every base type. What changes is what the layout is trying to protect, and how heavily it's tuned against a specific attack meta.</p>

      <h2>Farming Base</h2>
      <p>Goal: protect <strong>resources</strong>, not Trophies. A common pattern is placing the Town Hall near the edge (letting raiders take an easy partial win there) while burying storages deep in the core — deliberately sacrificing Trophies for loot security. Compartmentalization matters even more here, since a maze of small walled pockets separates troops and blunts splash damage from a single entry point.</p>

      <h2>Trophy / Ranked Base</h2>
      <p>Goal: minimize the attacker's star count to protect league standing, rather than protect resources. At the highest tiers this means pushing the Town Hall as far inside as possible, ringing it with Inferno Towers or Scattershots, clustering Air Mines around key anti-air defenses, and deliberately engineering long, offset troop pathing to punish the most common attacks at that level (for example, multiple Inferno Towers guarded by Skeleton Traps specifically to counter Queen Charge and Hog Rider/Miner pushes). The explicit design accepts a 2-star loss as a "win" if it denies the third star.</p>

      <h2>War Base</h2>
      <p>Goal: deny stars — especially the third — by wasting the attacker's time and breaking clean troop pathing, more than protecting resources. Competitive War Base design favors an asymmetrical layout with large "dead zones" around key defenses (Town Hall, Eagle Artillery/Monolith, Spell Towers) specifically to break pathing, spreading the most valuable defenses far apart so a single spell combo can't grab them all cheaply, and sometimes facing Air Sweepers away from the Town Hall to lure air troops into dense Seeking Air Mine clusters.</p>

      <h2>Clan War League (CWL) Base</h2>
      <p>Functionally an intensified War Base, tuned specifically against whatever the current top-meta attacks are (recent examples: Root Riders, Electro Titans, Clone-Blimp bursts, LavaLoon hybrids). The same dead-zone and defense-spreading principles apply, but curated and play-tested against the strategies likely to be used by similarly-matched opponents in the tournament format.</p>

      <h2>Common base-building mistakes</h2>
      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        <ul>
          <li>Building against a base edge or corner, which simplifies attacker pathing and leaves exposed "dead grass" zones.</li>
          <li>Placing buildings too close together, letting a single splash hit strike multiple structures — leaving at least one tile of gap helps.</li>
          <li>Random, unplanned placement rather than deliberate compartmentalization.</li>
          <li>Forgetting that hero attack ranges (particularly the Archer Queen's) can snipe defenses from outside a compartment that would otherwise seem protected.</li>
          <li>Leaving the Town Hall exposed on a Trophy, War, or CWL base — the opposite of the deliberate approach used on Farming Bases.</li>
        </ul>
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Before copying a layout you found online, check it's designed for the <em>same goal</em> as yours: a great Farming Base is almost never a good War Base, and vice versa.
      </div>
`,
  es: `
      <h1>Filosofía de diseño de bases</h1>
      <div class="hazard"></div>
      <p class="lead">Los mismos bloques — Muros, compartimentación, colocación de trampas, cobertura de área — se aplican a cualquier tipo de base. Lo que cambia es qué está intentando proteger el diseño, y cuánto está ajustado contra un meta de ataque específico.</p>

      <h2>Base de farmeo</h2>
      <p>Objetivo: proteger los <strong>recursos</strong>, no los Trofeos. Un patrón común es colocar el Ayuntamiento cerca del borde (dejando a los saqueadores una victoria parcial fácil ahí) mientras los almacenes quedan enterrados en el núcleo — sacrificando Trofeos deliberadamente a cambio de seguridad del botín. La compartimentación importa aún más aquí, ya que un laberinto de pequeños bolsillos amurallados separa a las tropas y amortigua el daño en área de un único punto de entrada.</p>

      <h2>Base de Trofeos / Ranked</h2>
      <p>Objetivo: minimizar las estrellas del atacante para proteger la posición en liga, más que proteger recursos. En los niveles más altos esto significa empujar el Ayuntamiento lo más adentro posible, rodearlo de Torres Infernales o Scattershot, agrupar Minas Aéreas alrededor de defensas antiaéreas clave, y diseñar deliberadamente caminos largos y desalineados para castigar los ataques más comunes en ese nivel (por ejemplo varias Torres Infernales protegidas por Trampas Esqueleto específicamente contra Queen Charge y empujes de Jinete Jabalí/Minero). El diseño explícito acepta una derrota a 2 estrellas como una "victoria" si niega la tercera.</p>

      <h2>Base de guerra (War Base)</h2>
      <p>Objetivo: negar estrellas — sobre todo la tercera — haciendo perder tiempo al atacante y rompiendo el camino limpio de las tropas, más que proteger recursos. El diseño competitivo de base de guerra favorece un diseño asimétrico con grandes "zonas muertas" alrededor de defensas clave (Ayuntamiento, Artillería del Águila/Monolith, Torres de Hechizos) precisamente para romper el camino, separando mucho las defensas más valiosas para que una sola combinación de hechizos no las alcance todas barato, y a veces orientando los Ventiladores de Aire lejos del Ayuntamiento para atraer tropas aéreas hacia densos grupos de Minas Aéreas Buscadoras.</p>

      <h2>Base de Clan War League (CWL)</h2>
      <p>Funcionalmente una base de guerra intensificada, ajustada específicamente contra los ataques meta del momento (ejemplos recientes: Jinetes de Raíces, Titanes Eléctricos, ráfagas Clon-Dirigible, híbridos LavaLoon). Se aplican los mismos principios de zonas muertas y separación de defensas, pero pulidos y probados contra las estrategias que probablemente usarán rivales de nivel similar en el formato torneo.</p>

      <h2>Errores comunes de diseño de bases</h2>
      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        <ul>
          <li>Construir contra un borde o esquina de la base, lo que simplifica el camino del atacante y deja "zonas muertas" expuestas.</li>
          <li>Colocar edificios demasiado juntos, permitiendo que un solo golpe de área alcance varias estructuras — dejar al menos una casilla de separación ayuda.</li>
          <li>Colocación aleatoria y no planificada en vez de una compartimentación deliberada.</li>
          <li>Olvidar que el alcance de ataque de los héroes (en particular el de la Archer Queen) puede francotirar defensas desde fuera de un compartimento que de otro modo parecería protegido.</li>
          <li>Dejar el Ayuntamiento expuesto en una base de Trofeos, de guerra o de CWL — lo contrario del enfoque deliberado usado en las bases de farmeo.</li>
        </ul>
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Antes de copiar un diseño que encontraste online, comprueba que esté pensado para el <em>mismo objetivo</em> que el tuyo: una gran base de farmeo casi nunca es una buena base de guerra, y viceversa.
      </div>
`,
  fr: `
      <h1>Philosophie de conception des bases</h1>
      <div class="hazard"></div>
      <p class="lead">Les mêmes briques — Murs, compartimentation, placement des pièges, couverture de zone — s'appliquent à tous les types de base. Ce qui change, c'est ce que l'agencement essaie de protéger, et à quel point il est calibré contre un méta d'attaque précis.</p>

      <h2>Base de farming</h2>
      <p>Objectif : protéger les <strong>ressources</strong>, pas les Trophées. Un schéma courant place l'Hôtel de Ville près du bord (laissant aux pillards une victoire partielle facile) tandis que les réserves restent enterrées au cœur — sacrifiant délibérément des Trophées contre la sécurité du butin. La compartimentation compte encore plus ici, car un labyrinthe de petites poches murées sépare les troupes et atténue les dégâts de zone d'un point d'entrée unique.</p>

      <h2>Base à Trophées / Ranked</h2>
      <p>Objectif : minimiser le nombre d'étoiles de l'attaquant pour protéger le classement en ligue, plutôt que protéger les ressources. Aux plus hauts niveaux, cela veut dire pousser l'Hôtel de Ville le plus loin possible à l'intérieur, l'entourer de Tours Infernales ou de Scattershot, regrouper les Mines Aériennes autour des défenses antiaériennes clés, et concevoir délibérément des trajets longs et décalés pour punir les attaques les plus courantes à ce niveau (par exemple plusieurs Tours Infernales gardées par des Pièges à Squelettes spécifiquement contre les poussées Queen Charge et Cavalier Sanglier/Mineur). Le design assumé accepte une défaite à 2 étoiles comme une « victoire » si elle refuse la troisième.</p>

      <h2>Base de guerre (War Base)</h2>
      <p>Objectif : refuser des étoiles — surtout la troisième — en faisant perdre du temps à l'attaquant et en cassant le trajet propre des troupes, plus que protéger les ressources. La conception compétitive de base de guerre privilégie un agencement asymétrique avec de grandes « zones mortes » autour des défenses clés (Hôtel de Ville, Artillerie de l'Aigle/Monolith, Tours de Sorts) précisément pour casser le trajet, en espaçant largement les défenses les plus précieuses pour qu'une seule combo de sorts ne puisse pas toutes les cueillir à bon compte, et parfois en orientant les Souffleurs d'Air à l'opposé de l'Hôtel de Ville pour attirer les troupes aériennes vers de denses groupes de Mines Aériennes Chercheuses.</p>

      <h2>Base de Clan War League (CWL)</h2>
      <p>Fonctionnellement une base de guerre intensifiée, calibrée spécifiquement contre les attaques méta du moment (exemples récents : Cavaliers des Racines, Titans Électriques, rafales Clone-Dirigeable, hybrides LavaLoon). Les mêmes principes de zones mortes et d'espacement des défenses s'appliquent, mais affinés et testés contre les stratégies probables d'adversaires de niveau comparable dans le format tournoi.</p>

      <h2>Erreurs courantes de conception de base</h2>
      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        <ul>
          <li>Construire contre un bord ou un coin de la base, ce qui simplifie le trajet de l'attaquant et laisse des zones « mortes » exposées.</li>
          <li>Placer les bâtiments trop près les uns des autres, permettant à un seul coup de zone d'en toucher plusieurs — laisser au moins une case d'écart aide.</li>
          <li>Un placement aléatoire et non planifié plutôt qu'une compartimentation délibérée.</li>
          <li>Oublier que la portée d'attaque des héros (en particulier celle de l'Archer Queen) peut sniper des défenses depuis l'extérieur d'un compartiment qui semblerait autrement protégé.</li>
          <li>Laisser l'Hôtel de Ville exposé sur une base à Trophées, de guerre ou de CWL — l'inverse de l'approche délibérée utilisée sur les bases de farming.</li>
        </ul>
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Avant de copier un agencement trouvé en ligne, vérifie qu'il est pensé pour le <em>même objectif</em> que le tien : une excellente base de farming n'est presque jamais une bonne base de guerre, et inversement.
      </div>
`
};
