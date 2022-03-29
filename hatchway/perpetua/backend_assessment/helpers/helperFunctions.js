const axios = require("axios");
const getPost = async (tag) => {
  try {
    const res = await axios.get(
      `https://api.hatchways.io/assessment/blog/posts?tag=${tag}`
    );
    return res;
  } catch (err) {
    console.error(err.message);
  }
};
// const params = { tags: "tech", sortBy: "time", direction: "asc" };
// const params = { tags: "health" };
// const tags = "tech";
// getPost(tags)
//   .then((data) => console.log(data.data))
//   .catch((err) => {
//     console.log(err.message);
//   });
module.exports = { getPost };
