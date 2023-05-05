const express = require("express");
const displayRoutes = require("express-routemap");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./libs/mongoose");

dotenv.config();
const app = express();

const routerApi = require('./router');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

routerApi(app);

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`API RUNNING ON PORT ${PORT}`);
});

connectDB();
