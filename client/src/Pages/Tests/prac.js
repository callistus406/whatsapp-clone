const done = true;

const buyMusic = new Promise((resolve, reject) => {
  if (done) {
    let msg = "here is your money";
    resolve(msg);
  } else {
    let msg = "i'm sorry i cant buy it now";
    reject(msg);
  }
});

function callPromise() {
  buyMusic
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const fs = require("fs");
// const path = require("p")
fs.open("/home/callistus/Desktop/ss", "r", (err, data) => {
  if (err) return console.log(err.message);
  console.log(data);
});
console.error("ytyt");
