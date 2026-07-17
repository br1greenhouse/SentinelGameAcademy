/* Contenuto tradotto del capitolo — Clash of Clans / 09 Clan Wars & Clan War Leagues.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Clan Wars & Clan War Leagues</h1>
      <div class="hazard"></div>
      <p class="lead">Wars are the competitive heart of clan life: understanding the timing, available attacks, and how matchmaking works helps you avoid wasting Stars.</p>

      <h2>Regular Clan Wars</h2>
      <p>A Clan War runs <strong>47 hours total</strong>: 23 hours of <strong>Preparation Day</strong> followed by 24 hours of <strong>Battle Day</strong>.</p>
      <ul>
        <li>During Preparation Day, war bases can be rearranged (using only pieces already owned in the regular village), Clan Castle troops can be donated for war use, and members can see the matched clan's roster — but not the arranged base layouts, which stay hidden until Battle Day.</li>
        <li>On Battle Day, bases become visible and attackable. Each participant gets <strong>2 attacks</strong> and cannot attack the same base twice; if two clanmates both attack the same target, only the better result counts.</li>
        <li><strong>War sizes</strong> available: 5v5, 10v10, 15v15, 20v20, 25v25, 30v30, 40v40, and 50v50.</li>
        <li><strong>Matchmaking</strong> sums a hidden "war weight" value across every base element (defenses, Walls, traps, troops, spells, Heroes) for all participants, then looks for an opposing clan with a similar total. A recent rework weighted offensive upgrades (including Hero levels) more heavily, significantly weakening older "engineered base" tricks.</li>
        <li><strong>Win condition:</strong> most total Stars wins; if tied, higher total destruction percentage wins; if both tied, it's a draw.</li>
        <li><strong>War bonus loot:</strong> winning members receive a large bonus (roughly 7x the base's available loot), provided they got at least 1 Star; losing members still receive a bonus, at half the value. The clan's War Bonus Extra Loot perk increases this further.</li>
      </ul>

      <h2>Clan War Leagues (CWL)</h2>
      <p>CWL is a <strong>monthly, week-long league tournament</strong>, separate from regular Clan Wars. Signup requires a 2-day window and between 15 and 50 enrolled members; once a clan signs up, it cannot run regular or Friendly Wars until CWL concludes.</p>
      <ul>
        <li>Clans are grouped into pools of <strong>8 clans</strong> within a similar league tier, fighting <strong>one war per day for 7 days</strong>.</li>
        <li>Each player gets exactly <strong>1 attack per war day</strong> (not 2, as in regular wars).</li>
        <li>War size is 15v15 or 30v30.</li>
        <li>Standings within the group of 8 are ranked by total Stars earned across the week (individual Stars plus a bonus for each war won); top clans in a group are promoted, bottom clans demoted, with higher leagues typically promoting fewer clans per cycle.</li>
        <li><strong>Rewards</strong> are paid as League Medals, spendable in the League Shop. Each player's medal total depends on the clan's final group placement, a personal "Star Yield" multiplier based on their own Stars earned that week (capped at 8 Stars), and Bonus Medal Packages distributed by Leaders/Co-Leaders after the week ends.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Advanced</span>
        Because personal medal yield caps at 8 Stars, well-run clans deliberately bench players once they hit that cap and rotate in fresh members: every Star beyond 8 stops adding to that individual's medals but still helps the <em>clan's</em> war-win count — and therefore everyone's bonus packages.
      </div>

      <h2>CWL strategy notes</h2>
      <ul>
        <li>Build a core lineup of reliable attackers for the toughest matchup days, keeping additional enrolled members as bench flexibility.</li>
        <li>Since each player gets only one attack per war all week, watching earlier clanmates attack similar bases (trap placement, Clan Castle composition, pathing) before committing your own — often called scouting or "sniping" a base — is standard practice, not mirror-attacking blind.</li>
        <li>Assign attackers to whichever enemy base best matches their army composition, not simply the one directly across on the map.</li>
        <li>Prioritize guaranteed 1-2 Stars over risky 3-star attempts once promotion or demotion is on the line.</li>
      </ul>

      <p class="sentinel-hint">When a war gets matched or moves into Battle Day, the game sends a notification — but if you miss it, you might find out after the war ends that you had an unused attack left. <strong>Sentinel</strong> can watch for words like <code>war</code> or <code>battle day</code> and alert you with a real alarm, even on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Friendly Wars & Challenges</h2>
      <ul>
        <li><strong>Friendly Wars</strong> let a clan challenge another clan of its choosing (rather than automatic matchmaking); troops aren't consumed except for defending Clan Castle troops/spells, and there's no resource loot or Clan XP — purely for practice.</li>
        <li><strong>Friendly Challenges</strong> are one-off practice attacks against a specific clanmate's base, useful for testing new layouts or attack strategies risk-free.</li>
        <li>A clan can only be doing one of regular Clan Wars, CWL, or a Friendly War at any given time.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Before every Battle Day, watch attacks clanmates have already made on your assigned target (if any) or similar bases: it often reveals where Clan Castle troops sit and the real weak points, not just the ones that look weak from the outside.
      </div>
`,
  es: `
      <h1>Guerras de clan y CWL</h1>
      <div class="hazard"></div>
      <p class="lead">Las guerras son el corazón competitivo de la vida en clan: entender los tiempos, los ataques disponibles y cómo funciona el emparejamiento ayuda a no desperdiciar Estrellas.</p>

      <h2>Guerras de clan regulares</h2>
      <p>Una Guerra de Clan dura <strong>47 horas en total</strong>: 23 horas de <strong>Preparation Day</strong> seguidas de 24 horas de <strong>Battle Day</strong>.</p>
      <ul>
        <li>Durante el Preparation Day se pueden reorganizar las bases de guerra (solo con piezas ya poseídas en la aldea normal), se pueden donar tropas del Castillo del Clan para la guerra, y los miembros pueden ver el roster del clan emparejado — pero no los diseños de base, que permanecen ocultos hasta el Battle Day.</li>
        <li>En el Battle Day las bases se vuelven visibles y atacables. Cada participante tiene <strong>2 ataques</strong> y no puede atacar la misma base dos veces; si dos compañeros de clan atacan el mismo objetivo, solo cuenta el mejor resultado.</li>
        <li><strong>Tamaños de guerra</strong> disponibles: 5v5, 10v10, 15v15, 20v20, 25v25, 30v30, 40v40 y 50v50.</li>
        <li>El <strong>emparejamiento</strong> suma un valor oculto de "peso de guerra" en cada elemento de la base (defensas, Muros, trampas, tropas, hechizos, Héroes) para todos los participantes, y busca un clan rival con un total similar. Un ajuste reciente dio más peso a las mejoras ofensivas (incluidos los niveles de Héroe), debilitando mucho los antiguos trucos de "base ingenierizada".</li>
        <li><strong>Condición de victoria:</strong> gana quien tiene más Estrellas totales; en caso de empate gana el mayor porcentaje de destrucción total; si también hay empate, es empate.</li>
        <li><strong>Bono de botín de guerra:</strong> los miembros ganadores reciben un bono grande (aproximadamente 7 veces el botín disponible de la base), siempre que hayan conseguido al menos 1 Estrella; los perdedores también reciben un bono, pero a la mitad del valor. El perk de clan de bono extra de botín de guerra lo aumenta aún más.</li>
      </ul>

      <h2>Clan War Leagues (CWL)</h2>
      <p>La CWL es un torneo de liga <strong>mensual, de una semana de duración</strong>, separado de las Guerras de Clan regulares. La inscripción requiere una ventana de 2 días y entre 15 y 50 miembros inscritos; una vez inscrito, el clan no puede hacer guerras regulares ni amistosas hasta que termine la CWL.</p>
      <ul>
        <li>Los clanes se agrupan en grupos de <strong>8 clanes</strong> de un nivel de liga similar, luchando <strong>una guerra al día durante 7 días</strong>.</li>
        <li>Cada jugador tiene exactamente <strong>1 ataque por día de guerra</strong> (no 2, como en las guerras regulares).</li>
        <li>El tamaño de guerra es 15v15 o 30v30.</li>
        <li>La clasificación dentro del grupo de 8 se basa en las Estrellas totales ganadas durante la semana (Estrellas individuales más un bono por cada guerra ganada); los mejores clanes del grupo ascienden de liga, los peores descienden, y las ligas más altas suelen ascender a menos clanes por ciclo.</li>
        <li><strong>Las recompensas</strong> se pagan en Medallas de Liga, gastables en la Tienda de Liga. El total de medallas de cada jugador depende del puesto final del grupo del clan, un multiplicador personal "Star Yield" basado en sus propias Estrellas ganadas esa semana (limitado a 8 Estrellas), y los Paquetes de Medallas Bonus repartidos por Líderes/Colíderes al terminar la semana.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Avanzado</span>
        Como el rendimiento personal de medallas se limita a 8 Estrellas, los clanes bien gestionados dejan deliberadamente en el banquillo a los jugadores que alcanzan ese tope y rotan miembros frescos: cada Estrella más allá de la 8ª deja de sumar a las medallas de ese individuo pero sigue ayudando al recuento de guerras ganadas del <em>clan</em> — y por tanto a los paquetes bonus de todos.
      </div>

      <h2>Notas de estrategia para la CWL</h2>
      <ul>
        <li>Construye una alineación núcleo de atacantes fiables para los días de emparejamientos más duros, dejando a los miembros adicionales inscritos como flexibilidad de banquillo.</li>
        <li>Como cada jugador tiene solo un ataque por toda la semana, observar a los compañeros de clan atacar bases similares antes (colocación de trampas, composición del Castillo del Clan, camino) antes de comprometer el propio — a menudo llamado "sniping" de base — es práctica estándar, no atacar en espejo a ciegas.</li>
        <li>Asigna a los atacantes la base enemiga que mejor combine con su composición, no simplemente la que tienen enfrente en el mapa.</li>
        <li>Prioriza 1-2 Estrellas garantizadas sobre intentos arriesgados de 3 estrellas cuando la promoción o el descenso están en juego.</li>
      </ul>

      <p class="sentinel-hint">Cuando una guerra se empareja o pasa al Battle Day, el juego envía una notificación — pero si te la pierdes, puedes descubrir al terminar la guerra que te quedó un ataque sin usar. <strong>Sentinel</strong> puede vigilar palabras como <code>war</code> o <code>battle day</code> y avisarte con una alarma real, incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Guerras amistosas y desafíos</h2>
      <ul>
        <li>Las <strong>Guerras Amistosas</strong> permiten a un clan desafiar a otro de su elección (en vez de emparejamiento automático); las tropas no se consumen salvo las tropas/hechizos del Castillo del Clan usados en defensa, y no hay botín de recursos ni XP de Clan — es puro entrenamiento.</li>
        <li>Los <strong>Desafíos Amistosos</strong> son ataques de práctica puntuales contra la base de un compañero de clan concreto, útiles para probar nuevos diseños o estrategias de ataque sin riesgo.</li>
        <li>Un clan solo puede estar haciendo una cosa a la vez entre guerras regulares, CWL o guerra amistosa.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Antes de cada Battle Day, mira los ataques que tus compañeros de clan ya hicieron a tu objetivo asignado (si lo hay) o a bases similares: a menudo revela dónde están las tropas del Castillo del Clan y los puntos débiles reales, no solo los que parecen débiles vistos desde fuera.
      </div>
`,
  fr: `
      <h1>Guerres de clan et CWL</h1>
      <div class="hazard"></div>
      <p class="lead">Les guerres sont le cœur compétitif de la vie de clan : comprendre le calendrier, les attaques disponibles et le fonctionnement du matchmaking évite de gaspiller des Étoiles.</p>

      <h2>Guerres de clan régulières</h2>
      <p>Une Guerre de Clan dure <strong>47 heures au total</strong> : 23 heures de <strong>Preparation Day</strong> suivies de 24 heures de <strong>Battle Day</strong>.</p>
      <ul>
        <li>Pendant le Preparation Day, les bases de guerre peuvent être réarrangées (avec seulement des pièces déjà possédées dans le village normal), les troupes du Château de Clan peuvent être données pour la guerre, et les membres voient le roster du clan adverse — mais pas les agencements de bases, qui restent cachés jusqu'au Battle Day.</li>
        <li>Au Battle Day, les bases deviennent visibles et attaquables. Chaque participant a <strong>2 attaques</strong> et ne peut pas attaquer deux fois la même base ; si deux membres du clan attaquent la même cible, seul le meilleur résultat compte.</li>
        <li><strong>Tailles de guerre</strong> disponibles : 5v5, 10v10, 15v15, 20v20, 25v25, 30v30, 40v40 et 50v50.</li>
        <li>Le <strong>matchmaking</strong> additionne une valeur cachée de « poids de guerre » sur chaque élément de base (défenses, Murs, pièges, troupes, sorts, Héros) pour tous les participants, puis cherche un clan adverse au total similaire. Une refonte récente a davantage pondéré les améliorations offensives (dont les niveaux de Héros), affaiblissant fortement les anciennes astuces de « base ingénierée ».</li>
        <li><strong>Condition de victoire :</strong> le plus d'Étoiles totales gagne ; en cas d'égalité, le pourcentage de destruction total le plus élevé l'emporte ; si égalité aussi, c'est un match nul.</li>
        <li><strong>Butin bonus de guerre :</strong> les membres gagnants reçoivent un gros bonus (environ 7 fois le butin disponible de la base), à condition d'avoir obtenu au moins 1 Étoile ; les perdants reçoivent aussi un bonus, à moitié valeur. Le perk de clan de butin de guerre bonus l'augmente encore.</li>
      </ul>

      <h2>Clan War Leagues (CWL)</h2>
      <p>La CWL est un tournoi de ligue <strong>mensuel, d'une semaine</strong>, distinct des Guerres de Clan régulières. L'inscription nécessite une fenêtre de 2 jours et entre 15 et 50 membres inscrits ; une fois inscrit, le clan ne peut plus faire de guerres régulières ou amicales jusqu'à la fin de la CWL.</p>
      <ul>
        <li>Les clans sont regroupés en poules de <strong>8 clans</strong> de niveau de ligue similaire, combattant <strong>une guerre par jour pendant 7 jours</strong>.</li>
        <li>Chaque joueur a exactement <strong>1 attaque par jour de guerre</strong> (pas 2, comme en guerre régulière).</li>
        <li>La taille de guerre est 15v15 ou 30v30.</li>
        <li>Le classement dans la poule de 8 se base sur les Étoiles totales gagnées dans la semaine (Étoiles individuelles plus un bonus par guerre gagnée) ; les meilleurs clans de la poule sont promus, les derniers rétrogradés, les ligues supérieures promouvant généralement moins de clans par cycle.</li>
        <li><strong>Les récompenses</strong> sont versées en Médailles de Ligue, dépensables à la Boutique de Ligue. Le total de médailles de chaque joueur dépend du classement final de la poule du clan, d'un multiplicateur personnel « Star Yield » basé sur ses propres Étoiles gagnées cette semaine (plafonné à 8 Étoiles), et des Paquets de Médailles Bonus distribués par les Chefs/Co-Chefs en fin de semaine.</li>
      </ul>

      <div class="box box-adv">
        <span class="box-title">Avancé</span>
        Comme le rendement personnel en médailles plafonne à 8 Étoiles, les clans bien gérés mettent délibérément sur le banc les joueurs ayant atteint ce plafond et font tourner des membres frais : chaque Étoile au-delà de la 8ème n'ajoute plus aux médailles de cet individu mais aide toujours le décompte de guerres gagnées du <em>clan</em> — et donc les paquets bonus de tout le monde.
      </div>

      <h2>Notes de stratégie CWL</h2>
      <ul>
        <li>Construis un noyau d'attaquants fiables pour les jours de matchs les plus difficiles, en gardant les membres inscrits supplémentaires comme flexibilité de banc.</li>
        <li>Comme chaque joueur n'a qu'une attaque pour toute la semaine, observer des membres du clan attaquer des bases similaires avant d'engager la sienne (placement des pièges, composition du Château de Clan, trajet) — souvent appelé scouter ou « sniper » une base — est une pratique standard, pas une attaque en miroir à l'aveugle.</li>
        <li>Assigne les attaquants à la base ennemie qui correspond le mieux à leur composition d'armée, pas simplement celle en face sur la carte.</li>
        <li>Privilégie 1-2 Étoiles garanties plutôt que des tentatives risquées à 3 étoiles une fois la promotion ou la relégation en jeu.</li>
      </ul>

      <p class="sentinel-hint">Quand une guerre est appariée ou passe en Battle Day, le jeu envoie une notification — mais si tu la rates, tu peux découvrir après la fin de la guerre qu'il te restait une attaque inutilisée. <strong>Sentinel</strong> peut surveiller des mots comme <code>war</code> ou <code>battle day</code> et t'alerter avec une vraie alarme, même en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Guerres amicales et défis</h2>
      <ul>
        <li>Les <strong>Guerres Amicales</strong> permettent à un clan d'en défier un autre de son choix (plutôt qu'un matchmaking automatique) ; les troupes ne sont pas consommées sauf les troupes/sorts du Château de Clan utilisés en défense, et il n'y a ni butin de ressources ni XP de Clan — purement pour s'entraîner.</li>
        <li>Les <strong>Défis Amicaux</strong> sont des attaques d'entraînement ponctuelles contre la base d'un membre du clan précis, utiles pour tester un nouvel agencement ou une nouvelle stratégie sans risque.</li>
        <li>Un clan ne peut faire qu'une seule chose à la fois parmi guerres régulières, CWL, ou guerre amicale.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Avant chaque Battle Day, regarde les attaques déjà faites par des membres du clan sur ta cible assignée (le cas échéant) ou sur des bases similaires : cela révèle souvent où se trouvent les troupes du Château de Clan et les vrais points faibles, pas seulement ceux qui semblent faibles vus de l'extérieur.
      </div>
`
};
