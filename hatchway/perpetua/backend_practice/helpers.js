const data = require("./data.json");

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

// console.log(findRecipe(data, "garlicPasta"));

module.exports = {
  getAllRecipesNames,
  findRecipe,
};
