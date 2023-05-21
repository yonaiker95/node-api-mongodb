const mongoose = require("mongoose");
const dotenv =require('dotenv').config

const connectDB = async () => {
  await mongoose.connect(
    process.env.MONGODB_URI,)
    .then(() => console.log('Connected!'))
    .catch((err)=>{console.error(err);})
  
};
module.exports = connectDB;
