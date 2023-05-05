const ModelPokemon = require("../models/pokemonModel.js");

class PokemonService {
  // constructor() {}

  async find() {
    const res = await ModelPokemon.find({});
    return res;
  }

  async findOne(id) {
    const res = await ModelPokemon.findById(id);
    return res;
  }

  async create(data) {
    const res = await ModelPokemon.create(data);
    return res;
  }

  async update(id, data) {
    const res = await ModelPokemon.findOneAndUpdate({ _id: id }, data);
    return res;
  }

  async delete(id) {
    const Model = await ModelPokemon.findById(id);
    await Model.deleteOne();
    return { deleted: true };
  }
}

module.exports = PokemonService;
