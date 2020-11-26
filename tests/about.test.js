const express = require("express");
const request = require("supertest");
const expect = require("chai").expect;

const app = express();

app.get("/about", (err, res) => {
  res.status(200).json({ ok: "response" });
});

describe("about page test", () => {
  //
  it("check for ok response", () => {
    request(app)
      .get("/about")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });

  //
  it("mocky check for ok response", (done) => {
    request("https://run.mocky.io/v3")
      .get("/86a3fbdf-0d69-4da4-aff8-89d392a9603d") //
      .expect(200, done);
  });
});
