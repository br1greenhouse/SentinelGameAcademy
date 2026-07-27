/* Contenuto tradotto del capitolo — Rise of Kingdoms / 06 VIP system.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>VIP system</h1>
      <div class="hazard"></div>
      <p class="lead">How to earn VIP Points and the key milestones, from VIP 5 all the way to VIP 18.</p>

      <p>VIP is a permanent stat-buff and daily-rewards system, not a pure pay-wall — it has a genuine free-to-play path, though spending accelerates it substantially.</p>

      <h2>Earning VIP Points</h2>
      <ul>
        <li>The daily login chest starts at 40 VIP Points and increases by 20/day up to a cap of 200/day, as long as you claim it every day — missing a day resets the streak back to 40.</li>
        <li>1 gem = 1 VIP Point when buying directly.</li>
        <li>The Alliance Shop sells VIP-point items for Alliance Credits — a genuine F2P route.</li>
        <li>The VIP Shop unlocks once you build the Shop at City Hall level 5.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">F2P Focus</span>
        Reaching VIP 12 without spending is achievable with consistent daily play; pushing past VIP 12 F2P is slow. Save gems rather than spending them piecemeal, and dump them during the recurring "More Than Gems"-style event (roughly every two weeks), which gives noticeably better VIP-point value per gem than a normal purchase.
      </div>

      <h2>Key VIP milestones</h2>
      <div class="table-wrap"><table>
        <tr><th>VIP level</th><th>Notable unlock</th></tr>
        <tr><td>VIP 5</td><td>First Hospital Capacity bonus; +1 free Sunset Canyon attempt</td></tr>
        <tr><td><strong>VIP 6</strong></td><td><strong>Permanently unlocks the 2nd building queue</strong> — the single most commonly cited early "rush" target</td></tr>
        <tr><td>VIP 10</td><td>~1.29x resource production; 1 free legendary commander sculpture daily</td></tr>
        <tr><td>VIP 11</td><td>First Troop Attack bonus</td></tr>
        <tr><td>VIP 12</td><td>First Troop Defense bonus; 2 free legendary sculptures daily</td></tr>
        <tr><td>VIP 13</td><td>First Troop Health bonus</td></tr>
        <tr><td>VIP 14</td><td>3 free legendary sculptures daily — commonly cited as the clearest dividing line between accounts that can keep commanders maxed and accounts that fall behind</td></tr>
        <tr><td>VIP 15</td><td>~1.5x resource production; first March Speed and Healing Speed bonuses; +100 Action Point limit</td></tr>
        <tr><td>VIP 16-18</td><td>Top bracket: up to ~1.65x resource production, +5% all damage (VIP 17-18), -15% healing resource cost, +400 Action Point limit</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Treat VIP progression as your single highest-priority permanent gem sink. Spend in this order: VIP 6 → VIP 10 → Books of Covenant (City Hall upgrades) → VIP 12 → Wheel of Fortune (once you have a real gem stockpile) → VIP 14.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Never skip the login chest: missing a day resets your daily point progression.</li>
        <li>VIP 6 is worth a permanent second building queue: it's the first real target to rush.</li>
        <li>Wait for the "More Than Gems" event to spend gems saved up for VIP: the points-per-gem ratio is much better.</li>
      </ul>
`,
  es: `
      <h1>Sistema VIP</h1>
      <div class="hazard"></div>
      <p class="lead">Cómo ganar Puntos VIP y los hitos clave, desde VIP 5 hasta VIP 18.</p>

      <p>VIP es un sistema permanente de bonos de estadísticas y recompensas diarias, no un puro muro de pago — tiene una vía free-to-play genuina, aunque gastar lo acelera sustancialmente.</p>

      <h2>Ganar Puntos VIP</h2>
      <ul>
        <li>El cofre de inicio de sesión diario empieza en 40 Puntos VIP y aumenta en 20/día hasta un tope de 200/día, siempre que lo reclames cada día — saltarse un día reinicia la racha a 40.</li>
        <li>1 gema = 1 Punto VIP al comprar directamente.</li>
        <li>La Alliance Shop vende objetos de puntos VIP a cambio de Créditos de Alianza — una ruta F2P genuina.</li>
        <li>La VIP Shop se desbloquea al construir la Shop en City Hall nivel 5.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">Para jugadores F2P</span>
        Llegar a VIP 12 sin gastar es alcanzable con juego diario constante; superar VIP 12 en F2P es lento. Ahorra gemas en lugar de gastarlas poco a poco, y úsalas durante el evento recurrente estilo "More Than Gems" (aproximadamente cada dos semanas), que da un valor de puntos VIP por gema notablemente mejor que una compra normal.
      </div>

      <h2>Hitos VIP clave</h2>
      <div class="table-wrap"><table>
        <tr><th>Nivel VIP</th><th>Desbloqueo destacado</th></tr>
        <tr><td>VIP 5</td><td>Primer bono de Capacidad de Hospital; +1 intento gratis de Sunset Canyon</td></tr>
        <tr><td><strong>VIP 6</strong></td><td><strong>Desbloquea permanentemente la 2ª cola de construcción</strong> — el objetivo temprano "prioriza esto" más citado</td></tr>
        <tr><td>VIP 10</td><td>~1,29x producción de recursos; 1 escultura de comandante legendario gratis al día</td></tr>
        <tr><td>VIP 11</td><td>Primer bono de Ataque de Tropas</td></tr>
        <tr><td>VIP 12</td><td>Primer bono de Defensa de Tropas; 2 esculturas legendarias gratis al día</td></tr>
        <tr><td>VIP 13</td><td>Primer bono de Salud de Tropas</td></tr>
        <tr><td>VIP 14</td><td>3 esculturas legendarias gratis al día — comúnmente citado como la línea divisoria más clara entre cuentas que pueden mantener a sus comandantes al máximo y cuentas que se quedan atrás</td></tr>
        <tr><td>VIP 15</td><td>~1,5x producción de recursos; primeros bonos de Velocidad de Marcha y Velocidad de Curación; +100 límite de Puntos de Acción</td></tr>
        <tr><td>VIP 16-18</td><td>Tramo superior: hasta ~1,65x producción de recursos, +5% a todo el daño (VIP 17-18), -15% coste de recursos de curación, +400 límite de Puntos de Acción</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Trata la progresión VIP como tu sumidero permanente de gemas de máxima prioridad. Gasta en este orden: VIP 6 → VIP 10 → Books of Covenant (mejoras de City Hall) → VIP 12 → Wheel of Fortune (una vez tengas una reserva real de gemas) → VIP 14.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Nunca te saltes el cofre de inicio de sesión: perderte un día reinicia tu progresión diaria de puntos.</li>
        <li>VIP 6 vale una segunda cola de construcción permanente: es el primer objetivo real a perseguir.</li>
        <li>Espera al evento "More Than Gems" para gastar las gemas ahorradas para VIP: la proporción de puntos por gema es mucho mejor.</li>
      </ul>
`,
  fr: `
      <h1>Système VIP</h1>
      <div class="hazard"></div>
      <p class="lead">Comment gagner des Points VIP et les paliers clés, de VIP 5 jusqu'à VIP 18.</p>

      <p>Le VIP est un système permanent de bonus de statistiques et de récompenses quotidiennes, pas un simple mur payant — il a un véritable chemin free-to-play, même si dépenser l'accélère considérablement.</p>

      <h2>Gagner des Points VIP</h2>
      <ul>
        <li>Le coffre de connexion quotidien commence à 40 Points VIP et augmente de 20/jour jusqu'à un plafond de 200/jour, tant que tu le réclames chaque jour — rater un jour réinitialise la série à 40.</li>
        <li>1 gemme = 1 Point VIP lors d'un achat direct.</li>
        <li>L'Alliance Shop vend des objets de points VIP contre des Crédits d'Alliance — une véritable voie F2P.</li>
        <li>La VIP Shop se débloque une fois le Shop construit au City Hall niveau 5.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">Focus F2P</span>
        Atteindre VIP 12 sans dépenser est réalisable avec un jeu quotidien régulier ; dépasser VIP 12 en F2P est lent. Économise tes gemmes plutôt que de les dépenser au compte-gouttes, et utilise-les pendant l'événement récurrent type « More Than Gems » (environ toutes les deux semaines), qui donne une valeur en points VIP par gemme nettement meilleure qu'un achat normal.
      </div>

      <h2>Paliers VIP clés</h2>
      <div class="table-wrap"><table>
        <tr><th>Niveau VIP</th><th>Déblocage notable</th></tr>
        <tr><td>VIP 5</td><td>Premier bonus de Capacité Hôpital ; +1 tentative gratuite de Sunset Canyon</td></tr>
        <tr><td><strong>VIP 6</strong></td><td><strong>Débloque définitivement la 2e file de construction</strong> — l'objectif « fonce dessus » le plus cité en début de partie</td></tr>
        <tr><td>VIP 10</td><td>~1,29x production de ressources ; 1 sculpture de commandant légendaire gratuite par jour</td></tr>
        <tr><td>VIP 11</td><td>Premier bonus d'Attaque des Troupes</td></tr>
        <tr><td>VIP 12</td><td>Premier bonus de Défense des Troupes ; 2 sculptures légendaires gratuites par jour</td></tr>
        <tr><td>VIP 13</td><td>Premier bonus de Santé des Troupes</td></tr>
        <tr><td>VIP 14</td><td>3 sculptures légendaires gratuites par jour — souvent cité comme la ligne de démarcation la plus nette entre les comptes qui arrivent à maximiser leurs commandants et ceux qui prennent du retard</td></tr>
        <tr><td>VIP 15</td><td>~1,5x production de ressources ; premiers bonus de Vitesse de Marche et de Vitesse de Soins ; +100 limite de Points d'Action</td></tr>
        <tr><td>VIP 16-18</td><td>Tranche supérieure : jusqu'à ~1,65x production de ressources, +5% à tous les dégâts (VIP 17-18), -15% coût en ressources des soins, +400 limite de Points d'Action</td></tr>
      </table></div>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Traite la progression VIP comme ton puits de gemmes permanent le plus prioritaire. Dépense dans cet ordre : VIP 6 → VIP 10 → Books of Covenant (améliorations du City Hall) → VIP 12 → Wheel of Fortune (une fois une vraie réserve de gemmes constituée) → VIP 14.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Ne rate jamais le coffre de connexion : rater un jour réinitialise ta progression quotidienne de points.</li>
        <li>Le VIP 6 vaut une deuxième file de construction permanente : c'est le premier vrai objectif à viser.</li>
        <li>Attends l'événement « More Than Gems » pour dépenser les gemmes économisées pour le VIP : le ratio points par gemme est bien meilleur.</li>
      </ul>
`
};
