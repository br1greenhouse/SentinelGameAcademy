/* Contenuto tradotto del capitolo — Lords Mobile / 06 Troops & combat.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Troops & combat</h1>
      <div class="hazard"></div>
      <p class="lead">Infantry, Ranged, Cavalry and Siege: counters, tiers and battle mechanics to know before you train your army.</p>

      <h2>Troop types</h2>
      <p>Four types: <strong>Infantry, Ranged, Cavalry</strong> (soldiers), and <strong>Siege Engines</strong> (machines).</p>

      <h2>The counter system (rock-paper-scissors)</h2>
      <p><strong>Infantry beats Cavalry → Cavalry beats Ranged → Ranged beats Infantry.</strong> Siege Engines counter Castle Walls and Traps rather than other troop types directly.</p>

      <h2>Relative strengths</h2>
      <div class="table-wrap"><table>
        <tr><th>Type</th><th>Best at</th></tr>
        <tr><td>Infantry</td><td>Highest HP/Defense (tankiest)</td></tr>
        <tr><td>Siege</td><td>Highest Attack, and highest gathering/carrying capacity</td></tr>
        <tr><td>Cavalry</td><td>Fastest travel speed</td></tr>
        <tr><td>Ranged</td><td>Balanced, exploits Infantry</td></tr>
      </table></div>

      <h2>Troop tiers</h2>
      <p>The current system tops out at <strong>Tier 5</strong> (not T1-T11 — an important correction from older assumptions):</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infantry</th><th>Ranged</th><th>Cavalry</th><th>Siege</th></tr>
        <tr><td>T1</td><td>Grunt</td><td>Archer</td><td>Cataphract</td><td>Ballista</td></tr>
        <tr><td>T2</td><td>Gladiator</td><td>Sharpshooter</td><td>Reptilian Rider</td><td>Catapult</td></tr>
        <tr><td>T3</td><td>Royal Guard</td><td>Stealth Sniper</td><td>Royal Cavalry</td><td>Fire Trebuchet</td></tr>
        <tr><td>T4</td><td>Heroic Fighter</td><td>Heroic Cannoneer</td><td>Ancient Drake Rider</td><td>Destroyer</td></tr>
        <tr><td>T5</td><td>Luminary Guard</td><td>Luminary Marksman</td><td>Luminary Lion Force</td><td>Luminary Avenger</td></tr>
      </table></div>
      <p>Tier 5 ("Luminary") troops are upgraded directly from Tier 4 using <strong>Luminous Gears</strong>, crafted at the <strong>Lunar Foundry</strong> — each Gear adds 12 Might.</p>
      <p>Relative power scaling (per-unit, vs. Tier 1 baseline): <strong>T2 ≈ 2×, T3 ≈ 3×, T4 ≈ 4.5×, T5 ≈ 6×.</strong></p>

      <h2>Research gates for tiers</h2>
      <p>Roughly: T2 requires Academy Level 9, T3 requires Academy Level 17, T4 requires Academy Level 25, T5 requires Academy Level 25 plus Crafting Speed II and Crafting Capacity both at Level 10.</p>

      <h2>Combat mechanics</h2>
      <ul>
        <li>Battles last exactly <strong>40 seconds</strong>.</li>
        <li>Troop attack cooldown is 3 seconds, except each unit's very first attack, which fires after only 1 second.</li>
        <li>Troops are organized into <strong>4 squadrons per type</strong> in battle.</li>
        <li>Travel time: Scouts move at 60% of the listed travel time; Familiars move at 20%.</li>
        <li><strong>Army Lineup</strong> (a research unlock) lets you choose which troop type stands on the frontline, changing which type absorbs the first hit.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Don't mass-train low-tier troops you'll have to replace soon. Once you can research the next tier, shift training toward it rather than stockpiling units that will be obsolete within weeks.
      </div>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Training troops evenly across all four types without a plan wastes resources. Decide your account's role (attacker, trap/defense, gatherer) and weight troop training accordingly.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Respect the rock-paper-scissors cycle when building formations against known targets.</li>
        <li>Army Lineup can flip the outcome of a close fight: don't leave it to chance.</li>
        <li>Siege Engines shine against walls and traps, not other troops: deploy them with a plan.</li>
      </ul>
`,
  es: `
      <h1>Tropas y combate</h1>
      <div class="hazard"></div>
      <p class="lead">Infantería, tropas a distancia, caballería y asedio: contras, tiers y mecánicas de batalla que debes conocer antes de entrenar tu ejército.</p>

      <h2>Tipos de tropa</h2>
      <p>Cuatro tipos: <strong>Infantería, Tropas a distancia, Caballería</strong> (soldados), y <strong>Máquinas de asedio</strong> (máquinas).</p>

      <h2>El sistema de contras (piedra-papel-tijera)</h2>
      <p><strong>Infantería vence a Caballería → Caballería vence a Tropas a distancia → Tropas a distancia vencen a Infantería.</strong> Las Máquinas de asedio contrarrestan Murallas y Trampas en lugar de otros tipos de tropa directamente.</p>

      <h2>Fortalezas relativas</h2>
      <div class="table-wrap"><table>
        <tr><th>Tipo</th><th>Mejor en</th></tr>
        <tr><td>Infantería</td><td>Mayor HP/Defensa (la más resistente)</td></tr>
        <tr><td>Asedio</td><td>Mayor Ataque, y mayor capacidad de recolección/transporte</td></tr>
        <tr><td>Caballería</td><td>Mayor velocidad de viaje</td></tr>
        <tr><td>A distancia</td><td>Equilibrada, explota a la Infantería</td></tr>
      </table></div>

      <h2>Tiers de tropas</h2>
      <p>El sistema actual llega hasta el <strong>Tier 5</strong> (no T1-T11 — una corrección importante frente a suposiciones anteriores):</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infantería</th><th>A distancia</th><th>Caballería</th><th>Asedio</th></tr>
        <tr><td>T1</td><td>Grunt</td><td>Archer</td><td>Cataphract</td><td>Ballista</td></tr>
        <tr><td>T2</td><td>Gladiator</td><td>Sharpshooter</td><td>Reptilian Rider</td><td>Catapult</td></tr>
        <tr><td>T3</td><td>Royal Guard</td><td>Stealth Sniper</td><td>Royal Cavalry</td><td>Fire Trebuchet</td></tr>
        <tr><td>T4</td><td>Heroic Fighter</td><td>Heroic Cannoneer</td><td>Ancient Drake Rider</td><td>Destroyer</td></tr>
        <tr><td>T5</td><td>Luminary Guard</td><td>Luminary Marksman</td><td>Luminary Lion Force</td><td>Luminary Avenger</td></tr>
      </table></div>
      <p>Las tropas de Tier 5 ("Luminary") se obtienen mejorando directamente desde el Tier 4 usando <strong>Luminous Gears</strong>, forjados en la <strong>Lunar Foundry</strong> — cada Gear añade 12 de Might.</p>
      <p>Escalado de poder relativo (por unidad, frente al Tier 1): <strong>T2 ≈ 2×, T3 ≈ 3×, T4 ≈ 4,5×, T5 ≈ 6×.</strong></p>

      <h2>Requisitos de investigación por tier</h2>
      <p>Aproximadamente: T2 requiere Academia nivel 9, T3 requiere Academia nivel 17, T4 requiere Academia nivel 25, T5 requiere Academia nivel 25 más Velocidad de Crafting II y Capacidad de Crafting, ambas en nivel 10.</p>

      <h2>Mecánicas de combate</h2>
      <ul>
        <li>Las batallas duran exactamente <strong>40 segundos</strong>.</li>
        <li>El tiempo de reutilización del ataque de las tropas es de 3 segundos, excepto el primer ataque de cada unidad, que se dispara tras solo 1 segundo.</li>
        <li>Las tropas se organizan en <strong>4 escuadrones por tipo</strong> en batalla.</li>
        <li>Tiempo de viaje: los Scouts se mueven al 60% del tiempo de viaje indicado; los Familiares se mueven al 20%.</li>
        <li><strong>Army Lineup</strong> (un desbloqueo de investigación) te permite elegir qué tipo de tropa está en primera línea, cambiando qué tipo absorbe el primer golpe.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        No entrenes en masa tropas de tier bajo que tendrás que reemplazar pronto. En cuanto puedas investigar el siguiente tier, cambia el entrenamiento hacia él en lugar de acumular unidades que quedarán obsoletas en pocas semanas.
      </div>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Entrenar tropas de forma uniforme en los cuatro tipos sin un plan desperdicia recursos. Decide el rol de tu cuenta (atacante, trampa/defensa, recolector) y reparte el entrenamiento de tropas en consecuencia.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Respeta el ciclo piedra-papel-tijera al montar formaciones contra objetivos conocidos.</li>
        <li>Army Lineup puede decidir el resultado de un combate ajustado: no lo dejes al azar.</li>
        <li>Las Máquinas de asedio brillan contra murallas y trampas, no contra otras tropas: despliégalas con un plan.</li>
      </ul>
`,
  fr: `
      <h1>Troupes et combat</h1>
      <div class="hazard"></div>
      <p class="lead">Infanterie, troupes à distance, cavalerie et siège : contres, tiers et mécaniques de combat à connaître avant d'entraîner ton armée.</p>

      <h2>Types de troupes</h2>
      <p>Quatre types : <strong>Infanterie, Troupes à distance, Cavalerie</strong> (soldats), et <strong>Engins de siège</strong> (machines).</p>

      <h2>Le système de contres (pierre-papier-ciseaux)</h2>
      <p><strong>L'Infanterie bat la Cavalerie → la Cavalerie bat les Troupes à distance → les Troupes à distance battent l'Infanterie.</strong> Les Engins de siège contrent les Murailles et les Pièges plutôt que directement les autres types de troupes.</p>

      <h2>Forces relatives</h2>
      <div class="table-wrap"><table>
        <tr><th>Type</th><th>Point fort</th></tr>
        <tr><td>Infanterie</td><td>PV/Défense les plus élevés (la plus résistante)</td></tr>
        <tr><td>Siège</td><td>Attaque la plus élevée, et capacité de récolte/transport la plus élevée</td></tr>
        <tr><td>Cavalerie</td><td>Vitesse de déplacement la plus élevée</td></tr>
        <tr><td>À distance</td><td>Équilibrée, exploite l'Infanterie</td></tr>
      </table></div>

      <h2>Tiers de troupes</h2>
      <p>Le système actuel plafonne au <strong>Tier 5</strong> (pas T1-T11 — une correction importante par rapport à d'anciennes suppositions) :</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Infanterie</th><th>À distance</th><th>Cavalerie</th><th>Siège</th></tr>
        <tr><td>T1</td><td>Grunt</td><td>Archer</td><td>Cataphract</td><td>Ballista</td></tr>
        <tr><td>T2</td><td>Gladiator</td><td>Sharpshooter</td><td>Reptilian Rider</td><td>Catapult</td></tr>
        <tr><td>T3</td><td>Royal Guard</td><td>Stealth Sniper</td><td>Royal Cavalry</td><td>Fire Trebuchet</td></tr>
        <tr><td>T4</td><td>Heroic Fighter</td><td>Heroic Cannoneer</td><td>Ancient Drake Rider</td><td>Destroyer</td></tr>
        <tr><td>T5</td><td>Luminary Guard</td><td>Luminary Marksman</td><td>Luminary Lion Force</td><td>Luminary Avenger</td></tr>
      </table></div>
      <p>Les troupes de Tier 5 (« Luminary ») s'obtiennent en améliorant directement le Tier 4 avec des <strong>Luminous Gears</strong>, forgés à la <strong>Lunar Foundry</strong> — chaque Gear ajoute 12 de Might.</p>
      <p>Échelle de puissance relative (par unité, par rapport au Tier 1) : <strong>T2 ≈ 2×, T3 ≈ 3×, T4 ≈ 4,5×, T5 ≈ 6×.</strong></p>

      <h2>Prérequis de recherche par tier</h2>
      <p>Environ : T2 nécessite l'Académie niveau 9, T3 nécessite l'Académie niveau 17, T4 nécessite l'Académie niveau 25, T5 nécessite l'Académie niveau 25 plus Vitesse de Craft II et Capacité de Craft toutes deux au niveau 10.</p>

      <h2>Mécaniques de combat</h2>
      <ul>
        <li>Les batailles durent exactement <strong>40 secondes</strong>.</li>
        <li>Le temps de recharge d'attaque des troupes est de 3 secondes, sauf pour la toute première attaque de chaque unité, qui se déclenche après seulement 1 seconde.</li>
        <li>Les troupes sont organisées en <strong>4 escadrons par type</strong> au combat.</li>
        <li>Temps de trajet : les Scouts se déplacent à 60% du temps de trajet indiqué ; les Familiers se déplacent à 20%.</li>
        <li><strong>Army Lineup</strong> (un déblocage de recherche) te permet de choisir quel type de troupe se tient en première ligne, changeant ainsi le type qui absorbe le premier coup.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        N'entraîne pas en masse des troupes de tier bas que tu devras bientôt remplacer. Dès que tu peux rechercher le tier suivant, oriente l'entraînement vers celui-ci plutôt que d'accumuler des unités qui deviendront obsolètes en quelques semaines.
      </div>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Entraîner des troupes de façon uniforme sur les quatre types sans plan gaspille des ressources. Détermine le rôle de ton compte (attaquant, piège/défense, récolteur) et pondère l'entraînement des troupes en conséquence.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Respecte le cycle pierre-papier-ciseaux en composant tes formations contre des cibles connues.</li>
        <li>Army Lineup peut faire basculer l'issue d'un combat serré : ne le laisse pas au hasard.</li>
        <li>Les Engins de siège brillent contre les murailles et les pièges, pas contre les autres troupes : déploie-les avec un plan.</li>
      </ul>
`
};
