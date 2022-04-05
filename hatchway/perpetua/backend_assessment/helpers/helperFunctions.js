const axios = require("axios");

const getPosts = async (tag, sortBy, direction) => {
  try {
    const tagsArray = tag.split(",");
    const requests = tagsArray.map((tag) =>
      axios.get(
        `https://api.hatchways.io/assessment/solution/posts?tags=${tag}&sortBy=${sortBy}&direction=${direction}`
      )
    );
    const results = await Promise.all(requests);
    const posts = results.map((ele) => ele.data.posts);
    const filteredPosts = [];
    const filteredPostsID = [];
    posts.forEach((ele) => {
      for (const obj of ele) {
        if (!filteredPostsID.includes(obj.id)) {
          filteredPosts.push(obj);
          filteredPostsID.push(obj.id);
        }
      }
    });
    if (direction === "asc") {
      filteredPosts.sort(function (a, b) {
        return a.sortBy - b.sortBy;
      });
    } else {
      filteredPosts.sort(function (a, b) {
        return b.sortBy - a.sortBy;
      });
    }
    console.log(filteredPosts);
    const finishedPosts = {};
    finishedPosts.posts = filteredPosts;
    return finishedPosts;
  } catch (err) {
    console.error(err.message);
  }
};

// const tags = "history,tech";
// const answer = getPosts(tags, "likes", "desc");
module.exports = { getPosts };
