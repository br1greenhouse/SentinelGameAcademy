/* Contenuto tradotto della pagina "Perché Sentinel" (sentinel.html).
   IMPORTANTE: mantenere i <div id="sentinel-cta">, <a id="privacy-link">
   e <a id="wall-link">, riempiti/collegati da script.js e dallo script
   inline della pagina dopo la sostituzione. */
var PAGE_I18N = {
  en: `
      <p class="hero-kicker">// presented by Sentinel Notification Radar</p>
      <h1>Why Sentinel</h1>
      <div class="hazard"></div>

      <p class="lead">In strategy games the decisive moment almost always comes when you're <strong>not looking at the screen</strong>: at night, at work, while the phone is on silent. Sentinel exists so you don't miss exactly those moments.</p>

      <h2>What Sentinel is</h2>
      <p><strong>Sentinel Notification Radar</strong> is an Android app that <strong>watches the notifications</strong> of the other apps on your phone. When a notification contains the words you chose, Sentinel fires a <strong>real alarm</strong> — ringtone, silent-mode bypass, custom audio or even a smart device — with the screen off and the phone muted.</p>
      <p>It's not a bot, it doesn't play for you and it doesn't touch your game account: it simply <strong>watches your back</strong> by listening to the notifications the game already sends you.</p>

      <h2>Why gamers need it</h2>
      <ul>
        <li><strong>City attacked at night:</strong> you wake up in time to raise your shield or pull your troops.</li>
        <li><strong>Rallies and alliance wars:</strong> you no longer arrive after it's over — you join when it starts.</li>
        <li><strong>Shield about to expire:</strong> you set a reminder you can't ignore.</li>
        <li><strong>Timed events:</strong> the alarm rings when the event opens, not an hour later.</li>
      </ul>

      <div class="box box-sentinel">
        <span class="box-title">// In practice</span>
        A <strong>monitoring card</strong> is a rule: pick the game app, the words to look for in the notification's <em>title</em> and/or <em>body</em>, and what should happen when it triggers. For free you can create up to <strong>3 cards</strong>.
      </div>

      <h2>Example: a card for Age of Origins</h2>
      <div class="table-wrap"><table>
        <tr><th>Field</th><th>Value</th></tr>
        <tr><td>App</td><td>Age of Z Origins</td></tr>
        <tr><td>Words in the title</td><td><code>attack</code> · <code>war</code> · <code>rally</code> (OR operator)</td></tr>
        <tr><td>Words in the body</td><td><code>your city</code> · <code>under attack</code> (AND operator)</td></tr>
        <tr><td>Action</td><td>Ringtone + silent-mode bypass</td></tr>
      </table></div>
      <p>Result: when your city is attacked, the phone rings like an alarm clock — even at 3 AM, even on silent.</p>

      <h2>Privacy</h2>
      <p>Sentinel processes <strong>everything locally</strong> on the device. No notification content, no keywords and no personal data are sent to external servers. Details in the <a id="privacy-link" href="#" target="_blank" rel="noopener">Privacy Policy</a>.</p>

      <!-- Blocco sponsor Sentinel (generato da script.js) -->
      <div id="sentinel-cta"></div>

      <h2>The community: Sentinel Wall</h2>
      <p>Want to see how other users configure Sentinel — for games, work and the smart home? The official board <a id="wall-link" href="#" target="_blank" rel="noopener">Sentinel Wall</a> gathers real setups to draw inspiration from, videos and detailed FAQs.</p>

      <div class="box box-prio">
        <span class="box-title">Tip</span>
        On some phones (Xiaomi, Huawei, Oppo, Vivo…) the system kills background apps to save battery, and alarms might not fire. Set Sentinel as "not optimized" / "auto-start". The Sentinel Wall FAQs explain the steps brand by brand.
      </div>
`,
  es: `
      <p class="hero-kicker">// presentado por Sentinel Notification Radar</p>
      <h1>Por qué Sentinel</h1>
      <div class="hazard"></div>

      <p class="lead">En los juegos estratégicos el momento decisivo llega casi siempre cuando <strong>no estás mirando la pantalla</strong>: de noche, en el trabajo, con el teléfono en silencio. Sentinel existe para que no pierdas justo esos momentos.</p>

      <h2>Qué es Sentinel</h2>
      <p><strong>Sentinel Notification Radar</strong> es una app Android que <strong>vigila las notificaciones</strong> de las demás apps del teléfono. Cuando una notificación contiene las palabras que elegiste, Sentinel dispara una <strong>alarma real</strong> — tono de llamada, salto del modo silencioso, audio personalizado o incluso un dispositivo smart — incluso con la pantalla apagada y el teléfono mudo.</p>
      <p>No es un bot, no juega por ti ni toca tu cuenta de juego: se limita a <strong>cuidarte las espaldas</strong> escuchando las notificaciones que el juego ya te envía.</p>

      <h2>Por qué lo necesitan los gamers</h2>
      <ul>
        <li><strong>Ciudad atacada de noche:</strong> te despiertas a tiempo para activar el escudo o llamar a las tropas.</li>
        <li><strong>Rallies y guerras de alianza:</strong> ya no llegas cuando todo terminó, te unes cuando empieza.</li>
        <li><strong>Escudo por caducar:</strong> pones un recordatorio que no puedes ignorar.</li>
        <li><strong>Eventos por tiempo:</strong> la alarma suena cuando abre el evento, no una hora después.</li>
      </ul>

      <div class="box box-sentinel">
        <span class="box-title">// En la práctica</span>
        Una <strong>ficha de monitoreo</strong> es una regla: eliges la app del juego, las palabras a buscar en el <em>título</em> y/o en el <em>cuerpo</em> de la notificación, y qué debe pasar cuando salta. Gratis puedes crear hasta <strong>3 fichas</strong>.
      </div>

      <h2>Ejemplo: una ficha para Age of Origins</h2>
      <div class="table-wrap"><table>
        <tr><th>Campo</th><th>Valor</th></tr>
        <tr><td>App</td><td>Age of Z Origins</td></tr>
        <tr><td>Palabras en el título</td><td><code>attack</code> · <code>war</code> · <code>rally</code> (operador OR)</td></tr>
        <tr><td>Palabras en el cuerpo</td><td><code>your city</code> · <code>under attack</code> (operador AND)</td></tr>
        <tr><td>Acción</td><td>Tono de llamada + salto del modo silencioso</td></tr>
      </table></div>
      <p>Resultado: cuando tu ciudad es atacada, el teléfono suena como un despertador — incluso a las 3 de la madrugada, incluso en silencio.</p>

      <h2>Privacidad</h2>
      <p>Sentinel procesa <strong>todo en local</strong> en el dispositivo. Ningún contenido de las notificaciones, ninguna palabra clave ni ningún dato personal se envía a servidores externos. Detalles en la <a id="privacy-link" href="#" target="_blank" rel="noopener">Política de Privacidad</a>.</p>

      <!-- Blocco sponsor Sentinel (generato da script.js) -->
      <div id="sentinel-cta"></div>

      <h2>La comunidad: Sentinel Wall</h2>
      <p>¿Quieres ver cómo configuran Sentinel otros usuarios — para juegos, trabajo y casa inteligente? La bacheca oficial <a id="wall-link" href="#" target="_blank" rel="noopener">Sentinel Wall</a> reúne configuraciones reales de las que inspirarte, vídeos y FAQ detalladas.</p>

      <div class="box box-prio">
        <span class="box-title">Consejo</span>
        En algunos teléfonos (Xiaomi, Huawei, Oppo, Vivo…) el sistema cierra las apps en segundo plano para ahorrar batería, y las alarmas podrían no saltar. Configura Sentinel como "no optimizada" / "inicio automático". Las FAQ de Sentinel Wall explican los pasos marca por marca.
      </div>
`
};
