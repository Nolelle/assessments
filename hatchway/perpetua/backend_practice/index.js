const express = require("express");
const app = express();

app.get("/recipes", (req, res) => {
  res.status(200).json({
    recipeNames: ["scrambledEggs", "garlicPasta", "chai"],
  });
});

app.get("/recipes/details/:recipe", (rec, res) => {
  const recipeName = req.params.recipe;
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
