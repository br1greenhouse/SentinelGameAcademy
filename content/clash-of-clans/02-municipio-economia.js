/* Contenuto tradotto del capitolo — Clash of Clans / 02 Town Hall & economy.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Town Hall & economy</h1>
      <div class="hazard"></div>
      <p class="lead">The Town Hall is the game's clock: every building, troop and hero is gated by its level. Knowing how to prioritize upgrades in each era saves months of wasted work.</p>

      <h2>The general rule</h2>
      <p>Don't upgrade everything evenly. Pick a small set of priorities — usually <strong>Laboratory, Heroes</strong> and whatever unlocks the next attack strategy you want to use — and push those first, filling the remaining Builder time with defenses and economy buildings.</p>

      <h2>Town Hall eras</h2>
      <div class="table-wrap"><table>
        <tr><th>Era</th><th>What happens</th></tr>
        <tr><td><strong>TH1-5</strong> (foundations)</td><td>Core defenses (Cannon, Archer Tower), first Barracks/Army Camps, first storages. Sets up for Dark Elixir ahead of TH7.</td></tr>
        <tr><td><strong>TH6-9</strong> (heroes come online)</td><td>Barbarian King unlocks at TH7, Archer Queen at TH9: from here heroes should be upgrading almost continuously, since they're the best use of resources at every later stage. In the Lab: max the Dragon line first, then P.E.K.K.A, then Elixir spells (Lightning before Healing). The Dark Elixir Drill becomes a priority around TH7-9.</td></tr>
        <tr><td><strong>TH10-13</strong> (the long middle game)</td><td>The Laboratory becomes the near-universal top priority, since it's the bottleneck everything else depends on. TH10 unlocks Siege Machine deployment via the Clan Castle. TH11 introduces the Grand Warden and Eagle Artillery. TH12 unlocks the Siege Workshop. TH13 unlocks the Royal Champion and Scattershot.</td></tr>
        <tr><td><strong>TH14-18</strong> (current endgame)</td><td>More heroes, Hero Equipment (via the Blacksmith) and increasingly complex defenses (including "merged" defenses from TH16) call for more deliberate planning. TH15 unlocks the Minion Prince, the Monolith, and is the unlock floor for the Dragon Duke (via Hero Hall 9). TH16 introduces building merging. TH17 adds the Multi-Gear Tower. TH18 (current max) adds Guardians and the Super Wizard Tower. At TH18, a commonly suggested order is Laboratory → Hero Hall → Clan Castle → Spell Factory, to stay effective in wars before pure defense.</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        At any Town Hall level, the Laboratory and active Heroes should almost never sit idle. Everything else (Walls, defensive buildings, resource buildings) gets filled in around those two priorities.
      </div>

      <h2>Resource buildings</h2>
      <div class="table-wrap"><table>
        <tr><th>Building</th><th>Role</th></tr>
        <tr><td>Gold Mine</td><td>Passive Gold production.</td></tr>
        <tr><td>Elixir Collector</td><td>Passive Elixir production.</td></tr>
        <tr><td>Dark Elixir Drill</td><td>Passive Dark Elixir production; has the fewest levels of any resource building and can be "Supercharged" for a temporary boost.</td></tr>
        <tr><td>Gold / Elixir / Dark Elixir Storages</td><td>Hold resources up to a cap; higher-level storages are a favorite raid target since they hold more loot.</td></tr>
      </table></div>
      <p>The Town Hall itself shelters a percentage of the village's loot, acting as a partial "safe" even when storages are exposed. Later in the game (TH14+), Gold and Elixir become less of a bottleneck than <strong>Ore</strong> (the currency for Hero Equipment) and Clan Capital resources.</p>

      <p class="sentinel-hint">When a building upgrade or a Laboratory research finishes, the game sends a push notification — but if you miss it, your Builder sits free and unused for hours. <strong>Sentinel</strong> can watch for words like <code>upgrade</code> or <code>research</code> and alert you with a real alarm, even on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-f2p">
        <span class="box-title">F2P Note</span>
        Resource Potions (a Magic Item) boost the Gold Mine, Elixir Collector and Dark Elixir Drill all at once. The boost is time-based, not amount-based: use them only when you can log in often enough to reset production.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Always check what the <em>next</em> big Town Hall upgrade costs before spending storages on minor purchases: a Town Hall ready to jump with resources already banked saves days of waiting.
      </div>
`,
  es: `
      <h1>Ayuntamiento y economía</h1>
      <div class="hazard"></div>
      <p class="lead">El Ayuntamiento es el reloj del juego: cada edificio, tropa y héroe está limitado por su nivel. Saber priorizar las mejoras en cada era ahorra meses de trabajo desperdiciado.</p>

      <h2>La regla general</h2>
      <p>No mejores todo por igual. Elige unas pocas prioridades — normalmente <strong>Laboratorio, Héroes</strong> y lo que desbloquee la próxima estrategia de ataque que quieras usar — y empújalas primero, rellenando el tiempo restante de los Constructores con defensas y edificios económicos.</p>

      <h2>Las eras del Ayuntamiento</h2>
      <div class="table-wrap"><table>
        <tr><th>Era</th><th>Qué sucede</th></tr>
        <tr><td><strong>TH1-5</strong> (fundamentos)</td><td>Defensas básicas (Cañón, Torre de Arquero), primeros Cuarteles/Campamentos, primeros almacenes. Prepara el terreno para el Dark Elixir de cara a TH7.</td></tr>
        <tr><td><strong>TH6-9</strong> (llegan los héroes)</td><td>El Barbarian King se desbloquea en TH7, la Archer Queen en TH9: desde aquí los héroes deberían mejorarse casi sin parar, ya que son el mejor uso de recursos en cada etapa posterior. En el Laboratorio: primero la línea del Dragón, luego el P.E.K.K.A, luego los hechizos de Elixir (Rayo antes que Curación). La Perforadora de Dark Elixir se vuelve prioridad hacia TH7-9.</td></tr>
        <tr><td><strong>TH10-13</strong> (el largo medio juego)</td><td>El Laboratorio se convierte en la prioridad casi universal, ya que es el cuello de botella del que depende todo lo demás. TH10 desbloquea el despliegue de Máquinas de Asedio desde el Castillo del Clan. TH11 introduce al Grand Warden y la Eagle Artillery. TH12 desbloquea el Taller de Asedio. TH13 desbloquea al Royal Champion y el Scattershot.</td></tr>
        <tr><td><strong>TH14-18</strong> (endgame actual)</td><td>Más héroes, Equipo de Héroe (desde la Herrería) y defensas cada vez más complejas (incluidas las defensas "fusionadas" desde TH16) exigen una planificación más deliberada. TH15 desbloquea al Minion Prince, el Monolith, y es el nivel mínimo para el Dragon Duke (vía Hero Hall 9). TH16 introduce la fusión de edificios. TH17 añade la Multi-Gear Tower. TH18 (máximo actual) añade a los Guardian y la Super Wizard Tower. En TH18 se suele recomendar el orden Laboratorio → Hero Hall → Castillo del Clan → Fábrica de Hechizos, para seguir siendo efectivo en guerras antes que en pura defensa.</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        En cualquier nivel de Ayuntamiento, el Laboratorio y los Héroes activos casi nunca deberían estar parados. Todo lo demás (muros, edificios defensivos, edificios de recursos) se rellena alrededor de estas dos prioridades.
      </div>

      <h2>Edificios de recursos</h2>
      <div class="table-wrap"><table>
        <tr><th>Edificio</th><th>Rol</th></tr>
        <tr><td>Mina de Oro</td><td>Producción pasiva de Oro.</td></tr>
        <tr><td>Recolector de Elixir</td><td>Producción pasiva de Elixir.</td></tr>
        <tr><td>Perforadora de Dark Elixir</td><td>Producción pasiva de Dark Elixir; tiene menos niveles que cualquier otro edificio de recursos y puede "Sobrecargarse" para un impulso temporal.</td></tr>
        <tr><td>Almacenes de Oro / Elixir / Dark Elixir</td><td>Guardan recursos hasta un tope; los almacenes de nivel alto son el blanco favorito de los saqueos porque contienen más botín.</td></tr>
      </table></div>
      <p>El propio Ayuntamiento protege un porcentaje del botín de la aldea, actuando como una "caja fuerte" parcial incluso cuando los almacenes están expuestos. Más adelante en el juego (TH14+), Oro y Elixir dejan de ser el cuello de botella frente al <strong>Mineral</strong> (la moneda del Equipo de Héroe) y los recursos del Clan Capital.</p>

      <p class="sentinel-hint">Cuando termina una mejora de edificio o una investigación de Laboratorio, el juego envía una notificación push — pero si te la pierdes, tu Constructor queda libre y sin usar durante horas. <strong>Sentinel</strong> puede vigilar palabras como <code>upgrade</code> o <code>research</code> y avisarte con una alarma real, incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-f2p">
        <span class="box-title">Nota F2P</span>
        Las Pociones de Recursos (un Objeto Mágico) potencian a la vez la Mina de Oro, el Recolector de Elixir y la Perforadora de Dark Elixir. El impulso es por tiempo, no por cantidad: úsalas solo cuando puedas entrar a menudo para reiniciar la producción.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Mira siempre cuánto cuesta la <em>próxima</em> gran mejora del Ayuntamiento antes de vaciar los almacenes en compras menores: un Ayuntamiento listo para subir con los recursos ya guardados ahorra días de espera.
      </div>
`,
  fr: `
      <h1>Hôtel de Ville et économie</h1>
      <div class="hazard"></div>
      <p class="lead">L'Hôtel de Ville est l'horloge du jeu : chaque bâtiment, troupe et héros est conditionné par son niveau. Savoir prioriser les améliorations à chaque époque évite des mois de travail gaspillé.</p>

      <h2>La règle générale</h2>
      <p>N'améliore pas tout à égalité. Choisis quelques priorités — en général <strong>Laboratoire, Héros</strong> et tout ce qui débloque la prochaine stratégie d'attaque que tu veux utiliser — et pousse-les en premier, en remplissant le temps restant des Constructeurs avec des défenses et des bâtiments économiques.</p>

      <h2>Les époques de l'Hôtel de Ville</h2>
      <div class="table-wrap"><table>
        <tr><th>Époque</th><th>Ce qui se passe</th></tr>
        <tr><td><strong>HDV1-5</strong> (fondations)</td><td>Défenses de base (Canon, Tour d'Archère), premières Casernes/Camps, premiers entrepôts. Prépare le terrain pour le Dark Elixir avant l'HDV7.</td></tr>
        <tr><td><strong>HDV6-9</strong> (arrivée des héros)</td><td>Le Barbarian King se débloque à l'HDV7, l'Archer Queen à l'HDV9 : à partir de là, les héros doivent être améliorés presque en continu, car ce sont le meilleur usage des ressources à chaque étape suivante. Au Laboratoire : d'abord la ligne Dragon, puis le P.E.K.K.A, puis les sorts d'Elixir (Foudre avant Soin). La Foreuse de Dark Elixir devient prioritaire vers l'HDV7-9.</td></tr>
        <tr><td><strong>HDV10-13</strong> (le long milieu de partie)</td><td>Le Laboratoire devient la priorité quasi universelle, car c'est le goulot d'étranglement dont dépend tout le reste. L'HDV10 débloque le déploiement des Machines de Siège depuis le Château de Clan. L'HDV11 introduit le Grand Warden et l'Eagle Artillery. L'HDV12 débloque l'Atelier de Siège. L'HDV13 débloque le Royal Champion et le Scattershot.</td></tr>
        <tr><td><strong>HDV14-18</strong> (endgame actuel)</td><td>Plus de héros, l'Équipement de Héros (via la Forge) et des défenses de plus en plus complexes (dont les défenses « fusionnées » dès l'HDV16) demandent une planification plus réfléchie. L'HDV15 débloque le Minion Prince, le Monolith, et constitue le seuil pour le Dragon Duke (via Hero Hall 9). L'HDV16 introduit la fusion des bâtiments. L'HDV17 ajoute la Multi-Gear Tower. L'HDV18 (maximum actuel) ajoute les Guardian et la Super Wizard Tower. À l'HDV18, l'ordre souvent conseillé est Laboratoire → Hero Hall → Château de Clan → Fabrique de Sorts, pour rester efficace en guerre avant la pure défense.</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        À n'importe quel niveau d'Hôtel de Ville, le Laboratoire et les Héros actifs ne doivent presque jamais rester inactifs. Tout le reste (murs, bâtiments défensifs, bâtiments de ressources) se remplit autour de ces deux priorités.
      </div>

      <h2>Bâtiments de ressources</h2>
      <div class="table-wrap"><table>
        <tr><th>Bâtiment</th><th>Rôle</th></tr>
        <tr><td>Mine d'Or</td><td>Production passive d'Or.</td></tr>
        <tr><td>Collecteur d'Elixir</td><td>Production passive d'Elixir.</td></tr>
        <tr><td>Foreuse de Dark Elixir</td><td>Production passive de Dark Elixir ; a le moins de niveaux de tous les bâtiments de ressources et peut être « Surchargée » pour un boost temporaire.</td></tr>
        <tr><td>Réserves d'Or / d'Elixir / de Dark Elixir</td><td>Conservent les ressources jusqu'à un plafond ; les réserves de haut niveau sont la cible favorite des raids car elles contiennent plus de butin.</td></tr>
      </table></div>
      <p>L'Hôtel de Ville lui-même met à l'abri un pourcentage du butin du village, agissant comme un « coffre-fort » partiel même quand les réserves sont exposées. Plus tard dans le jeu (HDV14+), l'Or et l'Elixir deviennent un goulot d'étranglement moins important que le <strong>Minerai</strong> (la monnaie de l'Équipement de Héros) et les ressources du Clan Capital.</p>

      <p class="sentinel-hint">Quand une amélioration de bâtiment ou une recherche au Laboratoire se termine, le jeu envoie une notification push — mais si tu la rates, ton Constructeur reste libre et inutilisé pendant des heures. <strong>Sentinel</strong> peut surveiller des mots comme <code>upgrade</code> ou <code>research</code> et t'alerter avec une vraie alarme, même en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-f2p">
        <span class="box-title">Note F2P</span>
        Les Potions de Ressources (un Objet Magique) boostent en même temps la Mine d'Or, le Collecteur d'Elixir et la Foreuse de Dark Elixir. Le boost est limité dans le temps, pas en quantité : utilise-les seulement quand tu peux te connecter souvent pour relancer la production.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Regarde toujours combien coûte la <em>prochaine</em> grande amélioration de l'Hôtel de Ville avant de vider les réserves dans des achats mineurs : un Hôtel de Ville prêt à monter avec les ressources déjà en réserve économise des jours d'attente.
      </div>
`
};
