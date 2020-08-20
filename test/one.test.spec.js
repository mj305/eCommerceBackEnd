const expect = require("chai").expect;
const request = require("request");

it("Main page content", function (done) {
  request("http://localhost:4000", function (error, response, body) {
    /*  expect(body).to.equal('Hello World'); */
    expect(response.statusCode).to.equal(201);
    done();
  });
});
m;
