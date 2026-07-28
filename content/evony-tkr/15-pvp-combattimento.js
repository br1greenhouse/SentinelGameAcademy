var PAGE_I18N = {
  en: `
      <h1>PvP & Battle Mechanics</h1>
      <div class="hazard"></div>
      <p class="lead">How a battle really works behind the scenes: counters, range and damage calculation.</p>

      <h2>The troop counter system</h2>
      <p>At roughly equal tier/buffs: <strong>Mounted &gt; Ground &gt; Ranged &gt; Mounted</strong>, with Siege generally outranging and countering Ranged, and Ground able to defend against Ranged. Think rock-paper-scissors, then let range and buffs tip the actual outcome.</p>

      <h2>Range decides who hits first</h2>
      <p>Combat plays out behind the scenes in rounds based on range — battle starts roughly two tile-lengths beyond the longest-range unit involved (e.g., ~352 vs. 350-range Ranged troops, ~502 vs. 500-range Siege), so higher-range troops (Siege, then Ranged) get to act before slower/shorter-range troops close the distance.</p>

      <h2>The core damage concept</h2>
      <p>Total damage dealt scales with (Attacker's Attack stat × number of attacking troops) minus (Defender's Defense stat × number of defending troops) — buffs (from research, gear, Generals, Dragons) multiply directly into these numbers, so stacking the right buffs matters as much as raw troop count.</p>

      <h2>The five combat-relevant troop attributes</h2>
      <p>Attack, Defense, HP, Speed and Range.</p>

      <h2>Layering</h2>
      <p>Running multiple troop tiers/types together (in an attack march or, especially, in city defense) forces the enemy to burn combat rounds against each layer in turn — a well-layered defense meaningfully outperforms a single-tier stack of the same total troop count.</p>

      <div class="box box-adv">
        <span class="box-title">For advanced players</span>
        Before any major PvP event, check that your active buffs (research, Generals, Dragons, Monarch Talents) match the role of the march you're about to send: perfect layering with the wrong buffs still underperforms.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Don't rely on troop count alone: buffs multiply real damage more than you'd expect.</li>
        <li>Plan your layering before the event, not during the battle.</li>
        <li>Study your troops' range against the enemy's before engaging.</li>
      </ul>
`,
  es: `
      <h1>PvP y mecánicas de combate</h1>
      <div class="hazard"></div>
      <p class="lead">Cómo funciona realmente una batalla entre bastidores: contramedidas, alcance y cálculo del daño.</p>

      <h2>El sistema de contramedidas de tropas</h2>
      <p>Con tier/buffs aproximadamente iguales: <strong>Caballería &gt; Infantería &gt; A Distancia &gt; Caballería</strong>, con el Asedio generalmente superando en alcance y contrarrestando a las tropas A Distancia, y la Infantería capaz de defenderse de las tropas A Distancia. Piensa en ello como piedra-papel-tijera, y luego deja que el alcance y los buffs inclinen el resultado real.</p>

      <h2>El alcance decide quién golpea primero</h2>
      <p>El combate se desarrolla entre bastidores en rondas basadas en el alcance — la batalla comienza aproximadamente dos longitudes de casilla más allá de la unidad con mayor alcance involucrada (por ejemplo, ~352 frente a tropas A Distancia de alcance 350, ~502 frente a Asedio de alcance 500), así que las tropas de mayor alcance (Asedio, luego A Distancia) actúan antes que las tropas más lentas/de menor alcance que tienen que acercarse.</p>

      <h2>El concepto central de daño</h2>
      <p>El daño total infligido escala con (estadística de Ataque del atacante × número de tropas atacantes) menos (estadística de Defensa del defensor × número de tropas defensoras) — los buffs (de investigación, equipo, Generales, Dragones) se multiplican directamente en estos números, así que acumular los buffs correctos importa tanto como el número bruto de tropas.</p>

      <h2>Los cinco atributos de combate relevantes</h2>
      <p>Ataque, Defensa, HP, Velocidad y Alcance.</p>

      <h2>Layering</h2>
      <p>Combinar varios tiers/tipos de tropa juntos (en una marcha de ataque o, especialmente, en la defensa de la ciudad) obliga al enemigo a gastar rondas de combate contra cada capa por turno — una defensa bien estratificada supera claramente a una pila de un solo tier con el mismo número total de tropas.</p>

      <div class="box box-adv">
        <span class="box-title">Para jugadores avanzados</span>
        Antes de cualquier gran evento PvP, comprueba que tus buffs activos (investigación, Generales, Dragones, Talentos del Monarca) coincidan con el rol de la marcha que vas a enviar: un layering perfecto con los buffs equivocados sigue rindiendo poco.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>No confíes solo en el número de tropas: los buffs multiplican el daño real más de lo que crees.</li>
        <li>Planifica tu layering antes del evento, no durante la batalla.</li>
        <li>Estudia el alcance de tus tropas frente al del enemigo antes de entrar en combate.</li>
      </ul>
`,
  fr: `
      <h1>PvP et mécaniques de combat</h1>
      <div class="hazard"></div>
      <p class="lead">Comment une bataille fonctionne vraiment en coulisses : contres, portée et calcul des dégâts.</p>

      <h2>Le système de contres des troupes</h2>
      <p>À tier/buffs à peu près égaux : <strong>Cavalerie &gt; Infanterie &gt; À Distance &gt; Cavalerie</strong>, le Siège ayant généralement une portée supérieure et contrant les troupes à Distance, et l'Infanterie pouvant se défendre contre les troupes à Distance. Pense-y comme à un pierre-feuille-ciseaux, puis laisse la portée et les buffs faire pencher le résultat réel.</p>

      <h2>La portée décide qui frappe en premier</h2>
      <p>Le combat se déroule en coulisses en rounds basés sur la portée — la bataille commence environ deux longueurs de case au-delà de l'unité à la plus longue portée impliquée (par ex. ~352 contre des troupes à Distance de portée 350, ~502 contre du Siège de portée 500), donc les troupes à plus longue portée (Siège, puis à Distance) agissent avant que les troupes plus lentes/à courte portée ne réduisent la distance.</p>

      <h2>Le concept central des dégâts</h2>
      <p>Les dégâts totaux infligés évoluent selon (statistique d'Attaque de l'attaquant × nombre de troupes attaquantes) moins (statistique de Défense du défenseur × nombre de troupes défensives) — les buffs (venant de la recherche, de l'équipement, des Généraux, des Dragons) se multiplient directement dans ces chiffres, donc empiler les bons buffs compte autant que le nombre brut de troupes.</p>

      <h2>Les cinq attributs de combat pertinents</h2>
      <p>Attaque, Défense, PV, Vitesse et Portée.</p>

      <h2>Layering</h2>
      <p>Combiner plusieurs tiers/types de troupes ensemble (dans une marche d'attaque ou, surtout, en défense de ville) oblige l'ennemi à brûler des rounds de combat contre chaque couche tour à tour — une défense bien superposée surpasse nettement un empilement d'un seul tier avec le même nombre total de troupes.</p>

      <div class="box box-adv">
        <span class="box-title">Pour joueurs avancés</span>
        Avant tout grand événement PvP, vérifie que tes buffs actifs (recherche, Généraux, Dragons, Talents du Monarque) correspondent au rôle de la marche que tu t'apprêtes à envoyer : un layering parfait avec les mauvais buffs reste peu performant.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Ne compte pas uniquement sur le nombre de troupes : les buffs multiplient les dégâts réels plus qu'on ne le pense.</li>
        <li>Planifie ton layering avant l'événement, pas pendant la bataille.</li>
        <li>Étudie la portée de tes troupes par rapport à celle de l'ennemi avant d'engager le combat.</li>
      </ul>
`
};
