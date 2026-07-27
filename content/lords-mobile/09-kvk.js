/* Contenuto tradotto del capitolo — Lords Mobile / 09 Kingdom vs Kingdom (KvK).
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Kingdom vs Kingdom (KvK)</h1>
      <div class="hazard"></div>
      <p class="lead">Kingdom Clash: how it works, how points are scored, and what happens to the losing Kingdom afterward.</p>

      <h2>The basics</h2>
      <p>Officially called <strong>Kingdom Clash</strong>, commonly shortened to <strong>KvK</strong> — a large-scale event where 2-4 Kingdoms compete directly.</p>
      <ul>
        <li><strong>Duration:</strong> roughly a 24-hour event window.</li>
        <li><strong>Eligibility:</strong> only Kingdoms older than 90 days; unavailable in newly-protected Kingdoms.</li>
        <li><strong>Historical scheduling pattern:</strong> roughly every third week, just before Guild Fest begins (always confirm the current cadence in-game before relying on a fixed schedule).</li>
        <li>Players use a <strong>Relocator</strong> or <strong>Random Relocator</strong> to teleport into a rival Kingdom for a set Battle Period, then are automatically returned home afterward at a random location.</li>
      </ul>

      <h2>How points are scored</h2>
      <div class="table-wrap"><table>
        <tr><th>Method</th><th>Example values</th></tr>
        <tr><td><strong>Occupy Wonders</strong></td><td>Command a Base (1 min) = 100,000 pts · Reinforce a Base (1 min) = 50,000 · Command a Fort (1 min) = 20,000 · Reinforce a Fort = 10,000</td></tr>
        <tr><td><strong>Kill enemy soldiers</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Destroy enemy traps</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Hunt monsters in rival Kingdom</strong></td><td>Lv1 kill = 1,000 pts (hit = 300) up to Lv5 kill = 300,000 pts (hit = 3,600)</td></tr>
        <tr><td><strong>Gather resources in rival Kingdom (per 1,000 units)</strong></td><td>Food = 120 · Stone = 180 · Timber = 180 · Ore = 240 · Gold = 330</td></tr>
      </table></div>
      <p>If 3-4 Kingdoms compete, a rotating "featured" rival Kingdom offers double points for Wonder occupation, kills and trap destruction.</p>

      <h2>Score thresholds (Solo War chests, scale by Castle level)</h2>
      <div class="table-wrap"><table>
        <tr><th>Castle level</th><th>2-3 Kingdom format</th><th>4 Kingdom format</th></tr>
        <tr><td>25</td><td>1,800,000 pts</td><td>2,700,000 pts</td></tr>
        <tr><td>22-24</td><td>864,000 pts</td><td>—</td></tr>
        <tr><td>18-21</td><td>270,000 pts</td><td>—</td></tr>
        <tr><td>13-17</td><td>180,000 pts</td><td>—</td></tr>
        <tr><td>8-12</td><td>90,000 pts</td><td>—</td></tr>
      </table></div>
      <p>Top-tier rewards (Castle 25 phase) include up to 6,000 Gems plus large resource/speed-up bundles. Guild-wide cumulative thresholds (3.15M / 8.4M / 21M points) also unlock Uncommon/Rare/Epic Guild War Chests shared across the guild.</p>

      <h2>After KvK</h2>
      <ul>
        <li><strong>Gem Lodes</strong> spawn in the defeated Kingdom(s) the day after, gatherable like normal tiles — starting at Level 1, scaling up to Level 5, spawning roughly every 6 hours.</li>
        <li>Wonders leave Protection Phase entirely during KvK; whichever guild holds one when it ends has its leader become the new owner, and the Wonder re-enters Protection Phase for 5-6 days.</li>
      </ul>

      <p class="sentinel-hint">A shield about to expire right during KvK is one of the riskiest moments in the game — <strong>Sentinel</strong> can warn you ahead of time so you're never caught exposed: set a keyword like <code>shield</code>. <a href="../../sentinel.html">How to set it up</a></p>

      <div class="box box-adv">
        <span class="box-title">For advanced players</span>
        Gather in small batches (roughly 350K resources at a time) during KvK to limit losses if you're hit while out gathering on enemy territory.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Only send as many gatherers/attackers into a rival Kingdom as your Infirmary can safely absorb if things go wrong.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Always double-check the current KvK cadence on your server: intervals can vary.</li>
        <li>Only target high-level monsters in the rival Kingdom if you have a proper lineup: the points are high, but so is the risk.</li>
        <li>Coordinate Wonder occupation with your guild: it's worth far more than scattered individual points.</li>
      </ul>
`,
  es: `
      <h1>Kingdom vs Kingdom (KvK)</h1>
      <div class="hazard"></div>
      <p class="lead">Kingdom Clash: cómo funciona, cómo se puntúa y qué le pasa al Reino perdedor después.</p>

      <h2>Lo básico</h2>
      <p>Llamado oficialmente <strong>Kingdom Clash</strong>, abreviado comúnmente como <strong>KvK</strong> — un evento a gran escala donde 2-4 Reinos compiten directamente.</p>
      <ul>
        <li><strong>Duración:</strong> aproximadamente una ventana de 24 horas.</li>
        <li><strong>Elegibilidad:</strong> solo Reinos con más de 90 días; no disponible en Reinos recién protegidos.</li>
        <li><strong>Patrón histórico de programación:</strong> aproximadamente cada tres semanas, justo antes de que comience el Guild Fest (confirma siempre la cadencia actual en el juego antes de fiarte de un calendario fijo).</li>
        <li>Los jugadores usan un <strong>Relocator</strong> o un <strong>Random Relocator</strong> para teletransportarse a un Reino rival durante un Período de Batalla determinado, y luego son devueltos automáticamente a casa en una ubicación aleatoria al finalizar.</li>
      </ul>

      <h2>Cómo se puntúa</h2>
      <div class="table-wrap"><table>
        <tr><th>Método</th><th>Valores de ejemplo</th></tr>
        <tr><td><strong>Ocupar Wonders</strong></td><td>Comandar una Base (1 min) = 100.000 pts · Reforzar una Base (1 min) = 50.000 · Comandar un Fuerte (1 min) = 20.000 · Reforzar un Fuerte = 10.000</td></tr>
        <tr><td><strong>Matar soldados enemigos</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Destruir trampas enemigas</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Cazar monstruos en el Reino rival</strong></td><td>Kill Lv1 = 1.000 pts (golpe = 300) hasta Kill Lv5 = 300.000 pts (golpe = 3.600)</td></tr>
        <tr><td><strong>Recolectar recursos en el Reino rival (por cada 1.000 unidades)</strong></td><td>Comida = 120 · Piedra = 180 · Madera = 180 · Mineral = 240 · Oro = 330</td></tr>
      </table></div>
      <p>Si compiten 3-4 Reinos, un Reino rival "destacado" rotativo ofrece puntos dobles por ocupación de Wonders, bajas y destrucción de trampas.</p>

      <h2>Umbrales de puntuación (cofres Solo War, escalan por nivel de Castillo)</h2>
      <div class="table-wrap"><table>
        <tr><th>Nivel de Castillo</th><th>Formato 2-3 Reinos</th><th>Formato 4 Reinos</th></tr>
        <tr><td>25</td><td>1.800.000 pts</td><td>2.700.000 pts</td></tr>
        <tr><td>22-24</td><td>864.000 pts</td><td>—</td></tr>
        <tr><td>18-21</td><td>270.000 pts</td><td>—</td></tr>
        <tr><td>13-17</td><td>180.000 pts</td><td>—</td></tr>
        <tr><td>8-12</td><td>90.000 pts</td><td>—</td></tr>
      </table></div>
      <p>Las recompensas de gama alta (fase Castillo 25) incluyen hasta 6.000 Gemas más grandes lotes de recursos/speed-ups. Los umbrales acumulativos de toda la gilda (3,15M / 8,4M / 21M puntos) también desbloquean Guild War Chests Poco Comunes/Raros/Épicos compartidos por toda la gilda.</p>

      <h2>Después del KvK</h2>
      <ul>
        <li>Los <strong>Gem Lodes</strong> aparecen en el/los Reino(s) derrotado(s) al día siguiente, recolectables como tiles normales — empiezan en nivel 1, escalan hasta nivel 5, y reaparecen aproximadamente cada 6 horas.</li>
        <li>Los Wonders salen por completo de la Fase de Protección durante el KvK; la gilda que controle uno cuando termina el evento pasa a tener a su líder como nuevo propietario, y el Wonder vuelve a entrar en Fase de Protección durante 5-6 días.</li>
      </ul>

      <p class="sentinel-hint">Un escudo a punto de expirar justo durante el KvK es uno de los momentos más peligrosos del juego — <strong>Sentinel</strong> puede avisarte con antelación para que nunca te pille desprotegido: configura una palabra clave como <code>shield</code>. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <div class="box box-adv">
        <span class="box-title">Para jugadores avanzados</span>
        Recolecta en lotes pequeños (unos 350K recursos cada vez) durante el KvK para limitar las pérdidas si te golpean mientras recolectas en territorio enemigo.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Envía a un Reino rival solo tantos recolectores/atacantes como tu Enfermería pueda absorber con seguridad si las cosas salen mal.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Comprueba siempre la cadencia actual del KvK en tu servidor: los intervalos pueden variar.</li>
        <li>Ataca monstruos de nivel alto en el Reino rival solo si tienes una formación adecuada: los puntos son altos, pero el riesgo también.</li>
        <li>Coordina la ocupación de Wonders con tu gilda: vale mucho más que puntos individuales dispersos.</li>
      </ul>
`,
  fr: `
      <h1>Kingdom vs Kingdom (KvK)</h1>
      <div class="hazard"></div>
      <p class="lead">Kingdom Clash : comment ça marche, comment les points sont comptés, et ce qui arrive au Royaume perdant ensuite.</p>

      <h2>Les bases</h2>
      <p>Officiellement appelé <strong>Kingdom Clash</strong>, communément abrégé en <strong>KvK</strong> — un événement à grande échelle où 2 à 4 Royaumes s'affrontent directement.</p>
      <ul>
        <li><strong>Durée :</strong> environ une fenêtre de 24 heures.</li>
        <li><strong>Éligibilité :</strong> seuls les Royaumes de plus de 90 jours ; indisponible dans les Royaumes nouvellement protégés.</li>
        <li><strong>Schéma de planification historique :</strong> environ toutes les trois semaines, juste avant le début du Guild Fest (vérifie toujours la cadence actuelle en jeu avant de te fier à un calendrier fixe).</li>
        <li>Les joueurs utilisent un <strong>Relocator</strong> ou un <strong>Random Relocator</strong> pour se téléporter dans un Royaume rival pendant une Période de Bataille définie, puis sont automatiquement ramenés chez eux à un endroit aléatoire une fois celle-ci terminée.</li>
      </ul>

      <h2>Comment les points sont comptés</h2>
      <div class="table-wrap"><table>
        <tr><th>Méthode</th><th>Valeurs d'exemple</th></tr>
        <tr><td><strong>Occuper des Wonders</strong></td><td>Commander une Base (1 min) = 100 000 pts · Renforcer une Base (1 min) = 50 000 · Commander un Fort (1 min) = 20 000 · Renforcer un Fort = 10 000</td></tr>
        <tr><td><strong>Tuer des soldats ennemis</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Détruire des pièges ennemis</strong></td><td>T1 = 1 pt · T2 = 2 · T3 = 4 · T4 = 12</td></tr>
        <tr><td><strong>Chasser des monstres dans le Royaume rival</strong></td><td>Kill Niv1 = 1 000 pts (coup = 300) jusqu'à Kill Niv5 = 300 000 pts (coup = 3 600)</td></tr>
        <tr><td><strong>Récolter des ressources dans le Royaume rival (par tranche de 1 000 unités)</strong></td><td>Nourriture = 120 · Pierre = 180 · Bois = 180 · Minerai = 240 · Or = 330</td></tr>
      </table></div>
      <p>Si 3 à 4 Royaumes s'affrontent, un Royaume rival « en vedette » tournant offre des points doubles pour l'occupation des Wonders, les éliminations et la destruction de pièges.</p>

      <h2>Seuils de score (coffres Solo War, évoluent selon le niveau du Château)</h2>
      <div class="table-wrap"><table>
        <tr><th>Niveau du Château</th><th>Format 2-3 Royaumes</th><th>Format 4 Royaumes</th></tr>
        <tr><td>25</td><td>1 800 000 pts</td><td>2 700 000 pts</td></tr>
        <tr><td>22-24</td><td>864 000 pts</td><td>—</td></tr>
        <tr><td>18-21</td><td>270 000 pts</td><td>—</td></tr>
        <tr><td>13-17</td><td>180 000 pts</td><td>—</td></tr>
        <tr><td>8-12</td><td>90 000 pts</td><td>—</td></tr>
      </table></div>
      <p>Les récompenses du haut de tableau (phase Château 25) incluent jusqu'à 6 000 Gemmes plus de gros lots de ressources/speed-ups. Les seuils cumulés à l'échelle de la guilde (3,15M / 8,4M / 21M points) débloquent aussi des Guild War Chests Peu Communs/Rares/Épiques partagés par toute la guilde.</p>

      <h2>Après le KvK</h2>
      <ul>
        <li>Des <strong>Gem Lodes</strong> apparaissent dans le(s) Royaume(s) vaincu(s) le lendemain, récoltables comme des tiles normales — commençant au niveau 1, montant jusqu'au niveau 5, réapparaissant environ toutes les 6 heures.</li>
        <li>Les Wonders sortent entièrement de la Phase de Protection pendant le KvK ; la guilde qui en détient un à la fin de l'événement voit son chef en devenir le nouveau propriétaire, et le Wonder retourne en Phase de Protection pendant 5 à 6 jours.</li>
      </ul>

      <p class="sentinel-hint">Un bouclier sur le point d'expirer en plein KvK est l'un des moments les plus risqués du jeu — <strong>Sentinel</strong> peut te prévenir à l'avance pour que tu ne sois jamais pris au dépourvu : configure un mot-clé comme <code>shield</code>. <a href="../../sentinel.html">Comment le configurer</a></p>

      <div class="box box-adv">
        <span class="box-title">Pour les joueurs avancés</span>
        Récolte par petits lots (environ 350K ressources à la fois) pendant le KvK pour limiter les pertes si tu te fais frapper en récoltant en territoire ennemi.
      </div>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        N'envoie dans un Royaume rival que le nombre de récolteurs/attaquants que ton Infirmerie peut absorber en toute sécurité si les choses tournent mal.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Vérifie toujours la cadence actuelle du KvK sur ton serveur : les intervalles peuvent varier.</li>
        <li>Ne vise les monstres de haut niveau dans le Royaume rival que si tu as une composition adaptée : les points sont élevés, mais le risque aussi.</li>
        <li>Coordonne l'occupation des Wonders avec ta guilde : cela vaut bien plus que des points individuels dispersés.</li>
      </ul>
`
};
