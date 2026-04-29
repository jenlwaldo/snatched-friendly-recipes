// Renders the index page (list of recipes) and the recipe detail page.
// Single file does both, branching on which container exists in the DOM.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function macroChip(num, unit, label) {
  return `<span class="macro"><strong>${num}</strong><span class="unit">${unit}</span> ${label}</span>`;
}

function renderIndex(container) {
  const html = recipes.map(r => {
    const n = r.nutrition;
    return `
      <li>
        <a class="recipe-card" href="recipe.html?r=${encodeURIComponent(r.slug)}">
          <span class="eyebrow">${escapeHtml(r.category || "Recipe")}</span>
          <h2>${escapeHtml(r.title.replace(/^Snatched-Friendly\s*/i, ""))}</h2>
          <div class="macros-row">
            ${macroChip(n.calories, "", "cal")}
            ${macroChip(n.protein, "g", "protein")}
            ${macroChip(n.fat, "g", "fat")}
            ${macroChip(n.carbs, "g", "carbs")}
          </div>
        </a>
      </li>
    `;
  }).join("");
  container.innerHTML = html;
}

function renderRecipe(container) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("r");
  const recipe = recipes.find(r => r.slug === slug);

  if (!recipe) {
    container.innerHTML = `
      <a class="back-link" href="index.html">&larr; All recipes</a>
      <h1>Recipe not found</h1>
      <p>That recipe doesn't exist. <a href="index.html">Head back to the list.</a></p>
    `;
    return;
  }

  document.title = `${recipe.title} — Snatched-Friendly Recipes`;

  const n = recipe.nutrition;

  const sectionsHtml = recipe.sections.map(sec => {
    const items = sec.ingredients.map(i => `<li>${escapeHtml(i)}</li>`).join("");
    const showHeader = recipe.sections.length > 1 || sec.name.toLowerCase() !== "ingredients";
    const header = showHeader ? `<h3 class="subsection">${escapeHtml(sec.name)}</h3>` : "";
    return `${header}<ul class="ingredients">${items}</ul>`;
  }).join("");

  const stepsHtml = recipe.instructions.map(s => `<li>${escapeHtml(s)}</li>`).join("");

  const notesHtml = recipe.notes
    ? `<div class="notes">${escapeHtml(recipe.notes)}</div>`
    : "";

  container.innerHTML = `
    <a class="back-link" href="index.html">&larr; All recipes</a>
    <div class="recipe-header">
      <span class="eyebrow">${escapeHtml(recipe.category || "Recipe")}</span>
      <h1>${escapeHtml(recipe.title)}</h1>
      <p class="serves">Serves ${recipe.serves}</p>
    </div>

    <div class="macros-block">
      <div class="stat"><span class="num">${n.calories}</span><span class="label">Calories</span></div>
      <div class="stat"><span class="num">${n.protein}g</span><span class="label">Protein</span></div>
      <div class="stat"><span class="num">${n.fat}g</span><span class="label">Fat</span></div>
      <div class="stat"><span class="num">${n.carbs}g</span><span class="label">Carbs</span></div>
    </div>

    <h2 class="section">Ingredients</h2>
    ${sectionsHtml}

    <h2 class="section">Instructions</h2>
    <ol class="steps">${stepsHtml}</ol>

    ${notesHtml}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const indexEl = document.getElementById("recipe-list");
  const recipeEl = document.getElementById("recipe");
  if (indexEl) renderIndex(indexEl);
  if (recipeEl) renderRecipe(recipeEl);
});
