/* Contenuto tradotto del capitolo — Age of Origins / 02 Resources.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. es: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Resources</h1>
      <div class="hazard"></div>
      <p class="lead">Resources are the fuel for everything: buildings, research, troops. Whoever manages resources well grows twice as fast in the same time.</p>

      <h2>The main resources</h2>
      <div class="table-wrap"><table>
        <tr><th>Resource</th><th>Mainly used for</th><th>Notes</th></tr>
        <tr><td><strong>Food</strong></td><td>Troops, research</td><td>Troops consume food over time: a negative balance is normal in the late game</td></tr>
        <tr><td><strong>Oil</strong></td><td>Buildings, research</td><td>In high demand for Main Hall upgrades</td></tr>
        <tr><td><strong>Steel</strong></td><td>High-level buildings, advanced troops</td><td>Unlocks later, becomes the bottleneck</td></tr>
        <tr><td><strong>Minerals</strong></td><td>High-level research and upgrades</td><td>The scarcest resource: never waste it</td></tr>
      </table></div>
      <p>Some advanced mechanics (titans, components) use <strong>dedicated materials</strong> earned from events and monsters: they're worth more than base resources, so save them for planned upgrades.</p>

      <h2>Gathering on tiles</h2>
      <ul>
        <li>Send squads to the <strong>resource tiles</strong> on the map: the higher the tile level, the faster you gather.</li>
        <li>Use troops with <strong>high load</strong> (often vehicles) and fill the march to the max.</li>
        <li>Gather <strong>inside alliance territory</strong>: speed bonus and less risk of attacks.</li>
        <li>Before bed: full, distant tiles. During the day: fast, nearby tiles.</li>
      </ul>
      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Don't gather outside your bubble during KEs (Kill Events) or wars: a squad on a tile is the favorite target of anyone hunting easy points. See <a href="06-combattimento.html">Combat</a>.
      </div>

      <h2>Protecting your resources</h2>
      <ul>
        <li>The <strong>Depot</strong> (warehouse) protects a share of your resources from looting: keep it at an adequate level.</li>
        <li><strong>Spend before you get attacked</strong>: resources invested in upgrades can't be stolen.</li>
        <li>Don't open <strong>resource packs</strong> from your inventory until you need them: in the inventory they're 100% safe.</li>
        <li>If you're a target, keep your <strong>bubble</strong> up or stay below the resource threshold that attracts raiders.</li>
      </ul>
      <p class="sentinel-hint">A squad gathering outside your territory is a target: if they hit your tile while you're away, you lose the load and the troops without noticing. <strong>Sentinel</strong> can watch the notification of an attack on your march — words like <code>attack</code> or <code>march</code> — and turn it into a real alarm, even with the phone on silent. <a href="../../sentinel.html">How to set it up</a></p>

      <h2>Smart use of speed-ups</h2>
      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Speed-ups are used almost only during events that reward what you're speeding up: construction on "build" days, research on "research" days, training before KEs. That way every minute of speed-up counts double: progress + event points.
      </div>
      <ul>
        <li><strong>Generic</strong> speed-ups: the most valuable — save them for emergencies and major events.</li>
        <li><strong>Training</strong> speed-ups: stockpile them for war prep phases.</li>
        <li><strong>Healing</strong> speed-ups: use them freely, a full hospital blocks everything.</li>
      </ul>

      <h2>Farm accounts</h2>
      <p>A <strong>farm</strong> is a second account used only to produce resources to transfer to your main (via alliance trade or arranged "gathering"). It's common practice among advanced players.</p>
      <div class="box box-adv">
        <span class="box-title">For advanced players</span>
        If you run farms: keep them in the same alliance or an academy alliance, max out Depot and food/oil production, and never leave valuable troops on them. Remember that managing too many farms becomes a second job.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>The three queues (building, research, training) never stop: it's the golden rule.</li>
        <li>Claim alliance helps: they cut timers for free.</li>
        <li>Always look at what the <em>next</em> big upgrade costs and stockpile in advance.</li>
      </ul>
`,
  es: `
      <h1>Recursos</h1>
      <div class="hazard"></div>
      <p class="lead">Los recursos son el combustible de todo: edificios, investigaciones, tropas. Quien gestiona bien los recursos crece el doble en el mismo tiempo.</p>

      <h2>Los recursos principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Recurso</th><th>Sirve sobre todo para</th><th>Notas</th></tr>
        <tr><td><strong>Food</strong> (comida)</td><td>Tropas, investigaciones</td><td>Las tropas consumen food con el tiempo: un saldo negativo es normal a final de partida</td></tr>
        <tr><td><strong>Oil</strong> (petróleo)</td><td>Edificios, investigaciones</td><td>Muy demandado para las mejoras del Main Hall</td></tr>
        <tr><td><strong>Steel</strong> (acero)</td><td>Edificios altos, tropas avanzadas</td><td>Se desbloquea más adelante, se convierte en el cuello de botella</td></tr>
        <tr><td><strong>Minerals</strong> (minerales)</td><td>Investigaciones y mejoras de alto nivel</td><td>El recurso más escaso: nunca lo desperdicies</td></tr>
      </table></div>
      <p>Algunas mecánicas avanzadas (titanes, componentes) usan <strong>materiales dedicados</strong> que se obtienen de eventos y monstruos: valen más que los recursos base, guárdalos para mejoras planificadas.</p>

      <h2>Recolección en tiles</h2>
      <ul>
        <li>Manda escuadras a los <strong>tiles de recursos</strong> del mapa: cuanto más alto el nivel del tile, más rápido recolectas.</li>
        <li>Usa tropas con <strong>carga alta</strong> (a menudo los vehículos) y llena la marcha al máximo.</li>
        <li>Recolecta <strong>dentro del territorio de la alianza</strong>: bono de velocidad y menos riesgo de ataques.</li>
        <li>Antes de dormir: tiles llenos y lejanos. Durante el día: tiles rápidos y cercanos.</li>
      </ul>
      <div class="box box-err">
        <span class="box-title">Error que evitar</span>
        No recolectes fuera de tu bubble durante los KE (Kill Events) o guerras: una escuadra en un tile es el blanco favorito de quien busca puntos fáciles. Ver <a href="06-combattimento.html">Combate</a>.
      </div>

      <h2>Protección de los recursos</h2>
      <ul>
        <li>El <strong>Depot</strong> (almacén) protege una cuota de tus recursos del saqueo: mantenlo a un nivel adecuado.</li>
        <li><strong>Gasta antes de que te ataquen</strong>: los recursos invertidos en mejoras no se pueden robar.</li>
        <li>No abras los <strong>paquetes de recursos</strong> del inventario hasta que los necesites: en el inventario están 100% seguros.</li>
        <li>Si eres un blanco, mantén la <strong>bubble</strong> activa o quédate bajo el umbral de recursos que atrae a los saqueadores.</li>
      </ul>
      <p class="sentinel-hint">Una escuadra recolectando fuera de tu territorio es un blanco: si te golpean el tile mientras estás fuera, pierdes la carga y las tropas sin darte cuenta. <strong>Sentinel</strong> puede vigilar la notificación de ataque a tu marcha — palabras como <code>attack</code> o <code>march</code> — y convertirla en una alarma real, incluso con el teléfono en silencio. <a href="../../sentinel.html">Cómo configurarlo</a></p>

      <h2>Uso inteligente de los speed-up</h2>
      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Los speed-up se usan casi solo durante los eventos que premian lo que aceleras: construcción en los días "construcción", investigación en los días "investigación", entrenamiento antes de los KE. Así cada minuto de speed-up vale doble: progreso + puntos de evento.
      </div>
      <ul>
        <li>Speed-up <strong>genéricos</strong>: los más valiosos, guárdalos para emergencias y grandes eventos.</li>
        <li>Speed-up de <strong>entrenamiento</strong>: acumúlalos para las fases de preparación de guerra.</li>
        <li>Speed-up de <strong>curación</strong>: úsalos libremente, el hospital lleno bloquea todo.</li>
      </ul>

      <h2>Cuentas farm</h2>
      <p>Un <strong>farm</strong> es una segunda cuenta usada solo para producir recursos que transferir a la principal (vía comercio de alianza o "recolección" acordada). Es práctica común entre jugadores avanzados.</p>
      <div class="box box-adv">
        <span class="box-title">Para jugadores avanzados</span>
        Si gestionas farms: mantenlas en la misma alianza o en una alianza-academia, maximiza Depot y producción de food/oil, y nunca dejes tropas de valor en ellas. Recuerda que gestionar demasiados farms se convierte en un segundo trabajo.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Las tres colas (construcción, investigación, entrenamiento) nunca se detienen: es la regla de oro.</li>
        <li>Reclama las ayudas de alianza: reducen los tiempos gratis.</li>
        <li>Mira siempre cuánto cuesta la <em>próxima</em> gran mejora y acumula con antelación.</li>
      </ul>
`,
  fr: `
      <h1>Ressources</h1>
      <div class="hazard"></div>
      <p class="lead">Les ressources sont le carburant de tout : bâtiments, recherches, troupes. Qui gère bien les ressources grandit deux fois plus vite dans le même temps.</p>

      <h2>Les ressources principales</h2>
      <div class="table-wrap"><table>
        <tr><th>Ressource</th><th>Sert surtout pour</th><th>Notes</th></tr>
        <tr><td><strong>Food</strong> (nourriture)</td><td>Troupes, recherches</td><td>Les troupes consomment de la food avec le temps : un solde négatif est normal en fin de partie</td></tr>
        <tr><td><strong>Oil</strong> (pétrole)</td><td>Bâtiments, recherches</td><td>Très demandé pour les améliorations du Main Hall</td></tr>
        <tr><td><strong>Steel</strong> (acier)</td><td>Bâtiments élevés, troupes avancées</td><td>Se débloque plus tard, devient le goulot d'étranglement</td></tr>
        <tr><td><strong>Minerals</strong> (minerais)</td><td>Recherches et améliorations de haut niveau</td><td>La ressource la plus rare : ne la gaspille jamais</td></tr>
      </table></div>
      <p>Certaines mécaniques avancées (titans, composants) utilisent des <strong>matériaux dédiés</strong> obtenus des événements et des monstres : ils valent plus que les ressources de base, garde-les pour les améliorations planifiées.</p>

      <h2>Récolte sur les tuiles</h2>
      <ul>
        <li>Envoie des escouades sur les <strong>tuiles de ressources</strong> de la carte : plus le niveau de la tuile est élevé, plus tu récoltes vite.</li>
        <li>Utilise des troupes à <strong>charge élevée</strong> (souvent les véhicules) et remplis la marche au maximum.</li>
        <li>Récolte <strong>à l'intérieur du territoire de l'alliance</strong> : bonus de vitesse et moins de risque d'attaques.</li>
        <li>Avant de dormir : tuiles pleines et lointaines. Pendant la journée : tuiles rapides et proches.</li>
      </ul>
      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Ne récolte pas hors de ta bubble pendant les KE (Kill Events) ou les guerres : une escouade sur une tuile est la cible préférée de qui cherche des points faciles. Voir <a href="06-combattimento.html">Combat</a>.
      </div>

      <h2>Protection des ressources</h2>
      <ul>
        <li>Le <strong>Depot</strong> (entrepôt) protège une part de tes ressources du pillage : garde-le à un niveau adéquat.</li>
        <li><strong>Dépense avant d'être attaqué</strong> : les ressources investies dans des améliorations ne peuvent pas être volées.</li>
        <li>N'ouvre pas les <strong>packs de ressources</strong> de l'inventaire avant d'en avoir besoin : dans l'inventaire ils sont sûrs à 100%.</li>
        <li>Si tu es une cible, garde ta <strong>bubble</strong> active ou reste sous le seuil de ressources qui attire les pillards.</li>
      </ul>
      <p class="sentinel-hint">Une escouade qui récolte hors de ton territoire est une cible : si on te frappe la tuile pendant ton absence, tu perds la cargaison et les troupes sans t'en rendre compte. <strong>Sentinel</strong> peut surveiller la notification d'attaque sur ta marche — des mots comme <code>attack</code> ou <code>march</code> — et la transformer en une vraie alarme, même téléphone en silencieux. <a href="../../sentinel.html">Comment le configurer</a></p>

      <h2>Utilisation intelligente des speed-up</h2>
      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Les speed-up s'utilisent presque uniquement pendant les événements qui récompensent ce que tu accélères : construction les jours "construction", recherche les jours "recherche", entraînement avant les KE. Ainsi chaque minute de speed-up vaut double : progrès + points d'événement.
      </div>
      <ul>
        <li>Speed-up <strong>génériques</strong> : les plus précieux, garde-les pour les urgences et les grands événements.</li>
        <li>Speed-up d'<strong>entraînement</strong> : accumule-les pour les phases de préparation de guerre.</li>
        <li>Speed-up de <strong>soin</strong> : utilise-les librement, un hôpital plein bloque tout.</li>
      </ul>

      <h2>Comptes farm</h2>
      <p>Un <strong>farm</strong> est un second compte utilisé uniquement pour produire des ressources à transférer au principal (via le commerce d'alliance ou une "récolte" arrangée). C'est une pratique courante chez les joueurs avancés.</p>
      <div class="box box-adv">
        <span class="box-title">Pour les joueurs avancés</span>
        Si tu gères des farms : garde-les dans la même alliance ou une alliance-académie, maximise Depot et production food/oil, et n'y laisse jamais de troupes de valeur. Gérer trop de farms devient un second travail.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Les trois files (construction, recherche, entraînement) ne s'arrêtent jamais : c'est la règle d'or.</li>
        <li>Récupère les aides d'alliance : elles réduisent les délais gratuitement.</li>
        <li>Regarde toujours combien coûte la <em>prochaine</em> grande amélioration et accumule à l'avance.</li>
      </ul>
`
};
