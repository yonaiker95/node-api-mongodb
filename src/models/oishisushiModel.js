const mongoose = require("mongoose");
const oishisushiSchema = new mongoose.Schema(
  {
    oishi_name: {
      type: String,
    },
    oishi_price: {
      type: String,
    },
    oishi_description: {
      type: String,
    },
    oishi_img: {
      type: String,
    },
    oishi_tipo: {
      type: String,
    },
    oishi_amount: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ModelOishiSushi = mongoose.model("oishisushi", oishisushiSchema);
module.exports = ModelOishiSushi;
