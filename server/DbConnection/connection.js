const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect("mongodb://localhost/whatsapp-clone", () => {
    console.log("mongodb is connected"),
      (err) => {
        console.log(err);
      };
  });
};

module.exports = connection;
