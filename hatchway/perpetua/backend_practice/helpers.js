const data = require("./data.json");

const getAllRecipiesNames = (data) => {
  const recipieNames = [];
  for (const recipes in data) {
    for (const recipe of recipes) {
      if (recipe.name) {
        recipies.push(recipe.name);
      }
    }
  }
  return recipieNames;
};

console.log(getAllRecipiesNames(data, "data"));

// module.exports = {
//   getAllRecipiesNames,
// };
