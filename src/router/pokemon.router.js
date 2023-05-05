const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemon.controller.js");

router
  .get("/", pokemonController.get)
  .get("/:id", pokemonController.getById)
  .post("/", pokemonController.create)
  .put("/:id", pokemonController.update)
  .delete("/:id", pokemonController._delete);

module.exports = router;
