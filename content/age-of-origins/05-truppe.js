/* Contenuto tradotto del capitolo — Age of Origins / 05 Troops. */
var PAGE_I18N = {
  en: `
      <h1>Troops</h1>
      <div class="hazard"></div>
      <p class="lead">Troops are your army and the most expensive part of your BP. Understanding who does what in battle decides your wins and losses.</p>

      <h2>Types and combat rows</h2>
      <p>In battle the army lines up in rows. Simplifying:</p>
      <div class="table-wrap"><table>
        <tr><th>Row</th><th>Type</th><th>Role</th></tr>
        <tr><td><strong>Front row (melee)</strong></td><td>Melee infantry / armored units</td><td>Absorbs damage and protects the rows behind</td></tr>
        <tr><td><strong>Mid-range</strong></td><td>Mid-range shooters / vehicles</td><td>Steady damage, balance of durability and attack</td></tr>
        <tr><td><strong>Long-range</strong></td><td>Artillery / rocket launchers</td><td>Maximum damage, very fragile if reached</td></tr>
      </table></div>
      <p>Rule of thumb: <strong>the front row dies so the long range can shoot</strong>. An army with no front line loses its most expensive units first.</p>

      <h2>Troop tiers</h2>
      <ul>
        <li>Troops have levels (T1, T2, ... up to the top tiers) unlocked by buildings and research.</li>
        <li>A higher tier has better stats across the board: <strong>a few high troops beat many low troops</strong>, at the same upkeep.</li>
        <li>Low troops stay useful as gatherers and as expendable "meat" in the front line.</li>
      </ul>

      <h2>How to read the attributes</h2>
      <div class="table-wrap"><table>
        <tr><th>Attribute</th><th>Meaning</th></tr>
        <tr><td>Attack</td><td>Damage dealt</td></tr>
        <tr><td>Defense</td><td>Reduces damage taken</td></tr>
        <tr><td>HP</td><td>Hit points: how many hits it takes</td></tr>
        <tr><td>Lethality</td><td>Increases the permanent losses inflicted on the enemy</td></tr>
        <tr><td>Speed</td><td>March speed on the map</td></tr>
        <tr><td>Load</td><td>How many resources it carries (gathering and looting)</td></tr>
      </table></div>

      <h2>Train, promote or dismiss</h2>
      <ul>
        <li><strong>Train</strong> the highest available tier when you prep for wars or KE events.</li>
        <li><strong>Promote</strong> (upgrade existing troops) when you unlock a new tier: it costs less than training from scratch and often gives event points.</li>
        <li><strong>Sacrifice/dismiss</strong> low troops only if food is out of control or if an event rewards replacement.</li>
      </ul>
      <p class="sentinel-hint">Training a big batch of troops takes hours: until you return, the barracks sit idle. <strong>Sentinel</strong> catches the <em>training complete</em> notification and reminds you with a real alarm, so you don't leave the Camp idle for half a day — set words like <code>training</code>. <a href="../../sentinel.html">Set it up like this</a></p>

      <h2>Basic compositions</h2>
      <div class="box box-prio">
        <span class="box-title">Priority</span>
        A generic composition to start from: <strong>a small share of front row, one of mid, and the bulk in long range</strong>, then adapt to the target. Exact percentages depend on monsters or PvP: see <a href="07-formazioni.html">Formations</a>.
      </div>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Training "a bit of everything in equal parts." Armies balanced at 33% are weak everywhere. Specialize (usually long range) and use the other rows as protection.
      </div>

      <div class="box box-nrc">
        <span class="box-title">NRC tip</span>
        Before a war, tell your R4/R5 how many troops of your top tier you have: rallies are built on real numbers, not hoped-for ones.
      </div>
`,
  es: `
      <h1>Tropas</h1>
      <div class="hazard"></div>
      <p class="lead">Las tropas son tu ejército y la parte más cara de tu BP. Entender quién hace qué en batalla decide victorias y derrotas.</p>

      <h2>Tipologías y filas de combate</h2>
      <p>En batalla el ejército se despliega en filas. Simplificando:</p>
      <div class="table-wrap"><table>
        <tr><th>Fila</th><th>Tipología</th><th>Rol</th></tr>
        <tr><td><strong>Front row (melee)</strong></td><td>Infantería cuerpo a cuerpo / unidades acorazadas</td><td>Absorbe el daño y protege las filas de detrás</td></tr>
        <tr><td><strong>Mid-range</strong></td><td>Tiradores a media distancia / vehículos</td><td>Daño constante, equilibrio entre resistencia y ataque</td></tr>
        <tr><td><strong>Long-range</strong></td><td>Artillería / lanzacohetes</td><td>Daño máximo, muy frágiles si son alcanzadas</td></tr>
      </table></div>
      <p>Regla práctica: <strong>la front row muere para que dispare la long range</strong>. Un ejército sin primera línea pierde primero sus unidades más caras.</p>

      <h2>Tiers de las tropas</h2>
      <ul>
        <li>Las tropas tienen niveles (T1, T2... hasta los tiers máximos) desbloqueados por edificios e investigaciones.</li>
        <li>Un tier superior tiene mejores estadísticas en todo: <strong>pocas tropas altas vencen a muchas tropas bajas</strong>, con el mismo consumo.</li>
        <li>Las tropas bajas siguen siendo útiles como recolectoras y como "carne" sacrificable en primera fila.</li>
      </ul>

      <h2>Cómo leer los atributos</h2>
      <div class="table-wrap"><table>
        <tr><th>Atributo</th><th>Significado</th></tr>
        <tr><td>Attack</td><td>Daño infligido</td></tr>
        <tr><td>Defense</td><td>Reduce el daño recibido</td></tr>
        <tr><td>HP</td><td>Puntos de vida: cuántos golpes aguanta</td></tr>
        <tr><td>Lethality</td><td>Aumenta las pérdidas definitivas infligidas al enemigo</td></tr>
        <tr><td>Speed</td><td>Velocidad de marcha en el mapa</td></tr>
        <tr><td>Load</td><td>Cuántos recursos transporta (recolección y saqueo)</td></tr>
      </table></div>

      <h2>Entrenar, promover o sacrificar</h2>
      <ul>
        <li><strong>Entrena</strong> siempre el tier más alto disponible cuando prepares guerras o eventos KE.</li>
        <li><strong>Promueve</strong> (mejora de tropas existentes) cuando desbloquees un tier nuevo: cuesta menos que entrenar desde cero y a menudo da puntos de evento.</li>
        <li><strong>Sacrifica/licencia</strong> tropas bajas solo si el food está fuera de control o si un evento premia la sustitución.</li>
      </ul>
      <p class="sentinel-hint">Entrenar un gran lote de tropas lleva horas: hasta que vuelvas, el cuartel se queda parado. <strong>Sentinel</strong> capta la notificación de <em>entrenamiento completado</em> y te lo recuerda con una alarma real, así no dejas el Camp parado medio día — configura palabras como <code>training</code>. <a href="../../sentinel.html">Configúralo así</a></p>

      <h2>Composiciones básicas</h2>
      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Composición genérica de la que partir: <strong>una cuota reducida de front row, una de mid y la masa en long range</strong>, luego adaptada al objetivo. Los porcentajes exactos dependen de monstruos o PvP: ver <a href="07-formazioni.html">Formaciones</a>.
      </div>

      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        Entrenar "un poco de todo en partes iguales". Los ejércitos equilibrados al 33% son débiles en todas partes. Especialízate (normalmente long range) y usa las otras filas como protección.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo NRC</span>
        Antes de una guerra, dile a tus R4/R5 cuántas tropas de tu tier máximo tienes: los rallies se construyen sobre números reales, no sobre los deseados.
      </div>
`
};
