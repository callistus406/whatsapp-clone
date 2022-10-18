const mongoose = require('mongoose');

// database connector
const connectDb = (url) => {
  return mongoose.connect(url);
  console.log('mongodb is connected');
};

module.exports = connectDb;
