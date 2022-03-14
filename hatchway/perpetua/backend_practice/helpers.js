const data = require("./data.json");
const newItem = {
  name: "butteredBagel",
  ingredients: ["1 bagel", "butter"],
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

// console.log(postNewRecipe(data, newItem));
// postNewRecipe(data, newItem);
module.exports = {
  getAllRecipesNames,
  findRecipe,
  postNewRecipe,
};
