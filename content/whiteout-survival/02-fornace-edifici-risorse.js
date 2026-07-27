/* Contenuto tradotto del capitolo — Whiteout Survival / 02 Furnace, buildings & resources.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Furnace, buildings & resources</h1>
      <div class="hazard"></div>

      <h2>The Furnace as the game's "clock"</h2>
      <p>The <strong>Furnace</strong> is Whiteout Survival's equivalent of a "Town Hall": it gates population capacity, the level cap of many other buildings, and which troop tiers you can unlock. The standard track runs from <strong>Level 1 to 30</strong>. At Level 30 you enter the <strong>Fire Crystal Age</strong>: the Furnace and several other core military buildings switch to a second progression track measured in <strong>FC tiers — FC1 through FC10</strong>, each split into four sub-levels (FC1-1...FC1-4, then FC2, and so on). FC10 is the current highest tier, reachable around Server Day 500.</p>

      <h2>Key unlock milestones (approximate levels)</h2>
      <div class="table-wrap"><table>
        <tr><th>Furnace Level</th><th>Unlock</th></tr>
        <tr><td>6</td><td>Iron becomes a required upgrade resource</td></tr>
        <tr><td>7</td><td>Alliance panel; Lighthouse building (Intel Missions)</td></tr>
        <tr><td>8</td><td>Embassy level becomes a hard gate: the Furnace can't exceed it</td></tr>
        <tr><td>9</td><td>Research Center; common gift-code eligibility threshold</td></tr>
        <tr><td>10</td><td>Enlistment Office (catches troops that would otherwise be lost when the Infirmary is full)</td></tr>
        <tr><td>18</td><td>Pet system, via the Beast Cage</td></tr>
        <tr><td>20</td><td>Hero Gear Mastery</td></tr>
        <tr><td>22</td><td>Chief Gear system</td></tr>
        <tr><td>25</td><td>Chief Charms; Dawn Academy building + "Tundra Trek" mode</td></tr>
        <tr><td>26</td><td>Tier-9 troops — often a rush target before pausing to consolidate</td></tr>
        <tr><td>30</td><td>Fire Crystal Age begins; Crystal Laboratory (refines base resources into Fire Crystals)</td></tr>
      </table></div>

      <h2>Core building roster</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Role</th></tr>
        <tr><td>Furnace</td><td>Central hub gating population, building caps and troop tiers.</td></tr>
        <tr><td>Storehouse</td><td>Protects part of your resources from plunder when attacked; higher level = more protection.</td></tr>
        <tr><td>Clinic</td><td>Treats sick civilian survivors (population health, distinct from the military Infirmary).</td></tr>
        <tr><td>Shelter</td><td>Housing for survivors; more shelters raise the population cap.</td></tr>
        <tr><td>Cookhouse</td><td>Feeds survivors; higher level lowers the risk of population loss from starvation.</td></tr>
        <tr><td>Hero Hall</td><td>Hero recruitment and management hub.</td></tr>
        <tr><td>Iron Mine / Sawmill / Coal Mine / Hunter's Hut</td><td>Produce Iron, Wood, Coal and Meat respectively — the four base resources.</td></tr>
        <tr><td>Dawn Academy</td><td>Unlocked at Furnace 25; hub of specialized "Expert" characters, part of the "Tundra Trek" content.</td></tr>
        <tr><td>Beast Cage</td><td>Houses tamed Pets (see Chapter 9).</td></tr>
        <tr><td>Lighthouse</td><td>Unlocked at Furnace 7; hosts Intel Missions (rescue survivors, hunt beasts, hero investigation battles).</td></tr>
        <tr><td>Arena</td><td>PvP hero-only battle mode.</td></tr>
        <tr><td>Chief's House</td><td>Periodically issues "Chief Orders" — tasks that trigger temporary city-wide boosts when completed.</td></tr>
        <tr><td>Explorer's Cabin</td><td>Unlocks Exploration mode (PvE stage battles vs. NPC waves) and passive offline reward chests.</td></tr>
        <tr><td>Enlistment Office</td><td>Unlocked at Furnace 10; catches roughly 70% of troops that would otherwise be lost when the Infirmary overflows, holding them for later re-enlistment.</td></tr>
        <tr><td>Barricade</td><td>The city wall; scales defense/power with Furnace level.</td></tr>
        <tr><td>Marksman Camp / Lancer Camp / Infantry Camp</td><td>Train and house each troop type.</td></tr>
        <tr><td>Research Center</td><td>Tech tree hub (Growth/Economy/Battle — see Chapter 7).</td></tr>
        <tr><td>Infirmary</td><td>Heals wounded troops after battle (military healing, distinct from the civilian Clinic).</td></tr>
        <tr><td>Command Center</td><td>Governs march size and rally capacity — a top-priority upgrade alongside the troop camps.</td></tr>
        <tr><td>Embassy</td><td>Stores alliance-reinforcement troops sent by other members; also the building that caps Furnace growth past level 8.</td></tr>
      </table></div>

      <div class="box box-err">
        <span class="box-title">Common mistake</span>
        Rushing the Furnace level while leaving the Embassy, Command Center and troop camps behind. Past Furnace 8 the Embassy directly caps further Furnace growth, and a high Furnace level with weak troop camps produces a city that looks strong on paper but can't field an effective army.
      </div>

      <h2>The resource system</h2>
      <p>Four base resources: <strong>Meat</strong> (food, from the Hunter's Hut, sustains population), <strong>Wood</strong> (from the Sawmill, the heaviest early-game consumption), <strong>Coal</strong> (from the Coal Mine, critical to keep Furnace upgrades moving) and <strong>Iron</strong> (from the Iron Mine, required from roughly Furnace 6 onward). Past Furnace 30, the <strong>Crystal Laboratory</strong> refines large quantities of these four resources into <strong>Fire Crystals</strong>, and later <strong>Refined Fire Crystals</strong>, which fund the Fire Crystal Age progression track.</p>
      <p>The <strong>Storehouse</strong> protects a set amount of each resource from being plundered by attackers; anything above that protected cap is vulnerable, especially for players who haven't joined an alliance yet.</p>

      <h2>State age & State Merger</h2>
      <p>A <strong>State</strong> (server) follows its own age-based unlock calendar, independent of any one player's personal progress: heroes, Pets, Fire Crystal tiers, the War Academy (around Day 220-230) and FC10 (around Day 500) all unlock on a timeline shared by the whole State. Tracking your State's age helps you avoid over-investing in a system about to be superseded, and helps with pre-saving resources ahead of a scheduled unlock.</p>
      <p>When a State becomes too inactive or under-populated, Century Games runs a <strong>State Merger</strong>, folding it into another State. Effects: cities relocate to a random spot in the new State under a 24-hour shield, alliance territory bonuses expire, alliance buildings get removed (with resources refunded), Fortresses and Strongholds become unoccupied and contestable again, and all leadership roles need to be re-earned. Participation is mandatory for everyone in a merging State.</p>

      <div class="box box-f2p">
        <span class="box-title">F2P Note</span>
        There's no dedicated "catch-up" building or mechanic for players who start late. The practical path remains: gift codes (some gated by Furnace level), event participation, and joining an active alliance for Alliance Tech bonuses, reinforcements and protection.
      </div>

      <p class="sentinel-hint">Building upgrades and research in Whiteout Survival often take hours or days: when one finishes while you're away from your phone, <strong>Sentinel</strong> can alert you with a real alarm. Set up words like <code>research</code> or <code>construction</code> among the notifications it watches. <a href="../../sentinel.html">How to set it up</a></p>
`,
  es: `
      <h1>Horno, edificios y recursos</h1>
      <div class="hazard"></div>

      <h2>El Horno como "reloj" del juego</h2>
      <p>El <strong>Horno</strong> es en Whiteout Survival el equivalente del "Ayuntamiento": determina la capacidad de población, el nivel máximo de muchos otros edificios y los tiers de tropas que puedes desbloquear. El camino estándar va del <strong>Nivel 1 al 30</strong>. En el Nivel 30 entras en la <strong>Era del Cristal de Fuego</strong>: el Horno y varios otros edificios militares clave pasan a una segunda vía de progresión medida en <strong>tiers FC — de FC1 a FC10</strong>, cada uno dividido en cuatro subniveles (FC1-1...FC1-4, luego FC2, y así sucesivamente). FC10 es el tier máximo actual, alcanzable alrededor del día 500 de servidor.</p>

      <h2>Hitos clave de desbloqueo (niveles aproximados)</h2>
      <div class="table-wrap"><table>
        <tr><th>Nivel de Horno</th><th>Desbloqueo</th></tr>
        <tr><td>6</td><td>El Hierro se vuelve un recurso necesario para mejoras</td></tr>
        <tr><td>7</td><td>Panel de Alianza; edificio Faro (Misiones de Inteligencia)</td></tr>
        <tr><td>8</td><td>El nivel de la Embassy se convierte en un límite duro: el Horno no puede superarlo</td></tr>
        <tr><td>9</td><td>Centro de Investigación; umbral común de elegibilidad para códigos de regalo</td></tr>
        <tr><td>10</td><td>Oficina de Alistamiento (recupera tropas que se perderían cuando la Enfermería está llena)</td></tr>
        <tr><td>18</td><td>Sistema de Mascotas, mediante la Jaula de Bestias</td></tr>
        <tr><td>20</td><td>Maestría del Equipo de Héroe</td></tr>
        <tr><td>22</td><td>Sistema de Equipo del Jefe</td></tr>
        <tr><td>25</td><td>Amuletos del Jefe; edificio Academia del Alba + modo "Tundra Trek"</td></tr>
        <tr><td>26</td><td>Tropas de tier 9 — a menudo un objetivo a rushear antes de pausar para consolidar</td></tr>
        <tr><td>30</td><td>Comienza la Era del Cristal de Fuego; Laboratorio de Cristales (refina recursos base en Cristales de Fuego)</td></tr>
      </table></div>

      <h2>Edificios principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Función</th></tr>
        <tr><td>Horno</td><td>Centro que regula población, límites de edificios y tiers de tropas.</td></tr>
        <tr><td>Almacén</td><td>Protege parte de tus recursos del saqueo al ser atacado; a más nivel, más protección.</td></tr>
        <tr><td>Clínica</td><td>Cura a los supervivientes civiles enfermos (salud de la población, distinta de la Enfermería militar).</td></tr>
        <tr><td>Refugio</td><td>Alojamiento para supervivientes; más refugios elevan el límite de población.</td></tr>
        <tr><td>Cocina</td><td>Alimenta a los supervivientes; más nivel reduce el riesgo de pérdida de población por hambre.</td></tr>
        <tr><td>Salón de Héroes</td><td>Centro de reclutamiento y gestión de Héroes.</td></tr>
        <tr><td>Mina de Hierro / Aserradero / Mina de Carbón / Cabaña del Cazador</td><td>Producen Hierro, Madera, Carbón y Carne respectivamente — los cuatro recursos base.</td></tr>
        <tr><td>Academia del Alba</td><td>Se desbloquea en Horno 25; centro de personajes "Expertos" especializados, parte del contenido "Tundra Trek".</td></tr>
        <tr><td>Jaula de Bestias</td><td>Alberga a las Mascotas domesticadas (ver capítulo 9).</td></tr>
        <tr><td>Faro</td><td>Se desbloquea en Horno 7; alberga las Misiones de Inteligencia (rescatar supervivientes, cazar bestias, batallas de investigación de héroes).</td></tr>
        <tr><td>Arena</td><td>Modo PvP solo de héroes.</td></tr>
        <tr><td>Chief's House</td><td>Emite periódicamente "Órdenes del Jefe" — tareas que, al completarse, dan mejoras temporales a toda la ciudad.</td></tr>
        <tr><td>Cabaña del Explorador</td><td>Desbloquea el modo Exploración (batallas PvE contra oleadas NPC) y cofres de recompensa pasivos offline.</td></tr>
        <tr><td>Oficina de Alistamiento</td><td>Se desbloquea en Horno 10; recupera aproximadamente el 70% de las tropas que se perderían cuando la Enfermería se desborda, guardándolas para un futuro realistamiento.</td></tr>
        <tr><td>Barricada</td><td>El muro de la ciudad; escala defensa/potencia con el nivel del Horno.</td></tr>
        <tr><td>Cuartel de Tiradores / Lanceros / Infantería</td><td>Entrenan y alojan cada tipo de tropa.</td></tr>
        <tr><td>Centro de Investigación</td><td>Centro del árbol tecnológico (Crecimiento/Economía/Batalla — ver capítulo 7).</td></tr>
        <tr><td>Enfermería</td><td>Cura a las tropas heridas tras la batalla (curación militar, distinta de la Clínica civil).</td></tr>
        <tr><td>Command Center</td><td>Regula el tamaño de marchas y la capacidad de rallies — una mejora prioritaria junto a los cuarteles.</td></tr>
        <tr><td>Embassy</td><td>Almacena las tropas de refuerzo enviadas por otros miembros de la alianza; también es el edificio que limita el crecimiento del Horno pasado el nivel 8.</td></tr>
      </table></div>

      <div class="box box-err">
        <span class="box-title">Error común</span>
        Rushear el nivel del Horno dejando atrás Embassy, Command Center y los cuarteles de tropas. Pasado Horno 8, la Embassy limita directamente el crecimiento posterior del Horno, y un Horno alto con cuarteles débiles produce una ciudad que parece fuerte sobre el papel pero no puede desplegar un ejército eficaz.
      </div>

      <h2>El sistema de recursos</h2>
      <p>Cuatro recursos base: <strong>Carne</strong> (comida, de la Cabaña del Cazador, sostiene a la población), <strong>Madera</strong> (del Aserradero, el consumo más pesado en las primeras fases), <strong>Carbón</strong> (de la Mina de Carbón, crítico para mantener en marcha las mejoras del Horno) y <strong>Hierro</strong> (de la Mina de Hierro, necesario aproximadamente desde Horno 6). Pasado Horno 30, el <strong>Laboratorio de Cristales</strong> refina grandes cantidades de estos cuatro recursos en <strong>Cristales de Fuego</strong>, y más adelante en <strong>Cristales de Fuego Refinados</strong>, que financian la progresión de la Era del Cristal de Fuego.</p>
      <p>El <strong>Almacén</strong> protege una cantidad fija de cada recurso del saqueo de los atacantes; todo lo que supere ese límite protegido es vulnerable, especialmente para quien aún no se ha unido a una alianza.</p>

      <h2>Edad del Estado y Fusión de Estados</h2>
      <p>Un <strong>Estado</strong> (servidor) sigue su propio calendario de desbloqueos basado en la edad, independiente del progreso personal de cada jugador: héroes, Mascotas, tiers de Cristal de Fuego, la Academia de Guerra (alrededor del día 220-230) y FC10 (alrededor del día 500) se desbloquean todos en una línea de tiempo compartida por todo el Estado. Seguir la edad de tu Estado ayuda a no invertir demasiado en un sistema a punto de quedar superado, y a ahorrar recursos antes de un desbloqueo programado.</p>
      <p>Cuando un Estado se vuelve demasiado inactivo o poco poblado, Century Games ejecuta una <strong>Fusión de Estado</strong>, uniéndolo a otro. Efectos: las ciudades se reubican en un punto aleatorio del nuevo Estado bajo un escudo de 24 horas, los bonos de territorio de alianza expiran, los edificios de alianza se eliminan (con reembolso de recursos), Fortalezas y Bastiones vuelven a estar libres y disputables, y todos los roles de liderazgo deben reconquistarse. La participación es obligatoria para todos en un Estado en fusión.</p>

      <div class="box box-f2p">
        <span class="box-title">Nota F2P</span>
        No existe un edificio o mecánica dedicada de "recuperación" para quien empieza tarde. El camino práctico sigue siendo: códigos de regalo (algunos ligados al nivel de Horno), participación en eventos, y unirte a una alianza activa para bonos de Tecnología de alianza, refuerzos y protección.
      </div>

      <p class="sentinel-hint">Las mejoras de edificios y las investigaciones en Whiteout Survival suelen tardar horas o días: cuando terminan lejos de tu teléfono, <strong>Sentinel</strong> puede avisarte con una alarma real. Configura palabras como <code>research</code> o <code>construction</code> entre las notificaciones que vigila. <a href="../../sentinel.html">Cómo configurarlo</a></p>
`,
  fr: `
      <h1>Fourneau, bâtiments et ressources</h1>
      <div class="hazard"></div>

      <h2>Le Fourneau comme "horloge" du jeu</h2>
      <p>Le <strong>Fourneau</strong> est dans Whiteout Survival l'équivalent d'un "Hôtel de Ville" : il détermine la capacité de population, le niveau maximal de nombreux autres bâtiments et les tiers de troupes que tu peux débloquer. Le parcours standard va du <strong>Niveau 1 à 30</strong>. Au Niveau 30, tu entres dans l'<strong>Ère du Cristal de Feu</strong> : le Fourneau et plusieurs autres bâtiments militaires clés passent à une seconde voie de progression mesurée en <strong>tiers FC — de FC1 à FC10</strong>, chacun divisé en quatre sous-niveaux (FC1-1...FC1-4, puis FC2, et ainsi de suite). FC10 est le tier maximal actuel, atteignable vers le jour 500 de serveur.</p>

      <h2>Jalons de déblocage clés (niveaux approximatifs)</h2>
      <div class="table-wrap"><table>
        <tr><th>Niveau du Fourneau</th><th>Déblocage</th></tr>
        <tr><td>6</td><td>Le Fer devient une ressource nécessaire pour les améliorations</td></tr>
        <tr><td>7</td><td>Panneau d'Alliance ; bâtiment Phare (Missions de Renseignement)</td></tr>
        <tr><td>8</td><td>Le niveau de l'Embassy devient un plafond dur : le Fourneau ne peut pas le dépasser</td></tr>
        <tr><td>9</td><td>Centre de Recherche ; seuil courant d'éligibilité aux codes cadeaux</td></tr>
        <tr><td>10</td><td>Bureau d'Enrôlement (récupère des troupes qui seraient sinon perdues quand l'Infirmerie est pleine)</td></tr>
        <tr><td>18</td><td>Système d'Animaux de compagnie, via la Cage à Bêtes</td></tr>
        <tr><td>20</td><td>Maîtrise de l'Équipement de Héros</td></tr>
        <tr><td>22</td><td>Système d'Équipement du Chef</td></tr>
        <tr><td>25</td><td>Amulettes du Chef ; bâtiment Académie de l'Aube + mode "Tundra Trek"</td></tr>
        <tr><td>26</td><td>Troupes de tier 9 — souvent un objectif à rusher avant de consolider</td></tr>
        <tr><td>30</td><td>Début de l'Ère du Cristal de Feu ; Laboratoire de Cristaux (raffine les ressources de base en Cristaux de Feu)</td></tr>
      </table></div>

      <h2>Bâtiments principaux</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Rôle</th></tr>
        <tr><td>Fourneau</td><td>Hub central régulant population, plafonds des bâtiments et tiers de troupes.</td></tr>
        <tr><td>Entrepôt</td><td>Protège une partie de tes ressources du pillage en cas d'attaque ; plus le niveau est élevé, plus la protection est grande.</td></tr>
        <tr><td>Clinique</td><td>Soigne les survivants civils malades (santé de la population, distincte de l'Infirmerie militaire).</td></tr>
        <tr><td>Abri</td><td>Logement pour les survivants ; plus d'abris augmentent le plafond de population.</td></tr>
        <tr><td>Cuisine</td><td>Nourrit les survivants ; un niveau plus élevé réduit le risque de perte de population par famine.</td></tr>
        <tr><td>Salle des Héros</td><td>Hub de recrutement et de gestion des Héros.</td></tr>
        <tr><td>Mine de Fer / Scierie / Mine de Charbon / Cabane du Chasseur</td><td>Produisent respectivement Fer, Bois, Charbon et Viande — les quatre ressources de base.</td></tr>
        <tr><td>Académie de l'Aube</td><td>Débloquée au Fourneau 25 ; hub de personnages "Experts" spécialisés, partie du contenu "Tundra Trek".</td></tr>
        <tr><td>Cage à Bêtes</td><td>Héberge les Animaux de compagnie apprivoisés (voir chapitre 9).</td></tr>
        <tr><td>Phare</td><td>Débloqué au Fourneau 7 ; héberge les Missions de Renseignement (sauver des survivants, chasser des bêtes, batailles d'enquête de héros).</td></tr>
        <tr><td>Arène</td><td>Mode de combat PvP réservé aux héros.</td></tr>
        <tr><td>Chief's House</td><td>Émet périodiquement des "Ordres du Chef" — des tâches qui déclenchent des boosts temporaires pour toute la ville une fois terminées.</td></tr>
        <tr><td>Cabane de l'Explorateur</td><td>Débloque le mode Exploration (batailles PvE contre des vagues de PNJ) et des coffres de récompense passifs hors ligne.</td></tr>
        <tr><td>Bureau d'Enrôlement</td><td>Débloqué au Fourneau 10 ; récupère environ 70% des troupes qui seraient sinon perdues quand l'Infirmerie déborde, les gardant pour un futur réenrôlement.</td></tr>
        <tr><td>Barricade</td><td>Le mur de la ville ; sa défense/puissance augmente avec le niveau du Fourneau.</td></tr>
        <tr><td>Caserne de Tireurs / Lanciers / Infanterie</td><td>Entraînent et hébergent chaque type de troupe.</td></tr>
        <tr><td>Centre de Recherche</td><td>Hub de l'arbre technologique (Croissance/Économie/Bataille — voir chapitre 7).</td></tr>
        <tr><td>Infirmerie</td><td>Soigne les troupes blessées après une bataille (soins militaires, distincts de la Clinique civile).</td></tr>
        <tr><td>Command Center</td><td>Régule la taille des marches et la capacité des rallyes — une amélioration prioritaire au même titre que les casernes.</td></tr>
        <tr><td>Embassy</td><td>Stocke les troupes de renfort envoyées par les autres membres de l'alliance ; c'est aussi le bâtiment qui plafonne la croissance du Fourneau au-delà du niveau 8.</td></tr>
      </table></div>

      <div class="box box-err">
        <span class="box-title">Erreur fréquente</span>
        Rusher le niveau du Fourneau en laissant de côté Embassy, Command Center et les casernes de troupes. Passé le Fourneau 8, l'Embassy plafonne directement la croissance ultérieure du Fourneau, et un Fourneau élevé avec des casernes faibles donne une ville qui semble forte sur le papier mais incapable de déployer une armée efficace.
      </div>

      <h2>Le système de ressources</h2>
      <p>Quatre ressources de base : la <strong>Viande</strong> (nourriture, depuis la Cabane du Chasseur, soutient la population), le <strong>Bois</strong> (depuis la Scierie, la consommation la plus lourde en début de partie), le <strong>Charbon</strong> (depuis la Mine de Charbon, essentiel pour garder les améliorations du Fourneau en mouvement) et le <strong>Fer</strong> (depuis la Mine de Fer, nécessaire environ à partir du Fourneau 6). Passé le Fourneau 30, le <strong>Laboratoire de Cristaux</strong> raffine de grandes quantités de ces quatre ressources en <strong>Cristaux de Feu</strong>, puis en <strong>Cristaux de Feu Raffinés</strong>, qui financent la progression de l'Ère du Cristal de Feu.</p>
      <p>L'<strong>Entrepôt</strong> protège une quantité fixe de chaque ressource contre le pillage des attaquants ; tout ce qui dépasse ce plafond protégé est vulnérable, surtout pour les joueurs qui n'ont pas encore rejoint d'alliance.</p>

      <h2>Âge de l'État et Fusion d'États</h2>
      <p>Un <strong>État</strong> (serveur) suit son propre calendrier de déblocages basé sur l'âge, indépendant de la progression personnelle d'un joueur donné : héros, Animaux de compagnie, tiers de Cristal de Feu, l'Académie de Guerre (vers le jour 220-230) et FC10 (vers le jour 500) se débloquent tous sur une chronologie partagée par tout l'État. Suivre l'âge de son État aide à éviter de trop investir dans un système sur le point d'être remplacé, et à épargner des ressources avant un déblocage programmé.</p>
      <p>Quand un État devient trop inactif ou sous-peuplé, Century Games exécute une <strong>Fusion d'État</strong>, le fusionnant avec un autre. Effets : les villes se déplacent vers un point aléatoire du nouvel État sous un bouclier de 24 heures, les bonus de territoire d'alliance expirent, les bâtiments d'alliance sont retirés (avec remboursement des ressources), Forteresses et Bastions redeviennent inoccupés et contestables, et tous les rôles de direction doivent être reconquis. La participation est obligatoire pour tout le monde dans un État en fusion.</p>

      <div class="box box-f2p">
        <span class="box-title">Note F2P</span>
        Il n'existe aucun bâtiment ou mécanique dédiée de "rattrapage" pour les joueurs qui commencent en retard. La voie pratique reste : les codes cadeaux (certains liés au niveau du Fourneau), la participation aux événements, et rejoindre une alliance active pour les bonus de Technologie d'alliance, les renforts et la protection.
      </div>

      <p class="sentinel-hint">Les améliorations de bâtiments et les recherches dans Whiteout Survival prennent souvent des heures, voire des jours : quand l'une se termine loin de ton téléphone, <strong>Sentinel</strong> peut t'alerter avec une vraie alarme. Configure des mots comme <code>research</code> ou <code>construction</code> parmi les notifications surveillées. <a href="../../sentinel.html">Comment le configurer</a></p>
`
};
