/* Contenuto tradotto del capitolo — Clash of Clans / 10 Clan Management & Perks.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Clan management & perks</h1>
      <div class="hazard"></div>
      <p class="lead">An active, well-organized clan is worth more than any single upgrade: it unlocks donations, wars, Clan Games and Raid Weekends. Understanding roles and perks helps you pick the right clan, or run one.</p>

      <h2>Clan roles</h2>
      <div class="table-wrap"><table>
        <tr><th>Role</th><th>Permissions</th></tr>
        <tr><td>Leader</td><td>Full control — starts/declares wars, changes all clan settings, promotes/demotes/kicks anyone, transfers leadership. Automatically assigned to whoever founded the clan; can auto-transfer to a Co-Leader after 60+ days of inactivity.</td></tr>
        <tr><td>Co-Leader</td><td>Nearly all Leader powers except a few top-level settings — can invite/kick members, promote/demote up to Elder, start wars, and manage war/CWL rosters.</td></tr>
        <tr><td>Elder</td><td>Can invite new members and kick regular Members (not other Elders, Co-Leaders, or the Leader). Typically an earned trust rank for active, reliable players.</td></tr>
        <tr><td>Member</td><td>Full participation in Wars, CWL, Clan Games, and donations, with no administrative permissions.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Keep the Co-Leader count small and reserved for genuinely trusted, active veterans; over-promoting risks mismanaged wars or rosters. Use Elder as the reward tier for reliable regulars who don't need administrative power.
      </div>

      <h2>Clan Perks (unlocked via Clan Level / Clan XP)</h2>
      <p>Clan XP accumulates from war wins, Clan Games tiers, and Raid Weekends, raising the clan's level and unlocking:</p>
      <ul>
        <li><strong>Donation Limit</strong> — raises how many troops (and eventually spells/Siege Machines) can be donated per request above the base amount.</li>
        <li><strong>War Loot Bonus</strong> — improves at Clan Levels 3, 5, 7, and 9, adding extra bonus war loot on top of the base win bonus.</li>
        <li><strong>Donation Upgrade</strong> — automatically upgrades the level of troops/spells donated to a clanmate; improves at Clan Levels 5 and 10.</li>
      </ul>

      <h2>Clan Games</h2>
      <p>A recurring monthly event offering a shared set of challenge tasks (attacking, donating, upgrading, spending resources, and similar) split across Home Village and Builder Base tasks. Completing tasks earns points counting toward the clan's shared total; six reward tiers unlock as the clan's combined point total rises, each offering a choice of one of three rewards (resources, Gems, or Magic Items). Individual players can earn up to a large personal point cap per event, with an extra bonus reward pick available after reaching a set personal threshold.</p>

      <p class="sentinel-hint">When a clanmate requests reinforcements or an event like Clan Games starts, the game sends a notification that's easy to miss among the rest. <strong>Sentinel</strong> can watch for words like <code>donation</code> or <code>clan games</code> and turn them into a real alarm you won't overlook. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Save "bankable" tasks — troop donations, spell brewing, obstacle clearing — for the days just before Clan Games starts, so points can be burned through quickly once the event opens. A fuller, more active roster clears the shared tier thresholds faster and lets everyone play at a relaxed pace rather than grinding to their own personal cap alone.
      </div>
`,
  es: `
      <h1>Gestión del clan y perks</h1>
      <div class="hazard"></div>
      <p class="lead">Un clan activo y bien organizado vale más que cualquier mejora individual: da acceso a donaciones, guerras, Clan Games y Raid Weekends. Entender roles y perks ayuda a elegir el clan correcto, o a dirigir uno.</p>

      <h2>Roles del clan</h2>
      <div class="table-wrap"><table>
        <tr><th>Rol</th><th>Permisos</th></tr>
        <tr><td>Líder</td><td>Control total — inicia/declara guerras, cambia toda la configuración del clan, asciende/degrada/expulsa a cualquiera, transfiere el liderazgo. Se asigna automáticamente a quien fundó el clan; puede transferirse automáticamente a un Colíder tras 60+ días de inactividad.</td></tr>
        <tr><td>Colíder</td><td>Casi todos los poderes del Líder excepto algunas configuraciones de máximo nivel — puede invitar/expulsar miembros, ascender/degradar hasta Ancião, iniciar guerras y gestionar los rosters de guerra/CWL.</td></tr>
        <tr><td>Ancião (Elder)</td><td>Puede invitar nuevos miembros y expulsar Miembros normales (no a otros Ancião, Colíderes o al Líder). Normalmente un rango de confianza ganado por jugadores activos y fiables.</td></tr>
        <tr><td>Miembro</td><td>Participación completa en Guerras, CWL, Clan Games y donaciones, sin permisos administrativos.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Mantén el número de Colíderes bajo y resérvalo para veteranos realmente fiables y activos; ascender de más arriesga guerras o rosters mal gestionados. Usa Ancião como el rango premio para los habituales fiables que no necesitan poder administrativo.
      </div>

      <h2>Perks del clan (desbloqueados por Nivel de Clan / XP de Clan)</h2>
      <p>El XP de clan se acumula con victorias en guerra, niveles de Clan Games y Raid Weekends, subiendo el nivel del clan y desbloqueando:</p>
      <ul>
        <li><strong>Límite de Donación</strong> — aumenta cuántas tropas (y eventualmente hechizos/Máquinas de Asedio) se pueden donar por petición por encima de la cantidad base.</li>
        <li><strong>Bono de Botín de Guerra</strong> — mejora en los Niveles de Clan 3, 5, 7 y 9, añadiendo botín de guerra extra sobre el bono base de victoria.</li>
        <li><strong>Mejora de Donación</strong> — mejora automáticamente el nivel de tropas/hechizos donados a un compañero de clan; mejora en los Niveles de Clan 5 y 10.</li>
      </ul>

      <h2>Clan Games</h2>
      <p>Un evento mensual recurrente que ofrece un conjunto compartido de tareas de desafío (atacar, donar, mejorar, gastar recursos y similares) repartidas entre tareas de Home Village y Builder Base. Completar tareas gana puntos que cuentan para el total compartido del clan; se desbloquean seis niveles de recompensa a medida que sube el total de puntos combinado del clan, cada uno con la opción de elegir una de tres recompensas (recursos, Gemas u Objetos Mágicos). Los jugadores individuales pueden ganar hasta un gran tope personal de puntos por evento, con una recompensa bonus extra disponible tras alcanzar un umbral personal.</p>

      <p class="sentinel-hint">Cuando un compañero de clan pide refuerzos o empieza un evento como los Clan Games, el juego envía una notificación fácil de perder entre las demás. <strong>Sentinel</strong> puede vigilar palabras como <code>donation</code> o <code>clan games</code> y convertirlas en una alarma real que no pasarás por alto. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Guarda las tareas "acumulables" — donaciones de tropas, preparación de hechizos, limpieza de obstáculos — para los días justo antes de que empiecen los Clan Games, para poder quemar puntos rápido en cuanto abra el evento. Un roster más lleno y activo supera antes los umbrales compartidos y deja que todos jueguen con calma en vez de grindear solos hasta su propio tope personal.
      </div>
`,
  fr: `
      <h1>Gestion du clan et perks</h1>
      <div class="hazard"></div>
      <p class="lead">Un clan actif et bien organisé vaut plus que n'importe quelle amélioration : il donne accès aux dons, aux guerres, aux Clan Games et aux Raid Weekend. Comprendre les rôles et les perks aide à choisir le bon clan, ou à en diriger un.</p>

      <h2>Rôles dans le clan</h2>
      <div class="table-wrap"><table>
        <tr><th>Rôle</th><th>Permissions</th></tr>
        <tr><td>Chef</td><td>Contrôle total — lance/déclare les guerres, change tous les paramètres du clan, promeut/rétrograde/exclut n'importe qui, transfère le leadership. Assigné automatiquement au fondateur du clan ; peut se transférer automatiquement à un Co-Chef après 60+ jours d'inactivité.</td></tr>
        <tr><td>Co-Chef</td><td>Presque tous les pouvoirs du Chef sauf quelques paramètres de haut niveau — peut inviter/exclure des membres, promouvoir/rétrograder jusqu'à Aîné, lancer des guerres et gérer les rosters de guerre/CWL.</td></tr>
        <tr><td>Aîné (Elder)</td><td>Peut inviter de nouveaux membres et exclure des Membres normaux (pas d'autres Aînés, Co-Chefs ou le Chef). Typiquement un rang de confiance gagné par des joueurs actifs et fiables.</td></tr>
        <tr><td>Membre</td><td>Participation complète aux Guerres, CWL, Clan Games et dons, sans permissions administratives.</td></tr>
      </table></div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Garde le nombre de Co-Chefs restreint et réservé à des vétérans vraiment fiables et actifs ; trop promouvoir risque des guerres ou des rosters mal gérés. Utilise Aîné comme rang récompense pour les habitués fiables qui n'ont pas besoin de pouvoir administratif.
      </div>

      <h2>Perks de clan (débloqués par Niveau de Clan / XP de Clan)</h2>
      <p>L'XP de clan s'accumule via les victoires en guerre, les paliers de Clan Games et les Raid Weekend, augmentant le niveau du clan et débloquant :</p>
      <ul>
        <li><strong>Limite de Don</strong> — augmente le nombre de troupes (et éventuellement de sorts/Machines de Siège) pouvant être données par requête au-delà du montant de base.</li>
        <li><strong>Bonus de Butin de Guerre</strong> — s'améliore aux Niveaux de Clan 3, 5, 7 et 9, ajoutant du butin de guerre bonus en plus du bonus de victoire de base.</li>
        <li><strong>Amélioration de Don</strong> — améliore automatiquement le niveau des troupes/sorts donnés à un membre du clan ; s'améliore aux Niveaux de Clan 5 et 10.</li>
      </ul>

      <h2>Clan Games</h2>
      <p>Un événement mensuel récurrent proposant un ensemble commun de tâches de défi (attaquer, donner, améliorer, dépenser des ressources et similaires) réparties entre tâches Home Village et Builder Base. Compléter des tâches rapporte des points comptant pour le total partagé du clan ; six paliers de récompense se débloquent à mesure que le total de points combiné du clan augmente, chacun offrant le choix entre l'une de trois récompenses (ressources, Gemmes ou Objets Magiques). Chaque joueur peut gagner jusqu'à un grand plafond personnel de points par événement, avec un choix de récompense bonus supplémentaire disponible après avoir atteint un seuil personnel.</p>

      <p class="sentinel-hint">Quand un membre du clan demande des renforts ou qu'un événement comme les Clan Games commence, le jeu envoie une notification facile à manquer parmi les autres. <strong>Sentinel</strong> peut surveiller des mots comme <code>donation</code> ou <code>clan games</code> et les transformer en une vraie alarme que tu ne rateras pas. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Garde les tâches « accumulables » — dons de troupes, préparation de sorts, nettoyage d'obstacles — pour les jours juste avant le début des Clan Games, afin de pouvoir brûler des points rapidement dès l'ouverture de l'événement. Un roster plus complet et actif franchit plus vite les seuils partagés et permet à tout le monde de jouer tranquillement plutôt que de grinder seul jusqu'à son propre plafond personnel.
      </div>
`
};
