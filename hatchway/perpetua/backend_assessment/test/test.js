const chai = require("chai");
const request = require("supertest");
const expect = chai.expect;
const index = "../index.js";

describe("Posts", function () {
  describe("GET /api/ping", function () {
    it("should return 200 OK with sucess:true", async function () {
      const response = await request(index)
        .get("/api/ping")
        .expect(200)
        .expect("Content-Type", /json/);
    });
  });

  describe("GET /api/post", function () {
    it("should return 200 OK with posts.", async function () {
      const response = await request(index)
        .get("/api/post")
        .expect(200)
        .expect("Content-Type", /json/);
    });

    it("should return 400 with error: Tags parameter is required", async function () {
      const response = await request(index)
        .get("/api/post")
        .expect(400)
        .expect("Content-Type", /json/);
    });
    it("should return 400 with error: sortBy parameter was invalid.", async function () {
      const response = await request(index)
        .get("/api/post")
        .expect(400)
        .expect("Content-Type", /json/);
    });
    it("should return 400 with error: direction parameter was invalid.", async function () {
      const response = await request(index)
        .get("/api/post")
        .expect(400)
        .expect("Content-Type", /json/);
    });
  });
});
