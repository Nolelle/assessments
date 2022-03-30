const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const PORT = 3000 || process.env.PORT;
const { getPost } = require("./helpers/helperFunctions");

//middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.get("/api/ping", async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const tags = req.query.tags;
    //Take on default value of id and asc if sortBy and direction values are undefined/empty
    const sortBy = req.query.sortBy || "id";
    const direction = req.query.direction || "asc";
    const directionValuesArray = ["asc", "desc"];
    const sortByValuesArray = ["id", "reads", "popularity", "likes"];
    console.log(tags);
    console.log(sortBy);
    console.log(direction);
    const checkSortBy = sortByValuesArray.some((string) => string === sortBy);
    const checkDirection = directionValuesArray.some(
      (string) => string === direction
    );

    if (!tags) {
      res.status(400).json({ error: "Tags parameter is required" });
    }
    //Check if sortBy and direction have valid parameters
    if (!checkSortBy) {
      res.status(400).json({ error: "sortBy parameter is invalid" });
    }
    if (!checkDirection) {
      res.status(400).json({ error: "direction parameter is invalid" });
    }

    const data = await getPost(tags);
    const posts = data.data;
    res.status(200).json(posts);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
