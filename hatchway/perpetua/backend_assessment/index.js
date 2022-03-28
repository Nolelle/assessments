const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000 || process.env.PORT;

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.get("/recipes", async (req, res) => {
  try {
    res.status(200).json();
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/recipes/details/:recipe", async (req, res) => {
  try {
    res.status(200).json(findRecipe(data, recipeName));
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/recipes", async (req, res) => {
  try {
    res.status(400).json();
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/recipes", async (req, res) => {
  try {
    res.status(204).json();
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
