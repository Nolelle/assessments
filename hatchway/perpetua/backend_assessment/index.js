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
    const { tags, sortBy, direction } = req.query;
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
