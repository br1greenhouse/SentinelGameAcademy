/* Contenuto tradotto del capitolo — Clash of Clans / 03 Defenses & traps.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Defenses & traps</h1>
      <div class="hazard"></div>
      <p class="lead">Defenses are the village's first shield: knowing what each one does helps you place them well and understand why a base holds — or falls — against a given attack type.</p>

      <h2>Core defenses</h2>
      <div class="table-wrap"><table>
        <tr><th>Defense</th><th>Function</th></tr>
        <tr><td>Cannon</td><td>Basic, ground-only, single-target.</td></tr>
        <tr><td>Archer Tower</td><td>Ground + air, single-target, longer range than the Cannon.</td></tr>
        <tr><td>Mortar</td><td>Long-range splash damage, ground only; can't hit anything too close or any air units.</td></tr>
        <tr><td>Wizard Tower</td><td>Splash damage against ground and air at medium range.</td></tr>
        <tr><td>Air Defense</td><td>High single-target damage, air-only.</td></tr>
        <tr><td>Air Sweeper</td><td>Deals no damage; knocks air troops back in the direction it faces.</td></tr>
        <tr><td>Hidden Tesla</td><td>Camouflaged until triggered; ground + air, single-target.</td></tr>
        <tr><td>Bomb Tower</td><td>Ground-only splash damage; explodes for bonus area damage when destroyed.</td></tr>
        <tr><td>X-Bow</td><td>Very long range, ground-only by default (also hits air if fueled with Elixir); can keep firing offline if fueled.</td></tr>
        <tr><td>Inferno Tower</td><td>Single-target defense whose damage ramps up the longer it stays locked on one target — devastating against high-HP tanks.</td></tr>
        <tr><td>Eagle Artillery</td><td>Unlocked at TH12; extremely long range and high damage, but dormant until roughly 200 housing spaces' worth of troops have been deployed.</td></tr>
        <tr><td>Scattershot</td><td>Unlocked at TH13; splash damage against either ground or air per shot (not both at once), falling off further from impact.</td></tr>
        <tr><td>Monolith</td><td>Unlocked at TH15; slow single-target defense adding bonus damage equal to a percentage of the target's max HP — built to punish high-HP flyers.</td></tr>
        <tr><td>Spell Tower</td><td>Casts a supporting spell effect (Rage/Poison/Invisibility-style variants) over nearby defenses or troops.</td></tr>
        <tr><td>Giga Tesla / Giga Inferno</td><td>The Town Hall's own built-in weapon, activating once the Town Hall itself is destroyed in battle.</td></tr>
        <tr><td>Walls</td><td>Deal no damage; exist purely to obstruct and delay ground troop pathing.</td></tr>
      </table></div>

      <h2>Merged defenses (Building Merging, TH16+)</h2>
      <p>Starting at TH16, certain defenses can be <strong>merged</strong>: two identical maxed defenses combine into one stronger structure with new behavior.</p>
      <ul>
        <li><strong>Ricochet Cannon</strong> (TH16) — merges two Cannons; shots ricochet from the first target to hit a second nearby enemy.</li>
        <li><strong>Multi-Archer Tower</strong> (TH16) — merges two Archer Towers; can target up to three different enemies at once.</li>
        <li><strong>Multi-Gear Tower</strong> (TH17) — merges a Cannon and an Archer Tower; switches between Long Range and Fast Attack modes.</li>
        <li><strong>Super Wizard Tower</strong> (TH18) — merges two Wizard Towers; longer range and chain lightning across many more targets, at reduced damage per additional target.</li>
      </ul>

      <h2>TH18's signature defense: Guardians</h2>
      <p>TH18's headline addition is the <strong>Guardian</strong>, a troop-like defense that stands on top of the Town Hall and jumps down to engage once an enemy enters range. Only one variant is active at a time, switchable via a Town Hall toggle:</p>
      <ul>
        <li><strong>Longshot</strong> — ranged, hits ground and air, splash damage.</li>
        <li><strong>Smasher</strong> — melee, hits ground and air, splash damage.</li>
      </ul>
      <p>Guardians are leveled up by Builders like a normal defense, not like a Hero.</p>

      <h2>Traps</h2>
      <div class="table-wrap"><table>
        <tr><th>Trap</th><th>Function</th></tr>
        <tr><td>Bomb</td><td>Hidden, ground-only, moderate area damage.</td></tr>
        <tr><td>Spring Trap</td><td>Launches ground troops into the air and away, removing them from the fight.</td></tr>
        <tr><td>Air Bomb</td><td>Same idea as the Bomb, but triggers on and targets air troops.</td></tr>
        <tr><td>Giant Bomb</td><td>Larger footprint and bigger blast radius than the standard Bomb.</td></tr>
        <tr><td>Seeking Air Mine</td><td>Very high single-target damage against one air unit.</td></tr>
        <tr><td>Skeleton Trap</td><td>Spawns friendly Skeletons on trigger to distract or delay attackers.</td></tr>
        <tr><td>Tornado Trap</td><td>Forces troops caught in its radius to move in a circle instead of advancing.</td></tr>
      </table></div>
      <p>Traps stay hidden until triggered, then automatically re-arm for free, and are always active during wars and friendly battles.</p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        New players often cluster all their traps around the Town Hall. Spreading them across likely entry points and compartment gaps punishes attackers earlier, while they still have their strongest troops in play.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Review your trap placement every time you upgrade a major defense: a layout that worked at TH12 can have obvious gaps at TH15, once attackers bring stronger heroes and equipment.
      </div>
`,
  es: `
      <h1>Defensas y trampas</h1>
      <div class="hazard"></div>
      <p class="lead">Las defensas son el primer escudo de la aldea: saber qué hace cada una ayuda a colocarlas bien y a entender por qué una base aguanta — o cae — ante un tipo de ataque concreto.</p>

      <h2>Defensas principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Defensa</th><th>Función</th></tr>
        <tr><td>Cañón</td><td>Básico, solo terrestre, blanco único.</td></tr>
        <tr><td>Torre de Arquero</td><td>Terrestre + aéreo, blanco único, mayor alcance que el Cañón.</td></tr>
        <tr><td>Mortero</td><td>Daño en área a larga distancia, solo terrestre; no golpea muy cerca ni a unidades aéreas.</td></tr>
        <tr><td>Torre de Mago</td><td>Daño en área contra tierra y aire a media distancia.</td></tr>
        <tr><td>Defensa Antiaérea</td><td>Daño único alto, solo aéreo.</td></tr>
        <tr><td>Ventilador de Aire</td><td>No hace daño; empuja a las tropas aéreas en la dirección hacia la que apunta.</td></tr>
        <tr><td>Tesla Oculta</td><td>Camuflada hasta activarse; terrestre + aérea, blanco único.</td></tr>
        <tr><td>Torre de Bombas</td><td>Daño en área solo terrestre; explota con daño extra al ser destruida.</td></tr>
        <tr><td>X-Bow</td><td>Alcance muy largo, solo terrestre por defecto (también golpea el aire si se alimenta con Elixir); puede seguir disparando offline si está alimentada.</td></tr>
        <tr><td>Torre Infernal</td><td>Blanco único cuyo daño aumenta cuanto más tiempo se mantiene fijada en un objetivo — devastadora contra tanques de mucha vida.</td></tr>
        <tr><td>Artillería del Águila</td><td>Se desbloquea en TH12; alcance larguísimo y daño alto, pero inactiva hasta que se han desplegado tropas equivalentes a unos 200 espacios de alojamiento.</td></tr>
        <tr><td>Scattershot</td><td>Se desbloquea en TH13; daño en área contra tierra o aire por disparo (no ambas a la vez), decayendo cuanto más lejos del impacto.</td></tr>
        <tr><td>Monolith</td><td>Se desbloquea en TH15; defensa lenta de blanco único que añade daño extra igual a un porcentaje de la vida máxima del objetivo — pensada contra voladores de mucha vida.</td></tr>
        <tr><td>Torre de Hechizos</td><td>Lanza un efecto de apoyo (variantes tipo Furia/Veneno/Invisibilidad) sobre defensas o tropas cercanas.</td></tr>
        <tr><td>Giga Tesla / Giga Inferno</td><td>El arma integrada del propio Ayuntamiento, se activa cuando el Ayuntamiento es destruido en batalla.</td></tr>
        <tr><td>Muros</td><td>No hacen daño; solo sirven para obstaculizar y retrasar el camino de las tropas terrestres.</td></tr>
      </table></div>

      <h2>Defensas fusionadas (Building Merging, TH16+)</h2>
      <p>Desde TH16, algunas defensas pueden <strong>fusionarse</strong>: dos defensas idénticas al máximo nivel se combinan en una estructura más fuerte con un comportamiento nuevo.</p>
      <ul>
        <li><strong>Ricochet Cannon</strong> (TH16) — fusiona dos Cañones; los disparos rebotan del primer blanco a un segundo enemigo cercano.</li>
        <li><strong>Multi-Archer Tower</strong> (TH16) — fusiona dos Torres de Arquero; puede apuntar hasta tres enemigos distintos a la vez.</li>
        <li><strong>Multi-Gear Tower</strong> (TH17) — fusiona un Cañón y una Torre de Arquero; alterna entre modo Largo Alcance y Ataque Rápido.</li>
        <li><strong>Super Wizard Tower</strong> (TH18) — fusiona dos Torres de Mago; más alcance y rayo en cadena sobre muchos más objetivos, con daño reducido por cada objetivo adicional.</li>
      </ul>

      <h2>Defensa exclusiva de TH18: los Guardian</h2>
      <p>La gran novedad de TH18 es el <strong>Guardian</strong>, una defensa similar a una tropa que se sitúa sobre el Ayuntamiento y baja a combatir cuando un enemigo entra en su alcance. Solo una variante está activa a la vez, intercambiable con un botón en el Ayuntamiento:</p>
      <ul>
        <li><strong>Longshot</strong> — a distancia, golpea tierra y aire, daño en área.</li>
        <li><strong>Smasher</strong> — cuerpo a cuerpo, golpea tierra y aire, daño en área.</li>
      </ul>
      <p>Los Guardian suben de nivel gracias a los Constructores como una defensa normal, no como un Héroe.</p>

      <h2>Trampas</h2>
      <div class="table-wrap"><table>
        <tr><th>Trampa</th><th>Función</th></tr>
        <tr><td>Bomba</td><td>Oculta, solo terrestre, daño en área moderado.</td></tr>
        <tr><td>Trampa de Resorte</td><td>Lanza al aire y lejos a las tropas terrestres, sacándolas del combate.</td></tr>
        <tr><td>Bomba Aérea</td><td>Igual que la Bomba, pero se activa contra tropas aéreas.</td></tr>
        <tr><td>Bomba Gigante</td><td>Mayor tamaño y radio de explosión que la Bomba estándar.</td></tr>
        <tr><td>Mina Aérea Buscadora</td><td>Daño único altísimo contra una unidad aérea.</td></tr>
        <tr><td>Trampa Esqueleto</td><td>Genera Esqueletos aliados al activarse, para distraer o retrasar a los atacantes.</td></tr>
        <tr><td>Trampa Tornado</td><td>Obliga a las tropas atrapadas en su radio a moverse en círculo en vez de avanzar.</td></tr>
      </table></div>
      <p>Las trampas permanecen ocultas hasta activarse, luego se rearman solas y gratis, y están siempre activas durante guerras y batallas amistosas.</p>

      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        Los jugadores nuevos suelen agrupar todas las trampas junto al Ayuntamiento. Repartirlas en los puntos de entrada probables y en los huecos entre compartimentos castiga antes al atacante, mientras aún tiene en juego sus mejores tropas.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Revisa la colocación de las trampas cada vez que mejores una defensa importante: un diseño que funcionaba en TH12 puede tener huecos evidentes en TH15, cuando los atacantes traen héroes y equipo más fuertes.
      </div>
`,
  fr: `
      <h1>Défenses et pièges</h1>
      <div class="hazard"></div>
      <p class="lead">Les défenses sont le premier bouclier du village : savoir ce que fait chacune aide à bien les placer et à comprendre pourquoi une base tient — ou tombe — face à un type d'attaque donné.</p>

      <h2>Défenses principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Défense</th><th>Fonction</th></tr>
        <tr><td>Canon</td><td>Basique, terrestre uniquement, cible unique.</td></tr>
        <tr><td>Tour d'Archère</td><td>Terrestre + aérien, cible unique, portée supérieure au Canon.</td></tr>
        <tr><td>Mortier</td><td>Dégâts de zone à longue portée, terrestre uniquement ; ne touche ni de trop près ni les unités aériennes.</td></tr>
        <tr><td>Tour de Sorcier</td><td>Dégâts de zone contre terre et air à moyenne portée.</td></tr>
        <tr><td>Défense Antiaérienne</td><td>Dégâts unique élevés, aérien uniquement.</td></tr>
        <tr><td>Souffleur d'Air</td><td>Ne fait aucun dégât ; repousse les troupes aériennes dans la direction qu'il vise.</td></tr>
        <tr><td>Tesla Caché</td><td>Camouflé jusqu'au déclenchement ; terrestre + aérien, cible unique.</td></tr>
        <tr><td>Tour à Bombes</td><td>Dégâts de zone terrestres uniquement ; explose avec des dégâts bonus à sa destruction.</td></tr>
        <tr><td>Arbalète (X-Bow)</td><td>Très longue portée, terrestre uniquement par défaut (touche aussi l'air si alimentée en Elixir) ; peut continuer à tirer hors ligne si alimentée.</td></tr>
        <tr><td>Tour Infernale</td><td>Cible unique dont les dégâts augmentent plus elle reste fixée sur une cible — dévastatrice contre les tanks à haute vie.</td></tr>
        <tr><td>Artillerie de l'Aigle</td><td>Débloquée à l'HDV12 ; portée très longue et gros dégâts, mais inactive tant qu'environ 200 places de logement de troupes n'ont pas été déployées.</td></tr>
        <tr><td>Scattershot</td><td>Débloquée à l'HDV13 ; dégâts de zone contre terre ou air par tir (pas les deux à la fois), diminuant avec la distance à l'impact.</td></tr>
        <tr><td>Monolith</td><td>Débloquée à l'HDV15 ; défense lente à cible unique ajoutant des dégâts bonus égaux à un pourcentage des PV max de la cible — conçue contre les volants à haute vie.</td></tr>
        <tr><td>Tour de Sorts</td><td>Lance un effet de soutien (variantes façon Rage/Poison/Invisibilité) sur les défenses ou troupes proches.</td></tr>
        <tr><td>Giga Tesla / Giga Inferno</td><td>L'arme intégrée de l'Hôtel de Ville, activée une fois l'Hôtel de Ville détruit en bataille.</td></tr>
        <tr><td>Murs</td><td>Ne font aucun dégât ; servent uniquement à gêner et ralentir le trajet des troupes terrestres.</td></tr>
      </table></div>

      <h2>Défenses fusionnées (Building Merging, HDV16+)</h2>
      <p>Dès l'HDV16, certaines défenses peuvent être <strong>fusionnées</strong> : deux défenses identiques au niveau maximum se combinent en une structure plus forte avec un nouveau comportement.</p>
      <ul>
        <li><strong>Ricochet Cannon</strong> (HDV16) — fusionne deux Canons ; les tirs ricochent de la première cible vers un second ennemi proche.</li>
        <li><strong>Multi-Archer Tower</strong> (HDV16) — fusionne deux Tours d'Archère ; peut viser jusqu'à trois ennemis différents à la fois.</li>
        <li><strong>Multi-Gear Tower</strong> (HDV17) — fusionne un Canon et une Tour d'Archère ; alterne entre mode Longue Portée et Attaque Rapide.</li>
        <li><strong>Super Wizard Tower</strong> (HDV18) — fusionne deux Tours de Sorcier ; portée accrue et éclair en chaîne sur beaucoup plus de cibles, à dégâts réduits par cible supplémentaire.</li>
      </ul>

      <h2>Défense exclusive HDV18 : les Guardian</h2>
      <p>La grande nouveauté de l'HDV18 est le <strong>Guardian</strong>, une défense façon troupe qui se tient au sommet de l'Hôtel de Ville et saute au sol pour engager le combat dès qu'un ennemi entre dans sa portée. Une seule variante est active à la fois, interchangeable via un bouton sur l'Hôtel de Ville :</p>
      <ul>
        <li><strong>Longshot</strong> — à distance, touche terre et air, dégâts de zone.</li>
        <li><strong>Smasher</strong> — corps à corps, touche terre et air, dégâts de zone.</li>
      </ul>
      <p>Les Guardian sont montés en niveau par les Constructeurs comme une défense normale, pas comme un Héros.</p>

      <h2>Pièges</h2>
      <div class="table-wrap"><table>
        <tr><th>Piège</th><th>Fonction</th></tr>
        <tr><td>Bombe</td><td>Caché, terrestre uniquement, dégâts de zone modérés.</td></tr>
        <tr><td>Piège à Ressort</td><td>Projette les troupes terrestres dans les airs et au loin, les retirant du combat.</td></tr>
        <tr><td>Bombe Aérienne</td><td>Même principe que la Bombe, mais se déclenche sur les troupes aériennes.</td></tr>
        <tr><td>Bombe Géante</td><td>Emprise et rayon d'explosion plus grands que la Bombe standard.</td></tr>
        <tr><td>Mine Aérienne Chercheuse</td><td>Dégâts uniques très élevés contre une unité aérienne.</td></tr>
        <tr><td>Piège à Squelettes</td><td>Fait apparaître des Squelettes amis au déclenchement, pour distraire ou ralentir les attaquants.</td></tr>
        <tr><td>Piège Tornade</td><td>Force les troupes prises dans son rayon à se déplacer en cercle au lieu d'avancer.</td></tr>
      </table></div>
      <p>Les pièges restent cachés jusqu'au déclenchement, puis se réarment automatiquement et gratuitement, et sont toujours actifs pendant les guerres et les batailles amicales.</p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Les nouveaux joueurs regroupent souvent tous leurs pièges autour de l'Hôtel de Ville. Les répartir sur les points d'entrée probables et les interstices entre compartiments punit l'attaquant plus tôt, pendant qu'il a encore ses meilleures troupes en jeu.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Revois le placement de tes pièges à chaque fois que tu améliores une défense majeure : un agencement qui fonctionnait à l'HDV12 peut avoir des trous évidents à l'HDV15, quand les attaquants apportent des héros et un équipement plus forts.
      </div>
`
};
