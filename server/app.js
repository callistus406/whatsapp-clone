const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connection = require("./DbConnection/connection");
const routes = require("./Api");
const port = process.env.PORT || 3000;
// middleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routes);
connection();
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
