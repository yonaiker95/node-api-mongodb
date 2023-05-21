const ModelOishiSushi = require("../models/oishisushiModel.js");

class OishiSushiService {
  // constructor() {}

  async find() {
    const res = await ModelOishiSushi.find({});
    return res;
  }

  async findOne(id) {
    const res = await ModelOishiSushi.findById(id);
    return res;
  }

  async create(data) {
    const res = await ModelOishiSushi.create(data);
    return res;
  }

  async update(id, data) {
    const res = await ModelOishiSushi.findOneAndUpdate({ _id: id }, data);
    return res;
  }

  async delete(id) {
    const Model = await ModelOishiSushi.findById(id);
    await Model.deleteOne();
    return { deleted: true };
  }
}

module.exports = OishiSushiService;
