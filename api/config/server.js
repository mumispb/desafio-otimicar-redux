const port = 4000;
//BODY parse of requistion
const bodyParser = require("body-parser");
const express = require("express");
const server = express();
var methodOverride = require("method-override");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(methodOverride("X-HTTP-Method-Override"));

server.listen(process.env.PORT || port, function() {
  console.log("Listening on " + port);
});

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();
});

server.get("/", function(req, res, next) {
  // Handle the get for this route
});

server.post("/", function(req, res, next) {
  // Handle the post for this route
});

server.delete("/", function(req, res, next) {
  // Handle the post for this route
});

module.exports = server;
