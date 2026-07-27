/* Contenuto tradotto del capitolo — Lords Mobile / 03 City & buildings.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>City & buildings</h1>
      <div class="hazard"></div>
      <p class="lead">Castle, Barrack, Academy, Embassy and every key building in your city: what they do and in what order to upgrade them.</p>

      <p>Lords Mobile has around <strong>30 constructible buildings</strong>, split into resource, standard, advanced, Familiar-support and utility categories.</p>

      <h2>Resource buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Produces / stores</th></tr>
        <tr><td>Farm</td><td>Food</td></tr>
        <tr><td>Lumber Mill</td><td>Timber</td></tr>
        <tr><td>Quarry</td><td>Stone</td></tr>
        <tr><td>Mine</td><td>Ore</td></tr>
        <tr><td>Manor</td><td>Gold</td></tr>
      </table></div>

      <h2>Core standard buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Function</th></tr>
        <tr><td><strong>Castle</strong></td><td>Fixed, permanent building. Its level (max 25) gates almost every other system — most buildings can't out-level it. Reaching <strong>Castle 25 ("C25")</strong> is a major milestone, unlocking the Altar, the Prison and Tier 4 troops.</td></tr>
        <tr><td><strong>Barrack</strong></td><td>Trains all four troop types using Food, Timber, Stone, Ore and Gold.</td></tr>
        <tr><td><strong>Infirmary</strong></td><td>Heals wounded troops instead of letting them die outright. Capacity is finite — a key planning constraint for both attacking and gathering.</td></tr>
        <tr><td><strong>Academy</strong></td><td>Permanent building; houses the entire research tree (Economy, Military, Defense, Monster Hunt, Familiars, Wonder Battles, Gear).</td></tr>
        <tr><td><strong>Embassy</strong></td><td>Permanent building; manages guild functions including reinforcement capacity.</td></tr>
        <tr><td><strong>Vault</strong></td><td>Fixed building; automatically shields a capped amount of resources from being plundered when your city is attacked.</td></tr>
        <tr><td><strong>Watchtower</strong></td><td>Warns of incoming attacks, scouting attempts and incoming reinforcements. At Level 25, unlocks "Fortify" — a defense boost that also cuts attacking troops' ATK by 10%.</td></tr>
        <tr><td><strong>Workshop</strong></td><td>Forges and upgrades Hero Equipment. Reaching Level 25 unlocks a third combined accessory slot.</td></tr>
        <tr><td><strong>Trading Post</strong></td><td>Unlocked at Castle 5; lets guildmates gift each other resources. Upgrading raises the transferable amount and lowers the "supply tax"; at Level 25, boosts Supply Troop travel speed by 100%.</td></tr>
      </table></div>

      <h2>Advanced & utility buildings</h2>
      <p>Altar, Battle Hall, Prison, Treasure Trove, Bazaar, Cargo Ship, Colosseum (unlocked at Castle 10), Hero Stages, Kingdom Tycoon, The Labyrinth, Sanctuary, Shelter, Synthesis Isle.</p>

      <h2>Familiar support buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Function</th></tr>
        <tr><td><strong>Monsterhold</strong></td><td>Central hub to view, level and manage Familiars.</td></tr>
        <tr><td><strong>Spring</strong></td><td>Produces Anima, the resource used for Pacts and Skillstones.</td></tr>
        <tr><td><strong>Mystic Spire</strong></td><td>Merges Anima and items into Pacts and Skillstones.</td></tr>
        <tr><td><strong>Gym</strong></td><td>Trains Heroes and Familiars together for combat effectiveness.</td></tr>
      </table></div>

      <p class="sentinel-hint">Every time a construction queue finishes, the game fires a notification — <strong>Sentinel</strong> can turn it into a real alarm even with your phone on silent: set keywords like <code>construction</code> or <code>upgrade complete</code>. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Because resource buildings cap at Level 24 until the Castle hits Level 25, push Farms/Quarries/Lumber Mills/Mines to 24 <strong>before</strong> rushing Castle 25 — otherwise you waste the window where they could already be maxed.
      </div>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Don't ignore Infirmary capacity relative to how many troops you send out gathering or attacking. If you're hit while over-extended past your healing capacity, you lose troops permanently instead of just healing them.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>The Castle is the bottleneck for almost everything: plan upgrades around its level, not the other way around.</li>
        <li>Don't neglect Familiar buildings: they become relevant as early as mid-game (chapter 12).</li>
        <li>Watch your Vault capacity: protect resources before they exceed the cap.</li>
      </ul>
`,
  es: `
      <h1>Ciudad y edificios</h1>
      <div class="hazard"></div>
      <p class="lead">Castillo, Cuartel, Academia, Embajada y todos los edificios clave de tu ciudad: qué hacen y en qué orden mejorarlos.</p>

      <p>Lords Mobile tiene alrededor de <strong>30 edificios construibles</strong>, divididos en edificios de recursos, estándar, avanzados, de soporte a Familiares y de utilidad.</p>

      <h2>Edificios de recursos</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Produce / almacena</th></tr>
        <tr><td>Granja (Farm)</td><td>Comida</td></tr>
        <tr><td>Aserradero (Lumber Mill)</td><td>Madera</td></tr>
        <tr><td>Cantera (Quarry)</td><td>Piedra</td></tr>
        <tr><td>Mina (Mine)</td><td>Mineral</td></tr>
        <tr><td>Mansión (Manor)</td><td>Oro</td></tr>
      </table></div>

      <h2>Edificios estándar principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Función</th></tr>
        <tr><td><strong>Castillo</strong></td><td>Edificio fijo y permanente. Su nivel (máximo 25) limita casi todos los demás sistemas — la mayoría de los edificios no puede superarlo. Alcanzar el <strong>Castillo 25 ("C25")</strong> es un hito importante que desbloquea el Altar, la Prisión y las tropas de Tier 4.</td></tr>
        <tr><td><strong>Cuartel</strong></td><td>Entrena los cuatro tipos de tropas usando Comida, Madera, Piedra, Mineral y Oro.</td></tr>
        <tr><td><strong>Enfermería</strong></td><td>Cura a las tropas heridas en lugar de dejarlas morir. La capacidad es limitada — una restricción clave tanto para atacar como para recolectar.</td></tr>
        <tr><td><strong>Academia</strong></td><td>Edificio permanente; alberga todo el árbol de investigación (Economía, Militar, Defensa, Caza de monstruos, Familiares, Wonder Battles, Equipo).</td></tr>
        <tr><td><strong>Embajada</strong></td><td>Edificio permanente; gestiona las funciones de gilda, incluida la capacidad de refuerzo.</td></tr>
        <tr><td><strong>Vault</strong></td><td>Edificio fijo; protege automáticamente una cantidad limitada de recursos del saqueo cuando tu ciudad es atacada.</td></tr>
        <tr><td><strong>Torre de vigilancia (Watchtower)</strong></td><td>Avisa de ataques entrantes, intentos de exploración y refuerzos entrantes. En el nivel 25 desbloquea "Fortify", un bono defensivo que además reduce el ATK de las tropas atacantes en un 10%.</td></tr>
        <tr><td><strong>Taller (Workshop)</strong></td><td>Forja y mejora el Equipo de Héroes. Al alcanzar el nivel 25 desbloquea un tercer slot de accesorio combinado.</td></tr>
        <tr><td><strong>Trading Post</strong></td><td>Se desbloquea en el Castillo 5; permite a los miembros de la gilda regalarse recursos entre sí. Mejorarlo aumenta la cantidad transferible y reduce el "impuesto de suministro"; en el nivel 25 aumenta un 100% la velocidad de viaje de las tropas de suministro.</td></tr>
      </table></div>

      <h2>Edificios avanzados y de utilidad</h2>
      <p>Altar, Battle Hall, Prisión, Treasure Trove, Bazar, Barco de carga, Colosseum (se desbloquea en el Castillo 10), Hero Stages, Kingdom Tycoon, The Labyrinth, Santuario, Refugio, Synthesis Isle.</p>

      <h2>Edificios de soporte a Familiares</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Función</th></tr>
        <tr><td><strong>Monsterhold</strong></td><td>Centro para ver, mejorar y gestionar a los Familiares.</td></tr>
        <tr><td><strong>Fuente (Spring)</strong></td><td>Produce Anima, el recurso usado para Pactos y Skillstones.</td></tr>
        <tr><td><strong>Aguja Mística (Mystic Spire)</strong></td><td>Fusiona Anima y objetos en Pactos y Skillstones.</td></tr>
        <tr><td><strong>Gimnasio (Gym)</strong></td><td>Entrena juntos a Héroes y Familiares para mejorar su eficacia en combate.</td></tr>
      </table></div>

      <p class="sentinel-hint">Cada vez que termina una cola de construcción, el juego envía una notificación — <strong>Sentinel</strong> puede convertirla en una alarma real incluso con el teléfono en silencio: configura palabras como <code>construction</code> o <code>upgrade complete</code>. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Como los edificios de recursos quedan limitados al nivel 24 hasta que el Castillo llega al nivel 25, lleva Granjas/Canteras/Aserraderos/Minas a 24 <strong>antes</strong> de lanzarte a por el Castillo 25 — de lo contrario desperdicias la ventana en la que ya podrían estar al máximo.
      </div>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        No ignores la capacidad de la Enfermería en relación con cuántas tropas envías a recolectar o atacar. Si te golpean estando por encima de tu capacidad de curación, pierdes tropas de forma permanente en lugar de simplemente curarlas.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>El Castillo es el cuello de botella de casi todo: planifica las mejoras según su nivel, no al revés.</li>
        <li>No descuides los edificios de Familiares: se vuelven relevantes ya a mitad de partida (capítulo 12).</li>
        <li>Vigila la capacidad del Vault: protege tus recursos antes de que superen el límite.</li>
      </ul>
`,
  fr: `
      <h1>Ville et bâtiments</h1>
      <div class="hazard"></div>
      <p class="lead">Château, Caserne, Académie, Ambassade et tous les bâtiments clés de ta ville : leur rôle et l'ordre dans lequel les améliorer.</p>

      <p>Lords Mobile compte environ <strong>30 bâtiments constructibles</strong>, répartis entre bâtiments de ressources, bâtiments standards, bâtiments avancés, bâtiments de soutien aux Familiers et bâtiments utilitaires.</p>

      <h2>Bâtiments de ressources</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Produit / stocke</th></tr>
        <tr><td>Ferme (Farm)</td><td>Nourriture</td></tr>
        <tr><td>Scierie (Lumber Mill)</td><td>Bois</td></tr>
        <tr><td>Carrière (Quarry)</td><td>Pierre</td></tr>
        <tr><td>Mine (Mine)</td><td>Minerai</td></tr>
        <tr><td>Manoir (Manor)</td><td>Or</td></tr>
      </table></div>

      <h2>Principaux bâtiments standards</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Fonction</th></tr>
        <tr><td><strong>Château</strong></td><td>Bâtiment fixe et permanent. Son niveau (max 25) plafonne presque tous les autres systèmes — la plupart des bâtiments ne peuvent pas le dépasser. Atteindre le <strong>Château 25 (« C25 »)</strong> est un jalon majeur qui débloque l'Autel, la Prison et les troupes de Tier 4.</td></tr>
        <tr><td><strong>Caserne</strong></td><td>Entraîne les quatre types de troupes en utilisant Nourriture, Bois, Pierre, Minerai et Or.</td></tr>
        <tr><td><strong>Infirmerie</strong></td><td>Soigne les troupes blessées au lieu de les laisser mourir. La capacité est limitée — une contrainte clé aussi bien à l'attaque qu'à la récolte.</td></tr>
        <tr><td><strong>Académie</strong></td><td>Bâtiment permanent ; abrite tout l'arbre de recherche (Économie, Militaire, Défense, Chasse aux monstres, Familiers, Wonder Battles, Équipement).</td></tr>
        <tr><td><strong>Ambassade</strong></td><td>Bâtiment permanent ; gère les fonctions de guilde, y compris la capacité de renfort.</td></tr>
        <tr><td><strong>Vault</strong></td><td>Bâtiment fixe ; protège automatiquement une quantité plafonnée de ressources du pillage lorsque ta ville est attaquée.</td></tr>
        <tr><td><strong>Tour de guet (Watchtower)</strong></td><td>Avertit des attaques entrantes, des tentatives d'espionnage et des renforts entrants. Au niveau 25, débloque « Fortify » — un bonus défensif qui réduit aussi l'ATK des troupes attaquantes de 10%.</td></tr>
        <tr><td><strong>Atelier (Workshop)</strong></td><td>Forge et améliore l'Équipement des Héros. Atteindre le niveau 25 débloque un troisième emplacement d'accessoire combiné.</td></tr>
        <tr><td><strong>Trading Post</strong></td><td>Débloqué au Château 5 ; permet aux membres de la guilde de s'offrir des ressources. L'améliorer augmente le montant transférable et réduit la « taxe de ravitaillement » ; au niveau 25, augmente de 100% la vitesse de déplacement des troupes de ravitaillement.</td></tr>
      </table></div>

      <h2>Bâtiments avancés et utilitaires</h2>
      <p>Autel, Battle Hall, Prison, Treasure Trove, Bazar, Navire de transport, Colosseum (débloqué au Château 10), Hero Stages, Kingdom Tycoon, The Labyrinth, Sanctuaire, Abri, Synthesis Isle.</p>

      <h2>Bâtiments de soutien aux Familiers</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Fonction</th></tr>
        <tr><td><strong>Monsterhold</strong></td><td>Centre pour voir, améliorer et gérer les Familiers.</td></tr>
        <tr><td><strong>Source (Spring)</strong></td><td>Produit de l'Anima, la ressource utilisée pour les Pactes et les Skillstones.</td></tr>
        <tr><td><strong>Flèche Mystique (Mystic Spire)</strong></td><td>Fusionne l'Anima et des objets en Pactes et Skillstones.</td></tr>
        <tr><td><strong>Gymnase (Gym)</strong></td><td>Entraîne ensemble Héros et Familiers pour améliorer leur efficacité au combat.</td></tr>
      </table></div>

      <p class="sentinel-hint">Chaque fois qu'une file de construction se termine, le jeu envoie une notification — <strong>Sentinel</strong> peut la transformer en une véritable alarme même téléphone en silencieux : configure des mots-clés comme <code>construction</code> ou <code>upgrade complete</code>. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Comme les bâtiments de ressources plafonnent au niveau 24 tant que le Château n'atteint pas le niveau 25, pousse Fermes/Carrières/Scieries/Mines à 24 <strong>avant</strong> de foncer vers le Château 25 — sinon tu gaspilles la fenêtre où ils pourraient déjà être au maximum.
      </div>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Ne néglige pas la capacité de l'Infirmerie par rapport au nombre de troupes que tu envoies récolter ou attaquer. Si tu te fais frapper alors que tu dépasses ta capacité de soin, tu perds des troupes de façon permanente au lieu de simplement les soigner.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Le Château est le goulot d'étranglement de presque tout : planifie les améliorations en fonction de son niveau, pas l'inverse.</li>
        <li>Ne néglige pas les bâtiments Familiers : ils deviennent pertinents dès le milieu de partie (chapitre 12).</li>
        <li>Surveille la capacité du Vault : protège tes ressources avant qu'elles ne dépassent le plafond.</li>
      </ul>
`
};
