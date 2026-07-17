/* Contenuto tradotto del capitolo — Clash of Clans / 04 Army buildings, troops & spells.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Army buildings, troops & spells</h1>
      <div class="hazard"></div>
      <p class="lead">Your army is what you bring into battle: knowing what every troop and spell does is the basis for building a composition that works, not just recognizing them in a replay.</p>

      <h2>Army buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Role</th></tr>
        <tr><td>Army Camp</td><td>Houses trained troops (housing space); the only army building buildable in multiples.</td></tr>
        <tr><td>Barracks</td><td>Trains Elixir troops; upgrading unlocks new troop types.</td></tr>
        <tr><td>Dark Barracks</td><td>Trains Dark Elixir troops.</td></tr>
        <tr><td>Laboratory</td><td>Upgrades the power level of troops, spells and Siege Machines — the most consistently prioritized building in the game.</td></tr>
        <tr><td>Spell Factory</td><td>Brews Elixir spells.</td></tr>
        <tr><td>Dark Spell Factory</td><td>Brews Dark spells.</td></tr>
        <tr><td>Siege Workshop</td><td>Builds Siege Machines; unlocked at TH12.</td></tr>
        <tr><td>Pet House</td><td>Houses Pets, each paired one-to-one with a Hero.</td></tr>
        <tr><td>Blacksmith</td><td>Forges and upgrades Hero Equipment using Ore.</td></tr>
        <tr><td>Hero Hall</td><td>The hub that unlocks each Hero as it's upgraded.</td></tr>
      </table></div>

      <h2>Elixir troops (trained at the Barracks)</h2>
      <div class="table-wrap"><table>
        <tr><th>Troop</th><th>Role</th></tr>
        <tr><td>Barbarian</td><td>Cheap, fast melee filler; good for soaking damage and clearing minor buildings.</td></tr>
        <tr><td>Archer</td><td>Cheap ranged damage, no splash; useful for sniping from outside defensive range.</td></tr>
        <tr><td>Giant</td><td>High-HP ground tank that targets defenses first.</td></tr>
        <tr><td>Goblin</td><td>Fast, prioritizes resource buildings — the classic farming troop.</td></tr>
        <tr><td>Wall Breaker</td><td>Suicide unit dealing massive bonus damage to Walls, opening compartments for the rest of the army.</td></tr>
        <tr><td>Balloon</td><td>Slow flyer that targets defenses; strong against bases with weak anti-air coverage.</td></tr>
        <tr><td>Wizard</td><td>Ranged splash caster, effective against clustered troops or buildings.</td></tr>
        <tr><td>Healer</td><td>Non-attacking flyer that continuously heals one designated ground troop.</td></tr>
        <tr><td>Dragon</td><td>Flying, all-purpose splash attacker hitting both ground and air.</td></tr>
        <tr><td>P.E.K.K.A</td><td>Heavy melee single-target damage dealer with very high HP, no splash.</td></tr>
        <tr><td>Baby Dragon</td><td>Flying splash attacker with bonus damage against air targets.</td></tr>
        <tr><td>Miner</td><td>Burrows underground to bypass some defenses and Walls before surfacing; splash damage.</td></tr>
        <tr><td>Electro Dragon</td><td>Flying chain-lightning splash attacker, arcing damage to nearby targets.</td></tr>
        <tr><td>Yeti</td><td>Ground tank that spawns small "Yetimite" minions as it takes damage.</td></tr>
        <tr><td>Dragon Rider</td><td>High-HP, high-damage flyer prioritizing defenses above all; explodes on death.</td></tr>
        <tr><td>Electro Titan</td><td>Very high-HP ground/air melee unit with a constant electric aura and chain-stunning lightning attacks.</td></tr>
        <tr><td>Root Rider</td><td>High-HP ground troop that naturally breaks Walls as it moves, removing the need for Wall Breakers; targets defenses.</td></tr>
        <tr><td>Thrower</td><td>Ranged troop lobbing projectiles from a distance; strong damage but vulnerable without tanks in front.</td></tr>
        <tr><td>Meteor Golem</td><td>The current highest-tier Elixir troop; splits and throws part of itself at the target for heavy splash damage.</td></tr>
      </table></div>

      <h2>Dark Elixir troops (trained at the Dark Barracks)</h2>
      <div class="table-wrap"><table>
        <tr><th>Troop</th><th>Role</th></tr>
        <tr><td>Minion</td><td>Cheap flying swarm unit, fast and fragile.</td></tr>
        <tr><td>Hog Rider</td><td>Fast ground troop that jumps over Walls and targets defenses directly.</td></tr>
        <tr><td>Valkyrie</td><td>Melee troop that spins to hit multiple adjacent targets.</td></tr>
        <tr><td>Golem</td><td>Massive-HP ground tank that splits into two weaker "Golemites" on death.</td></tr>
        <tr><td>Witch</td><td>Ranged caster that continuously summons Skeletons to fight alongside her.</td></tr>
        <tr><td>Lava Hound</td><td>Huge-HP flying tank that draws Air Defense fire; splits into "Lava Pups" on death.</td></tr>
        <tr><td>Bowler</td><td>Ranged troop whose shots bounce through multiple targets in a line — strong against Walls in a row.</td></tr>
        <tr><td>Ice Golem</td><td>Cheaper, slower tank than the Golem; freezes nearby enemies briefly on death.</td></tr>
        <tr><td>Headhunter</td><td>Ranged troop that can jump and specifically targets/finishes off enemy Heroes.</td></tr>
        <tr><td>Apprentice Warden</td><td>Support caster with a ranged attack plus a passive aura boosting nearby troop durability.</td></tr>
        <tr><td>Druid</td><td>Non-attacking support unit that bounces healing between nearby troops, then transforms into an aggressive Bear once provoked enough.</td></tr>
        <tr><td>Furnace</td><td>Stationary troop continuously spawning small "Firemites" dealing damage-over-time to buildings.</td></tr>
        <tr><td>Ruin Witch</td><td>The newest Dark troop; moves to destroyed-building rubble, absorbs it and summons a fighter ("Ruin Knight") from the debris.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        "Super Troops" (temporary boosted variants like Super Barbarian, Super Wizard, Super Miner) are activated with Dark Elixir for a limited number of days — a good way to try a stronger version of a familiar troop before committing Lab resources elsewhere.
      </div>

      <h2>Elixir spells (brewed at the Spell Factory)</h2>
      <div class="table-wrap"><table>
        <tr><th>Spell</th><th>Function</th></tr>
        <tr><td>Lightning</td><td>Instant burst damage to a small area — good for sniping an exposed defense.</td></tr>
        <tr><td>Healing</td><td>Heals ground troops in its radius over time.</td></tr>
        <tr><td>Rage</td><td>Boosts troop damage and speed within its radius for a duration.</td></tr>
        <tr><td>Jump</td><td>Lets ground troops walk through Walls as if they weren't there, for a duration.</td></tr>
        <tr><td>Freeze</td><td>Freezes defenses or troops in place for a duration.</td></tr>
        <tr><td>Clone</td><td>Creates temporary duplicate copies of troops standing in its radius.</td></tr>
        <tr><td>Invisibility</td><td>Makes targeted troops untargetable by defenses for a few seconds.</td></tr>
        <tr><td>Recall</td><td>Pulls deployed troops back off the battlefield for later redeployment.</td></tr>
        <tr><td>Revive</td><td>Revives fallen troops on the battlefield.</td></tr>
        <tr><td>Totem</td><td>Drops a high-HP totem distracting ground and air defenses for an extended period, without triggering traps or Clan Castle troops.</td></tr>
      </table></div>

      <h2>Dark spells (brewed at the Dark Spell Factory)</h2>
      <div class="table-wrap"><table>
        <tr><th>Spell</th><th>Function</th></tr>
        <tr><td>Poison</td><td>Damage-over-time cloud that also slows enemy movement and attack speed.</td></tr>
        <tr><td>Earthquake</td><td>Percentage-based damage to buildings only (stacks with multiple casts).</td></tr>
        <tr><td>Haste</td><td>Speeds up troop movement (not attack speed) within its radius.</td></tr>
        <tr><td>Skeleton</td><td>Summons a group of Skeletons at the target location.</td></tr>
        <tr><td>Bat</td><td>Summons a swarm of flying Bats at the target location.</td></tr>
        <tr><td>Overgrowth</td><td>Traps buildings within its radius so they become invisible and invulnerable for a duration.</td></tr>
        <tr><td>Ice Block</td><td>Immobilizes a single target — troop, Hero, or building — inside a block of ice.</td></tr>
        <tr><td>Angry</td><td>The newest Dark spell; enrages troops in its radius so they target Defenses specifically for a period.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Spell timing matters as much as spell choice: Rage pays off far more once troops are already clustered on a high-value target, not the instant they're deployed; Poison is far more effective cast directly on enemy Clan Castle troops than on empty ground, since a poisoned defender left with nothing to fight will simply walk out of the cloud.
      </div>
`,
  es: `
      <h1>Edificios militares, tropas y hechizos</h1>
      <div class="hazard"></div>
      <p class="lead">El ejército es lo que llevas al ataque: saber qué hace cada tropa y cada hechizo es la base para construir una composición que funcione, no solo para reconocerlos en una repetición.</p>

      <h2>Edificios militares</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Rol</th></tr>
        <tr><td>Campamento</td><td>Aloja las tropas entrenadas (espacio de alojamiento); el único edificio militar construible en varias copias.</td></tr>
        <tr><td>Cuartel</td><td>Entrena tropas de Elixir; mejorarlo desbloquea nuevos tipos de tropa.</td></tr>
        <tr><td>Cuartel Oscuro</td><td>Entrena tropas de Dark Elixir.</td></tr>
        <tr><td>Laboratorio</td><td>Mejora el nivel de poder de tropas, hechizos y Máquinas de Asedio — el edificio priorizado de forma más constante en todo el juego.</td></tr>
        <tr><td>Fábrica de Hechizos</td><td>Prepara hechizos de Elixir.</td></tr>
        <tr><td>Fábrica de Hechizos Oscuros</td><td>Prepara hechizos Oscuros.</td></tr>
        <tr><td>Taller de Asedio</td><td>Construye Máquinas de Asedio; se desbloquea en TH12.</td></tr>
        <tr><td>Casa de Mascotas</td><td>Aloja a las Mascotas, cada una emparejada con un Héroe.</td></tr>
        <tr><td>Herrería</td><td>Forja y mejora el Equipo de Héroe usando Mineral.</td></tr>
        <tr><td>Hero Hall</td><td>El centro que desbloquea cada Héroe a medida que se mejora.</td></tr>
      </table></div>

      <h2>Tropas de Elixir (entrenadas en el Cuartel)</h2>
      <div class="table-wrap"><table>
        <tr><th>Tropa</th><th>Rol</th></tr>
        <tr><td>Bárbaro</td><td>Relleno cuerpo a cuerpo barato y rápido; bueno para absorber daño y limpiar edificios menores.</td></tr>
        <tr><td>Arquero</td><td>Daño a distancia barato, sin área; útil para francotirar fuera del alcance defensivo.</td></tr>
        <tr><td>Gigante</td><td>Tanque terrestre de mucha vida que prioriza las defensas.</td></tr>
        <tr><td>Goblin</td><td>Rápido, prioriza los edificios de recursos — la tropa clásica de farmeo.</td></tr>
        <tr><td>Rompemuros</td><td>Unidad suicida con daño bonus masivo contra los Muros, abriendo compartimentos para el resto del ejército.</td></tr>
        <tr><td>Globo</td><td>Volador lento que prioriza las defensas; fuerte contra bases con poca cobertura antiaérea.</td></tr>
        <tr><td>Mago</td><td>Lanzador a distancia con daño en área, eficaz contra tropas o edificios agrupados.</td></tr>
        <tr><td>Sanadora</td><td>Voladora que no ataca, cura de forma continua a una tropa terrestre designada.</td></tr>
        <tr><td>Dragón</td><td>Volador polivalente con daño en área contra tierra y aire.</td></tr>
        <tr><td>P.E.K.K.A</td><td>Cuerpo a cuerpo pesado de daño a blanco único con vida muy alta, sin área.</td></tr>
        <tr><td>Bebé Dragón</td><td>Volador con daño en área y bonus contra objetivos aéreos.</td></tr>
        <tr><td>Minero</td><td>Se entierra para esquivar algunas defensas y Muros antes de salir a la superficie; daño en área.</td></tr>
        <tr><td>Dragón Eléctrico</td><td>Volador con daño en área de rayo en cadena hacia objetivos cercanos.</td></tr>
        <tr><td>Yeti</td><td>Tanque terrestre que genera pequeños "Yetimites" al recibir daño.</td></tr>
        <tr><td>Jinete Dragón</td><td>Volador de mucha vida y mucho daño que prioriza las defensas por encima de todo; explota al morir.</td></tr>
        <tr><td>Titán Eléctrico</td><td>Unidad cuerpo a cuerpo tierra/aire de vida altísima con aura eléctrica constante y ataques de rayo aturdidor.</td></tr>
        <tr><td>Jinete de Raíces</td><td>Tropa terrestre de mucha vida que rompe los Muros de forma natural al moverse, eliminando la necesidad de Rompemuros; prioriza las defensas.</td></tr>
        <tr><td>Lanzador</td><td>Tropa a distancia que lanza proyectiles; gran daño pero vulnerable sin tanques delante.</td></tr>
        <tr><td>Meteor Golem</td><td>La tropa de Elixir de nivel más alto actual; se divide y lanza parte de sí mismo al objetivo para un gran daño en área.</td></tr>
      </table></div>

      <h2>Tropas de Dark Elixir (entrenadas en el Cuartel Oscuro)</h2>
      <div class="table-wrap"><table>
        <tr><th>Tropa</th><th>Rol</th></tr>
        <tr><td>Minion</td><td>Unidad enjambre voladora barata, rápida y frágil.</td></tr>
        <tr><td>Jinete Jabalí</td><td>Tropa terrestre rápida que salta los Muros y prioriza las defensas directamente.</td></tr>
        <tr><td>Valquiria</td><td>Tropa cuerpo a cuerpo que gira golpeando múltiples objetivos adyacentes.</td></tr>
        <tr><td>Golem</td><td>Tanque terrestre de vida masiva que se divide en dos "Golemites" más débiles al morir.</td></tr>
        <tr><td>Bruja</td><td>Lanzadora a distancia que invoca continuamente Esqueletos a su lado.</td></tr>
        <tr><td>Perro de Lava</td><td>Tanque volador de vida enorme que atrae el fuego de la Defensa Antiaérea; se divide en "Cachorros de Lava" al morir.</td></tr>
        <tr><td>Bowler</td><td>Tropa a distancia cuyos disparos rebotan en varios objetivos en línea — fuerte contra Muros alineados.</td></tr>
        <tr><td>Golem de Hielo</td><td>Tanque más barato y lento que el Golem; congela brevemente a los enemigos cercanos al morir.</td></tr>
        <tr><td>Cazarrecompensas</td><td>Tropa a distancia que puede saltar y prioriza específicamente a los Héroes enemigos para rematarlos.</td></tr>
        <tr><td>Aprendiz de Warden</td><td>Lanzador de apoyo con ataque a distancia más un aura pasiva que aumenta la resistencia de las tropas cercanas.</td></tr>
        <tr><td>Druida</td><td>Unidad de apoyo que no ataca, rebota curación entre tropas cercanas, luego se transforma en un Oso agresivo si se le provoca lo suficiente.</td></tr>
        <tr><td>Horno</td><td>Tropa estacionaria que genera continuamente pequeñas "Llamitas" con daño en el tiempo sobre edificios.</td></tr>
        <tr><td>Bruja de las Ruinas</td><td>La tropa Oscura más reciente; se desplaza hasta los escombros de edificios destruidos, los absorbe e invoca un combatiente ("Caballero de las Ruinas") desde los restos.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Las "Súper Tropas" (variantes temporales potenciadas como Súper Bárbaro, Súper Mago, Súper Minero) se activan con Dark Elixir por un número limitado de días — una buena forma de probar una versión más fuerte de una tropa conocida antes de invertir recursos de Laboratorio en otra parte.
      </div>

      <h2>Hechizos de Elixir (preparados en la Fábrica de Hechizos)</h2>
      <div class="table-wrap"><table>
        <tr><th>Hechizo</th><th>Función</th></tr>
        <tr><td>Rayo</td><td>Daño instantáneo en un área pequeña — bueno para francotirar una defensa expuesta.</td></tr>
        <tr><td>Curación</td><td>Cura con el tiempo a las tropas terrestres en su radio.</td></tr>
        <tr><td>Furia</td><td>Aumenta daño y velocidad de las tropas dentro de su radio durante un tiempo.</td></tr>
        <tr><td>Salto</td><td>Permite a las tropas terrestres atravesar los Muros como si no existieran, durante un tiempo.</td></tr>
        <tr><td>Congelación</td><td>Congela defensas o tropas en su sitio durante un tiempo.</td></tr>
        <tr><td>Clonación</td><td>Crea copias temporales de las tropas dentro de su radio.</td></tr>
        <tr><td>Invisibilidad</td><td>Hace que las tropas elegidas no puedan ser objetivo de las defensas durante unos segundos.</td></tr>
        <tr><td>Retirada</td><td>Retira del campo las tropas desplegadas para redesplegarlas más tarde.</td></tr>
        <tr><td>Reanimación</td><td>Reanima a las tropas caídas en el campo de batalla.</td></tr>
        <tr><td>Tótem</td><td>Coloca un tótem de mucha vida que distrae a las defensas de tierra y aire durante un periodo extendido, sin activar trampas ni tropas del Castillo del Clan.</td></tr>
      </table></div>

      <h2>Hechizos Oscuros (preparados en la Fábrica de Hechizos Oscuros)</h2>
      <div class="table-wrap"><table>
        <tr><th>Hechizo</th><th>Función</th></tr>
        <tr><td>Veneno</td><td>Nube de daño en el tiempo que además ralentiza el movimiento y la velocidad de ataque enemigos.</td></tr>
        <tr><td>Terremoto</td><td>Daño porcentual solo a edificios (se acumula con varios lanzamientos).</td></tr>
        <tr><td>Prisa</td><td>Aumenta la velocidad de movimiento (no de ataque) de las tropas dentro de su radio.</td></tr>
        <tr><td>Esqueleto</td><td>Invoca un grupo de Esqueletos en el punto objetivo.</td></tr>
        <tr><td>Murciélago</td><td>Invoca un enjambre de Murciélagos voladores en el punto objetivo.</td></tr>
        <tr><td>Overgrowth</td><td>Atrapa los edificios en su radio haciéndolos invisibles e invulnerables durante un tiempo.</td></tr>
        <tr><td>Bloque de Hielo</td><td>Inmoviliza un único objetivo — tropa, Héroe o edificio — dentro de un bloque de hielo.</td></tr>
        <tr><td>Furioso</td><td>El hechizo Oscuro más reciente; enfurece a las tropas en su radio para que prioricen específicamente las Defensas durante un periodo.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        El momento en que lanzas un hechizo importa tanto como cuál eliges: la Furia rinde mucho más cuando las tropas ya están agrupadas sobre un objetivo de valor, no en el instante en que se despliegan; el Veneno es mucho más efectivo lanzado directamente sobre las tropas del Castillo del Clan enemigo que sobre terreno vacío, ya que un defensor envenenado sin nada que combatir simplemente sale de la nube.
      </div>
`,
  fr: `
      <h1>Bâtiments militaires, troupes et sorts</h1>
      <div class="hazard"></div>
      <p class="lead">Ton armée, c'est ce que tu emmènes à l'attaque : savoir ce que fait chaque troupe et chaque sort est la base pour construire une composition qui fonctionne, pas seulement pour les reconnaître dans une rediffusion.</p>

      <h2>Bâtiments militaires</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Rôle</th></tr>
        <tr><td>Camp d'Armée</td><td>Héberge les troupes entraînées (place de logement) ; le seul bâtiment militaire constructible en plusieurs exemplaires.</td></tr>
        <tr><td>Caserne</td><td>Entraîne les troupes d'Elixir ; l'améliorer débloque de nouveaux types de troupes.</td></tr>
        <tr><td>Caserne Sombre</td><td>Entraîne les troupes de Dark Elixir.</td></tr>
        <tr><td>Laboratoire</td><td>Améliore le niveau de puissance des troupes, sorts et Machines de Siège — le bâtiment le plus systématiquement priorisé du jeu.</td></tr>
        <tr><td>Fabrique de Sorts</td><td>Prépare les sorts d'Elixir.</td></tr>
        <tr><td>Fabrique de Sorts Sombres</td><td>Prépare les sorts Sombres.</td></tr>
        <tr><td>Atelier de Siège</td><td>Construit les Machines de Siège ; débloqué à l'HDV12.</td></tr>
        <tr><td>Maison des Familiers</td><td>Héberge les Familiers, chacun associé à un Héros.</td></tr>
        <tr><td>Forge</td><td>Forge et améliore l'Équipement de Héros avec du Minerai.</td></tr>
        <tr><td>Hero Hall</td><td>Le centre qui débloque chaque Héros à mesure qu'il est amélioré.</td></tr>
      </table></div>

      <h2>Troupes d'Elixir (entraînées à la Caserne)</h2>
      <div class="table-wrap"><table>
        <tr><th>Troupe</th><th>Rôle</th></tr>
        <tr><td>Barbare</td><td>Corps à corps bon marché et rapide ; bon pour absorber les dégâts et nettoyer les petits bâtiments.</td></tr>
        <tr><td>Archère</td><td>Dégâts à distance bon marché, sans zone ; utile pour sniper hors de portée défensive.</td></tr>
        <tr><td>Géant</td><td>Tank terrestre à haute vie qui cible d'abord les défenses.</td></tr>
        <tr><td>Gobelin</td><td>Rapide, priorise les bâtiments de ressources — la troupe classique de farming.</td></tr>
        <tr><td>Casseur de Murs</td><td>Unité suicide infligeant des dégâts bonus massifs aux Murs, ouvrant des compartiments pour le reste de l'armée.</td></tr>
        <tr><td>Ballon</td><td>Volant lent qui cible les défenses ; fort contre les bases à faible couverture antiaérienne.</td></tr>
        <tr><td>Sorcier</td><td>Lanceur à distance à dégâts de zone, efficace contre des troupes ou bâtiments regroupés.</td></tr>
        <tr><td>Guérisseuse</td><td>Volante qui n'attaque pas, soigne en continu une troupe terrestre désignée.</td></tr>
        <tr><td>Dragon</td><td>Volant polyvalent à dégâts de zone touchant terre et air.</td></tr>
        <tr><td>P.E.K.K.A</td><td>Corps à corps lourd à cible unique avec une vie très élevée, sans zone.</td></tr>
        <tr><td>Bébé Dragon</td><td>Volant à dégâts de zone avec bonus contre les cibles aériennes.</td></tr>
        <tr><td>Mineur</td><td>Creuse sous terre pour contourner certaines défenses et Murs avant de refaire surface ; dégâts de zone.</td></tr>
        <tr><td>Dragon Électrique</td><td>Volant à dégâts de zone en éclair chaîné vers les cibles proches.</td></tr>
        <tr><td>Yeti</td><td>Tank terrestre qui fait apparaître de petits « Yetimites » en subissant des dégâts.</td></tr>
        <tr><td>Chevalier Dragon</td><td>Volant à haute vie et fort dégâts qui priorise avant tout les défenses ; explose à sa mort.</td></tr>
        <tr><td>Titan Électrique</td><td>Unité corps à corps terre/air à très haute vie avec une aura électrique constante et des attaques électriques étourdissantes.</td></tr>
        <tr><td>Cavalier des Racines</td><td>Troupe terrestre à haute vie qui brise naturellement les Murs en se déplaçant, rendant les Casseurs de Murs inutiles ; cible les défenses.</td></tr>
        <tr><td>Lanceur</td><td>Troupe à distance qui projette des projectiles ; bons dégâts mais vulnérable sans tanks devant.</td></tr>
        <tr><td>Meteor Golem</td><td>La troupe d'Elixir la plus haute actuellement ; se divise et projette une partie d'elle-même sur la cible pour un lourd dégât de zone.</td></tr>
      </table></div>

      <h2>Troupes de Dark Elixir (entraînées à la Caserne Sombre)</h2>
      <div class="table-wrap"><table>
        <tr><th>Troupe</th><th>Rôle</th></tr>
        <tr><td>Minion</td><td>Unité d'essaim volante bon marché, rapide et fragile.</td></tr>
        <tr><td>Cavalier Sanglier</td><td>Troupe terrestre rapide qui saute par-dessus les Murs et cible directement les défenses.</td></tr>
        <tr><td>Valkyrie</td><td>Troupe corps à corps qui tourne sur elle-même pour toucher plusieurs cibles adjacentes.</td></tr>
        <tr><td>Golem</td><td>Tank terrestre à vie massive qui se divise en deux « Golemites » plus faibles à sa mort.</td></tr>
        <tr><td>Sorcière</td><td>Lanceuse à distance qui invoque en continu des Squelettes à ses côtés.</td></tr>
        <tr><td>Chien de Lave</td><td>Tank volant à vie énorme qui attire les tirs de la Défense Antiaérienne ; se divise en « Petits de Lave » à sa mort.</td></tr>
        <tr><td>Bowler</td><td>Troupe à distance dont les tirs rebondissent sur plusieurs cibles alignées — forte contre des Murs en ligne.</td></tr>
        <tr><td>Golem de Glace</td><td>Tank moins cher et plus lent que le Golem ; gèle brièvement les ennemis proches à sa mort.</td></tr>
        <tr><td>Chasseur de Têtes</td><td>Troupe à distance qui peut sauter et cible spécifiquement les Héros ennemis pour les achever.</td></tr>
        <tr><td>Apprenti Warden</td><td>Lanceur de soutien avec une attaque à distance plus une aura passive augmentant l'endurance des troupes proches.</td></tr>
        <tr><td>Druide</td><td>Unité de soutien qui n'attaque pas, fait rebondir des soins entre les troupes proches, puis se transforme en Ours agressif une fois suffisamment provoquée.</td></tr>
        <tr><td>Fournaise</td><td>Troupe stationnaire qui fait apparaître en continu de petites « Flammèches » infligeant des dégâts sur la durée aux bâtiments.</td></tr>
        <tr><td>Sorcière des Ruines</td><td>La troupe Sombre la plus récente ; se déplace vers les décombres de bâtiments détruits, les absorbe et invoque un combattant (« Chevalier des Ruines ») à partir des débris.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Les « Super Troupes » (variantes temporaires boostées comme Super Barbare, Super Sorcier, Super Mineur) s'activent avec du Dark Elixir pour un nombre limité de jours — une bonne façon d'essayer une version plus forte d'une troupe familière avant d'investir des ressources de Laboratoire ailleurs.
      </div>

      <h2>Sorts d'Elixir (préparés à la Fabrique de Sorts)</h2>
      <div class="table-wrap"><table>
        <tr><th>Sort</th><th>Fonction</th></tr>
        <tr><td>Foudre</td><td>Dégâts instantanés sur une petite zone — bon pour sniper une défense exposée.</td></tr>
        <tr><td>Soin</td><td>Soigne dans le temps les troupes terrestres dans son rayon.</td></tr>
        <tr><td>Rage</td><td>Augmente dégâts et vitesse des troupes dans son rayon pendant une durée.</td></tr>
        <tr><td>Saut</td><td>Permet aux troupes terrestres de traverser les Murs comme s'ils n'existaient pas, pendant une durée.</td></tr>
        <tr><td>Gel</td><td>Gèle défenses ou troupes sur place pendant une durée.</td></tr>
        <tr><td>Clonage</td><td>Crée des copies temporaires des troupes présentes dans son rayon.</td></tr>
        <tr><td>Invisibilité</td><td>Rend les troupes ciblées impossibles à cibler par les défenses pendant quelques secondes.</td></tr>
        <tr><td>Rappel</td><td>Retire du champ de bataille les troupes déployées pour les redéployer plus tard.</td></tr>
        <tr><td>Résurrection</td><td>Ressuscite les troupes tombées sur le champ de bataille.</td></tr>
        <tr><td>Totem</td><td>Dépose un totem à haute vie qui distrait défenses terrestres et aériennes pendant une période prolongée, sans déclencher les pièges ni les troupes du Château de Clan.</td></tr>
      </table></div>

      <h2>Sorts Sombres (préparés à la Fabrique de Sorts Sombres)</h2>
      <div class="table-wrap"><table>
        <tr><th>Sort</th><th>Fonction</th></tr>
        <tr><td>Poison</td><td>Nuage de dégâts sur la durée qui ralentit aussi le mouvement et la vitesse d'attaque ennemis.</td></tr>
        <tr><td>Tremblement de Terre</td><td>Dégâts en pourcentage aux bâtiments uniquement (se cumule avec plusieurs lancers).</td></tr>
        <tr><td>Hâte</td><td>Augmente la vitesse de déplacement (pas d'attaque) des troupes dans son rayon.</td></tr>
        <tr><td>Squelette</td><td>Invoque un groupe de Squelettes à l'emplacement ciblé.</td></tr>
        <tr><td>Chauve-souris</td><td>Invoque un essaim de Chauves-souris volantes à l'emplacement ciblé.</td></tr>
        <tr><td>Overgrowth</td><td>Piège les bâtiments dans son rayon, les rendant invisibles et invulnérables pendant une durée.</td></tr>
        <tr><td>Bloc de Glace</td><td>Immobilise une cible unique — troupe, Héros ou bâtiment — dans un bloc de glace.</td></tr>
        <tr><td>Enragé</td><td>Le sort Sombre le plus récent ; enrage les troupes dans son rayon pour qu'elles ciblent spécifiquement les Défenses pendant une période.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Le moment où tu lances un sort compte autant que le choix du sort : la Rage rapporte bien plus une fois les troupes déjà regroupées sur une cible de valeur, pas à l'instant du déploiement ; le Poison est bien plus efficace lancé directement sur les troupes du Château de Clan ennemi que sur du terrain vide, car un défenseur empoisonné sans rien à combattre sort simplement du nuage.
      </div>
`
};
