/* Contenuto tradotto del capitolo — Rise of Kingdoms / 05 Resource management.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Resources</h1>
      <div class="hazard"></div>
      <p class="lead">Food, Wood, Stone, Gold and Gems: how to produce, gather and protect them from raiding.</p>

      <h2>The four core resources, plus the premium currency</h2>
      <ul>
        <li><strong>Food</strong> feeds troops (upkeep) and is required for training.</li>
        <li><strong>Wood</strong> covers construction and upgrades.</li>
        <li><strong>Stone</strong> covers construction and becomes the main bottleneck at higher city levels.</li>
        <li><strong>Gold</strong> covers research and higher-tier troop training.</li>
        <li><strong>Gems</strong> buy speedups, VIP points, resource packs, civilization/name changes, and commander sculptures.</li>
      </ul>

      <h2>Two ways to gain resources</h2>
      <ol>
        <li><strong>City production</strong> — your Farm, Lumber Mill, Quarry, and Gold Mine buildings generate resources passively, capped at roughly 10 hours' worth of accumulation; collect about twice a day.</li>
        <li><strong>Map gathering</strong> — send troops, led by a Commander, to resource tiles on the world map. Regular kingdom-map nodes commonly top out around level 6 near the map center; endgame Lost Kingdom maps go up to around level 9. Gathering troops are vulnerable to attack while en route or on the tile, so gather close to your city or your alliance's territory and coordinate with alliance members for backup.</li>
      </ol>

      <h2>Protecting your resources</h2>
      <ul>
        <li>The <strong>Storehouse</strong> sets a flat, non-percentage capacity of each resource type that cannot be plundered — anything stockpiled above that capacity is vulnerable to raiding. Upgrading Storehouse permanently raises this protected capacity.</li>
        <li>Resources still sitting uncollected inside production buildings are also safe from raids.</li>
        <li>Converting excess raw resources into <strong>resource item packs</strong> (via the Courier Station's traveling merchant, events, or the Trading Post) removes them from your raidable stockpile entirely — items in your inventory carry no plunder risk and no storage cap.</li>
        <li>Temporary Shields (from items, events, or new-player protection) blanket-protect your whole city, including uncollected production, for a set duration — separate from Storehouse's permanent cap.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Converting resource tokens/packs into raw resources before you actually need them. The moment they land in your stockpile they become raidable above your Storehouse cap — keep them "banked" as items until the moment of use.
      </div>

      <h2>Boosting resource output</h2>
      <ul>
        <li><strong>VIP levels</strong> grant stacking passive bonuses to production and gathering speed (chapter 6).</li>
        <li><strong>Civilization bonuses</strong> (chapter 3).</li>
        <li><strong>Academy technology</strong> — direct percentage boosts to gathering and production per resource type (chapter 12).</li>
        <li><strong>Kingdom Titles</strong> — e.g. Prime Minister gives +15% resource production and +10% building speed; Queen gives +15% gathering speed (chapter 7).</li>
        <li><strong>Farm accounts</strong> — many mid/late-game players build up secondary "farm" accounts purely for economy and funnel their production to a main account via the Trading Post (subject to a tax reduced by Trading Post level).</li>
      </ul>

      <h2>Quick tips</h2>
      <ul>
        <li>Stone becomes the real bottleneck in the mid-game: plan upgrades and research accordingly.</li>
        <li>A resource pack sitting in your inventory is never at risk: keep it until you actually need it.</li>
        <li>Gather close to your alliance's territory: proximity determines how fast you can get reinforced.</li>
      </ul>
`,
  es: `
      <h1>Recursos</h1>
      <div class="hazard"></div>
      <p class="lead">Food, Wood, Stone, Gold y Gems: cómo producirlos, recolectarlos en el mapa y protegerlos del saqueo.</p>

      <h2>Los cuatro recursos principales, más la moneda premium</h2>
      <ul>
        <li><strong>Food</strong> alimenta a las tropas (mantenimiento) y es necesario para entrenar.</li>
        <li><strong>Wood</strong> cubre construcción y mejoras.</li>
        <li><strong>Stone</strong> cubre la construcción y se convierte en el principal cuello de botella en niveles de ciudad más altos.</li>
        <li><strong>Gold</strong> cubre la investigación y el entrenamiento de tropas de tier superior.</li>
        <li><strong>Gems</strong> compran speedups, puntos VIP, paquetes de recursos, cambios de civilización/nombre, y esculturas de comandantes.</li>
      </ul>

      <h2>Dos formas de obtener recursos</h2>
      <ol>
        <li><strong>Producción de ciudad</strong> — tus edificios Farm, Lumber Mill, Quarry y Gold Mine generan recursos de forma pasiva, con un tope de unas 10 horas de acumulación; recoge unas dos veces al día.</li>
        <li><strong>Recolección en el mapa</strong> — envía tropas, lideradas por un Comandante, a tiles de recursos en el mapa del mundo. Los nodos normales del mapa de reino suelen llegar hasta el nivel 6 cerca del centro del mapa; los mapas endgame del Lost Kingdom llegan hasta cerca del nivel 9. Las tropas recolectando son vulnerables a ataques mientras están en camino o en la tile, así que recolecta cerca de tu ciudad o del territorio de tu alianza y coordínate con miembros de la alianza para apoyo.</li>
      </ol>

      <h2>Protegiendo tus recursos</h2>
      <ul>
        <li>El <strong>Storehouse</strong> establece una capacidad fija, no porcentual, de cada tipo de recurso que no puede ser saqueada — todo lo acumulado por encima de esa capacidad es vulnerable al saqueo. Mejorar el Storehouse aumenta permanentemente esta capacidad protegida.</li>
        <li>Los recursos que aún no has recogido dentro de los edificios de producción también están a salvo de saqueos.</li>
        <li>Convertir el exceso de recursos en bruto en <strong>paquetes de recursos</strong> (mediante el mercader itinerante de la Courier Station, eventos, o el Trading Post) los elimina por completo de tu stock saqueable — los objetos en tu inventario no tienen riesgo de saqueo ni límite de almacenamiento.</li>
        <li>Los escudos temporales (de objetos, eventos, o protección de nuevo jugador) protegen toda tu ciudad, incluida la producción sin recoger, durante una duración determinada — algo separado del tope permanente del Storehouse.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Convertir fichas/paquetes de recursos en recursos en bruto antes de necesitarlos realmente. En el momento en que caen en tu stock se vuelven saqueables por encima del tope de tu Storehouse — mantenlos "guardados" como objetos hasta el momento de usarlos.
      </div>

      <h2>Aumentar la producción de recursos</h2>
      <ul>
        <li><strong>Niveles VIP</strong> otorgan bonos pasivos acumulativos a la velocidad de producción y recolección (capítulo 6).</li>
        <li><strong>Bonos de Civilización</strong> (capítulo 3).</li>
        <li><strong>Tecnología de Academy</strong> — bonos porcentuales directos a recolección y producción por tipo de recurso (capítulo 12).</li>
        <li><strong>Títulos del Reino</strong> — p. ej. Prime Minister da +15% producción de recursos y +10% velocidad de construcción; Queen da +15% velocidad de recolección (capítulo 7).</li>
        <li><strong>Cuentas farm</strong> — muchos jugadores de mitad/final de partida construyen cuentas "farm" secundarias solo para economía y canalizan su producción a una cuenta principal mediante el Trading Post (sujeto a un impuesto reducido según el nivel del Trading Post).</li>
      </ul>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Stone se convierte en el verdadero cuello de botella en la mitad de la partida: planifica mejoras e investigación en consecuencia.</li>
        <li>Un paquete de recursos guardado en tu inventario nunca corre riesgo: consérvalo hasta que realmente lo necesites.</li>
        <li>Recolecta cerca del territorio de tu alianza: la proximidad determina cuán rápido puedes recibir refuerzos.</li>
      </ul>
`,
  fr: `
      <h1>Ressources</h1>
      <div class="hazard"></div>
      <p class="lead">Food, Wood, Stone, Gold et Gems : comment les produire, les récolter sur la carte et les protéger du pillage.</p>

      <h2>Les quatre ressources principales, plus la monnaie premium</h2>
      <ul>
        <li><strong>Food</strong> nourrit les troupes (entretien) et est nécessaire à l'entraînement.</li>
        <li><strong>Wood</strong> couvre la construction et les améliorations.</li>
        <li><strong>Stone</strong> couvre la construction et devient le principal goulot d'étranglement aux niveaux de ville élevés.</li>
        <li><strong>Gold</strong> couvre la recherche et l'entraînement des troupes de tier supérieur.</li>
        <li><strong>Gems</strong> achètent des speedups, des points VIP, des packs de ressources, des changements de civilisation/nom, et des sculptures de commandants.</li>
      </ul>

      <h2>Deux façons d'obtenir des ressources</h2>
      <ol>
        <li><strong>Production de ville</strong> — tes bâtiments Farm, Lumber Mill, Quarry et Gold Mine génèrent des ressources passivement, plafonnées à environ 10 heures d'accumulation ; récolte environ deux fois par jour.</li>
        <li><strong>Récolte sur la carte</strong> — envoie des troupes, menées par un Commandant, vers des tuiles de ressources sur la carte du monde. Les nœuds classiques de la carte du royaume plafonnent généralement autour du niveau 6 près du centre de la carte ; les cartes de fin de partie du Lost Kingdom montent jusqu'à environ le niveau 9. Les troupes en récolte sont vulnérables aux attaques en chemin ou sur la tuile, donc récolte près de ta ville ou du territoire de ton alliance et coordonne-toi avec des membres de l'alliance pour du soutien.</li>
      </ol>

      <h2>Protéger tes ressources</h2>
      <ul>
        <li>Le <strong>Storehouse</strong> fixe une capacité fixe, non en pourcentage, de chaque type de ressource qui ne peut pas être pillée — tout ce qui est stocké au-delà de cette capacité est vulnérable au pillage. Améliorer le Storehouse augmente définitivement cette capacité protégée.</li>
        <li>Les ressources encore non récoltées dans les bâtiments de production sont elles aussi à l'abri des raids.</li>
        <li>Convertir l'excédent de ressources brutes en <strong>packs de ressources</strong> (via le marchand itinérant de la Courier Station, des événements, ou le Trading Post) les retire entièrement de ton stock pillable — les objets de ton inventaire ne comportent aucun risque de pillage ni de plafond de stockage.</li>
        <li>Les boucliers temporaires (issus d'objets, d'événements, ou de la protection nouveau joueur) protègent toute ta ville, y compris la production non récoltée, pour une durée limitée — distincts du plafond permanent du Storehouse.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Convertir des jetons/packs de ressources en ressources brutes avant d'en avoir réellement besoin. Dès qu'ils atterrissent dans ton stock, ils deviennent pillables au-delà du plafond de ton Storehouse — garde-les « en banque » sous forme d'objets jusqu'au moment de les utiliser.
      </div>

      <h2>Augmenter la production de ressources</h2>
      <ul>
        <li><strong>Niveaux VIP</strong> accordent des bonus passifs cumulables à la vitesse de production et de récolte (chapitre 6).</li>
        <li><strong>Bonus de Civilisation</strong> (chapitre 3).</li>
        <li><strong>Technologie de l'Academy</strong> — bonus en pourcentage directs à la récolte et à la production par type de ressource (chapitre 12).</li>
        <li><strong>Titres du Royaume</strong> — par ex. Prime Minister donne +15% production de ressources et +10% vitesse de construction ; Queen donne +15% vitesse de récolte (chapitre 7).</li>
        <li><strong>Comptes farm</strong> — de nombreux joueurs de milieu/fin de partie créent des comptes « farm » secondaires uniquement pour l'économie et canalisent leur production vers un compte principal via le Trading Post (soumis à une taxe réduite selon le niveau du Trading Post).</li>
      </ul>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Stone devient le vrai goulot d'étranglement en milieu de partie : planifie les améliorations et la recherche en conséquence.</li>
        <li>Un pack de ressources dans ton inventaire n'est jamais en danger : garde-le jusqu'à en avoir vraiment besoin.</li>
        <li>Récolte près du territoire de ton alliance : la proximité détermine la vitesse à laquelle tu peux être renforcé.</li>
      </ul>
`
};
