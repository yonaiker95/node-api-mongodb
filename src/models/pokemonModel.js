const mongoose = require("mongoose");
const pokemonSchema = new mongoose.Schema(
  {
    pok_id: {
      type: String,
    },
    pok_num: {
      type: String,
    },
    pok_nombre: {
      type: String,
    },
    pok_img: {
      type: String,
    },
    pok_tipo: {
      type: String,
    },
    pok_altura: {
      type: String,
    },
    pok_peso: {
      type: String,
    },
    pok_gif: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ModelPokemon = mongoose.model("pokemon", pokemonSchema);
module.exports = ModelPokemon;
