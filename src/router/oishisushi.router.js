const express = require("express");
const router = express.Router();
const oishisushiController = require("../controllers/oishisushi.controller.js");

router
  .get("/", oishisushiController.get)
  .get("/:id", oishisushiController.getById)
  .post("/", oishisushiController.create)
  .put("/:id", oishisushiController.update)
  .delete("/:id", oishisushiController._delete);

module.exports = router;
