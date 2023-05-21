const express = require("express");

const pokemonRouter = require("./pokemon.router.js");
const oishisushiRouter = require("./oishisushi.router.js");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/pokemon", pokemonRouter);
  router.use("/oishisushi", oishisushiRouter);
}

module.exports = routerApi;
