let Basic = require("./BasicCard.js");
let Cloze = require("./ClozeCard.js");
let express = require('express');
let path = require('path');
let app = express();

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

let q1 = new Basic("Which fictional city is the home of Batman?", "Gotham City");
let q2 = new Cloze("George Washington was the first president of the United States", "George Washington");
let q3 = new Cloze("Scooby Doo is crime-fighting cartoon dog that has the initals 'S.D.' on his collar.", "Scooby Doo");
let q4 = new Basic("What's the total number of dots on a pair of dice?", "42");
let q5 = new Basic("What is the name of the fairy in Peter Pan?", "Tinkerbell");
let q6 = new Cloze("In Greek mythology, Midas turned all that he touched into gold.", "Midas");

let tempArray = [q1,q2,q3,q4,q5,q6];

app.get('/data',function(req, res) {
    res.json(tempArray);
});