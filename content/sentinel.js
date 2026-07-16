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
`
};
