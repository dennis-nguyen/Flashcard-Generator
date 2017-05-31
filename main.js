let Basic = require("./BasicCard.js");
let Cloze = require("./ClozeCard.js");
let express = require('express');
let path = require('path');
let app = express();
let fs = require("fs");

// Define the port to run on
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
let server = app.listen(app.get('port'), function() {
  let port = server.address().port;
  console.log('Magic happens on port ' + port);
});

let hi = new Basic("Question", "Answer");
console.log(hi);

let bye = new Cloze("George Washington was the first president of the United States", "George Washington");
console.log(bye);

let tempArray = [hi,bye];
console.log(tempArray);

app.get('/data',function(req, res) {
    res.json(tempArray);
});