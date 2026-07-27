/* Contenuto tradotto del capitolo — Rise of Kingdoms / 13 Rallies, marches, formations.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Marches, rallies & formations</h1>
      <div class="hazard"></div>
      <p class="lead">How a rally works, the difference from garrison/reinforcement, and how to compose marches by role.</p>

      <p>A <strong>rally</strong> is a coordinated group attack — the only way to attack Barbarian Forts and most fortified structures/cities (regular Barbarians can be attacked solo). Rally capacity scales with your <strong>Castle</strong> level.</p>

      <ul>
        <li>The <strong>rally leader</strong> sets the join timer and supplies the commanders whose buffs apply to the whole group; a <strong>joiner's</strong> own commander skills stop applying once merged into the rally — only their +March Speed and +Troop Capacity traits matter for getting there. Rally march speed is capped by the slowest troop type sent, so sending Siege into a rally slows the whole group down — a classic beginner mistake.</li>
        <li><strong>Garrison/reinforcement</strong> is separate from rallying: alliance members can send troops to help defend an ally's city or alliance stronghold, capped by that structure's reinforcement capacity. A portion of reinforcing troops can be lost if the defended target falls, so reinforcing carries real risk.</li>
      </ul>

      <h2>Troop composition by squad type</h2>
      <ul>
        <li><strong>Rally squads</strong> are overwhelmingly cavalry (see chapter 10).</li>
        <li><strong>Field/roaming squads</strong> are typically built around a single troop type matching your civilization and available commanders, optimized for open-field PvP skirmishes.</li>
        <li><strong>Garrison squads</strong> are infantry-heavy, since Infantry has the best defense/health and many infantry commanders carry garrison-specific bonuses; cavalry is explicitly weak in a garrison role.</li>
        <li><strong>Siege</strong> is kept separate: a dedicated high-tier siege force for cracking Watchtowers/walls during city or fort attacks, plus a cheap low-tier siege stack purely for map gathering.</li>
      </ul>

      <p class="sentinel-hint">An incoming rally or a march about to land doesn't wait for you to open the app: set up <strong>Sentinel</strong> on words like <code>rally</code> or <code>march</code> for a real alarm even with your phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Mixed-troop marches (all three combat types together) are common early on but fall off in value once your commanders reach roughly level 40 — march speed gets capped by your slowest unit, equipment can't optimize for three types at once, and most late-game research is type-specific. Settle on one main troop specialization as you scale up.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Never send Siege into a rally: it slows the whole group's march.</li>
        <li>Your commander skills don't count when joining someone else's rally: only speed and capacity matter.</li>
        <li>Reinforcing carries real risk: understand what can happen if the target falls before you do it.</li>
      </ul>
`,
  es: `
      <h1>Marchas, rallies y formaciones</h1>
      <div class="hazard"></div>
      <p class="lead">Cómo funciona un rally, la diferencia con guarnición/refuerzo, y cómo componer marchas según el rol.</p>

      <p>Un <strong>rally</strong> es un ataque de grupo coordinado — la única forma de atacar Barbarian Forts y la mayoría de estructuras/ciudades fortificadas (los Barbarians normales pueden atacarse en solitario). La capacidad de rally escala con el nivel de tu <strong>Castle</strong>.</p>

      <ul>
        <li>El <strong>líder del rally</strong> fija el temporizador de unión y aporta los comandantes cuyos bonos se aplican a todo el grupo; las habilidades del comandante de quien <strong>se une</strong> dejan de aplicarse al fusionarse con el rally — solo importan sus rasgos de +Velocidad de Marcha y +Capacidad de Tropas para llegar a tiempo. La velocidad de marcha del rally está limitada por el tipo de tropa más lento enviado, así que enviar Siege a un rally ralentiza a todo el grupo — un error clásico de principiante.</li>
        <li>La <strong>guarnición/refuerzo</strong> es distinta del rally: los miembros de la alianza pueden enviar tropas para ayudar a defender la ciudad de un aliado o una fortaleza de alianza, limitada por la capacidad de refuerzo de esa estructura. Una parte de las tropas de refuerzo puede perderse si el objetivo defendido cae, así que reforzar conlleva un riesgo real.</li>
      </ul>

      <h2>Composición de tropas por tipo de escuadrón</h2>
      <ul>
        <li><strong>Los escuadrones de rally</strong> son abrumadoramente de caballería (ver capítulo 10).</li>
        <li><strong>Los escuadrones de campo/roaming</strong> se construyen normalmente en torno a un único tipo de tropa que coincide con tu civilización y comandantes disponibles, optimizados para escaramuzas PvP en campo abierto.</li>
        <li><strong>Los escuadrones de guarnición</strong> son mayoritariamente de infantería, ya que la Infantería tiene la mejor defensa/salud y muchos comandantes de infantería llevan bonos específicos de guarnición; la caballería es explícitamente débil en un rol de guarnición.</li>
        <li><strong>El Siege</strong> se mantiene aparte: una fuerza de siege de tier alto dedicada para romper Watchtowers/murallas durante ataques a ciudades o fuertes, más un stack de siege de tier bajo barato puramente para la recolección en el mapa.</li>
      </ul>

      <p class="sentinel-hint">Un rally entrante o una marcha a punto de llegar no espera a que abras la app: configura <strong>Sentinel</strong> con palabras como <code>rally</code> o <code>march</code> para una alarma real incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Las marchas de tropas mixtas (los tres tipos de combate juntos) son comunes al principio pero pierden valor una vez que tus comandantes alcanzan aproximadamente el nivel 40 — la velocidad de marcha queda limitada por tu unidad más lenta, el equipo no puede optimizarse para tres tipos a la vez, y la mayoría de la investigación de final de partida es específica por tipo. Decántate por una especialización de tropa principal a medida que creces.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Nunca envíes Siege a un rally: ralentiza la marcha de todo el grupo.</li>
        <li>Tus habilidades de comandante no cuentan al unirte al rally de otra persona: solo importan velocidad y capacidad.</li>
        <li>Reforzar conlleva un riesgo real: entiende qué puede pasar si el objetivo cae antes de hacerlo.</li>
      </ul>
`,
  fr: `
      <h1>Marches, rallies et formations</h1>
      <div class="hazard"></div>
      <p class="lead">Comment fonctionne un rally, la différence avec garnison/renfort, et comment composer les marches selon le rôle.</p>

      <p>Un <strong>rally</strong> est une attaque de groupe coordonnée — le seul moyen d'attaquer les Barbarian Forts et la plupart des structures/villes fortifiées (les Barbarians classiques peuvent être attaqués en solo). La capacité de rally évolue avec le niveau de ton <strong>Castle</strong>.</p>

      <ul>
        <li>Le <strong>chef de rally</strong> fixe le minuteur d'adhésion et fournit les commandants dont les bonus s'appliquent à tout le groupe ; les compétences du commandant d'un <strong>participant</strong> cessent de s'appliquer une fois fusionné dans le rally — seuls comptent ses traits +Vitesse de Marche et +Capacité de Troupes pour arriver à temps. La vitesse de marche du rally est plafonnée par le type de troupe le plus lent envoyé, donc envoyer du Siege dans un rally ralentit tout le groupe — une erreur classique de débutant.</li>
        <li>La <strong>garnison/renfort</strong> est distincte du rally : les membres de l'alliance peuvent envoyer des troupes pour aider à défendre la ville d'un allié ou une place forte d'alliance, plafonnée par la capacité de renfort de cette structure. Une partie des troupes de renfort peut être perdue si la cible défendue tombe, donc renforcer comporte un vrai risque.</li>
      </ul>

      <h2>Composition des troupes par type d'escouade</h2>
      <ul>
        <li><strong>Les escouades de rally</strong> sont majoritairement en cavalerie (voir chapitre 10).</li>
        <li><strong>Les escouades de terrain/roaming</strong> sont généralement construites autour d'un seul type de troupe correspondant à ta civilisation et aux commandants disponibles, optimisées pour les escarmouches PvP en terrain ouvert.</li>
        <li><strong>Les escouades de garnison</strong> sont majoritairement en infanterie, car l'Infanterie a la meilleure défense/santé et de nombreux commandants d'infanterie portent des bonus spécifiques de garnison ; la cavalerie est explicitement faible dans un rôle de garnison.</li>
        <li><strong>Le Siege</strong> reste à part : une force de siege de tier élevé dédiée pour casser les Watchtowers/murailles lors des attaques de ville ou de fort, plus un stack de siege de tier bas bon marché uniquement pour la récolte sur la carte.</li>
      </ul>

      <p class="sentinel-hint">Un rally entrant ou une marche sur le point d'arriver n'attend pas que tu ouvres l'appli : configure <strong>Sentinel</strong> sur des mots comme <code>rally</code> ou <code>march</code> pour une vraie alarme même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Les marches à troupes mixtes (les trois types de combat ensemble) sont courantes au début mais perdent de la valeur une fois que tes commandants atteignent environ le niveau 40 — la vitesse de marche est plafonnée par ton unité la plus lente, l'équipement ne peut pas optimiser pour trois types à la fois, et la plupart de la recherche de fin de partie est spécifique à un type. Fixe-toi sur une spécialisation de troupe principale au fur et à mesure que tu progresses.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>N'envoie jamais de Siege dans un rally : ça ralentit la marche de tout le groupe.</li>
        <li>Tes compétences de commandant ne comptent pas quand tu rejoins le rally de quelqu'un d'autre : seules la vitesse et la capacité comptent.</li>
        <li>Renforcer comporte un vrai risque : comprends ce qui peut arriver si la cible tombe avant de le faire.</li>
      </ul>
`
};
