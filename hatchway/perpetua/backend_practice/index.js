const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000 || process.env.PORT;
const { getAllRecipiesNames } = require("./helpers.js");
const data = require("./data.json");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.get("/recipes", async (req, res) => {
  try {
    const allRecipieNames = getAllRecipiesNames(data);
    res.status(200).json({ recipeNames: allRecipieNames });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/recipes/details/:recipe", async (rec, res) => {
  try {
    const { recipeName } = req.params;
    res.status(200).json({});
  } catch (err) {
    console.err(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
