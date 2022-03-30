const axios = require("axios");
const getPosts = async (tag) => {
  try {
    const tagsArray = tag.split(",");
    const requests = tagsArray.map((tag) => {
      axios.get(`https://api.hatchways.io/assessment/blog/posts?tag=${tag}`);
    });
    const results = await Promise.all(requests);
    return results;
  } catch (err) {
    console.error(err.message);
  }
};

const tags = "tech,health,science";

getPosts(tags)
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err.message);
  });

module.exports = { getPosts };
