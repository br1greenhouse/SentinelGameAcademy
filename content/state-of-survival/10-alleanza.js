/* Contenuto tradotto del capitolo — State of Survival / 10 Alliance.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Alliance</h1>
      <div class="hazard"></div>

      <h2>Joining & structure</h2>
      <p>Any player can found an alliance (costs 400 Biocaps if HQ is below level 8, free at level 9+). Founders set name, tag, motto, language, and recruitment mode (open or closed/approval-based). New joiners get one free <strong>Alliance Relocator</strong> — use it immediately to move near the alliance's cluster, since proximity determines reinforcement/rally speed.</p>

      <h2>Ranks & permissions</h2>
      <p>Six tiers, R0–R5:</p>
      <ul>
        <li><strong>R5 (Leader, 1 per alliance):</strong> full control — name/tag/motto/language changes, leadership transfer, disband, build Alliance HQ/Towers, kick, edit message board, manage recruitment/invites, spend alliance funds, start alliance tech, promote/demote, mail all, timer help, resource support. If the leader leaves without transferring leadership, the alliance disbands.</li>
        <li><strong>R4 (Co-leader):</strong> nearly everything R5 can do except name/tag changes, leadership transfer, disband, or building the Alliance HQ.</li>
        <li><strong>R3:</strong> can promote/demote lower ranks, mail all members, give timer help/resource support.</li>
        <li><strong>R2:</strong> can mail all members, timer help, resource support.</li>
        <li><strong>R1 (default on approval):</strong> timer help, resource support, view members, leave.</li>
        <li><strong>R0:</strong> pending applicants, no permissions.</li>
        <li>Promotion/demotion rule: a member can only be promoted/demoted by someone two ranks above them.</li>
        <li><strong>Alliance Takeover:</strong> if an R5 is inactive 7+ days, members can trigger a leadership replacement for 200 Biocaps via the Alliance Manage panel.</li>
        <li>Alliance level caps at 11; max members starts at 50, expandable to 100 via alliance tech.</li>
      </ul>

      <p class="sentinel-hint">A rally about to launch or an urgent reinforcement request are moments where seconds matter: set up <strong>Sentinel</strong> on words like <code>rally</code> or <code>reinforce</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Alliance tech, help & territory</h2>
      <ul>
        <li><strong>Alliance Tech</strong> works like personal research but benefits the whole alliance; any member can donate resources/items to speed it. Categories: Development (member cap, timer-help count/duration, various speed bonuses), Territory, and Battle.</li>
        <li><strong>Timer Help</strong> reduces build/research/troop-training timers for allies and earns Alliance Honor (a currency bound to your account across alliance changes, usable in the Alliance Store).</li>
        <li><strong>Alliance Territory:</strong> alliances can build an Alliance HQ (R5 only) and Alliance Towers (R4 can help), and plant territory flags to claim wilderness zones for resource/bonus control.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Overextending alliance territory (claiming more flags than the alliance can actually defend) is a documented pitfall for newer alliance officers — expand territory in step with the troops available to hold it.
      </div>

      <h2>Alliance-vs-alliance competitions</h2>
      <ul>
        <li><strong>Fortress Fight</strong> (weekly, Fridays): 16 total fortresses; occupy one continuously for 30 minutes during a 2-hour challenge window to take control.</li>
        <li><strong>Alliance Showdown</strong> (weekly, ~5 days): six same-tier alliances grouped together; players commit their strongest march into one of three lanes (marches are "copied," so nothing is actually risked); win 2 of 3 lanes to win the round.</li>
        <li><strong>Alliance Throwdown</strong> (biweekly, 6 days): points-based competition against alliances of similar tier (5 tiers total); members complete tasks for alliance-wide points and rewards.</li>
        <li><strong>Reservoir Raid</strong> (biweekly, ~1 hour): two alliances fight over "purified water" tiles/buildings; troops are only wounded here, never permanently killed, lowering the stakes and encouraging aggressive play.</li>
        <li><strong>Doomsday Open</strong>: a larger seasonal version of Reservoir Raid played across "Battle Zones" of up to 256 alliances in a qualifying bracket; top registered alliances (up to 640) qualify by Raid Score.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Reservoir Raid strategy: don't send your best heroes out on marches — keep them home defending — and assign your 4–6 strongest players as rally leaders for pushes on key buildings.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Use your free Alliance Relocator right away: proximity to the cluster determines reinforcement speed.</li>
        <li>Only expand territory in proportion to the troops the alliance can field to defend it.</li>
        <li>Reservoir Raid never kills troops: great for testing aggressive compositions risk-free.</li>
      </ul>
`,
  es: `
      <h1>Alianza</h1>
      <div class="hazard"></div>

      <h2>Unirse y estructura</h2>
      <p>Cualquier jugador puede fundar una alianza (cuesta 400 Biocaps si el HQ está por debajo del nivel 8, gratis a partir del nivel 9). Los fundadores establecen nombre, etiqueta, lema, idioma y modo de reclutamiento (abierto o cerrado/con aprobación). Los nuevos miembros reciben un <strong>Alliance Relocator</strong> gratuito — úsalo de inmediato para acercarte al clúster de la alianza, ya que la proximidad determina la velocidad de refuerzo/rally.</p>

      <h2>Rangos y permisos</h2>
      <p>Seis niveles, R0–R5:</p>
      <ul>
        <li><strong>R5 (Líder, 1 por alianza):</strong> control total — cambios de nombre/etiqueta/lema/idioma, transferencia de liderazgo, disolución, construir Alliance HQ/Torres, expulsar, editar el tablón de mensajes, gestionar reclutamiento/invitaciones, gastar los fondos de la alianza, iniciar la tech de alianza, promover/degradar, enviar correo a todos, timer help, apoyo de recursos. Si el líder se va sin transferir el liderazgo, la alianza se disuelve.</li>
        <li><strong>R4 (Co-líder):</strong> casi todo lo que puede hacer R5 excepto cambios de nombre/etiqueta, transferencia de liderazgo, disolución, o construir el Alliance HQ.</li>
        <li><strong>R3:</strong> puede promover/degradar rangos inferiores, enviar correo a todos los miembros, dar timer help/apoyo de recursos.</li>
        <li><strong>R2:</strong> puede enviar correo a todos los miembros, timer help, apoyo de recursos.</li>
        <li><strong>R1 (por defecto tras aprobación):</strong> timer help, apoyo de recursos, ver miembros, salir.</li>
        <li><strong>R0:</strong> solicitantes pendientes, sin permisos.</li>
        <li>Regla de promoción/degradación: un miembro solo puede ser promovido/degradado por alguien con dos rangos por encima de él.</li>
        <li><strong>Alliance Takeover:</strong> si un R5 está inactivo 7+ días, los miembros pueden activar un reemplazo de liderazgo por 200 Biocaps mediante el panel de Alliance Manage.</li>
        <li>El nivel de alianza tiene un tope de 11; el número máximo de miembros comienza en 50, ampliable a 100 mediante la tech de alianza.</li>
      </ul>

      <p class="sentinel-hint">Un rally a punto de lanzarse o una solicitud urgente de refuerzo son momentos en los que los segundos importan: configura <strong>Sentinel</strong> con palabras como <code>rally</code> o <code>reinforce</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Tech de alianza, ayuda y territorio</h2>
      <ul>
        <li><strong>Alliance Tech</strong> funciona como la investigación personal pero beneficia a toda la alianza; cualquier miembro puede donar recursos/objetos para acelerarla. Categorías: Development (tope de miembros, cantidad/duración de timer help, varios bonos de velocidad), Territory y Battle.</li>
        <li><strong>Timer Help</strong> reduce los tiempos de construcción/investigación/entrenamiento de tropas para los aliados y gana Alliance Honor (una moneda ligada a tu cuenta a través de los cambios de alianza, usable en la Alliance Store).</li>
        <li><strong>Territorio de alianza:</strong> las alianzas pueden construir un Alliance HQ (solo R5) y Alliance Towers (R4 puede ayudar), y plantar banderas de territorio para reclamar zonas de naturaleza para el control de recursos/bonos.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Sobreextender el territorio de la alianza (reclamando más banderas de las que la alianza puede realmente defender) es un problema documentado para los oficiales de alianza más nuevos — expande el territorio al ritmo de las tropas disponibles para defenderlo.
      </div>

      <h2>Competiciones entre alianzas</h2>
      <ul>
        <li><strong>Fortress Fight</strong> (semanal, viernes): 16 fortalezas en total; ocupa una continuamente durante 30 minutos en una ventana de desafío de 2 horas para tomar el control.</li>
        <li><strong>Alliance Showdown</strong> (semanal, ~5 días): seis alianzas del mismo tier agrupadas; los jugadores comprometen su marcha más fuerte en uno de tres carriles (las marchas se "copian", así que nada se arriesga realmente); gana 2 de 3 carriles para ganar la ronda.</li>
        <li><strong>Alliance Throwdown</strong> (quincenal, 6 días): competición basada en puntos contra alianzas de tier similar (5 tiers en total); los miembros completan tareas por puntos y recompensas a nivel de alianza.</li>
        <li><strong>Reservoir Raid</strong> (quincenal, ~1 hora): dos alianzas luchan por tiles/edificios de "agua purificada"; las tropas solo resultan heridas aquí, nunca muertas permanentemente, bajando el riesgo y fomentando el juego agresivo.</li>
        <li><strong>Doomsday Open</strong>: una versión estacional más grande del Reservoir Raid jugada a través de "Battle Zones" de hasta 256 alianzas en un cuadro clasificatorio; las mejores alianzas registradas (hasta 640) se clasifican por Raid Score.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Estrategia para el Reservoir Raid: no envíes a tus mejores héroes de marcha — mantenlos en casa defendiendo — y asigna a tus 4-6 jugadores más fuertes como líderes de rally para los asaltos a edificios clave.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Usa tu Alliance Relocator gratuito de inmediato: la proximidad al clúster determina la velocidad de refuerzo.</li>
        <li>Expande el territorio solo en proporción a las tropas que la alianza puede desplegar para defenderlo.</li>
        <li>El Reservoir Raid nunca mata tropas: genial para probar composiciones agresivas sin riesgo.</li>
      </ul>
`,
  fr: `
      <h1>Alliance</h1>
      <div class="hazard"></div>

      <h2>Rejoindre et structure</h2>
      <p>N'importe quel joueur peut fonder une alliance (coûte 400 Biocaps si le QG est en dessous du niveau 8, gratuit à partir du niveau 9). Les fondateurs définissent le nom, le tag, la devise, la langue et le mode de recrutement (ouvert ou fermé/sur approbation). Les nouveaux membres reçoivent un <strong>Alliance Relocator</strong> gratuit — utilise-le immédiatement pour te rapprocher du cluster de l'alliance, car la proximité détermine la vitesse de renfort/rally.</p>

      <h2>Rangs et permissions</h2>
      <p>Six paliers, R0–R5 :</p>
      <ul>
        <li><strong>R5 (Leader, 1 par alliance) :</strong> contrôle total — changements de nom/tag/devise/langue, transfert de leadership, dissolution, construction de l'Alliance HQ/Towers, exclusion, modification du tableau de messages, gestion du recrutement/invitations, dépense des fonds de l'alliance, lancement de la tech d'alliance, promotion/rétrogradation, mail à tous, timer help, soutien en ressources. Si le leader part sans transférer le leadership, l'alliance se dissout.</li>
        <li><strong>R4 (Co-leader) :</strong> presque tout ce que R5 peut faire sauf les changements de nom/tag, le transfert de leadership, la dissolution, ou la construction de l'Alliance HQ.</li>
        <li><strong>R3 :</strong> peut promouvoir/rétrograder les rangs inférieurs, mailer tous les membres, donner timer help/soutien en ressources.</li>
        <li><strong>R2 :</strong> peut mailer tous les membres, timer help, soutien en ressources.</li>
        <li><strong>R1 (par défaut après approbation) :</strong> timer help, soutien en ressources, voir les membres, quitter.</li>
        <li><strong>R0 :</strong> candidats en attente, aucune permission.</li>
        <li>Règle de promotion/rétrogradation : un membre ne peut être promu/rétrogradé que par quelqu'un ayant deux rangs de plus que lui.</li>
        <li><strong>Alliance Takeover :</strong> si un R5 est inactif 7+ jours, les membres peuvent déclencher un remplacement de leadership pour 200 Biocaps via le panneau Alliance Manage.</li>
        <li>Le niveau d'alliance plafonne à 11 ; le nombre maximum de membres commence à 50, extensible à 100 via la tech d'alliance.</li>
      </ul>

      <p class="sentinel-hint">Un rally sur le point d'être lancé ou une demande de renfort urgente sont des moments où chaque seconde compte : configure <strong>Sentinel</strong> sur des mots comme <code>rally</code> ou <code>reinforce</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Tech d'alliance, aide et territoire</h2>
      <ul>
        <li><strong>Alliance Tech</strong> fonctionne comme la recherche personnelle mais bénéficie à toute l'alliance ; n'importe quel membre peut donner des ressources/objets pour l'accélérer. Catégories : Development (plafond de membres, nombre/durée du timer help, divers bonus de vitesse), Territory et Battle.</li>
        <li><strong>Timer Help</strong> réduit les minuteries de construction/recherche/entraînement des troupes pour les alliés et gagne de l'Alliance Honor (une monnaie liée à ton compte à travers les changements d'alliance, utilisable dans l'Alliance Store).</li>
        <li><strong>Territoire d'alliance :</strong> les alliances peuvent construire un Alliance HQ (R5 seulement) et des Alliance Towers (R4 peut aider), et planter des drapeaux de territoire pour revendiquer des zones sauvages pour le contrôle de ressources/bonus.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Étendre excessivement le territoire de l'alliance (revendiquer plus de drapeaux que l'alliance ne peut réellement défendre) est un écueil documenté pour les officiers d'alliance débutants — étends le territoire au même rythme que les troupes disponibles pour le tenir.
      </div>

      <h2>Compétitions entre alliances</h2>
      <ul>
        <li><strong>Fortress Fight</strong> (hebdomadaire, vendredi) : 16 forteresses au total ; occupe-en une en continu pendant 30 minutes lors d'une fenêtre de défi de 2 heures pour en prendre le contrôle.</li>
        <li><strong>Alliance Showdown</strong> (hebdomadaire, ~5 jours) : six alliances du même tier regroupées ; les joueurs engagent leur marche la plus forte dans l'une des trois voies (les marches sont « copiées », donc rien n'est réellement risqué) ; gagne 2 voies sur 3 pour gagner le round.</li>
        <li><strong>Alliance Throwdown</strong> (bihebdomadaire, 6 jours) : compétition à points contre des alliances de tier similaire (5 tiers au total) ; les membres accomplissent des tâches pour des points et récompenses à l'échelle de l'alliance.</li>
        <li><strong>Reservoir Raid</strong> (bihebdomadaire, ~1 heure) : deux alliances se battent pour des tuiles/bâtiments d'« eau purifiée » ; les troupes sont seulement blessées ici, jamais tuées définitivement, ce qui réduit les enjeux et encourage un jeu agressif.</li>
        <li><strong>Doomsday Open</strong> : une version saisonnière plus grande du Reservoir Raid jouée à travers des « Battle Zones » de jusqu'à 256 alliances dans un tableau de qualification ; les meilleures alliances inscrites (jusqu'à 640) se qualifient par Raid Score.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Stratégie pour le Reservoir Raid : n'envoie pas tes meilleurs héros en marche — garde-les à la maison en défense — et assigne tes 4 à 6 joueurs les plus forts comme leaders de rally pour les assauts sur les bâtiments clés.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Utilise ton Alliance Relocator gratuit tout de suite : la proximité au cluster détermine la vitesse de renfort.</li>
        <li>N'étends le territoire qu'en proportion des troupes que l'alliance peut déployer pour le défendre.</li>
        <li>Le Reservoir Raid ne tue jamais les troupes : idéal pour tester des compositions agressives sans risque.</li>
      </ul>
`
};
