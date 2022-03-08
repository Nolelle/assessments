const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 3000;
const { findRecipeName } = require("./helpers.js");

//middleware
app.use(morgan("dev"));

//routes
app.get("/recipes", (req, res) => {
  res.status(200).json({
    recipeNames: ["scrambledEggs", "garlicPasta", "chai"],
  });
});

app.get("/recipes/details/:recipe", (rec, res) => {
  const recipeName = req.params.recipe;

  res.status(200).json({});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
