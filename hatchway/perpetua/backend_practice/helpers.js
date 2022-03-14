const data = require("./data.json");
const newItem = {
  name: "butteredBagel",
  ingredients: ["1 bagel", "butter"],
  instructions: ["cut the bagel", "spread butter on bagel"],
};
const updatedItem = {
  name: "butteredBagel",
  ingredients: ["1 bagel", "2 tbsp butter"],
  instructions: ["cut the bagel", "spread butter on bagel"],
};

const getAllRecipesNames = (data) => {
  const recipeNames = [];
  const recipes = data.recipes;
  for (let recipe of recipes) {
    recipeNames.push(recipe.name);
  }
  return recipeNames;
};

const findRecipe = (data, name) => {
  const content = { details: {} };
  const empty = {};
  const recipes = data.recipes;
  for (let recipe of recipes) {
    if (recipe.name === name) {
      content.details.ingredients = recipe.ingredients;
      const instructionCount = recipe.instructions.length;
      content.details.numSteps = instructionCount;
      return content;
    }
  }
  return empty;
};

const postNewRecipe = (data, recipe) => {
  const recipes = data.recipes;
  recipes.push(recipe);
};

const updateRecipe = (data, updatedRecipe) => {
  const recipes = data.recipes;
  for (let recipe of recipes) {
    if (recipe.name === updatedRecipe.name) {
      recipe.ingredients = updatedRecipe.ingredients;
      recipe.instructions = updatedRecipe.instructions;
    }
  }
};

// postNewRecipe(data, newItem);
// updateRecipe(data, updatedItem);

module.exports = {
  getAllRecipesNames,
  findRecipe,
  postNewRecipe,
  updateRecipe,
};
