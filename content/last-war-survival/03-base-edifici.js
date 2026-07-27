/* Contenuto tradotto del capitolo — Last War: Survival / 03 Base & Buildings.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Base & buildings</h1>
      <div class="hazard"></div>

      <p class="lead">The base ("City") is built from discrete building types, each gated by Headquarters level. Understanding what each one does avoids wasting resources on upgrades at the wrong time.</p>

      <h2>Key buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Role</th></tr>
        <tr><td>Headquarters (HQ)</td><td>The central building; almost every other system (hero level cap, research nodes, troop tiers, building unlocks, resource-box quality) is gated behind its level. Raising it is always the top strategic priority.</td></tr>
        <tr><td>Barracks (one per troop class)</td><td>Train troops. Their level determines the maximum troop tier trainable (e.g., level 30 required for Tier 10).</td></tr>
        <tr><td>Farm / Farmland</td><td>Produces Food.</td></tr>
        <tr><td>Iron Mine / Lumberyard</td><td>Produce Iron/Steel-type resources.</td></tr>
        <tr><td>Coin Vault</td><td>Passively generates Gold/Coins, the backbone economic resource used for upgrades, troop training and general progression.</td></tr>
        <tr><td>Research Lab / Tech Center</td><td>Unlocks the research tree across five categories: vehicles, heroes, units, buildings and economy — buffs ranging from reduced construction time to attack/defense boosts.</td></tr>
        <tr><td>Gear Factory</td><td>Unlocked at HQ level 9; used to craft, upgrade and merge hero gear (see Chapter 8).</td></tr>
        <tr><td>Warehouses (Food/Iron/Gold)</td><td>Protect a portion of stored resources from being plundered; upgrading warehouse capacity also grants hero XP.</td></tr>
        <tr><td>Radar (vehicle/building)</td><td>Unlocks Radar Missions and the exploration map once available.</td></tr>
        <tr><td>Training Grounds / Armories</td><td>Support troop training and equipment logistics.</td></tr>
      </table></div>

      <h2>Building strategy</h2>
      <ul>
        <li>Keep resource levels below warehouse protection limits, especially before/during enemy raids.</li>
        <li>You can rotate your best survivors/heroes between buildings to apply their production bonuses multiple times — e.g., keep a top hero in Research Building #1 to start a research, then move them to Research Building #2 before starting the next research, capturing the bonus twice.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Don't chase HQ level alone while leaving Barracks behind: a high Headquarters with weak barracks produces a city that looks strong on paper but can't field a genuinely effective army.
      </div>

      <p class="sentinel-hint">A building upgrade or a research finishing while you're away from your phone is an easy moment to miss: set up <strong>Sentinel</strong> on words like <code>construction</code> or <code>upgrade complete</code> to turn that notification into a real alarm. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Quick tips</h2>
      <ul>
        <li>Headquarters is always the priority: almost everything else depends on its level.</li>
        <li>Rotate heroes between twin research buildings to double their bonus effect.</li>
        <li>Keep an eye on your warehouse limit, especially if you're a frequent raid target.</li>
      </ul>
`,
  es: `
      <h1>Base y edificios</h1>
      <div class="hazard"></div>

      <p class="lead">La base ("Ciudad") se construye a partir de tipos de edificios distintos, cada uno limitado por el nivel del Cuartel General. Entender qué hace cada uno evita malgastar recursos en mejoras en el momento equivocado.</p>

      <h2>Edificios clave</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Función</th></tr>
        <tr><td>Cuartel General (CG)</td><td>El edificio central; casi cualquier otro sistema (límite de nivel de héroe, nodos de investigación, tiers de tropa, desbloqueos de edificios, calidad de las cajas de recursos) depende de su nivel. Subirlo siempre es la prioridad estratégica número uno.</td></tr>
        <tr><td>Cuarteles (uno por clase de tropa)</td><td>Entrenan tropas. Su nivel determina el tier máximo entrenable (p. ej., nivel 30 requerido para Tier 10).</td></tr>
        <tr><td>Granja / Terreno de cultivo</td><td>Produce Comida.</td></tr>
        <tr><td>Mina de Hierro / Aserradero</td><td>Producen recursos de tipo Hierro/Acero.</td></tr>
        <tr><td>Bóveda de Monedas</td><td>Genera pasivamente Oro/Monedas, el recurso económico principal usado para mejoras, entrenamiento de tropas y progresión general.</td></tr>
        <tr><td>Laboratorio de Investigación / Centro Tecnológico</td><td>Desbloquea el árbol de investigación en cinco categorías: vehículos, héroes, unidades, edificios y economía — bonificaciones que van desde reducir el tiempo de construcción hasta mejoras de ataque/defensa.</td></tr>
        <tr><td>Fábrica de Equipo</td><td>Desbloqueada en el nivel 9 del CG; se usa para craftear, mejorar y fusionar el equipo de los héroes (ver capítulo 8).</td></tr>
        <tr><td>Almacenes (Comida/Hierro/Oro)</td><td>Protegen una parte de los recursos almacenados del saqueo; mejorar la capacidad del almacén también otorga XP de héroe.</td></tr>
        <tr><td>Radar (vehículo/edificio)</td><td>Desbloquea las Misiones de Radar y el mapa de exploración una vez disponible.</td></tr>
        <tr><td>Campos de entrenamiento / Armerías</td><td>Apoyan el entrenamiento de tropas y la logística de equipamiento.</td></tr>
      </table></div>

      <h2>Estrategia de construcción</h2>
      <ul>
        <li>Mantén los niveles de recursos por debajo de los límites de protección del almacén, especialmente antes/durante los asaltos enemigos.</li>
        <li>Puedes rotar a tus mejores supervivientes/héroes entre edificios para aplicar sus bonos de producción varias veces — p. ej., mantén a un héroe destacado en el Edificio de Investigación n.º 1 para iniciar una investigación, luego muévelo al Edificio de Investigación n.º 2 antes de iniciar la siguiente, capturando el bono dos veces.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        No persigas solo el nivel del CG dejando atrás los Cuarteles: un Cuartel General alto con cuarteles débiles produce una ciudad que parece fuerte sobre el papel pero no puede desplegar un ejército realmente eficaz.
      </div>

      <p class="sentinel-hint">Una mejora de edificio o una investigación que terminan lejos de tu teléfono son un momento fácil de perder: configura <strong>Sentinel</strong> con palabras como <code>construction</code> o <code>upgrade complete</code> para convertir esa notificación en una alarma real. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>El Cuartel General siempre es la prioridad: casi todo lo demás depende de su nivel.</li>
        <li>Rota héroes entre edificios de investigación gemelos para duplicar el efecto de su bono.</li>
        <li>Vigila el límite de tu almacén, especialmente si eres un objetivo frecuente de saqueo.</li>
      </ul>
`,
  fr: `
      <h1>Base et bâtiments</h1>
      <div class="hazard"></div>

      <p class="lead">La base (« Ville ») est construite à partir de types de bâtiments distincts, chacun conditionné par le niveau du Quartier Général. Comprendre le rôle de chacun évite de gaspiller des ressources sur des améliorations au mauvais moment.</p>

      <h2>Bâtiments clés</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Rôle</th></tr>
        <tr><td>Quartier Général (QG)</td><td>Le bâtiment central ; presque tous les autres systèmes (plafond de niveau des héros, nœuds de recherche, tiers de troupes, déblocages de bâtiments, qualité des coffres de ressources) dépendent de son niveau. L'augmenter est toujours la priorité stratégique numéro un.</td></tr>
        <tr><td>Casernes (une par classe de troupe)</td><td>Entraînent les troupes. Leur niveau détermine le tier maximal entraînable (ex : niveau 30 requis pour le Tier 10).</td></tr>
        <tr><td>Ferme / Terres agricoles</td><td>Produit de la Nourriture.</td></tr>
        <tr><td>Mine de Fer / Scierie</td><td>Produisent des ressources de type Fer/Acier.</td></tr>
        <tr><td>Coffre-fort à Pièces</td><td>Génère passivement de l'Or/des Pièces, la ressource économique de base utilisée pour les améliorations, l'entraînement des troupes et la progression générale.</td></tr>
        <tr><td>Labo de Recherche / Centre Technologique</td><td>Débloque l'arbre de recherche en cinq catégories : véhicules, héros, unités, bâtiments et économie — des bonus allant de la réduction du temps de construction aux améliorations d'attaque/défense.</td></tr>
        <tr><td>Usine d'Équipement</td><td>Débloquée au niveau 9 du QG ; sert à fabriquer, améliorer et fusionner l'équipement des héros (voir chapitre 8).</td></tr>
        <tr><td>Entrepôts (Nourriture/Fer/Or)</td><td>Protègent une partie des ressources stockées du pillage ; améliorer la capacité de l'entrepôt accorde aussi de l'XP de héros.</td></tr>
        <tr><td>Radar (véhicule/bâtiment)</td><td>Débloque les Missions Radar et la carte d'exploration une fois disponible.</td></tr>
        <tr><td>Terrains d'entraînement / Arsenaux</td><td>Soutiennent l'entraînement des troupes et la logistique d'équipement.</td></tr>
      </table></div>

      <h2>Stratégie de construction</h2>
      <ul>
        <li>Garde les niveaux de ressources sous les limites de protection de l'entrepôt, surtout avant/pendant les raids ennemis.</li>
        <li>Tu peux faire tourner tes meilleurs survivants/héros entre bâtiments pour appliquer plusieurs fois leurs bonus de production — ex : garde un héros de pointe dans le Bâtiment de Recherche n°1 pour lancer une recherche, puis déplace-le vers le Bâtiment de Recherche n°2 avant de lancer la suivante, capturant le bonus deux fois.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Ne poursuis pas uniquement le niveau du QG en laissant les Casernes à la traîne : un Quartier Général élevé avec des casernes faibles produit une ville qui paraît forte sur le papier mais incapable d'aligner une armée vraiment efficace.
      </div>

      <p class="sentinel-hint">Une amélioration de bâtiment ou une recherche qui se termine loin de ton téléphone est un moment facile à manquer : configure <strong>Sentinel</strong> sur des mots comme <code>construction</code> ou <code>upgrade complete</code> pour transformer cette notification en une vraie alarme. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Le Quartier Général est toujours la priorité : presque tout le reste dépend de son niveau.</li>
        <li>Fais tourner les héros entre bâtiments de recherche jumeaux pour doubler l'effet de leur bonus.</li>
        <li>Surveille la limite de ton entrepôt, surtout si tu es une cible fréquente de raids.</li>
      </ul>
`
};
