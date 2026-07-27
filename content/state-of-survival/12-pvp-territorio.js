/* Contenuto tradotto del capitolo — State of Survival / 12 PvP & territory.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>PvP & territory</h1>
      <div class="hazard"></div>

      <h2>Attacking</h2>
      <p>Always <strong>recon before attacking</strong> (costs resources; needs Lookout Tower level ~22+ for full detail) — reveals troop counts, hidden troops, pillageable resources, tech/skill stats, and crucially whether the target has incoming reinforcements. Recommended attacking composition: <strong>60% Infantry / 20% Riders / 20% Hunters</strong>. Set combat-focused Chief Talents before attacking (Infantry defense/health, Hunter lethality/attack), and activate skills like "Emergency Dressing," which converts 30% of would-be troop deaths into wounded instead.</p>
      <p>A failed attack costs roughly <strong>35% dead / 10% heavily wounded / 55% lightly wounded</strong> of the march (proportions vary with march size).</p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Attacking without scouting first is the most commonly cited PvP mistake — it leads to marches being wrecked by hidden defenders or reinforcements the attacker didn't detect.
      </div>

      <h2>Defending</h2>
      <ul>
        <li><strong>Peace Flare</strong> (2h/8h/24h shield) and <strong>Recon Jammer</strong> (blocks/degrades enemy recon) — see Chapter 3 for details.</li>
        <li><strong>Blast Shelter</strong> — hides a march of troops for a chosen duration, used to dodge an incoming crushing attack.</li>
        <li><strong>Lookout Tower</strong> — at max level, gives advance warning plus incoming march details (troop count, heroes, gear, ETA), enabling a reinforce/evacuate/brace decision.</li>
        <li><strong>Barricade</strong> — the core defensive structure; a lost defense burns the barricade for a cooldown period, worse if hit repeatedly in quick succession.</li>
        <li><strong>Patrol heroes</strong> should be manually assigned to defense duty rather than relying on default auto-assignment, since not every auto-picked hero has defense-relevant skills.</li>
        <li><strong>Reinforcement</strong> from allies is one of the strongest defensive tools — reinforcing troops fight using the reinforcer's own combat stats, so a strong ally reinforcing a weak player massively boosts effective defense.</li>
      </ul>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Keep the Lookout Tower and Assembly Point upgraded early — advance warning and reinforcement capacity are cheap, high-value defensive investments relative to raw troop numbers.
      </div>

      <p class="sentinel-hint">An expiring Peace Flare shield or an incoming march spotted by the Lookout Tower are moments you can't afford to discover late: set up <strong>Sentinel</strong> on words like <code>shield</code> or <code>incoming</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>New/returning player protection</h2>
      <p>New accounts get an initial peace period (roughly 3 days) during which they can't be attacked — voided immediately if the new player attacks or recons anyone else. Returning/lapsed players get Return of the Brave event buffs plus alliance welcome gifts rather than a hard shield.</p>

      <h2>Migration & server merges</h2>
      <ul>
        <li><strong>State Merge:</strong> FunPlus periodically merges under-populated older states into a designated "main state" (each main state can absorb 1–4 sub-states); affected players get about a week's advance notice, and generous compensation is distributed after the merge.</li>
        <li><strong>State Transfer:</strong> a separate, player-initiated feature — accounts inactive 60+ days with HQ level 12+ become eligible to transfer to a different state voluntarily.</li>
        <li><strong>Relocation items:</strong> Random Relocator (random spot in current state), Advanced Relocator (choose exact destination), Alliance Relocator (nearest open plot near your alliance's HQ/leader — relocating into Alliance Territory grants gathering bonuses and troop buffs while garrisoned there).</li>
      </ul>

      <h2>Quick tips</h2>
      <ul>
        <li>Always recon before attacking: without scouting you risk hidden defenders or reinforcements.</li>
        <li>Manage Peace Flare and Recon Jammer actively around PvP windows, don't let them expire by accident.</li>
        <li>A strong ally's reinforcement is worth more than extra troops of your own: coordinate defense with your alliance.</li>
      </ul>
`,
  es: `
      <h1>PvP y territorio</h1>
      <div class="hazard"></div>

      <h2>Atacar</h2>
      <p>Haz siempre <strong>recon antes de atacar</strong> (cuesta recursos; requiere Lookout Tower nivel ~22+ para el detalle completo) — revela el conteo de tropas, tropas ocultas, recursos saqueables, estadísticas de tech/skill, y crucialmente si el objetivo tiene refuerzos entrantes. Composición de ataque recomendada: <strong>60% Infantería / 20% Riders / 20% Hunters</strong>. Establece Talentos del Jefe enfocados en combate antes de atacar (defensa/salud de Infantería, letalidad/ataque Hunter), y activa habilidades como "Emergency Dressing", que convierte el 30% de las muertes de tropas que ocurrirían en heridas en su lugar.</p>
      <p>Un ataque fallido cuesta aproximadamente <strong>35% muertas / 10% gravemente heridas / 55% levemente heridas</strong> de la marcha (las proporciones varían con el tamaño de la marcha).</p>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Atacar sin explorar primero es el error PvP más citado — lleva a que las marchas sean destrozadas por defensores ocultos o refuerzos que el atacante no detectó.
      </div>

      <h2>Defender</h2>
      <ul>
        <li><strong>Peace Flare</strong> (escudo 2h/8h/24h) y <strong>Recon Jammer</strong> (bloquea/degrada el recon enemigo) — ver capítulo 3 para más detalles.</li>
        <li><strong>Blast Shelter</strong> — esconde una marcha de tropas durante una duración elegida, usado para esquivar un ataque aplastante entrante.</li>
        <li><strong>Lookout Tower</strong> — a nivel máximo, da aviso anticipado además de detalles de la marcha entrante (conteo de tropas, héroes, equipo, ETA), permitiendo una decisión informada de reforzar/evacuar/prepararse.</li>
        <li><strong>Barricade</strong> — la estructura defensiva central; una defensa perdida quema la barricada durante un periodo de cooldown, peor si es golpeada repetidamente en rápida sucesión.</li>
        <li>Los héroes <strong>Patrol</strong> deben asignarse manualmente al servicio de defensa en lugar de depender de la asignación automática por defecto, ya que no todos los héroes seleccionados automáticamente tienen habilidades relevantes para la defensa.</li>
        <li>El <strong>refuerzo</strong> de aliados es una de las herramientas defensivas más fuertes — las tropas de refuerzo luchan usando las propias estadísticas de combate del reforzador, así que un aliado fuerte que refuerza a un jugador débil aumenta masivamente la defensa efectiva.</li>
      </ul>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Mantén el Lookout Tower y el Assembly Point mejorados desde el principio — el aviso anticipado y la capacidad de refuerzo son inversiones defensivas baratas y de alto valor en relación al número bruto de tropas.
      </div>

      <p class="sentinel-hint">Un escudo Peace Flare a punto de expirar o una marcha entrante detectada por el Lookout Tower son momentos que no puedes permitirte descubrir tarde: configura <strong>Sentinel</strong> con palabras como <code>shield</code> o <code>incoming</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Protección para jugadores nuevos/de vuelta</h2>
      <p>Las cuentas nuevas tienen un periodo de paz inicial (unos 3 días) durante el cual no pueden ser atacadas — anulado de inmediato si el nuevo jugador ataca o hace recon a alguien más. Los jugadores que regresan/inactivos obtienen los buffs del evento Return of the Brave más regalos de bienvenida de la alianza en lugar de un escudo rígido.</p>

      <h2>Migración y fusiones de servidor</h2>
      <ul>
        <li><strong>State Merge:</strong> FunPlus fusiona periódicamente Estados más antiguos poco poblados en un "Estado principal" designado (cada Estado principal puede absorber de 1 a 4 sub-estados); los jugadores afectados reciben aproximadamente una semana de aviso previo, y se distribuye una compensación generosa después de la fusión.</li>
        <li><strong>State Transfer:</strong> una función separada, iniciada por el jugador — las cuentas inactivas 60+ días con HQ nivel 12+ se vuelven elegibles para transferirse voluntariamente a otro Estado.</li>
        <li><strong>Objetos de reubicación:</strong> Random Relocator (lugar aleatorio en el Estado actual), Advanced Relocator (elige el destino exacto), Alliance Relocator (parcela abierta más cercana al HQ/líder de tu alianza — reubicarse en el Territorio de Alianza otorga bonos de recolección y potenciadores de tropas mientras estés de guarnición allí).</li>
      </ul>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Haz siempre recon antes de atacar: sin exploración arriesgas defensores ocultos o refuerzos.</li>
        <li>Gestiona activamente Peace Flare y Recon Jammer en torno a las ventanas PvP, no dejes que expiren por accidente.</li>
        <li>El refuerzo de un aliado fuerte vale más que tropas extra propias: coordina la defensa con tu alianza.</li>
      </ul>
`,
  fr: `
      <h1>PvP et territoire</h1>
      <div class="hazard"></div>

      <h2>Attaquer</h2>
      <p>Fais toujours un <strong>recon avant d'attaquer</strong> (coûte des ressources ; nécessite un Lookout Tower niveau ~22+ pour le détail complet) — révèle le nombre de troupes, les troupes cachées, les ressources pillables, les statistiques de tech/skill, et surtout si la cible a des renforts entrants. Composition d'attaque recommandée : <strong>60% Infanterie / 20% Riders / 20% Hunters</strong>. Configure des Talents du Chef axés combat avant d'attaquer (défense/santé Infanterie, létalité/attaque Hunter), et active des compétences comme « Emergency Dressing », qui convertit 30% des morts de troupes potentielles en blessés à la place.</p>
      <p>Une attaque ratée coûte environ <strong>35% de morts / 10% de gravement blessés / 55% de légèrement blessés</strong> de la marche (les proportions varient selon la taille de la marche).</p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Attaquer sans reconnaître d'abord est l'erreur PvP la plus souvent citée — cela mène à des marches détruites par des défenseurs cachés ou des renforts que l'attaquant n'a pas détectés.
      </div>

      <h2>Se défendre</h2>
      <ul>
        <li><strong>Peace Flare</strong> (bouclier 2h/8h/24h) et <strong>Recon Jammer</strong> (bloque/dégrade le recon ennemi) — voir chapitre 3 pour les détails.</li>
        <li><strong>Blast Shelter</strong> — cache une marche de troupes pendant une durée choisie, utilisé pour esquiver une attaque écrasante entrante.</li>
        <li><strong>Lookout Tower</strong> — au niveau maximum, donne une alerte précoce plus les détails de la marche entrante (nombre de troupes, héros, équipement, ETA), permettant une décision informée de renfort/évacuation/préparation.</li>
        <li><strong>Barricade</strong> — la structure défensive centrale ; une défense perdue brûle la barricade pendant une période de cooldown, pire si elle est frappée à plusieurs reprises en succession rapide.</li>
        <li>Les héros <strong>Patrol</strong> doivent être assignés manuellement à la défense plutôt que de compter sur l'assignation automatique par défaut, car tous les héros sélectionnés automatiquement n'ont pas de compétences pertinentes pour la défense.</li>
        <li>Le <strong>renfort</strong> des alliés est l'un des outils défensifs les plus puissants — les troupes de renfort combattent en utilisant les propres statistiques de combat du renforceur, donc un allié fort renforçant un joueur faible booste massivement la défense effective.</li>
      </ul>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Garde le Lookout Tower et l'Assembly Point améliorés tôt — l'alerte précoce et la capacité de renfort sont des investissements défensifs bon marché et à haute valeur par rapport au nombre brut de troupes.
      </div>

      <p class="sentinel-hint">Un bouclier Peace Flare qui expire ou une marche entrante repérée par le Lookout Tower sont des moments que tu ne peux pas te permettre de découvrir en retard : configure <strong>Sentinel</strong> sur des mots comme <code>shield</code> ou <code>incoming</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Protection des nouveaux joueurs/joueurs de retour</h2>
      <p>Les nouveaux comptes ont une période de paix initiale (environ 3 jours) pendant laquelle ils ne peuvent pas être attaqués — annulée immédiatement si le nouveau joueur attaque ou reconnaît quelqu'un d'autre. Les joueurs de retour/inactifs obtiennent les buffs de l'événement Return of the Brave plus des cadeaux de bienvenue de l'alliance plutôt qu'un bouclier strict.</p>

      <h2>Migration et fusions de serveurs</h2>
      <ul>
        <li><strong>State Merge :</strong> FunPlus fusionne périodiquement d'anciens États sous-peuplés dans un « État principal » désigné (chaque État principal peut absorber 1 à 4 sous-états) ; les joueurs concernés reçoivent environ une semaine de préavis, et une compensation généreuse est distribuée après la fusion.</li>
        <li><strong>State Transfer :</strong> une fonctionnalité séparée, initiée par le joueur — les comptes inactifs depuis 60+ jours avec un QG niveau 12+ deviennent éligibles pour se transférer volontairement vers un autre État.</li>
        <li><strong>Objets de relocalisation :</strong> Random Relocator (emplacement aléatoire dans l'État actuel), Advanced Relocator (choisis la destination exacte), Alliance Relocator (parcelle ouverte la plus proche du QG/leader de ton alliance — se relocaliser dans le Territoire d'Alliance accorde des bonus de récolte et des buffs de troupes tant que tu y es en garnison).</li>
      </ul>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Fais toujours un recon avant d'attaquer : sans reconnaissance tu risques des défenseurs cachés ou des renforts.</li>
        <li>Gère activement Peace Flare et Recon Jammer autour des fenêtres PvP, ne les laisse pas expirer par accident.</li>
        <li>Le renfort d'un allié fort vaut plus que des troupes supplémentaires à toi : coordonne la défense avec ton alliance.</li>
      </ul>
`
};
