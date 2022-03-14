const allRecipies = (data) => {
  const recipies = [];
  for (const recipes in data) {
    for (const recipe of recipes) {
      if (recipe.name) {
        recipies.push(recipe.name);
      }
    }
  }
  return recipies;
};

module.exports = {
  allRecipies,
};
