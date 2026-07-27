/* Contenuto tradotto del capitolo — State of Survival / 09 Marches, rallies & combat.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Marches, rallies & combat</h1>
      <div class="hazard"></div>

      <h2>March slots & formation</h2>
      <ul>
        <li><strong>March slots:</strong> base + research + VIP caps out at 6 total. Research: Leadership I–IV (+1 slot each). VIP: +1 slot at VIP level 8.</li>
        <li><strong>March size/capacity:</strong> determined primarily by HQ level, layered with a March Capacity research line, hero rank/level contributions, consumable items, and Chief Gear/Talismans.</li>
        <li><strong>Formation:</strong> up to 3 heroes per march — 1 Captain (sets primary bonuses) + up to 2 Support heroes. Troop formation is automatic by type (Infantry front, Riders middle, Hunters back), not manually positioned.</li>
        <li><strong>Rally launch timers:</strong> rally leaders set a launch window (5/15/30/60 minutes); allies must physically march to the leader's city before it fires or the rally fails to launch.</li>
        <li><strong>Rally size cap:</strong> commonly documented max of 20 alliance members per rally for reward-crate rallies.</li>
        <li><strong>Reinforcement:</strong> the Assembly Point handles reinforcements sent to allies; each alliance member can send one reinforcement march to a given city. Critically, <strong>a reinforcing player's own combat stats are used for those troops</strong>, not the base owner's — meaning a strong ally reinforcing a weak account can massively swing that account's defensive strength.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Advanced tactic</span>
        Rally-lead tactic: since research point allocation can be freely reset, some top rally leaders temporarily max every rally/march-capacity research node, open the rally, let it fill, then switch back to a stat-focused build (Lethality/Attack/Defense/Health) once the rally is locked in — retaining the larger size while benefiting from stronger combat stats for the fight itself.
      </div>

      <h2>Combat mechanics</h2>
      <ul>
        <li>Core stats: <strong>Attack, Lethality, Defense, Health</strong>. There's no separate crit stat — Lethality functions as the multiplier governing both damage dealt and how many enemy troops die outright vs. are merely wounded.</li>
        <li>Attacker army size beyond the defender's total has diminishing returns — an oversized army can't fully commit; excess troops beyond a rough 3:1 ratio largely sit idle in a given engagement.</li>
        <li>Troops fatigue slightly each combat round, dealing marginally less damage as a fight drags on.</li>
        <li>Every 20 rounds, Biker/Sniper sub-types get a bypass pass to hit Hunters/Riders directly, skipping Infantry.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Advanced tactic</span>
        Troop ratio has a large impact on casualties in close fights. Community testing found the default 33/33/33 split is not optimal: for the same army size in a near-loss scenario, casualties varied roughly 5x purely based on ratio. Recommended: <strong>60/20/20 (Infantry/Rider/Hunter)</strong> if the fight might be lost; <strong>50/25/25</strong> for a close-to-guaranteed win; roughly even splits only once victory is already assured and the goal is maximizing kill count.
      </div>

      <h2>Explorer Trail (PvE)</h2>
      <p>Housed in the Hero Precinct: <strong>12 trails × 12 challenges each</strong>, gated by a separate <strong>Squad Stamina</strong> resource (regenerates 6/hour, caps at 100). Players directly pick up to 3 heroes and trigger their skills against zombie waves — Brawler front-center, Marksman left, Scout right — following each hero's Explorer effect rather than the Military effect used in PvP.</p>

      <div class="box box-nrc">
        <span class="box-title">Terminology note</span>
        "Explorer Camp" is not the correct in-game name — the actual feature is the <strong>Explorer Trail</strong>.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>An oversized army beyond a roughly 3:1 ratio against the defender wastes troops: there's no need to send more than necessary.</li>
        <li>In close fights, troop ratio matters as much as army size: try 60/20/20 when you risk losing.</li>
        <li>Do your Explorer Trail's Squad Stamina every day: it regenerates slowly and has a low cap.</li>
      </ul>
`,
  es: `
      <h1>Marchas, rallies y combate</h1>
      <div class="hazard"></div>

      <h2>Slots de marcha y formación</h2>
      <ul>
        <li><strong>Slots de marcha:</strong> base + investigación + tope de VIP llegan a 6 en total. Investigación: Leadership I–IV (+1 slot cada una). VIP: +1 slot en el nivel VIP 8.</li>
        <li><strong>Tamaño/capacidad de marcha:</strong> determinado principalmente por el nivel de HQ, sumado a una línea de investigación de Capacidad de Marcha, contribuciones de rango/nivel de héroe, objetos consumibles y Chief Gear/Amuletos.</li>
        <li><strong>Formación:</strong> hasta 3 héroes por marcha — 1 Captain (fija los bonos primarios) + hasta 2 héroes de Soporte. La formación de tropas es automática por tipo (Infantería al frente, Riders en el medio, Hunters atrás), no posicionable manualmente.</li>
        <li><strong>Temporizadores de lanzamiento de rally:</strong> los líderes de rally fijan una ventana de lanzamiento (5/15/30/60 minutos); los aliados deben marchar físicamente hasta la ciudad del líder antes de que se dispare o el rally falla al lanzarse.</li>
        <li><strong>Tope de tamaño de rally:</strong> máximo comúnmente documentado de 20 miembros de alianza por rally para rallies con cajas de recompensa.</li>
        <li><strong>Refuerzo:</strong> el Assembly Point gestiona los refuerzos enviados a aliados; cada miembro de alianza puede enviar una marcha de refuerzo a una ciudad dada. Críticamente, <strong>se usan las propias estadísticas de combate del jugador que refuerza</strong>, no las del propietario de la base — lo que significa que un aliado fuerte que refuerza a una cuenta débil puede cambiar drásticamente la fuerza defensiva de esa cuenta.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Táctica avanzada</span>
        Táctica de líder de rally: como la asignación de puntos de investigación puede resetearse libremente, algunos de los mejores líderes de rally maximizan temporalmente cada nodo de investigación de rally/capacidad de marcha, abren el rally, lo dejan llenarse, y luego vuelven a una build centrada en estadísticas (Letalidad/Ataque/Defensa/Salud) una vez que el rally está bloqueado — conservando el tamaño mayor mientras se benefician de estadísticas de combate más fuertes para el combate en sí.
      </div>

      <h2>Mecánicas de combate</h2>
      <ul>
        <li>Estadísticas básicas: <strong>Ataque, Letalidad, Defensa, Salud</strong>. No hay una estadística de crítico separada — la Letalidad funciona como el multiplicador que rige tanto el daño infligido como cuántas tropas enemigas mueren directamente frente a cuántas quedan solo heridas.</li>
        <li>El tamaño del ejército atacante más allá del total del defensor tiene rendimientos decrecientes — un ejército sobredimensionado no puede comprometerse por completo; las tropas excedentes más allá de una proporción aproximada de 3:1 quedan en gran parte inactivas en un enfrentamiento dado.</li>
        <li>Las tropas se fatigan ligeramente en cada ronda de combate, infligiendo un daño marginalmente menor a medida que el combate se prolonga.</li>
        <li>Cada 20 rondas, los sub-tipos Biker/Sniper obtienen un pase de bypass para golpear a Hunters/Riders directamente, saltándose la Infantería.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Táctica avanzada</span>
        La proporción de tropas tiene un gran impacto en las bajas en combates ajustados. Las pruebas de la comunidad encontraron que la división por defecto 33/33/33 no es óptima: para el mismo tamaño de ejército en un escenario de casi derrota, las bajas variaron aproximadamente 5 veces solo según la proporción. Recomendado: <strong>60/20/20 (Infantería/Rider/Hunter)</strong> si el combate podría perderse; <strong>50/25/25</strong> para una victoria casi garantizada; divisiones aproximadamente iguales solo cuando la victoria ya está asegurada y el objetivo es maximizar el número de bajas.
      </div>

      <h2>Explorer Trail (PvE)</h2>
      <p>Alojado en el Hero Precinct: <strong>12 senderos × 12 desafíos cada uno</strong>, restringido por un recurso separado llamado <strong>Squad Stamina</strong> (se regenera 6/hora, tope de 100). Los jugadores eligen directamente hasta 3 héroes y activan sus habilidades contra oleadas de zombis — Brawler al frente-centro, Marksman a la izquierda, Scout a la derecha — siguiendo el efecto Explorer de cada héroe en lugar del efecto Militar usado en PvP.</p>

      <div class="box box-nrc">
        <span class="box-title">Nota de terminología</span>
        "Explorer Camp" no es el nombre correcto en el juego — la función real es el <strong>Explorer Trail</strong>.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Un ejército sobredimensionado más allá de una proporción aproximada de 3:1 contra el defensor desperdicia tropas: no hace falta enviar más de lo necesario.</li>
        <li>En combates ajustados, la proporción de tropas importa tanto como el tamaño del ejército: prueba 60/20/20 cuando arriesgas perder.</li>
        <li>Haz la Squad Stamina de tu Explorer Trail cada día: se regenera lentamente y tiene un tope bajo.</li>
      </ul>
`,
  fr: `
      <h1>Marches, rallies et combat</h1>
      <div class="hazard"></div>

      <h2>Slots de marche et formation</h2>
      <ul>
        <li><strong>Slots de marche :</strong> base + recherche + plafond VIP atteignent 6 au total. Recherche : Leadership I–IV (+1 slot chacun). VIP : +1 slot au niveau VIP 8.</li>
        <li><strong>Taille/capacité de marche :</strong> déterminée principalement par le niveau du QG, complétée par une ligne de recherche March Capacity, les contributions de rang/niveau de héros, les objets consommables et le Chief Gear/Talismans.</li>
        <li><strong>Formation :</strong> jusqu'à 3 héros par marche — 1 Captain (fixe les bonus primaires) + jusqu'à 2 héros de Soutien. La formation des troupes est automatique par type (Infanterie devant, Riders au milieu, Hunters à l'arrière), non positionnable manuellement.</li>
        <li><strong>Minuteries de lancement de rally :</strong> les leaders de rally fixent une fenêtre de lancement (5/15/30/60 minutes) ; les alliés doivent physiquement marcher jusqu'à la ville du leader avant qu'il ne se déclenche, sinon le rally échoue au lancement.</li>
        <li><strong>Plafond de taille de rally :</strong> maximum couramment documenté de 20 membres d'alliance par rally pour les rallies à caisses de récompense.</li>
        <li><strong>Renfort :</strong> l'Assembly Point gère les renforts envoyés aux alliés ; chaque membre d'alliance peut envoyer une marche de renfort vers une ville donnée. Point critique, <strong>les propres statistiques de combat du joueur qui renforce sont utilisées</strong> pour ces troupes, pas celles du propriétaire de la base — ce qui signifie qu'un allié fort renforçant un compte faible peut considérablement changer la force défensive de ce compte.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Tactique avancée</span>
        Tactique de leader de rally : comme l'allocation des points de recherche peut être réinitialisée librement, certains des meilleurs leaders de rally maximisent temporairement chaque nœud de recherche rally/capacité de marche, ouvrent le rally, le laissent se remplir, puis reviennent à une configuration axée sur les statistiques (Létalité/Attaque/Défense/Santé) une fois le rally verrouillé — conservant la plus grande taille tout en bénéficiant de statistiques de combat plus fortes pour le combat lui-même.
      </div>

      <h2>Mécaniques de combat</h2>
      <ul>
        <li>Statistiques de base : <strong>Attaque, Létalité, Défense, Santé</strong>. Il n'y a pas de statistique de critique séparée — la Létalité fonctionne comme le multiplicateur régissant à la fois les dégâts infligés et combien de troupes ennemies meurent directement contre combien sont simplement blessées.</li>
        <li>La taille de l'armée attaquante au-delà du total du défenseur a des rendements décroissants — une armée surdimensionnée ne peut pas s'engager entièrement ; les troupes excédentaires au-delà d'un ratio approximatif de 3:1 restent largement inactives dans un engagement donné.</li>
        <li>Les troupes se fatiguent légèrement à chaque round de combat, infligeant des dégâts marginalement moindres à mesure que le combat se prolonge.</li>
        <li>Tous les 20 rounds, les sous-types Biker/Sniper obtiennent un passage de contournement pour frapper les Hunters/Riders directement, en sautant l'Infanterie.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Tactique avancée</span>
        Le ratio de troupes a un fort impact sur les pertes lors de combats serrés. Les tests de la communauté ont montré que la répartition par défaut 33/33/33 n'est pas optimale : pour la même taille d'armée dans un scénario de quasi-défaite, les pertes variaient d'environ 5x selon uniquement le ratio. Recommandé : <strong>60/20/20 (Infanterie/Rider/Hunter)</strong> si le combat risque d'être perdu ; <strong>50/25/25</strong> pour une victoire quasi garantie ; des répartitions à peu près égales seulement une fois la victoire déjà assurée et l'objectif étant de maximiser le nombre de kills.
      </div>

      <h2>Explorer Trail (PvE)</h2>
      <p>Hébergé dans le Hero Precinct : <strong>12 sentiers × 12 défis chacun</strong>, contraint par une ressource séparée appelée <strong>Squad Stamina</strong> (se régénère à 6/heure, plafond à 100). Les joueurs choisissent directement jusqu'à 3 héros et déclenchent leurs compétences contre des vagues de zombies — Brawler au centre-avant, Marksman à gauche, Scout à droite — en suivant l'effet Explorer de chaque héros plutôt que l'effet Militaire utilisé en PvP.</p>

      <div class="box box-nrc">
        <span class="box-title">Note de terminologie</span>
        « Explorer Camp » n'est pas le nom correct en jeu — la fonctionnalité réelle est l'<strong>Explorer Trail</strong>.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Une armée surdimensionnée au-delà d'un ratio d'environ 3:1 contre le défenseur gaspille des troupes : inutile d'en envoyer plus que nécessaire.</li>
        <li>Dans les combats serrés, le ratio de troupes compte autant que la taille de l'armée : essaie 60/20/20 quand tu risques de perdre.</li>
        <li>Fais la Squad Stamina de ton Explorer Trail tous les jours : elle se régénère lentement et a un plafond bas.</li>
      </ul>
`
};
