/* Contenuto tradotto del capitolo — Lords Mobile / 14 Traps & city defense.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Traps & city defense</h1>
      <div class="hazard"></div>
      <p class="lead">Walls, traps, Garrison, Reinforcement, Shield and Shelter: how to protect your city, and how trap accounts work.</p>

      <h2>Walls and traps</h2>
      <p><strong>Traps are built onto the Castle Wall.</strong> Upgrading the Wall increases its HP, repair rate, and maximum trap capacity. While the Wall holds, it absorbs hits and traps deal passive damage to attackers — the longer it holds, the more cumulative trap damage attackers take.</p>

      <h2>Garrison vs. Reinforcement: the difference that matters</h2>
      <ul>
        <li><strong>Garrison:</strong> sending your own troops to defend a guildmate's castle. Invaders must fight through Garrison troops first — but these troops do <strong>not</strong> benefit from the host's Wall/Traps.</li>
        <li><strong>Reinforcement:</strong> placing your troops <em>inside</em> a guildmate's defenses — these troops <strong>do</strong> benefit from the host's Wall, Traps, and buffs.</li>
      </ul>

      <h2>Protection options</h2>
      <ul>
        <li>A <strong>Shield</strong> fully protects your city from attack (costly to run continuously).</li>
        <li>A <strong>Shelter</strong> is a free mechanic to tuck troops safely away without a shield.</li>
        <li><strong>Watchtower</strong> at Level 25 unlocks "Fortify," reducing attacking troops' ATK by 10%.</li>
        <li>Traps themselves have tiers (roughly T1-T4) matching the troop-tier destroy-point values used in KvK scoring.</li>
      </ul>

      <p class="sentinel-hint">When your city gets attacked or scouted, the game fires an immediate notification — <strong>Sentinel</strong> can turn it into a real alarm that wakes you up even at night: set keywords like <code>attack</code> or <code>scout</code>. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Trap accounts (advanced archetype)</h2>
      <p>A well-known community strategy: build an account that looks weak (low visible Might, minimal visible offense) while secretly maximizing trap capacity and Wall HP — baiting overconfident attackers into catastrophic troop losses.</p>

      <div class="box box-adv">
        <span class="box-title">For advanced players</span>
        Rough trap-conversion ratios cited by trap-account guides: 1 T4 troop ≈ 1.5 T3 ≈ 2.25 T2 ≈ 4.5 T1 (verify current ratios in-game, as these shift with balance updates).
      </div>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Don't assume Shield = safety net for everything. It protects against direct attacks but doesn't help troops caught out gathering — plan troop deployment separately from your Shield timing.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Never leave troops out uncovered when your Shield is about to expire.</li>
        <li>If you're aiming for a trap profile, avoid showing off high visible Might: it would spoil the bait.</li>
        <li>Repairing damaged traps costs less than rebuilding from scratch: don't put it off.</li>
      </ul>
`,
  es: `
      <h1>Trampas y defensa de la ciudad</h1>
      <div class="hazard"></div>
      <p class="lead">Murallas, trampas, Garrison, Reinforcement, Escudo y Refugio: cómo proteger tu ciudad, y cómo funcionan las cuentas trampa.</p>

      <h2>Murallas y trampas</h2>
      <p><strong>Las trampas se construyen sobre la Muralla del Castillo.</strong> Mejorar la Muralla aumenta su HP, su velocidad de reparación y su capacidad máxima de trampas. Mientras la Muralla resista, absorbe golpes y las trampas infligen daño pasivo a los atacantes — cuanto más tiempo resiste, más daño acumulado de trampas reciben los atacantes.</p>

      <h2>Garrison frente a Reinforcement: la diferencia que importa</h2>
      <ul>
        <li><strong>Garrison (Guarnición):</strong> enviar tus propias tropas para defender el castillo de un compañero de gilda. Los invasores deben luchar primero contra las tropas en Garrison — pero estas tropas <strong>no</strong> se benefician de la Muralla/Trampas del anfitrión.</li>
        <li><strong>Reinforcement (Refuerzo):</strong> colocar tus tropas <em>dentro</em> de las defensas de un compañero de gilda — estas tropas <strong>sí</strong> se benefician de la Muralla, las Trampas y los bonos del anfitrión.</li>
      </ul>

      <h2>Opciones de protección</h2>
      <ul>
        <li>Un <strong>Escudo (Shield)</strong> protege por completo tu ciudad de ataques (costoso de mantener de forma continua).</li>
        <li>Un <strong>Refugio (Shelter)</strong> es un mecanismo gratuito para poner a salvo a las tropas sin escudo.</li>
        <li>La <strong>Torre de vigilancia</strong> en el nivel 25 desbloquea "Fortify", que reduce el ATK de las tropas atacantes en un 10%.</li>
        <li>Las propias trampas tienen tiers (aproximadamente T1-T4) que coinciden con los valores de puntos por destrucción de tier de tropa usados en la puntuación del KvK.</li>
      </ul>

      <p class="sentinel-hint">Cuando tu ciudad es atacada o explorada, el juego envía una notificación inmediata — <strong>Sentinel</strong> puede convertirla en una alarma real que te despierte incluso de noche: configura palabras como <code>attack</code> o <code>scout</code>. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Cuentas trampa (arquetipo avanzado)</h2>
      <p>Una estrategia muy conocida en la comunidad: construir una cuenta que parezca débil (Might visible bajo, ofensiva visible mínima) mientras en secreto se maximiza la capacidad de trampas y el HP de la Muralla — atrayendo a atacantes demasiado confiados hacia pérdidas catastróficas de tropas.</p>

      <div class="box box-adv">
        <span class="box-title">Para jugadores avanzados</span>
        Ratios aproximados de conversión de trampas citados por guías de cuentas trampa: 1 tropa T4 ≈ 1,5 T3 ≈ 2,25 T2 ≈ 4,5 T1 (verifica siempre los ratios actuales en el juego, ya que cambian con las actualizaciones de balance).
      </div>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        No asumas que el Escudo es una red de seguridad para todo. Protege contra ataques directos pero no ayuda a las tropas sorprendidas recolectando: planifica el despliegue de tropas por separado del tiempo de tu Escudo.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Nunca dejes tropas fuera sin cobertura cuando tu Escudo esté a punto de expirar.</li>
        <li>Si buscas un perfil trampa, evita mostrar un Might visible alto: arruinaría el cebo.</li>
        <li>Reparar trampas dañadas cuesta menos que reconstruirlas desde cero: no lo postergues.</li>
      </ul>
`,
  fr: `
      <h1>Pièges et défense de la ville</h1>
      <div class="hazard"></div>
      <p class="lead">Murailles, pièges, Garrison, Reinforcement, Bouclier et Abri : comment protéger ta ville, et comment fonctionnent les comptes pièges.</p>

      <h2>Murailles et pièges</h2>
      <p><strong>Les pièges se construisent sur la Muraille du Château.</strong> Améliorer la Muraille augmente ses PV, sa vitesse de réparation et sa capacité maximale de pièges. Tant que la Muraille tient, elle absorbe les coups et les pièges infligent des dégâts passifs aux attaquants — plus elle tient longtemps, plus les attaquants subissent de dégâts cumulés de pièges.</p>

      <h2>Garrison vs Reinforcement : la différence qui compte</h2>
      <ul>
        <li><strong>Garrison :</strong> envoyer tes propres troupes défendre le château d'un membre de guilde. Les envahisseurs doivent d'abord combattre les troupes en Garrison — mais ces troupes ne bénéficient <strong>pas</strong> de la Muraille/des Pièges de l'hôte.</li>
        <li><strong>Reinforcement :</strong> placer tes troupes <em>à l'intérieur</em> des défenses d'un membre de guilde — ces troupes <strong>bénéficient</strong> de la Muraille, des Pièges et des buffs de l'hôte.</li>
      </ul>

      <h2>Options de protection</h2>
      <ul>
        <li>Un <strong>Bouclier (Shield)</strong> protège entièrement ta ville des attaques (coûteux à maintenir en continu).</li>
        <li>Un <strong>Abri (Shelter)</strong> est un mécanisme gratuit pour mettre les troupes en sécurité sans bouclier.</li>
        <li>La <strong>Tour de guet</strong> au niveau 25 débloque « Fortify », qui réduit de 10% l'ATK des troupes attaquantes.</li>
        <li>Les pièges eux-mêmes ont des tiers (environ T1-T4) correspondant aux valeurs de points de destruction par tier de troupe utilisées dans le score du KvK.</li>
      </ul>

      <p class="sentinel-hint">Quand ta ville est attaquée ou espionnée, le jeu envoie une notification immédiate — <strong>Sentinel</strong> peut la transformer en véritable alarme qui te réveille même la nuit : configure des mots-clés comme <code>attack</code> ou <code>scout</code>. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Comptes pièges (archétype avancé)</h2>
      <p>Une stratégie bien connue de la communauté : construire un compte qui paraît faible (Might visible bas, offensive visible minimale) tout en maximisant secrètement la capacité de pièges et les PV de la Muraille — attirant des attaquants trop confiants vers des pertes catastrophiques de troupes.</p>

      <div class="box box-adv">
        <span class="box-title">Pour les joueurs avancés</span>
        Ratios approximatifs de conversion des pièges cités par les guides de comptes pièges : 1 troupe T4 ≈ 1,5 T3 ≈ 2,25 T2 ≈ 4,5 T1 (vérifie toujours les ratios actuels en jeu, car ils évoluent avec les mises à jour d'équilibrage).
      </div>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Ne suppose pas que le Bouclier est un filet de sécurité pour tout. Il protège contre les attaques directes mais n'aide pas les troupes surprises en train de récolter : planifie le déploiement des troupes séparément du timing de ton Bouclier.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Ne laisse jamais de troupes dehors sans couverture quand ton Bouclier est sur le point d'expirer.</li>
        <li>Si tu vises un profil piège, évite d'afficher un Might visible élevé : ça gâcherait l'appât.</li>
        <li>Réparer des pièges endommagés coûte moins cher que les reconstruire de zéro : ne remets pas ça à plus tard.</li>
      </ul>
`
};
