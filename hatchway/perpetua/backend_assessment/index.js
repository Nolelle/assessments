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
    console.log(tags);
    console.log(sortBy);
    console.log(direction);

    //Check for invalid values for parameters
    if (!tags) {
      res.status(400).json({ error: "Tags parameter is required" });
    }
    if (
      sortBy !== "id" ||
      sortBy !== "reads" ||
      sortBy !== "likes" ||
      sortBy !== "popularity"
    ) {
      res.status(400).json({ error: "sortBy parameter is invalid" });
    }
    if (direction !== "asc" || direction !== "desc") {
      res.status(400).json({ error: "direction parameter is required" });
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
