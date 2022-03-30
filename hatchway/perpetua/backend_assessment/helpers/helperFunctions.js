const axios = require("axios");
const { request } = require("express");
const getPosts = async (tag, sortBy, direction) => {
  try {
    const tagsArray = tag.split(",");
    const requests = tagsArray.map((tag) =>
      axios.get(
        `https://api.hatchways.io/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`
      )
    );
    const results = await Promise.all(requests);
    const posts = results.map((ele) => ele.data.posts);
    const filteredPosts = [];
    const filteredPostsID = [];
    posts.forEach((ele) => {
      ele.forEach((ele2) => {
        if (!filteredPostsID.includes(ele2.id)) {
          filteredPosts.push(ele2);
          filteredPostsID.push(ele2.id);
        }
      });
    });
    console.log(filteredPosts);
    return filteredPosts;
  } catch (err) {
    console.error(err.message);
  }
};

const tags = "history,tech";
const answer = getPosts(tags);

module.exports = { getPosts };
