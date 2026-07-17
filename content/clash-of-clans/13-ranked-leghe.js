/* Contenuto tradotto del capitolo — Clash of Clans / 13 Ranked Mode & League System.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Ranked Mode & League System</h1>
      <div class="hazard"></div>
      <p class="lead">Home Village multiplayer is split into two distinct modes, with different rules on shields, attacks, and what counts toward league standing.</p>

      <h2>Battles vs. Ranked Battles</h2>
      <p>Following a recent restructuring, Home Village multiplayer is split into two separate modes:</p>
      <ul>
        <li><strong>Battles</strong> — casual, unlimited attacks, matched by Town Hall level; effectively the "farming" mode, with simplified Shield rules and no effect on league standing.</li>
        <li><strong>Ranked Battles</strong> — unlocked at <strong>Town Hall 7</strong>, matched by league/Trophy standing, with a limited number of attacks and defenses per week. Trophies are earned or lost only here.</li>
      </ul>
      <p>Both modes count toward the daily Star Bonus, but only Ranked Battles affect league position.</p>

      <h2>The league ladder</h2>
      <p>The current ladder runs through 33 named sub-league tiers before reaching Legend status: <strong>Unranked → Skeleton (1-3) → Barbarian (4-6) → Archer (7-9) → Wizard (10-12) → Valkyrie (13-15) → Witch (16-18) → Golem (19-21) → P.E.K.K.A (22-24) → Titan/Electro Titan (25-27) → Dragon (28-30) → Electro/Electro Dragon (31-33) → Legend</strong>. Each Town Hall level has a fixed minimum league it can't be demoted below (a "League Floor"); upgrading Town Hall mid-tournament can auto-promote a player to their new floor.</p>

      <h2>Legend League</h2>
      <p>Legend League is now split into three tiers, each with identical Star Bonus and League Bonus rewards but different <strong>Battle Modifiers</strong> (defense/attack buffs and penalties) and structure:</p>
      <div class="table-wrap"><table>
        <tr><th>Tier</th><th>Format</th><th>Attacks</th><th>Promotion</th></tr>
        <tr><td>Legend III</td><td>Weekly Tournament</td><td>24 battles/week</td><td>Top 5 of each 100-player group promote weekly</td></tr>
        <tr><td>Legend II</td><td>Weekly Tournament</td><td>30 battles/week</td><td>Top 3 of each group promote weekly</td></tr>
        <tr><td>Legend I</td><td>4-week Tournament</td><td>8 battles/day</td><td>Players ranked below a cutoff demote weekly</td></tr>
      </table></div>
      <p>Battle Modifiers scale up through the tiers — Legend I applies the largest defensive-side bonus and the largest attacking-Hero penalty, making top-tier defense noticeably tougher to crack than Legend III.</p>
      <p>A recent update also relaxed inactivity rules significantly: players now get roughly <strong>4 weeks</strong> before any demotion begins (previously much shorter), with demotion afterward limited to one rank per additional 4 weeks rather than an immediate drop.</p>

      <div class="box box-adv">
        <span class="box-title">Advanced</span>
        Exact per-tier attack caps and promotion cutoffs in Legend League change periodically with game updates: before treating them as fixed rules, confirm the current numbers directly in-game.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        If you're pushing for a higher league at the end of a season, calculate how many attacks you actually have left before the reset: one risky 3-star attempt against too-tough a target is worth less than two safe attacks against targets within your reach.
      </div>
`,
  es: `
      <h1>Modo Ranked y sistema de ligas</h1>
      <div class="hazard"></div>
      <p class="lead">El multijugador de Home Village se divide en dos modos distintos, con reglas diferentes sobre escudos, ataques y qué cuenta para la posición en liga.</p>

      <h2>Battles vs. Ranked Battles</h2>
      <p>Tras una reestructuración reciente, el multijugador de Home Village se divide en dos modos separados:</p>
      <ul>
        <li><strong>Battles</strong> — casual, ataques ilimitados, emparejado por nivel de Ayuntamiento; es en la práctica el modo "farmeo", con reglas de Escudo simplificadas y sin efecto en la posición de liga.</li>
        <li><strong>Ranked Battles</strong> — se desbloquea en <strong>Ayuntamiento 7</strong>, emparejado por posición de liga/Trofeos, con un número limitado de ataques y defensas por semana. Los Trofeos se ganan o pierden solo aquí.</li>
      </ul>
      <p>Ambos modos cuentan para el Star Bonus diario, pero solo las Ranked Battles afectan a la posición de liga.</p>

      <h2>La escala de ligas</h2>
      <p>La escala actual recorre 33 niveles de subliga con nombre antes de llegar al estatus Legend: <strong>Unranked → Skeleton (1-3) → Barbarian (4-6) → Archer (7-9) → Wizard (10-12) → Valkyrie (13-15) → Witch (16-18) → Golem (19-21) → P.E.K.K.A (22-24) → Titan/Electro Titan (25-27) → Dragon (28-30) → Electro/Electro Dragon (31-33) → Legend</strong>. Cada nivel de Ayuntamiento tiene una liga mínima fija de la que no puede descender (un "piso de liga"); mejorar el Ayuntamiento a mitad de torneo puede ascender automáticamente al jugador a su nuevo piso.</p>

      <h2>Legend League</h2>
      <p>La Legend League ahora está dividida en tres niveles, cada uno con recompensas idénticas de Star Bonus y League Bonus pero distintos <strong>Modificadores de Batalla</strong> (bonos y penalizaciones de ataque/defensa) y estructura:</p>
      <div class="table-wrap"><table>
        <tr><th>Nivel</th><th>Formato</th><th>Ataques</th><th>Promoción</th></tr>
        <tr><td>Legend III</td><td>Torneo semanal</td><td>24 batallas/semana</td><td>Top 5 de cada grupo de 100 jugadores asciende cada semana</td></tr>
        <tr><td>Legend II</td><td>Torneo semanal</td><td>30 batallas/semana</td><td>Top 3 de cada grupo asciende cada semana</td></tr>
        <tr><td>Legend I</td><td>Torneo de 4 semanas</td><td>8 batallas/día</td><td>Jugadores por debajo de un corte descienden cada semana</td></tr>
      </table></div>
      <p>Los Modificadores de Batalla se intensifican en los niveles superiores — Legend I aplica el mayor bono defensivo y la mayor penalización a los Héroes atacantes, haciendo que la defensa de alto nivel sea notablemente más difícil de superar que en Legend III.</p>
      <p>Una actualización reciente también relajó bastante las reglas de inactividad: los jugadores ahora tienen aproximadamente <strong>4 semanas</strong> antes de que empiece cualquier descenso (antes mucho menos), con descensos posteriores limitados a un rango cada 4 semanas adicionales en vez de una caída inmediata.</p>

      <div class="box box-adv">
        <span class="box-title">Avanzado</span>
        Los topes exactos de ataques por nivel y los cortes de promoción en Legend League cambian periódicamente con las actualizaciones del juego: antes de tratarlos como reglas fijas, confirma los números actuales directamente en el juego.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Si estás empujando hacia una liga más alta al final de una temporada, calcula cuántos ataques te quedan realmente antes del reinicio: un intento arriesgado de 3 estrellas contra un objetivo demasiado difícil vale menos que dos ataques seguros contra objetivos a tu alcance.
      </div>
`,
  fr: `
      <h1>Mode Ranked et système de ligues</h1>
      <div class="hazard"></div>
      <p class="lead">Le multijoueur du Home Village est divisé en deux modes distincts, avec des règles différentes sur les boucliers, les attaques, et ce qui compte pour le classement en ligue.</p>

      <h2>Battles vs. Ranked Battles</h2>
      <p>Suite à une restructuration récente, le multijoueur du Home Village est divisé en deux modes séparés :</p>
      <ul>
        <li><strong>Battles</strong> — décontracté, attaques illimitées, apparié par niveau d'Hôtel de Ville ; c'est en pratique le mode « farming », avec des règles de Bouclier simplifiées et aucun effet sur le classement en ligue.</li>
        <li><strong>Ranked Battles</strong> — débloqué à l'<strong>Hôtel de Ville 7</strong>, apparié par classement de ligue/Trophées, avec un nombre limité d'attaques et de défenses par semaine. Les Trophées ne se gagnent ou se perdent qu'ici.</li>
      </ul>
      <p>Les deux modes comptent pour le Star Bonus quotidien, mais seules les Ranked Battles affectent la position en ligue.</p>

      <h2>L'échelle des ligues</h2>
      <p>L'échelle actuelle traverse 33 paliers de sous-ligue nommés avant d'atteindre le statut Legend : <strong>Unranked → Skeleton (1-3) → Barbarian (4-6) → Archer (7-9) → Wizard (10-12) → Valkyrie (13-15) → Witch (16-18) → Golem (19-21) → P.E.K.K.A (22-24) → Titan/Electro Titan (25-27) → Dragon (28-30) → Electro/Electro Dragon (31-33) → Legend</strong>. Chaque niveau d'Hôtel de Ville a une ligue minimale fixe sous laquelle il ne peut être rétrogradé (un « plancher de ligue ») ; améliorer l'Hôtel de Ville en cours de tournoi peut promouvoir automatiquement le joueur à son nouveau plancher.</p>

      <h2>Legend League</h2>
      <p>La Legend League est désormais divisée en trois paliers, chacun avec des récompenses identiques de Star Bonus et League Bonus mais des <strong>Modificateurs de Bataille</strong> (bonus et pénalités d'attaque/défense) et une structure différents :</p>
      <div class="table-wrap"><table>
        <tr><th>Palier</th><th>Format</th><th>Attaques</th><th>Promotion</th></tr>
        <tr><td>Legend III</td><td>Tournoi hebdomadaire</td><td>24 batailles/semaine</td><td>Top 5 de chaque groupe de 100 joueurs promu chaque semaine</td></tr>
        <tr><td>Legend II</td><td>Tournoi hebdomadaire</td><td>30 batailles/semaine</td><td>Top 3 de chaque groupe promu chaque semaine</td></tr>
        <tr><td>Legend I</td><td>Tournoi de 4 semaines</td><td>8 batailles/jour</td><td>Les joueurs sous un seuil sont rétrogradés chaque semaine</td></tr>
      </table></div>
      <p>Les Modificateurs de Bataille s'intensifient à travers les paliers — Legend I applique le plus gros bonus défensif et la plus grosse pénalité aux Héros attaquants, rendant la défense du plus haut niveau nettement plus difficile à percer qu'en Legend III.</p>
      <p>Une mise à jour récente a aussi beaucoup assoupli les règles d'inactivité : les joueurs ont désormais environ <strong>4 semaines</strong> avant qu'une rétrogradation ne commence (bien moins auparavant), la rétrogradation suivante étant ensuite limitée à un rang par tranche de 4 semaines supplémentaires plutôt qu'une chute immédiate.</p>

      <div class="box box-adv">
        <span class="box-title">Avancé</span>
        Les plafonds d'attaques exacts par palier et les seuils de promotion en Legend League changent périodiquement avec les mises à jour du jeu : avant de les traiter comme des règles figées, confirme les chiffres actuels directement en jeu.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Si tu vises une ligue supérieure en fin de saison, calcule combien d'attaques il te reste réellement avant la réinitialisation : une tentative risquée à 3 étoiles contre une cible trop difficile vaut moins que deux attaques sûres contre des cibles à ta portée.
      </div>
`
};
