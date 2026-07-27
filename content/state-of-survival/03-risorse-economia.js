/* Contenuto tradotto del capitolo — State of Survival / 03 Resources & economy.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Resources & economy</h1>
      <div class="hazard"></div>

      <h2>Core resources</h2>
      <p>State of Survival uses <strong>four core resources</strong>: <strong>Food, Wood, Metal and Gas</strong> (note: this is SoS's own naming — don't confuse it with "Meat/Coal/Steel/Gasoline," which belong to a different game in the same genre). The premium/hard currency is <strong>Biocaps</strong>.</p>

      <h2>Acquiring resources</h2>
      <ul>
        <li>Passive production from in-base resource buildings.</li>
        <li>Supply Crates from your inventory.</li>
        <li>Gathering Resource Tiles on the world map (9 tile levels; higher-level tiles hold more resources and sit progressively closer to the map center, the "<strong>Oasis</strong>"/"<strong>Capital</strong>").</li>
        <li>Attacking/plundering other players' settlements.</li>
        <li>Opening/recycling crates.</li>
        <li>Killing Infected and rallying Infected Fiends.</li>
        <li>Completing Intel missions.</li>
        <li>Event participation.</li>
        <li>Trading via the Market Stall / Supply Convoy.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Splitting a large gathering army into two smaller, equal marches gathers the same total resources in roughly half the time (as long as the tile's capacity supports it) — effectively doubling gathering throughput for the same number of march slots.
      </div>

      <div class="box box-prio">
        <span class="box-title">Priority</span>
        Invest early in the Economic Talent tree's Wood/Food/Metal Haulage nodes to boost both gathering speed and march capacity for gathering runs.
      </div>

      <h2>Resource protection</h2>
      <p>The <strong>Warehouse</strong> building shields a portion of each resource type from being plundered when your base is attacked; upgrading it raises both the protected amount and how much can be listed for trade at the Trading Post.</p>

      <h3>Shield items</h3>
      <ul>
        <li><strong>Peace Flare</strong> — general attack/recon shield, in 2h / 8h / 24h durations. Bought from the Alliance Store with Alliance Donation Coins; a handful of free 8-hour flares are granted periodically (roughly one per week from some sources), plus free 24-hour flares tied to State Warfare participation.</li>
        <li><strong>Recon Jammer</strong> — blocks or degrades enemy recon attempts against your settlement (an enemy can still send a recon march but gets less detail). Flagged by guides as a "must-activate" buff during PvP events like Capital Clash or Reservoir Raid.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Mistake to avoid</span>
        Attacking or reconning someone else while your own Peace Flare is active immediately cancels your own shield.
      </div>

      <h2>Hospital, wounded troops & permanent losses</h2>
      <p>This is the single most important defensive mechanic to understand clearly:</p>
      <ul>
        <li>Wounded troops go to the <strong>Hospital</strong> first. Hospital capacity scales with its level (up to Plasma level 10 in recent updates, pushing total capacity into six figures on a maxed account).</li>
        <li>A <strong>hard cap of 35% of a march's size</strong> applies to how many troops can become "heavily wounded" from a single lost battle — sending 100,000 troops into a losing fight caps heavy wounds at 35,000, no matter how badly the fight goes.</li>
        <li>Once the Hospital is completely full, troops that would otherwise die are redirected to the <strong>Enlistment Office</strong> instead — but only <strong>70% of that overflow</strong> is captured there (30% is lost permanently); Enlistment Office capacity is <strong>4× Hospital capacity</strong>. Anything beyond the combined capacity is lost for good.</li>
        <li><strong>Losses from attacking another player's settlement get no Enlistment Office safety net at all</strong> — those are always fully permanent losses, unlike defensive losses. Keep this in mind: reckless offense is far riskier than defense.</li>
        <li>The Enlistment Office slowly accrues "<strong>Duty</strong>" over time (influenced by HQ level, current wounded count, daily task completion, and gathering activity); Duty is spent to convert enlisted survivors back into usable troops.</li>
        <li><strong>Instant Healing</strong> can be used once every 24 hours to heal 10% of currently wounded troops instantly, at no resource cost — a valuable free "reset" after a bad fight.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">F2P Focus</span>
        Do not spend Biocaps on speedups or routine resource purchases — both are low-value uses since speedups accumulate naturally from Daily Rewards/Growth Missions/events, and resources should be farmed rather than bought.
      </div>

      <h2>Quick tips</h2>
      <ul>
        <li>Split gathering marches in two to double your throughput for the same march slots.</li>
        <li>Keep the Warehouse upgraded in parallel with everything else: protect what you can't spend yet.</li>
        <li>Remember: losses from attacking (not defending) have no Enlistment Office safety net.</li>
      </ul>
`,
  es: `
      <h1>Recursos y economía</h1>
      <div class="hazard"></div>

      <h2>Recursos básicos</h2>
      <p>State of Survival usa <strong>cuatro recursos básicos</strong>: <strong>Food, Wood, Metal y Gas</strong> (atención: esta es la nomenclatura propia de SoS — no la confundas con "Meat/Coal/Steel/Gasoline", que pertenecen a otro juego del mismo género). La moneda premium/dura es <strong>Biocaps</strong>.</p>

      <h2>Cómo obtener recursos</h2>
      <ul>
        <li>Producción pasiva de los edificios de recursos en la base.</li>
        <li>Cajas de suministro del inventario.</li>
        <li>Recolección de tiles de recursos en el mapa del mundo (9 niveles de tile; los tiles de nivel más alto contienen más recursos y están progresivamente más cerca del centro del mapa, el "<strong>Oasis</strong>"/"<strong>Capital</strong>").</li>
        <li>Atacar/saquear los asentamientos de otros jugadores.</li>
        <li>Abrir/reciclar cajas.</li>
        <li>Matar Infectados y hacer rally contra los Fiends Infectados.</li>
        <li>Completar misiones Intel.</li>
        <li>Participación en eventos.</li>
        <li>Comerciar mediante el Market Stall / Supply Convoy.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Dividir un gran ejército de recolección en dos marchas más pequeñas e iguales recolecta el mismo total de recursos en aproximadamente la mitad del tiempo (siempre que la capacidad del tile lo soporte) — duplicando efectivamente el rendimiento de recolección para el mismo número de slots de marcha.
      </div>

      <div class="box box-prio">
        <span class="box-title">Prioridad</span>
        Invierte pronto en los nodos Wood/Food/Metal Haulage del árbol de Talentos Económicos para aumentar tanto la velocidad de recolección como la capacidad de marcha para las expediciones de recolección.
      </div>

      <h2>Protección de recursos</h2>
      <p>El edificio <strong>Warehouse</strong> protege una parte de cada tipo de recurso del saqueo cuando tu base es atacada; mejorarlo aumenta tanto la cantidad protegida como cuánto puede listarse para comerciar en el Trading Post.</p>

      <h3>Objetos de escudo</h3>
      <ul>
        <li><strong>Peace Flare</strong> — escudo general anti-ataque/recon, en duraciones de 2h / 8h / 24h. Se compra en la Alliance Store con Alliance Donation Coins; se conceden periódicamente algunos Peace Flare gratuitos de 8 horas (aproximadamente uno por semana según algunas fuentes), más Peace Flare gratuitos de 24 horas ligados a la participación en State Warfare.</li>
        <li><strong>Recon Jammer</strong> — bloquea o degrada los intentos de recon enemigos contra tu asentamiento (un enemigo aún puede enviar una marcha de recon pero obtiene menos detalle). Señalado por las guías como un buff "de activación obligatoria" durante eventos PvP como Capital Clash o Reservoir Raid.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Error a evitar</span>
        Atacar o hacer recon a otra persona mientras tu propio Peace Flare está activo cancela inmediatamente tu propio escudo.
      </div>

      <h2>Hospital, tropas heridas y pérdidas permanentes</h2>
      <p>Esta es la mecánica defensiva individual más importante de entender bien:</p>
      <ul>
        <li>Las tropas heridas van primero al <strong>Hospital</strong>. La capacidad del Hospital escala con su nivel (hasta el nivel Plasma 10 en actualizaciones recientes, llevando la capacidad total en una cuenta maximizada a seis cifras).</li>
        <li>Se aplica un <strong>tope máximo del 35% del tamaño de una marcha</strong> a cuántas tropas pueden quedar "gravemente heridas" por una sola batalla perdida — enviar 100.000 tropas a un combate perdedor limita los heridos graves a 35.000, sin importar lo mal que vaya la batalla.</li>
        <li>Una vez que el Hospital está completamente lleno, las tropas que de otro modo morirían son redirigidas al <strong>Enlistment Office</strong> — pero solo se captura allí el <strong>70% de ese excedente</strong> (el 30% se pierde permanentemente); la capacidad del Enlistment Office es <strong>4× la capacidad del Hospital</strong>. Todo lo que supere la capacidad combinada se pierde para siempre.</li>
        <li><strong>Las pérdidas por atacar el asentamiento de otro jugador no tienen ninguna red de seguridad del Enlistment Office</strong> — esas son siempre pérdidas completamente permanentes, a diferencia de las pérdidas defensivas. Ten esto en cuenta: la ofensiva imprudente es mucho más arriesgada que la defensa.</li>
        <li>El Enlistment Office acumula lentamente "<strong>Duty</strong>" con el tiempo (influenciado por el nivel de HQ, el número actual de heridos, la finalización de tareas diarias y la actividad de recolección); el Duty se gasta para convertir a los supervivientes alistados de nuevo en tropas utilizables.</li>
        <li><strong>Instant Healing</strong> puede usarse una vez cada 24 horas para curar instantáneamente el 10% de las tropas actualmente heridas, sin coste de recursos — un valioso "reinicio" gratuito tras una mala batalla.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">Para jugadores F2P</span>
        No gastes Biocaps en speedups o compras de recursos rutinarias — ambos son usos de bajo valor, ya que los speedups se acumulan naturalmente con Daily Rewards/Growth Missions/eventos, y los recursos deberían granjearse en vez de comprarse.
      </div>

      <h2>Consejos rápidos</h2>
      <ul>
        <li>Divide las marchas de recolección en dos para duplicar tu rendimiento con los mismos slots de marcha.</li>
        <li>Mantén el Warehouse mejorado en paralelo con todo lo demás: protege lo que aún no puedes gastar.</li>
        <li>Recuerda: las pérdidas por atacar (no por defender) no tienen red de seguridad del Enlistment Office.</li>
      </ul>
`,
  fr: `
      <h1>Ressources et économie</h1>
      <div class="hazard"></div>

      <h2>Ressources de base</h2>
      <p>State of Survival utilise <strong>quatre ressources de base</strong> : <strong>Food, Wood, Metal et Gas</strong> (attention : c'est la nomenclature propre à SoS — ne la confonds pas avec « Meat/Coal/Steel/Gasoline », qui appartiennent à un autre jeu du même genre). La monnaie premium/dure est <strong>Biocaps</strong>.</p>

      <h2>Comment obtenir des ressources</h2>
      <ul>
        <li>Production passive des bâtiments de ressources dans la base.</li>
        <li>Caisses de ravitaillement de l'inventaire.</li>
        <li>Récolte de tuiles de ressources sur la carte du monde (9 niveaux de tuiles ; les tuiles de niveau supérieur contiennent plus de ressources et se trouvent progressivement plus près du centre de la carte, l'« <strong>Oasis</strong> »/« <strong>Capitale</strong> »).</li>
        <li>Attaquer/piller les colonies d'autres joueurs.</li>
        <li>Ouvrir/recycler des caisses.</li>
        <li>Tuer des Infectés et faire des rallies contre les Fiends Infectés.</li>
        <li>Terminer des missions Intel.</li>
        <li>Participation aux événements.</li>
        <li>Commercer via le Market Stall / Supply Convoy.</li>
      </ul>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Diviser une grande armée de récolte en deux marches plus petites et égales récolte le même total de ressources en environ la moitié du temps (tant que la capacité de la tuile le permet) — doublant ainsi le rendement de récolte pour le même nombre de slots de marche.
      </div>

      <div class="box box-prio">
        <span class="box-title">Priorité</span>
        Investis tôt dans les nœuds Wood/Food/Metal Haulage de l'arbre des Talents Économiques pour booster à la fois la vitesse de récolte et la capacité de marche pour les expéditions de récolte.
      </div>

      <h2>Protection des ressources</h2>
      <p>Le bâtiment <strong>Warehouse</strong> protège une partie de chaque type de ressource du pillage lorsque ta base est attaquée ; l'améliorer augmente à la fois le montant protégé et ce qui peut être mis en vente au Trading Post.</p>

      <h3>Objets de bouclier</h3>
      <ul>
        <li><strong>Peace Flare</strong> — bouclier général anti-attaque/recon, en durées de 2h / 8h / 24h. Acheté à l'Alliance Store avec des Alliance Donation Coins ; quelques Peace Flare gratuits de 8 heures sont accordés périodiquement (environ un par semaine selon certaines sources), plus des Peace Flare gratuits de 24 heures liés à la participation à la State Warfare.</li>
        <li><strong>Recon Jammer</strong> — bloque ou dégrade les tentatives de recon ennemies contre ta colonie (un ennemi peut toujours envoyer une marche de recon mais obtient moins de détails). Signalé par les guides comme un buff « à activer absolument » pendant les événements PvP comme Capital Clash ou Reservoir Raid.</li>
      </ul>

      <div class="box box-err">
        <span class="box-title">Erreur à éviter</span>
        Attaquer ou reconnaître quelqu'un d'autre pendant que ton propre Peace Flare est actif annule immédiatement ton propre bouclier.
      </div>

      <h2>Hôpital, troupes blessées et pertes permanentes</h2>
      <p>C'est la mécanique défensive la plus importante à bien comprendre :</p>
      <ul>
        <li>Les troupes blessées vont d'abord à l'<strong>Hospital</strong>. La capacité de l'Hospital évolue avec son niveau (jusqu'au niveau Plasma 10 dans les mises à jour récentes, portant la capacité totale sur un compte maximisé à six chiffres).</li>
        <li>Un <strong>plafond strict de 35% de la taille d'une marche</strong> s'applique au nombre de troupes pouvant devenir « gravement blessées » suite à une seule bataille perdue — envoyer 100 000 troupes dans un combat perdant plafonne les blessés graves à 35 000, peu importe à quel point la bataille tourne mal.</li>
        <li>Une fois l'Hospital complètement plein, les troupes qui mourraient autrement sont redirigées vers l'<strong>Enlistment Office</strong> — mais seulement <strong>70% de ce surplus</strong> y est capturé (30% est perdu définitivement) ; la capacité de l'Enlistment Office est <strong>4× celle de l'Hospital</strong>. Tout ce qui dépasse la capacité combinée est perdu pour de bon.</li>
        <li><strong>Les pertes dues à l'attaque de la colonie d'un autre joueur ne bénéficient d'aucun filet de sécurité de l'Enlistment Office</strong> — elles sont toujours des pertes totalement permanentes, contrairement aux pertes défensives. Garde ça en tête : l'offensive imprudente est bien plus risquée que la défense.</li>
        <li>L'Enlistment Office accumule lentement du « <strong>Duty</strong> » au fil du temps (influencé par le niveau du QG, le nombre actuel de blessés, l'accomplissement des tâches quotidiennes et l'activité de récolte) ; le Duty est dépensé pour reconvertir les survivants enrôlés en troupes utilisables.</li>
        <li><strong>Instant Healing</strong> peut être utilisé une fois toutes les 24 heures pour soigner instantanément 10% des troupes actuellement blessées, sans coût en ressources — une précieuse remise à zéro gratuite après une mauvaise bataille.</li>
      </ul>

      <div class="box box-f2p">
        <span class="box-title">Focus F2P</span>
        Ne dépense pas de Biocaps en speedups ou achats de ressources courants — les deux sont des usages à faible valeur puisque les speedups s'accumulent naturellement via les Daily Rewards/Growth Missions/événements, et les ressources devraient être récoltées plutôt qu'achetées.
      </div>

      <h2>Conseils rapides</h2>
      <ul>
        <li>Divise les marches de récolte en deux pour doubler ton rendement avec le même nombre de slots de marche.</li>
        <li>Garde le Warehouse amélioré en parallèle du reste : protège ce que tu ne peux pas encore dépenser.</li>
        <li>Retiens bien : les pertes dues à l'attaque (pas à la défense) n'ont aucun filet de sécurité de l'Enlistment Office.</li>
      </ul>
`
};
