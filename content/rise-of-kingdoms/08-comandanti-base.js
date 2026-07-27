/* Contenuto tradotto del capitolo — Rise of Kingdoms / 08 Commander system basics.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Commanders: the basics</h1>
      <div class="hazard"></div>
      <p class="lead">Roles, rarity tiers, levelling mechanics, and how pairing with a second commander works.</p>

      <p>Commanders are named historical figures who lead marches, boost stats through skills and talents, and are required for nearly all combat and gathering actions.</p>

      <h2>Roles a commander can fill</h2>
      <ul>
        <li><strong>PvE hunting</strong> — killing neutral Barbarians for XP and rewards.</li>
        <li><strong>PvE/PvP rally leader</strong> — attacking Barbarian Forts, Passes, Holy Sites, or enemy cities as part of a rally.</li>
        <li><strong>Garrison/defense</strong> — a primary + secondary pair assigned to your Wall (or an alliance stronghold) to auto-defend against incoming attacks.</li>
        <li><strong>Gathering</strong> — sent to resource tiles to boost gathering speed and load.</li>
        <li><strong>Rally join/reinforcement</strong> — supporting someone else's rally; here march speed and support/debuff talents matter more than raw offense.</li>
      </ul>

      <h2>Rarity tiers</h2>
      <p>Four tiers, weakest to strongest: <strong>Advanced → Elite → Epic → Legendary</strong>. Advanced/Elite are cheap and fast to obtain but weak — mainly useful for dedicated gathering roles. Epic is the mid-game/F2P workhorse tier. Legendary is the hardest to obtain (mostly through gold/sovereign Tavern keys) and the strongest.</p>

      <h2>Levelling mechanics</h2>
      <ul>
        <li>Commanders gain <strong>XP</strong> from fighting Barbarians, Holy Site Guardians, and other neutral units, or from Experience Tomes.</li>
        <li><strong>Star level</strong> (separate from XP level) is raised using <strong>Starlight Sculptures</strong>; each star raises the max XP level cap by 10, up to level 60 at 6 stars. Star level also unlocks additional skill slots — reaching <strong>3-star</strong> is the key threshold, since it unlocks secondary-commander pairing on marches.</li>
        <li>Every commander has exactly one active skill (usually triggers at 1000 Rage) plus 3-4 passive skills, each levelled 1 through 5 using Commander Sculptures.</li>
        <li>Epic and Legendary commanders get a 5th "Expertise/Mastery" skill, which only unlocks once all four base skills are at level 5.</li>
        <li>Fully maxing all four base skills costs roughly: <strong>Legendary 690 sculptures, Epic 440, Elite 340, Advanced 240</strong>. You need 10 sculptures of a given commander just to unlock them initially.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Not every commander benefits from being levelled evenly. Some (Cao Cao, El Cid, Guan Yu, Lu Bu, Tomyris) are strongest with a 5/1/1/1 skill spread, since only their first skill really matters — dumping sculptures evenly across all four skills wastes resources on commanders like these. Others (Attila, Chandragupta Maurya, Genghis Khan, Wu Zetian, Zenobia) are genuinely worth maxing 5/5/5/5.
      </div>

      <h2>Secondary commander pairing</h2>
      <p>Once a commander reaches 3-star, it can be paired with a second commander on the same march — one primary, one secondary. <strong>Only the primary commander's talent points apply in battle</strong> — the secondary contributes only its active/passive skills, not its talents. Good pairings complement the primary's damage sequence with the secondary's debuffs or buffs.</p>

      <div class="box box-f2p">
        <span class="box-title">F2P Focus</span>
        Don't invest talent points into a commander you intend to use purely as a secondary — those points have zero effect on combat. Save talent investment for primary commanders only.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>3-star is the key threshold: you can't pair a second commander before that.</li>
        <li>Not every commander wants 5/5/5/5: check its recommended skill profile first.</li>
        <li>The secondary only contributes skills, never talents: don't waste talent points on it.</li>
      </ul>
`,
  es: `
      <h1>Comandantes: los fundamentos</h1>
      <div class="hazard"></div>
      <p class="lead">Roles, niveles de rareza, mecánicas de nivelación, y cómo funciona el emparejamiento con un segundo comandante.</p>

      <p>Los Comandantes son figuras históricas que lideran marchas, potencian estadísticas mediante habilidades y talentos, y son necesarios para casi cualquier acción de combate y recolección.</p>

      <h2>Roles que puede desempeñar un comandante</h2>
      <ul>
        <li><strong>Caza PvE</strong> — matar Barbarians neutrales por XP y recompensas.</li>
        <li><strong>Líder de rally PvE/PvP</strong> — atacar Barbarian Forts, Passes, Holy Sites, o ciudades enemigas como parte de un rally.</li>
        <li><strong>Guarnición/defensa</strong> — una pareja primario + secundario asignada a tu Wall (o a una fortaleza de alianza) para defenderse automáticamente de ataques entrantes.</li>
        <li><strong>Recolección</strong> — enviado a tiles de recursos para aumentar velocidad de recolección y carga.</li>
        <li><strong>Unirse a un rally/refuerzo</strong> — apoyar el rally de otra persona; aquí importan más la velocidad de marcha y los talentos de apoyo/debuff que el ataque puro.</li>
      </ul>

      <h2>Niveles de rareza</h2>
      <p>Cuatro tiers, del más débil al más fuerte: <strong>Advanced → Elite → Epic → Legendary</strong>. Advanced/Elite son baratos y rápidos de obtener pero débiles — útiles principalmente para roles de recolección dedicados. Epic es el tier "caballo de batalla" de mitad de partida/F2P. Legendary es el más difícil de obtener (sobre todo mediante llaves de Taberna oro/soberanas) y el más fuerte.</p>

      <h2>Mecánicas de nivelación</h2>
      <ul>
        <li>Los comandantes ganan <strong>XP</strong> luchando contra Barbarians, Holy Site Guardians y otras unidades neutrales, o mediante Experience Tomes.</li>
        <li>El <strong>nivel de estrella</strong> (separado del nivel de XP) se sube usando <strong>Starlight Sculptures</strong>; cada estrella eleva el tope máximo de nivel de XP en 10, hasta el nivel 60 con 6 estrellas. El nivel de estrella también desbloquea slots de habilidad adicionales — llegar a <strong>3 estrellas</strong> es el umbral clave, ya que desbloquea el emparejamiento de comandante secundario en las marchas.</li>
        <li>Cada comandante tiene exactamente una habilidad activa (normalmente se activa a 1000 Rage) más 3-4 habilidades pasivas, cada una nivelable de 1 a 5 usando Commander Sculptures.</li>
        <li>Los comandantes Epic y Legendary obtienen una 5ª habilidad "Expertise/Mastery", que solo se desbloquea cuando las cuatro habilidades base están en nivel 5.</li>
        <li>Maximizar por completo las cuatro habilidades base cuesta aproximadamente: <strong>Legendary 690 esculturas, Epic 440, Elite 340, Advanced 240</strong>. Necesitas 10 esculturas de un comandante dado solo para desbloquearlo inicialmente.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        No todos los comandantes se benefician de nivelarse de forma uniforme. Algunos (Cao Cao, El Cid, Guan Yu, Lu Bu, Tomyris) son más fuertes con una distribución 5/1/1/1, ya que solo su primera habilidad importa de verdad — invertir esculturas por igual en las cuatro habilidades desperdicia recursos en comandantes como estos. Otros (Attila, Chandragupta Maurya, Genghis Khan, Wu Zetian, Zenobia) sí merecen un máximo 5/5/5/5.
      </div>

      <h2>Emparejamiento de comandante secundario</h2>
      <p>Una vez que un comandante llega a 3 estrellas, puede emparejarse con un segundo comandante en la misma marcha — uno primario, uno secundario. <strong>Solo los puntos de talento del comandante primario se aplican en batalla</strong> — el secundario solo aporta sus habilidades activas/pasivas, no sus talentos. Los buenos emparejamientos complementan la secuencia de daño del primario con los debuffs o buffs del secundario.</p>

      <div class="box box-f2p">
        <span class="box-title">Para jugadores F2P</span>
        No inviertas puntos de talento en un comandante que planeas usar puramente como secundario — esos puntos tienen efecto cero en combate. Reserva la inversión en talentos solo para comandantes primarios.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>3 estrellas es el umbral clave: no puedes emparejar un segundo comandante antes de eso.</li>
        <li>No todos los comandantes quieren 5/5/5/5: comprueba primero su perfil de habilidades recomendado.</li>
        <li>El secundario solo aporta habilidades, nunca talentos: no desperdicies puntos de talento en él.</li>
      </ul>
`,
  fr: `
      <h1>Commandants : les bases</h1>
      <div class="hazard"></div>
      <p class="lead">Rôles, niveaux de rareté, mécaniques de montée en niveau, et comment fonctionne l'appariement avec un second commandant.</p>

      <p>Les Commandants sont des figures historiques qui mènent les marches, améliorent les statistiques via des compétences et des talents, et sont requis pour presque toutes les actions de combat et de récolte.</p>

      <h2>Rôles qu'un commandant peut occuper</h2>
      <ul>
        <li><strong>Chasse PvE</strong> — tuer des Barbarians neutres pour de l'XP et des récompenses.</li>
        <li><strong>Chef de rally PvE/PvP</strong> — attaquer des Barbarian Forts, Passes, Holy Sites, ou des villes ennemies dans le cadre d'un rally.</li>
        <li><strong>Garnison/défense</strong> — une paire primaire + secondaire assignée à ton Wall (ou à une place forte d'alliance) pour défendre automatiquement contre les attaques entrantes.</li>
        <li><strong>Récolte</strong> — envoyé sur des tuiles de ressources pour augmenter la vitesse de récolte et la charge.</li>
        <li><strong>Rejoindre un rally/renfort</strong> — soutenir le rally de quelqu'un d'autre ; ici, la vitesse de marche et les talents de soutien/affaiblissement comptent plus que l'attaque brute.</li>
      </ul>

      <h2>Niveaux de rareté</h2>
      <p>Quatre tiers, du plus faible au plus fort : <strong>Advanced → Elite → Epic → Legendary</strong>. Advanced/Elite sont bon marché et rapides à obtenir mais faibles — surtout utiles pour des rôles de récolte dédiés. Epic est le tier « cheval de bataille » du milieu de partie/F2P. Legendary est le plus difficile à obtenir (surtout via les clés Tavern or/souveraines) et le plus fort.</p>

      <h2>Mécaniques de montée en niveau</h2>
      <ul>
        <li>Les commandants gagnent de l'<strong>XP</strong> en combattant des Barbarians, des Holy Site Guardians et d'autres unités neutres, ou via des Experience Tomes.</li>
        <li>Le <strong>niveau d'étoile</strong> (distinct du niveau d'XP) s'augmente avec des <strong>Starlight Sculptures</strong> ; chaque étoile relève le plafond de niveau d'XP de 10, jusqu'au niveau 60 à 6 étoiles. Le niveau d'étoile débloque aussi des emplacements de compétence supplémentaires — atteindre <strong>3 étoiles</strong> est le seuil clé, car cela débloque l'appariement de commandant secondaire sur les marches.</li>
        <li>Chaque commandant a exactement une compétence active (se déclenche généralement à 1000 Rage) plus 3-4 compétences passives, chacune montée de 1 à 5 avec des Commander Sculptures.</li>
        <li>Les commandants Epic et Legendary obtiennent une 5e compétence « Expertise/Mastery », qui ne se débloque qu'une fois les quatre compétences de base au niveau 5.</li>
        <li>Maximiser complètement les quatre compétences de base coûte environ : <strong>Legendary 690 sculptures, Epic 440, Elite 340, Advanced 240</strong>. Il faut 10 sculptures d'un commandant donné juste pour le débloquer initialement.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Tous les commandants ne bénéficient pas d'une montée en niveau uniforme. Certains (Cao Cao, El Cid, Guan Yu, Lu Bu, Tomyris) sont les plus forts avec une répartition 5/1/1/1, car seule leur première compétence compte vraiment — répartir les sculptures uniformément sur les quatre compétences gaspille des ressources sur ce genre de commandants. D'autres (Attila, Chandragupta Maurya, Genghis Khan, Wu Zetian, Zenobia) méritent vraiment un maximum 5/5/5/5.
      </div>

      <h2>Appariement de commandant secondaire</h2>
      <p>Une fois qu'un commandant atteint 3 étoiles, il peut être apparié à un second commandant sur la même marche — un primaire, un secondaire. <strong>Seuls les points de talent du commandant primaire s'appliquent en combat</strong> — le secondaire n'apporte que ses compétences actives/passives, pas ses talents. Les bons appariements complètent la séquence de dégâts du primaire avec les affaiblissements ou bonus du secondaire.</p>

      <div class="box box-f2p">
        <span class="box-title">Focus F2P</span>
        N'investis pas de points de talent dans un commandant que tu comptes utiliser purement comme secondaire — ces points n'ont aucun effet en combat. Réserve l'investissement en talents aux seuls commandants primaires.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>3 étoiles est le seuil clé : tu ne peux pas apparier un second commandant avant ça.</li>
        <li>Tous les commandants ne veulent pas de 5/5/5/5 : vérifie d'abord leur profil de compétences recommandé.</li>
        <li>Le secondaire n'apporte que des compétences, jamais des talents : ne gaspille pas de points de talent dessus.</li>
      </ul>
`
};
