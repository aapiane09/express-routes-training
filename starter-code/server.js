// SERVER-SIDE JAVASCRIPT
// run npm install to install all required packages before starting server

var express = require('express');
var app = express();
var targetNum;
var artworks = [
  {title : "Mona Lisa", artist : "Leonardo Da Vinci", description : "Renaissance painting of a woman"},
  {title : "The Great Wave off Kanagawa", artist : "Hokusai", description : "Ukiyo-e painting of a wave"},
  {title : "Starry Night", artist : "Vincent Van Gogh", description : "Impressionist painting of the sky"}
];

// MIDDLEWARE
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// Allow CORS:
// not necessary since we'll be making reqs from a js file
  // that we are also serving (as static assets in public)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ROUTES
app.get("/", function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('api/artworks' function (req, res){
  res.json(artworks);
});

app.post'api/artworks' (function artworksCreate(req, res){
  var title = req.body.title;
  var artist = req.body.artist;
  var desc = req.body.description;
  var newArtwork= { name : name, artist : artist, description : desc };
  // if we have a cities array in our app (pre-database):
  artists.push(newArtwork);
  res.json(artworks);
});


// app.


// Gallery View Route


// The Number Guessing Game
app.get('/pick-a-number', function pickANumber (req, res) {
  var number = parseInt(req.query.number);
  console.log(number);
  if (number > targetNum) {
    console.log("Too high!");
  }
  else if (number < targetNum) {
    console.log("Too low!");
  }
  else if (targetNum === number) {
    console.log("Nailed it!");
  }
  else {
    console.log("Error! Try again!");
  }
  res.send(number + " is a number!");
});

app.post('/pick-a-number', function(req, res){
  targetNum = parseInt(req.query.number);
  res.status(200).send('Number updated successfully!');
});

// Gallery


// SERVER START
var port = 3000;
app.listen(port, function(){
  console.log('Server Running at localhost:3000/');
});
