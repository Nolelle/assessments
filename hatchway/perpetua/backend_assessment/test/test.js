const chai = require("chai");
const request = require("supertest");
const chaiHttp = require("chai-http");
const should = chai.should;
const server = require("../index");
chai.use(chaiHttp);

describe("GET /api/ping", () => {
  it("should return 200 OK with sucess:true", (done) => {
    request(server)
      .get("/api/ping")
      .expect((res) => {
        res.body = { sucess: true };
      })
      .expect(200, done);
  });
});

describe("GET /api/posts", () => {
  it("should return ", (done) => {
    request(server)
      .get("/api/posts")
      .expect((res) => {
        res.body = { sucess: true };
      })
      .expect(200, done);
  });
});
