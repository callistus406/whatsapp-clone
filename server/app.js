const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connect = require('./db/connect');
const routes = require('./Api');
const port = process.env.PORT || 3000;
// middleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', routes);

const start = async (url) => {
  try {
    await connect(process.env.MONGO_URI);
    console.log(`mongodb is connected`);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
