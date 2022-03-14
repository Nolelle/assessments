const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000 || process.env.PORT;
const {
  getAllRecipesNames,
  findRecipe,
  postNewRecipe,
  updateRecipe,
} = require("./helpers.js");
const data = require("./data.json");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.get("/recipes", async (req, res) => {
  try {
    const allRecipeNames = getAllRecipesNames(data);
    res.status(200).json({ recipeNames: allRecipeNames });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/recipes/details/:recipe", async (req, res) => {
  try {
    const recipeName = req.params.recipe;
    res.status(200).json(findRecipe(data, recipeName));
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/recipes", async (req, res) => {
  try {
    const newRecipe = req.body;
    const newRecipeName = req.body.name;
    const recipes = data.recipes;
    for (const recipe of recipes) {
      if (recipe.name === newRecipeName) {
        res.status(400).json({
          error: "Recipe already exists",
        });
      }
    }
    postNewRecipe(data, newRecipe);
    res.status(201).json();
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/recipes", async (req, res) => {
  try {
    const updatedRecipe = req.body;
    const updatedRecipeName = req.body.name;
    const recipes = data.recipes;
    for (const recipe of recipes) {
      if (recipe.name === updatedRecipeName) {
        updateRecipe(data, updatedRecipe);
        res.status(204).json();
      }
    }
    console.log(data.recipes);
    res.status(400).json({
      error: "Recipe does not exist",
    });
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
