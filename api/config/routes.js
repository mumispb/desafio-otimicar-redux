const express = require("express");
const ownerQuerys = require("../api/owner/ownerQuerys");
const carQuerys = require("../api/car/carQuerys");

module.exports = function(server) {
  //API Routes
  const router = express.Router();
  server.use("/api", router);

  //Registering API methods in router
  const ownerService = require("../api/owner/ownerService");
  ownerService.register(router, "/owners");
};

// require('../api/itens/ownerRoutes')(router, ownerQuerys);
