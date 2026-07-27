/* Contenuto tradotto del capitolo — State of Survival / 08 Troops.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Troops</h1>
      <div class="hazard"></div>

      <h2>Troop classes</h2>
      <p>Three types, each trained in a dedicated building, each with two sub-types governing counter matchups:</p>
      <ul>
        <li><strong>Infantry</strong> (Barracks) — very high HP/Defense, very low Attack. Absorbs incoming damage first. Sub-types: <strong>Shields</strong> (bonus Defense vs. Hunters), <strong>Shotguns</strong> (bonus Defense vs. Riders).</li>
        <li><strong>Riders</strong> (Garage) — mid-tier HP/Defense, higher Attack. Sub-types: <strong>ATVs</strong> (bonus damage vs. Infantry), <strong>Bikers</strong> (bonus damage vs. Hunters, and can bypass Infantry to hit Hunters directly on special passes).</li>
        <li><strong>Hunters</strong> (Range) — best Attack/Lethality, most fragile, positioned back line. Sub-types: <strong>Bows</strong> (bonus damage vs. Infantry), <strong>Snipers</strong> (bonus damage vs. Riders, can bypass Infantry to hit Riders directly).</li>
      </ul>
      <p><strong>Battle resolution order is fixed</strong>: Infantry → Rider → Hunter, front to back. All damage lands on Infantry first; only once Infantry is dead does damage reach Riders, then Hunters.</p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Fielding a mono-type army without understanding this resolution order is explicitly discouraged by the developers themselves, who recommend a baseline 1:1:1 ratio as a "safe" starting point.
      </div>

      <h2>Troop tiers (T1–T12 current max)</h2>
      <p>Regular tiers T1–T10 unlock via building level. Sample tier names:</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infantry</th><th>Hunter</th><th>Rider</th></tr>
        <tr><td>T1</td><td>Grunts</td><td>Archers</td><td>Rovers</td></tr>
        <tr><td>T5</td><td>Slashers</td><td>Crossbows</td><td>Hogs</td></tr>
        <tr><td>T9</td><td>Maulers</td><td>Nightstalkers</td><td>Demon Raiders</td></tr>
        <tr><td>T10</td><td>Executioners</td><td>Bullseyes</td><td>Death Cruisers</td></tr>
        <tr><td>T11</td><td>Pulse Elites</td><td>Pulse Assassins</td><td>Pulse Predators</td></tr>
        <tr><td>T12</td><td>Crystal Vanguards</td><td>Crystal Arbalists</td><td>Crystal Riders</td></tr>
      </table></div>
      <ul>
        <li><strong>T9</strong> unlocks at building level 26, <strong>T10</strong> at level 30 (same gating across all three troop-training buildings).</li>
        <li><strong>T11</strong> requires building the <strong>Institute of Plasma</strong>, researching a Plasma Development branch up to level 5.</li>
        <li><strong>T12</strong> requires the <strong>Crystal Energy Institute</strong> (available once a server/state is 86+ weeks old) plus T11 already fully unlocked, and runs on a separate resource, <strong>Crystal Essence</strong>.</li>
        <li>No confirmed T13 as of this research — T12 is the current ceiling for named tiers. A parallel "Plasma Level" system also adds continuous stat bonuses to training buildings beyond level 30, stacking on top of the named tiers.</li>
      </ul>

      <h2>Training & promotion</h2>
      <p>Base training time scales dramatically from tier to tier (roughly a 12x increase from T1 to T10). Training speed is boosted by Training Camp buildings, the "Training Routines" research line, Chief Talent projects, and temporary purchased buffs.</p>
      <p>There is no "merge 3-into-1" system — instead, troops are directly <strong>upgraded</strong>: select an existing lower-tier stack in the Train tab and convert some/all of it to the next tier. Upgrading is generally more resource-efficient than training fresh troops at the same power gain.</p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Upgrading all troops of a sub-type (e.g., all Snipers) to a higher tier can lose that sub-type's specialization if not tracked carefully — always check whether the upgraded tier keeps the counter role you need.
      </div>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Once a new tier unlocks, upgrade accumulated lower-tier stock first, then train fresh troops at the new tier once the upgrade pool is exhausted — but keep some lower-tier depth as insurance against a wipe rather than going 100% top-tier.
      </div>

      <p class="sentinel-hint">Troop training that finishes while you're away from your phone is wasted queue time: set up <strong>Sentinel</strong> on words like <code>training</code> or <code>troops ready</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Composition guidelines</h2>
      <ul>
        <li>Generalist baseline: <strong>Infantry 40% / Hunters 30% / Riders 30%</strong>, shifting toward <strong>Infantry 30% / Hunters 40% / Riders 30%</strong> at higher tiers/PvP.</li>
        <li>Settlement-attack-specific: <strong>Infantry 60% / Rider 20% / Hunter 20%</strong>.</li>
        <li><strong>Mono compositions</strong> are used specifically for rallies led by a troop-type-specialized hero (type-specific buffs are wasted on mismatched troops — sending the wrong troop type into a mono rally is considered poor rally etiquette and can get a player kicked from the rally).</li>
        <li><strong>Mono is discouraged for garrison/defense</strong> — mixed compositions are strongly favored there, since Infantry alone can't deal enough damage while Riders/Hunters are too vulnerable without a front line.</li>
      </ul>

      <h2>Quick tips</h2>
      <ul>
        <li>Promote, don't train from scratch, once the next tier becomes available: it costs a fraction of the time for a nearly identical result.</li>
        <li>Respect the Infantry → Rider → Hunter resolution order: a mono army with no front line collapses fast.</li>
        <li>Mono comps are fine for rallies led by a specialized hero; garrison and defense always want mixed compositions.</li>
      </ul>
`,
  es: `
      <h1>Tropas</h1>
      <div class="hazard"></div>

      <h2>Clases de tropa</h2>
      <p>Tres tipos, cada uno entrenado en un edificio dedicado, cada uno con dos sub-tipos que rigen los emparejamientos de contra:</p>
      <ul>
        <li><strong>Infantería</strong> (Barracks) — HP/Defensa muy altos, Ataque muy bajo. Absorbe el daño entrante primero. Sub-tipos: <strong>Shields</strong> (bono de Defensa contra Hunters), <strong>Shotguns</strong> (bono de Defensa contra Riders).</li>
        <li><strong>Riders</strong> (Garage) — HP/Defensa de nivel medio, Ataque más alto. Sub-tipos: <strong>ATVs</strong> (bono de daño contra Infantería), <strong>Bikers</strong> (bono de daño contra Hunters, y pueden saltarse la Infantería para golpear a los Hunters directamente en pases especiales).</li>
        <li><strong>Hunters</strong> (Range) — el mejor Ataque/Letalidad, los más frágiles, posicionados en retaguardia. Sub-tipos: <strong>Bows</strong> (bono de daño contra Infantería), <strong>Snipers</strong> (bono de daño contra Riders, pueden saltarse la Infantería para golpear a los Riders directamente).</li>
      </ul>
      <p><strong>El orden de resolución de la batalla es fijo</strong>: Infantería → Rider → Hunter, de adelante hacia atrás. Todo el daño incide primero sobre la Infantería; solo una vez que la Infantería ha muerto, el daño llega a los Riders, y luego a los Hunters.</p>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Desplegar un ejército de un solo tipo sin entender este orden de resolución está explícitamente desaconsejado por los propios desarrolladores, que recomiendan una proporción base 1:1:1 como punto de partida "seguro".
      </div>

      <h2>Tiers de tropa (T1–T12 tope actual)</h2>
      <p>Los tiers regulares T1–T10 se desbloquean según el nivel del edificio. Algunos nombres de tier a modo de ejemplo:</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infantería</th><th>Hunter</th><th>Rider</th></tr>
        <tr><td>T1</td><td>Grunts</td><td>Archers</td><td>Rovers</td></tr>
        <tr><td>T5</td><td>Slashers</td><td>Crossbows</td><td>Hogs</td></tr>
        <tr><td>T9</td><td>Maulers</td><td>Nightstalkers</td><td>Demon Raiders</td></tr>
        <tr><td>T10</td><td>Executioners</td><td>Bullseyes</td><td>Death Cruisers</td></tr>
        <tr><td>T11</td><td>Pulse Elites</td><td>Pulse Assassins</td><td>Pulse Predators</td></tr>
        <tr><td>T12</td><td>Crystal Vanguards</td><td>Crystal Arbalists</td><td>Crystal Riders</td></tr>
      </table></div>
      <ul>
        <li><strong>T9</strong> se desbloquea al nivel 26 del edificio, <strong>T10</strong> al nivel 30 (misma restricción en los tres edificios de entrenamiento de tropas).</li>
        <li><strong>T11</strong> requiere construir el <strong>Institute of Plasma</strong>, investigando una rama Plasma Development hasta el nivel 5.</li>
        <li><strong>T12</strong> requiere el <strong>Crystal Energy Institute</strong> (disponible una vez que un servidor/Estado tiene 86+ semanas de antigüedad) más el T11 ya completamente desbloqueado, y funciona con un recurso separado, la <strong>Crystal Essence</strong>.</li>
        <li>No hay T13 confirmado en el momento de esta investigación — T12 es el tope actual para los tiers nombrados. Un sistema paralelo de "Nivel Plasma" también añade bonos de estadísticas continuos a los edificios de entrenamiento más allá del nivel 30, acumulándose sobre los tiers nombrados.</li>
      </ul>

      <h2>Entrenamiento y promoción</h2>
      <p>El tiempo base de entrenamiento escala drásticamente de tier a tier (aproximadamente un aumento de 12x de T1 a T10). La velocidad de entrenamiento se potencia con los edificios Training Camp, la línea de investigación "Training Routines", los proyectos de Talentos del Jefe y los buffs temporales comprados.</p>
      <p>No existe un sistema de "fusionar 3 en 1" — en cambio, las tropas se <strong>mejoran</strong> directamente: selecciona una pila existente de tier inferior en la pestaña Train y convierte parte o toda ella al siguiente tier. Mejorar es generalmente más eficiente en recursos que entrenar tropas nuevas para la misma ganancia de poder.</p>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Mejorar todas las tropas de un sub-tipo (p. ej., todos los Snipers) a un tier superior puede hacer perder la especialización de ese sub-tipo si no se controla con cuidado — comprueba siempre si el tier mejorado conserva el rol de contra que necesitas.
      </div>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Cuando se desbloquea un nuevo tier, mejora primero el stock acumulado de tier inferior, luego entrena tropas nuevas en el nuevo tier una vez agotado el pool de mejora — pero mantén algo de profundidad en tiers inferiores como seguro contra un wipe, en lugar de ir al 100% top-tier.
      </div>

      <p class="sentinel-hint">Un entrenamiento de tropas que termina mientras estás lejos de tu teléfono es tiempo de cola desperdiciado: configura <strong>Sentinel</strong> con palabras como <code>training</code> o <code>troops ready</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Pautas de composición</h2>
      <ul>
        <li>Base generalista: <strong>Infantería 40% / Hunters 30% / Riders 30%</strong>, desplazándose hacia <strong>Infantería 30% / Hunters 40% / Riders 30%</strong> en tiers más altos/PvP.</li>
        <li>Específica para ataque a asentamientos: <strong>Infantería 60% / Rider 20% / Hunter 20%</strong>.</li>
        <li>Las <strong>composiciones mono</strong> se usan específicamente para rallies liderados por un héroe especializado en un tipo de tropa (los bonos específicos de tipo se desperdician en tropas no coincidentes — enviar el tipo de tropa equivocado a un rally mono se considera mala etiqueta de rally y puede hacer que te expulsen del rally).</li>
        <li><strong>Se desaconseja el mono para guarnición/defensa</strong> — las composiciones mixtas son muy favorecidas allí, ya que la Infantería sola no puede infligir suficiente daño mientras que Riders/Hunters son demasiado vulnerables sin una primera línea.</li>
      </ul>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Promueve, no entrenes desde cero, una vez que el siguiente tier esté disponible: cuesta una fracción del tiempo por un resultado casi idéntico.</li>
        <li>Respeta el orden de resolución Infantería → Rider → Hunter: un ejército mono sin primera línea colapsa rápido.</li>
        <li>Las comps mono están bien para rallies liderados por un héroe especializado; guarnición y defensa siempre quieren composiciones mixtas.</li>
      </ul>
`,
  fr: `
      <h1>Troupes</h1>
      <div class="hazard"></div>

      <h2>Classes de troupes</h2>
      <p>Trois types, chacun entraîné dans un bâtiment dédié, chacun avec deux sous-types régissant les matchups de contre :</p>
      <ul>
        <li><strong>Infanterie</strong> (Barracks) — PV/Défense très élevés, Attaque très basse. Absorbe les dégâts entrants en premier. Sous-types : <strong>Shields</strong> (bonus de Défense contre les Hunters), <strong>Shotguns</strong> (bonus de Défense contre les Riders).</li>
        <li><strong>Riders</strong> (Garage) — PV/Défense de niveau moyen, Attaque plus élevée. Sous-types : <strong>ATVs</strong> (bonus de dégâts contre l'Infanterie), <strong>Bikers</strong> (bonus de dégâts contre les Hunters, et peuvent contourner l'Infanterie pour frapper les Hunters directement lors de passages spéciaux).</li>
        <li><strong>Hunters</strong> (Range) — meilleure Attaque/Létalité, les plus fragiles, positionnés à l'arrière. Sous-types : <strong>Bows</strong> (bonus de dégâts contre l'Infanterie), <strong>Snipers</strong> (bonus de dégâts contre les Riders, peuvent contourner l'Infanterie pour frapper les Riders directement).</li>
      </ul>
      <p><strong>L'ordre de résolution du combat est fixe</strong> : Infanterie → Rider → Hunter, de l'avant vers l'arrière. Tous les dégâts touchent d'abord l'Infanterie ; ce n'est qu'une fois l'Infanterie morte que les dégâts atteignent les Riders, puis les Hunters.</p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Déployer une armée mono-type sans comprendre cet ordre de résolution est explicitement déconseillé par les développeurs eux-mêmes, qui recommandent un ratio de base 1:1:1 comme point de départ « sûr ».
      </div>

      <h2>Tiers de troupes (T1–T12 plafond actuel)</h2>
      <p>Les tiers réguliers T1–T10 se débloquent selon le niveau du bâtiment. Quelques noms de tier à titre d'exemple :</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infanterie</th><th>Hunter</th><th>Rider</th></tr>
        <tr><td>T1</td><td>Grunts</td><td>Archers</td><td>Rovers</td></tr>
        <tr><td>T5</td><td>Slashers</td><td>Crossbows</td><td>Hogs</td></tr>
        <tr><td>T9</td><td>Maulers</td><td>Nightstalkers</td><td>Demon Raiders</td></tr>
        <tr><td>T10</td><td>Executioners</td><td>Bullseyes</td><td>Death Cruisers</td></tr>
        <tr><td>T11</td><td>Pulse Elites</td><td>Pulse Assassins</td><td>Pulse Predators</td></tr>
        <tr><td>T12</td><td>Crystal Vanguards</td><td>Crystal Arbalists</td><td>Crystal Riders</td></tr>
      </table></div>
      <ul>
        <li><strong>T9</strong> se débloque au niveau 26 du bâtiment, <strong>T10</strong> au niveau 30 (même contrainte sur les trois bâtiments d'entraînement de troupes).</li>
        <li><strong>T11</strong> nécessite de construire l'<strong>Institute of Plasma</strong>, en recherchant une branche Plasma Development jusqu'au niveau 5.</li>
        <li><strong>T12</strong> nécessite le <strong>Crystal Energy Institute</strong> (disponible une fois qu'un serveur/État a 86+ semaines d'existence) plus le T11 déjà entièrement débloqué, et fonctionne avec une ressource séparée, la <strong>Crystal Essence</strong>.</li>
        <li>Aucun T13 confirmé au moment de cette recherche — le T12 est le plafond actuel pour les tiers nommés. Un système parallèle de « Niveau Plasma » ajoute aussi des bonus de statistiques continus aux bâtiments d'entraînement au-delà du niveau 30, se cumulant avec les tiers nommés.</li>
      </ul>

      <h2>Entraînement et promotion</h2>
      <p>Le temps d'entraînement de base augmente radicalement d'un tier à l'autre (environ une multiplication par 12 de T1 à T10). La vitesse d'entraînement est boostée par les bâtiments Training Camp, la ligne de recherche « Training Routines », les projets de Talents du Chef et les buffs temporaires achetés.</p>
      <p>Il n'y a pas de système « fusionner 3 en 1 » — à la place, les troupes sont directement <strong>améliorées</strong> : sélectionne un stock existant de tier inférieur dans l'onglet Train et convertis-en tout ou partie vers le tier suivant. Améliorer est généralement plus efficace en ressources qu'entraîner de nouvelles troupes pour le même gain de puissance.</p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Améliorer toutes les troupes d'un sous-type (par ex. tous les Snipers) vers un tier supérieur peut faire perdre la spécialisation de ce sous-type si ce n'est pas suivi attentivement — vérifie toujours si le tier amélioré conserve le rôle de contre dont tu as besoin.
      </div>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Quand un nouveau tier se débloque, améliore d'abord le stock accumulé de tier inférieur, puis entraîne de nouvelles troupes au nouveau tier une fois le pool d'amélioration épuisé — mais garde une certaine profondeur de tier inférieur en assurance contre un wipe plutôt que de passer à 100% top-tier.
      </div>

      <p class="sentinel-hint">Un entraînement de troupes qui se termine loin de ton téléphone, c'est du temps de file perdu : configure <strong>Sentinel</strong> sur des mots comme <code>training</code> ou <code>troops ready</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Lignes directrices de composition</h2>
      <ul>
        <li>Base généraliste : <strong>Infanterie 40% / Hunters 30% / Riders 30%</strong>, glissant vers <strong>Infanterie 30% / Hunters 40% / Riders 30%</strong> aux tiers supérieurs/en PvP.</li>
        <li>Spécifique à l'attaque de colonie : <strong>Infanterie 60% / Rider 20% / Hunter 20%</strong>.</li>
        <li>Les <strong>compositions mono</strong> sont utilisées spécifiquement pour les rallies dirigés par un héros spécialisé dans un type de troupe (les bonus spécifiques au type sont gaspillés sur des troupes non assorties — envoyer le mauvais type de troupe dans un rally mono est considéré comme une mauvaise étiquette de rally et peut te faire exclure du rally).</li>
        <li><strong>Le mono est déconseillé pour la garnison/défense</strong> — les compositions mixtes y sont fortement favorisées, car l'Infanterie seule ne peut pas infliger assez de dégâts tandis que Riders/Hunters sont trop vulnérables sans première ligne.</li>
      </ul>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Promeus, n'entraîne pas depuis zéro, dès que le tier suivant devient disponible : cela coûte une fraction du temps pour un résultat quasi identique.</li>
        <li>Respecte l'ordre de résolution Infanterie → Rider → Hunter : une armée mono sans première ligne s'effondre vite.</li>
        <li>Les comps mono conviennent aux rallies dirigés par un héros spécialisé ; garnison et défense veulent toujours des compositions mixtes.</li>
      </ul>
`
};
