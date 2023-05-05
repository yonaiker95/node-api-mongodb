const express = require("express");

const pokemonRouter = require("./pokemon.router.js");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/pokemon", pokemonRouter);
}

module.exports = routerApi;
