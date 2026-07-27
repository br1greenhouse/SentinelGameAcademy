/* Contenuto tradotto del capitolo — State of Survival / 17 Changelog.
   L'italiano resta inline nella pagina (sorgente). Qui vivono le altre
   lingue: chiave = codice lingua, valore = HTML del corpo di <article>.
   Lingue mancanti → EN → IT. Per una nuova lingua aggiungi una voce (es. de: `...`). */
var PAGE_I18N = {
  en: `
      <h1>Changelog</h1>
      <div class="hazard"></div>
      <p class="lead">Log of updates to the guide. Add a row at the top of the table for every change.</p>

      <div class="table-wrap"><table>
        <tr><th>Date</th><th>Section</th><th>Change description</th></tr>
        <tr><td>2026-07-27</td><td>All</td><td>First publication of the guide: 17 chapters, internal search, light/dark theme</td></tr>
      </table></div>

      <h2>How to log a change</h2>
      <ol>
        <li>Open <code>games/state-of-survival/17-changelog.html</code>.</li>
        <li>Add a <code>&lt;tr&gt;</code> row right below the header row, with date (YYYY-MM-DD), section, and a short description.</li>
        <li>Commit and push: GitHub Pages updates itself within a few minutes.</li>
      </ol>

      <div class="box box-nrc">
        <span class="box-title">Academy Tip</span>
        Update the changelog even for small changes: anyone consulting the guide needs to trust that it's current, especially in a game that updates as often as State of Survival (new heroes, new troop tiers and frequent balance passes).
      </div>
`,
  es: `
      <h1>Changelog</h1>
      <div class="hazard"></div>
      <p class="lead">Registro de actualizaciones de la guía. Añade una fila en la parte superior de la tabla por cada cambio.</p>

      <div class="table-wrap"><table>
        <tr><th>Fecha</th><th>Sección</th><th>Descripción del cambio</th></tr>
        <tr><td>2026-07-27</td><td>Todas</td><td>Primera publicación de la guía: 17 capítulos, búsqueda interna, tema claro/oscuro</td></tr>
      </table></div>

      <h2>Cómo registrar un cambio</h2>
      <ol>
        <li>Abre <code>games/state-of-survival/17-changelog.html</code>.</li>
        <li>Añade una fila <code>&lt;tr&gt;</code> justo debajo de la fila de encabezado, con fecha (AAAA-MM-DD), sección y una descripción breve.</li>
        <li>Haz commit y push: GitHub Pages se actualiza solo en pocos minutos.</li>
      </ol>

      <div class="box box-nrc">
        <span class="box-title">Consejo Academy</span>
        Actualiza el changelog incluso para cambios pequeños: quien consulte la guía necesita confiar en que está actualizada, especialmente en un juego que se actualiza tan a menudo como State of Survival (nuevos héroes, nuevos tiers de tropas y balances frecuentes).
      </div>
`,
  fr: `
      <h1>Changelog</h1>
      <div class="hazard"></div>
      <p class="lead">Journal des mises à jour du guide. Ajoute une ligne en haut du tableau pour chaque modification.</p>

      <div class="table-wrap"><table>
        <tr><th>Date</th><th>Section</th><th>Description du changement</th></tr>
        <tr><td>2026-07-27</td><td>Toutes</td><td>Première publication du guide : 17 chapitres, recherche interne, thème clair/sombre</td></tr>
      </table></div>

      <h2>Comment enregistrer un changement</h2>
      <ol>
        <li>Ouvre <code>games/state-of-survival/17-changelog.html</code>.</li>
        <li>Ajoute une ligne <code>&lt;tr&gt;</code> juste sous la ligne d'en-tête, avec la date (AAAA-MM-JJ), la section et une courte description.</li>
        <li>Fais un commit et un push : GitHub Pages se met à jour tout seul en quelques minutes.</li>
      </ol>

      <div class="box box-nrc">
        <span class="box-title">Conseil Academy</span>
        Mets à jour le changelog même pour les petits changements : quiconque consulte le guide doit pouvoir faire confiance à son actualité, surtout dans un jeu qui se met à jour aussi souvent que State of Survival (nouveaux héros, nouveaux tiers de troupes et équilibrages fréquents).
      </div>
`
};
