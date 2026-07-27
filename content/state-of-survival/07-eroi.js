/* Contenuto tradotto del capitolo — State of Survival / 07 Heroes.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Heroes</h1>
      <div class="hazard"></div>

      <h2>Rarity tiers</h2>
      <p>State of Survival does not use "SR/SSR" naming. The real ladder is:</p>
      <ul>
        <li><strong>Rare/Elite</strong> (blue) — lowest tier; only two heroes sit here permanently (Rusty, Ghost).</li>
        <li><strong>Epic</strong> (purple) — mid-tier, obtained via Hero Search (paid with Biocaps) and Intel Missions; skews toward "infected-killing" specialists (Sarge, Eva, Mike, Jane, Travis, Nanami).</li>
        <li><strong>Legendary</strong> (yellow/orange) — top standard tier, obtained via special events, story unlocks, and paid bundles; nearly all "Generation" heroes live here (Nikola, Maddie & Frank, Jeb, Trish, Wolfe, Miho, Zoe, Ash, etc.).</li>
        <li><strong>Resonating Heroes</strong> — a special, non-power-tiered category (Wacko, Daryl, Joker, and the Resident Evil crossover Leon S. Kennedy). They have no independent stats — they mirror the level, rank, skill level, and gear of another hero of the <strong>same troop type</strong> that you designate, acting as a free "second copy" of an investment you've already made. High value if resonated with your best hero of that type; commonly wasted otherwise.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Terminology note</span>
        There is no confirmed rarity tier above Legendary. The top-end power layer instead comes from <strong>Hero Completion / Awakening</strong> (a progression system, not a new rarity — see below).
      </div>

      <h2>Hero roles</h2>
      <p>Three roles, each tied 1:1 to a troop type and to a fixed combat position in the Explorer Trail:</p>
      <ul>
        <li><strong>Brawler</strong> leads <strong>Infantry</strong> — highest HP of the three, shortest range, targeted first. Priority investment for rally leaders, since a dead front line collapses the whole march.</li>
        <li><strong>Marksman</strong> leads <strong>Hunter</strong> troops — highest Attack, lowest HP, longest range; the primary raw damage dealer; targeted second.</li>
        <li><strong>Scout</strong> leads <strong>Rider</strong> troops — mobility, utility, healing, and crowd control rather than pure damage; targeted last.</li>
      </ul>
      <p>On top of role, each hero also has a <strong>Benefit classification</strong> (up to two per hero): Development, Gathering, Infected-killing, Patrol (garrison/defense), Rally, or Siege (attacking enemy bases/PvP). This is why the same hero can be described differently across guides.</p>

      <h2>Notable heroes</h2>
      <p><em>(illustrative — verify current in-game names before publishing, as the roster expands regularly)</em></p>
      <ul>
        <li><strong>PvP / Rally leads:</strong> Buzz (top Infantry rally lead), Cardini (Hunter, poison/burn debuffs + rally VP buff), Lucky (Rider, mobility + rally troop health), Jeb (Hunter, armor penetration + troop-attack buff), Tina (Hunter, lifesteal + rally attack/VP bonus), Maddie & Frank (Rider, F2P-viable all-rounder), Ray & Rolex (garrison/PvP siege specialist), Nikola (Infantry, widely called best garrison/tower-defense hero).</li>
        <li><strong>PvE / Explorer Trail:</strong> Trish (Rider support — HP regen, freeze CC, slow), Wolfe (Infantry — defense debuff + self-heal, strong PvE pick), Eva (top Explorer pick, pairs with Wolfe), Travis (reduces Stamina cost on infected-hunting — near-mandatory early pick), Ghost (Rare, gas-gathering + anti-infected damage for early wilderness clears).</li>
        <li><strong>Resource-gathering specialists:</strong> Mike = food, Rusty = metal, Chef = wood, Ghost = gas.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Over-investing in starter heroes (Ghost, Rusty, Sarge) is a near-universal beginner mistake — use them for cheap early utility/gathering only, and save fragments/manuals for Legendary heroes.
      </div>

      <h2>Skills, leveling, and Awakening</h2>
      <ul>
        <li>Every hero has <strong>3 base skills</strong> (active and/or passive). Active skills can be disabled by enemy Silence effects; passives are immune to Silence.</li>
        <li>Skills have two separate effect tracks: an <strong>Explorer effect</strong> (used when directly controlling the hero in the Explorer Trail) and a <strong>Military/troop effect</strong> (a passive buff applied to the whole marching army in PvP/rally/wilderness contexts).</li>
        <li>Older heroes level skills via rarity-specific Skill Books; from the 4th-generation Legendary heroes onward, skill levels auto-upgrade with Hero Rank.</li>
        <li><strong>Awakening/Hero Completion</strong> is the real above-Legendary power layer: it grants 3 additional unique skills (on top of the base 3) via Limitless Capsules and Completion Potions, each leveling to 10, with level 10 gated behind a Limitless Syringe plus fully-researched Limitless Talents. Completion also assigns each hero a <strong>Build</strong> — Control, Offense, or Defense — in a Control > Offense > Defense > Control counter loop, adding team-composition depth.</li>
      </ul>

      <h2>Rank & Level (SoS does not use "star-up" naming)</h2>
      <p>Two parallel tracks:</p>
      <ul>
        <li><strong>Level:</strong> 1–80 cap, raised with Combat Manuals (tiers I–V), earned from Explorer Trail/wilderness kills/events.</li>
        <li><strong>Rank:</strong> the real tier-gate, paid in Hero Fragments + Hero Badges, capped at <strong>General</strong>. Approximate total fragments needed to reach Colonel rank: <strong>~1,200</strong> — guides note this can take months per hero, reinforcing the "focus on 3–4 heroes" advice below.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Spreading Hero Fragments across too many heroes instead of focusing on 3–4 is called the single most repeated hero-related mistake in the community.
      </div>

      <h2>Hero gear</h2>
      <p>Unlocks automatically at Workshop/HQ level 16. Each hero role has its own 3-piece set (Head, Body/Chest, Feet/Leg), across 5 tiers (Common → Uncommon → Rare → Epic → Legendary). Materials: Hero Gear Parts (daily farmable, notably from the Influencer Trap event) and Hero Gear Designs.</p>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        For rally leaders, max Infantry Chest gear first (Health — keeps the front line alive). For non-leaders, prioritize Hunter Chest gear (damage output). Rider gear is generally the lowest priority.
      </div>

      <h2>Hero Fragments</h2>
      <p>Called Fragments, not "shards." Four categories — Legendary, Epic, Rare/Elite, Resonating — each exchangeable into General Hero Fragments, which convert 1:1 into fragments for any owned hero (with a few named exceptions that can't be obtained this way). Farming sources for Legendary fragments include VIP 7+ (1 free/day), Alliance Throwdown (biweekly), the Reservoir Store, State vs State rewards, and paid bundles.</p>

      <h2>Quick tips</h2>
      <ul>
        <li>Always focus on 3–4 heroes (one per troop type plus role coverage): Rank costs far more than Level.</li>
        <li>Don't waste fragments on starter heroes: they're useful only for cheap early utility/gathering.</li>
        <li>Resonating Heroes are only worth it when resonated with your best hero of the same troop type.</li>
      </ul>
`,
  es: `
      <h1>Héroes</h1>
      <div class="hazard"></div>

      <h2>Tiers de rareza</h2>
      <p>State of Survival no usa la nomenclatura "SR/SSR". La escala real es:</p>
      <ul>
        <li><strong>Rare/Elite</strong> (azul) — el tier más bajo; solo dos héroes permanecen aquí de forma permanente (Rusty, Ghost).</li>
        <li><strong>Epic</strong> (morado) — tier medio, obtenido mediante Hero Search (de pago con Biocaps) y misiones Intel; se inclina hacia especialistas "anti-infectados" (Sarge, Eva, Mike, Jane, Travis, Nanami).</li>
        <li><strong>Legendary</strong> (amarillo/naranja) — el tier estándar más alto, obtenido mediante eventos especiales, desbloqueos de historia y paquetes de pago; casi todos los héroes "de Generación" viven aquí (Nikola, Maddie & Frank, Jeb, Trish, Wolfe, Miho, Zoe, Ash, etc.).</li>
        <li><strong>Héroes Resonantes</strong> — una categoría especial, sin jerarquía de poder (Wacko, Daryl, Joker, y el crossover de Resident Evil Leon S. Kennedy). No tienen estadísticas independientes — reflejan el nivel, rango, nivel de habilidad y equipo de otro héroe del <strong>mismo tipo de tropa</strong> que designes, actuando como una "segunda copia" gratuita de una inversión que ya has hecho. Alto valor si se resuenan con tu mejor héroe de ese tipo, comúnmente desperdiciados en otro caso.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Nota de terminología</span>
        No hay un tier de rareza confirmado por encima de Legendary. La capa de poder de gama alta viene en cambio de <strong>Hero Completion / Awakening</strong> (un sistema de progresión, no una nueva rareza — ver abajo).
      </div>

      <h2>Roles de héroe</h2>
      <p>Tres roles, cada uno vinculado 1:1 a un tipo de tropa y a una posición de combate fija en el Explorer Trail:</p>
      <ul>
        <li><strong>Brawler</strong> lidera la <strong>Infantería</strong> — el HP más alto de los tres, el alcance más corto, el primero en ser atacado. Inversión prioritaria para los líderes de rally, ya que una primera línea muerta colapsa toda la marcha.</li>
        <li><strong>Marksman</strong> lidera las tropas <strong>Hunter</strong> — el Ataque más alto, el HP más bajo, el alcance más largo; el principal generador de daño bruto; atacado en segundo lugar.</li>
        <li><strong>Scout</strong> lidera las tropas <strong>Rider</strong> — movilidad, utilidad, curación y control de masas en lugar de daño puro; atacado en último lugar.</li>
      </ul>
      <p>Además del rol, cada héroe también tiene una clasificación de <strong>Beneficio</strong> (hasta dos por héroe): Development, Gathering, Infected-killing, Patrol (guarnición/defensa), Rally o Siege (ataque a bases enemigas/PvP). Por eso el mismo héroe puede describirse de forma diferente entre guías.</p>

      <h2>Héroes destacados</h2>
      <p><em>(ilustrativo — verifica los nombres actuales en el juego antes de publicar, ya que el roster se expande regularmente)</em></p>
      <ul>
        <li><strong>PvP / líderes de rally:</strong> Buzz (mejor líder de rally de Infantería), Cardini (Hunter, debuffs de veneno/quemadura + bono de PV de rally), Lucky (Rider, movilidad + salud de tropas en rally), Jeb (Hunter, penetración de armadura + bono de ataque de tropas), Tina (Hunter, robo de vida + bono de ataque/PV de rally), Maddie & Frank (Rider, todoterreno viable en F2P), Ray & Rolex (especialista en guarnición/siege PvP), Nikola (Infantería, ampliamente considerado el mejor héroe de guarnición/defensa de torre).</li>
        <li><strong>PvE / Explorer Trail:</strong> Trish (soporte Rider — regeneración de HP, CC de congelación, ralentización), Wolfe (Infantería — debuff de defensa + autocuración, fuerte elección PvE), Eva (mejor elección para el Explorer, se combina con Wolfe), Travis (reduce el coste de Estamina al cazar infectados — elección temprana casi obligatoria), Ghost (Rare, recolección de gas + daño anti-infectados para las primeras limpiezas en la naturaleza).</li>
        <li><strong>Especialistas en recolección de recursos:</strong> Mike = food, Rusty = metal, Chef = wood, Ghost = gas.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Sobre-invertir en héroes iniciales (Ghost, Rusty, Sarge) es un error casi universal entre principiantes — úsalos solo para utilidad/recolección económica inicial, y guarda fragmentos/manuales para héroes Legendary.
      </div>

      <h2>Habilidades, subida de nivel y Awakening</h2>
      <ul>
        <li>Cada héroe tiene <strong>3 habilidades base</strong> (activas y/o pasivas). Las habilidades activas pueden ser desactivadas por efectos Silence enemigos; las pasivas son inmunes al Silence.</li>
        <li>Las habilidades tienen dos vías de efecto separadas: un <strong>efecto Explorer</strong> (usado al controlar directamente al héroe en el Explorer Trail) y un <strong>efecto Militar/de tropa</strong> (un bono pasivo aplicado a todo el ejército en marcha en contextos PvP/rally/naturaleza).</li>
        <li>Los héroes más antiguos suben de nivel las habilidades mediante Skill Books específicos de rareza; desde los héroes Legendary de 4ª generación en adelante, los niveles de habilidad se auto-mejoran con el Rango del héroe.</li>
        <li><strong>Awakening/Hero Completion</strong> es la verdadera capa de poder por encima de Legendary: otorga 3 habilidades únicas adicionales (además de las 3 base) mediante Limitless Capsules y Completion Potions, cada una subiendo hasta el nivel 10, con el nivel 10 condicionado a una Limitless Syringe más los Limitless Talents completamente investigados. El Completion también asigna a cada héroe una <strong>Build</strong> — Control, Offense o Defense — en un bucle de contras Control > Offense > Defense > Control, añadiendo profundidad a la composición de equipo.</li>
      </ul>

      <h2>Rango y Nivel (SoS no usa la nomenclatura "star-up")</h2>
      <p>Dos vías paralelas:</p>
      <ul>
        <li><strong>Nivel:</strong> tope 1–80, elevado con Combat Manuals (tiers I–V), ganados con las muertes del Explorer Trail/naturaleza/eventos.</li>
        <li><strong>Rango:</strong> el verdadero límite de tier, pagado en Fragmentos de Héroe + Insignias de Héroe, con tope en <strong>General</strong>. Fragmentos totales aproximados necesarios para alcanzar el rango Colonel: <strong>~1.200</strong> — las guías señalan que esto puede llevar meses por héroe, reforzando el consejo de "concéntrate en 3-4 héroes" de abajo.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Repartir los Fragmentos de Héroe entre demasiados héroes en lugar de concentrarse en 3-4 se considera el error relacionado con héroes más repetido en la comunidad.
      </div>

      <h2>Equipo de héroe</h2>
      <p>Se desbloquea automáticamente en el Workshop/HQ nivel 16. Cada rol de héroe tiene su propio set de 3 piezas (Cabeza, Cuerpo/Pecho, Pies/Pierna), a través de 5 tiers (Common → Uncommon → Rare → Epic → Legendary). Materiales: Hero Gear Parts (farmables a diario, notablemente del evento Influencer Trap) y Hero Gear Designs.</p>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Para los líderes de rally, maximiza primero el equipo de pecho de Infantería (Salud — mantiene viva la primera línea). Para los no líderes, prioriza el equipo de pecho Hunter (producción de daño). El equipo Rider es generalmente la prioridad más baja.
      </div>

      <h2>Fragmentos de Héroe</h2>
      <p>Se llaman Fragments, no "shards". Cuatro categorías — Legendary, Epic, Rare/Elite, Resonating — cada una intercambiable por General Hero Fragments, que se convierten 1:1 en fragmentos para cualquier héroe poseído (con algunas excepciones nombradas que no se pueden obtener así). Las fuentes de granjeo para fragmentos Legendary incluyen VIP 7+ (1 gratis/día), Alliance Throwdown (quincenal), la Reservoir Store, las recompensas de State vs State y los paquetes de pago.</p>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Concéntrate siempre en 3-4 héroes (uno por tipo de tropa más cobertura de roles): el Rango cuesta mucho más que el Nivel.</li>
        <li>No desperdicies fragmentos en héroes iniciales: solo son útiles para utilidad/recolección económica inicial.</li>
        <li>Los Héroes Resonantes solo valen la pena cuando se resuenan con tu mejor héroe del mismo tipo de tropa.</li>
      </ul>
`,
  fr: `
      <h1>Héros</h1>
      <div class="hazard"></div>

      <h2>Tiers de rareté</h2>
      <p>State of Survival n'utilise pas la nomenclature « SR/SSR ». L'échelle réelle est :</p>
      <ul>
        <li><strong>Rare/Elite</strong> (bleu) — le tier le plus bas ; seuls deux héros y restent en permanence (Rusty, Ghost).</li>
        <li><strong>Epic</strong> (violet) — tier intermédiaire, obtenu via Hero Search (payant en Biocaps) et les missions Intel ; penche vers des spécialistes « anti-infectés » (Sarge, Eva, Mike, Jane, Travis, Nanami).</li>
        <li><strong>Legendary</strong> (jaune/orange) — le tier standard le plus élevé, obtenu via des événements spéciaux, des débloquages d'histoire et des packs payants ; presque tous les héros « de Génération » se trouvent ici (Nikola, Maddie & Frank, Jeb, Trish, Wolfe, Miho, Zoe, Ash, etc.).</li>
        <li><strong>Héros Résonnants</strong> — une catégorie spéciale, sans hiérarchie de puissance (Wacko, Daryl, Joker, et le crossover Resident Evil Leon S. Kennedy). Ils n'ont pas de statistiques indépendantes — ils reflètent le niveau, le rang, le niveau de compétence et l'équipement d'un autre héros du <strong>même type de troupe</strong> que tu désignes, agissant comme une « deuxième copie » gratuite d'un investissement déjà réalisé. Grande valeur s'ils résonnent avec ton meilleur héros de ce type, souvent gaspillés sinon.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Note de terminologie</span>
        Il n'existe aucun tier de rareté confirmé au-dessus de Legendary. La couche de puissance de pointe vient plutôt de <strong>Hero Completion / Awakening</strong> (un système de progression, pas une nouvelle rareté — voir ci-dessous).
      </div>

      <h2>Rôles de héros</h2>
      <p>Trois rôles, chacun lié 1:1 à un type de troupe et à une position de combat fixe dans l'Explorer Trail :</p>
      <ul>
        <li><strong>Brawler</strong> dirige l'<strong>Infanterie</strong> — le plus de PV des trois, la portée la plus courte, ciblé en premier. Investissement prioritaire pour les leaders de rally, car une première ligne morte fait s'effondrer toute la marche.</li>
        <li><strong>Marksman</strong> dirige les troupes <strong>Hunter</strong> — la plus haute Attaque, les PV les plus bas, la plus longue portée ; le principal dégât brut ; ciblé en second.</li>
        <li><strong>Scout</strong> dirige les troupes <strong>Rider</strong> — mobilité, utilité, soin et contrôle de foule plutôt que dégât pur ; ciblé en dernier.</li>
      </ul>
      <p>En plus du rôle, chaque héros a aussi une classification de <strong>Bénéfice</strong> (jusqu'à deux par héros) : Development, Gathering, Infected-killing, Patrol (garnison/défense), Rally, ou Siege (attaque de bases ennemies/PvP). C'est pourquoi le même héros peut être décrit différemment selon les guides.</p>

      <h2>Héros notables</h2>
      <p><em>(illustratif — vérifie les noms actuels en jeu avant de publier, car le roster s'étend régulièrement)</em></p>
      <ul>
        <li><strong>PvP / leaders de rally :</strong> Buzz (meilleur leader de rally Infanterie), Cardini (Hunter, debuffs poison/brûlure + bonus PV de rally), Lucky (Rider, mobilité + santé des troupes en rally), Jeb (Hunter, pénétration d'armure + bonus d'attaque des troupes), Tina (Hunter, vol de vie + bonus attaque/PV de rally), Maddie & Frank (Rider, polyvalent viable en F2P), Ray & Rolex (spécialiste garnison/siège PvP), Nikola (Infanterie, largement considéré comme le meilleur héros de garnison/défense de tour).</li>
        <li><strong>PvE / Explorer Trail :</strong> Trish (support Rider — régénération de PV, CC de gel, ralentissement), Wolfe (Infanterie — debuff de défense + autoguérison, fort choix PvE), Eva (meilleur choix Explorer, se combine avec Wolfe), Travis (réduit le coût en Stamina de la chasse aux infectés — choix précoce quasi obligatoire), Ghost (Rare, récolte de gaz + dégâts anti-infectés pour les premiers nettoyages en pleine nature).</li>
        <li><strong>Spécialistes de récolte de ressources :</strong> Mike = food, Rusty = metal, Chef = wood, Ghost = gas.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Sur-investir dans les héros de départ (Ghost, Rusty, Sarge) est une erreur quasi universelle des débutants — utilise-les uniquement pour l'utilité/récolte bon marché en début de partie, et garde les fragments/manuels pour les héros Legendary.
      </div>

      <h2>Compétences, montée de niveau et Awakening</h2>
      <ul>
        <li>Chaque héros a <strong>3 compétences de base</strong> (actives et/ou passives). Les compétences actives peuvent être désactivées par les effets Silence ennemis ; les passives sont immunisées au Silence.</li>
        <li>Les compétences ont deux voies d'effet distinctes : un <strong>effet Explorer</strong> (utilisé quand tu contrôles directement le héros dans l'Explorer Trail) et un <strong>effet Militaire/troupe</strong> (un bonus passif appliqué à toute l'armée en marche dans les contextes PvP/rally/pleine nature).</li>
        <li>Les héros plus anciens montent leurs compétences de niveau via des Skill Books spécifiques à la rareté ; à partir des héros Legendary de 4ᵉ génération, les niveaux de compétence s'améliorent automatiquement avec le Rang du héros.</li>
        <li><strong>Awakening/Hero Completion</strong> est la vraie couche de puissance au-dessus de Legendary : elle accorde 3 compétences uniques supplémentaires (en plus des 3 de base) via les Limitless Capsules et Completion Potions, chacune montant jusqu'au niveau 10, le niveau 10 étant conditionné à une Limitless Syringe plus les Limitless Talents entièrement recherchés. Le Completion assigne aussi à chaque héros une <strong>Build</strong> — Control, Offense ou Defense — dans une boucle de contres Control > Offense > Defense > Control, ajoutant de la profondeur à la composition d'équipe.</li>
      </ul>

      <h2>Rang et Niveau (SoS n'utilise pas la nomenclature « star-up »)</h2>
      <p>Deux voies parallèles :</p>
      <ul>
        <li><strong>Niveau :</strong> plafond 1–80, relevé avec des Combat Manuals (tiers I–V), gagnés grâce aux kills de l'Explorer Trail/pleine nature/événements.</li>
        <li><strong>Rang :</strong> le véritable palier de tier, payé en Fragments de Héros + Badges de Héros, plafonné à <strong>General</strong>. Fragments totaux approximatifs nécessaires pour atteindre le rang Colonel : <strong>~1 200</strong> — les guides notent que cela peut prendre des mois par héros, renforçant le conseil « concentre-toi sur 3-4 héros » ci-dessous.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Disperser les Fragments de Héros sur trop de héros au lieu de se concentrer sur 3-4 est considéré comme l'erreur liée aux héros la plus répétée dans la communauté.
      </div>

      <h2>Équipement de héros</h2>
      <p>Se débloque automatiquement au Workshop/QG niveau 16. Chaque rôle de héros a son propre set de 3 pièces (Tête, Corps/Torse, Pieds/Jambe), sur 5 tiers (Common → Uncommon → Rare → Epic → Legendary). Matériaux : Hero Gear Parts (récoltables quotidiennement, notamment via l'événement Influencer Trap) et Hero Gear Designs.</p>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Pour les leaders de rally, maximise d'abord le plastron d'Infanterie (Santé — maintient la première ligne en vie). Pour les non-leaders, priorise le plastron Hunter (production de dégâts). L'équipement Rider est généralement la priorité la plus basse.
      </div>

      <h2>Fragments de Héros</h2>
      <p>Appelés Fragments, pas « shards ». Quatre catégories — Legendary, Epic, Rare/Elite, Resonating — chacune échangeable contre des General Hero Fragments, qui se convertissent 1:1 en fragments pour n'importe quel héros possédé (avec quelques exceptions nommées qui ne peuvent pas être obtenues ainsi). Les sources de farming pour les fragments Legendary incluent VIP 7+ (1 gratuit/jour), Alliance Throwdown (bihebdomadaire), la Reservoir Store, les récompenses de State vs State et les packs payants.</p>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Concentre-toi toujours sur 3-4 héros (un par type de troupe plus une couverture de rôles) : le Rang coûte bien plus cher que le Niveau.</li>
        <li>Ne gaspille pas de fragments sur les héros de départ : ils ne sont utiles que pour l'utilité/récolte bon marché en début de partie.</li>
        <li>Les Héros Résonnants ne valent la peine que résonnés avec ton meilleur héros du même type de troupe.</li>
      </ul>
`
};
