let fs = require("fs");
let Basic = require("./BasicCard.js");
let Cloze = require("./ClozeCard.js");

const express = require('express');
const app = express();
app.get('/', function (req, res) {
  fs.readFile("./index.html", null, function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("File not found!");
    } else {
      res.write(data);
    }
    res.end();
  });
  // res.send("<h1>Hello World</h1>");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});


let hi = new Basic("Question", "Answer");
console.log(hi);

let bye = new Cloze("George Washington was the first president of the United States", "George Washington");
console.log(bye);

// function hello(){
// return console.log(hello);
// }

// module.exports = hello;