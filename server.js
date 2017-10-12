//get express module
var express = require("express");
//get path
var path = require("path");

//Define arrays
var reservations = [];
var waitlist = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Listen to the Express App
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

// Sets up the Express Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/makereservation", function(req, res) {
  res.sendFile(path.join(__dirname, "makeReservation.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  for (var i = 0; i < reservations.length; i++) {
      return res.json(reservations);``
  }
});

app.get("/api/waitlist", function(req, res) {
  for (var i = 0; i < waitlist.length; i++) {
      return res.json(waitlist);
  }
});

// Reservation (DATA)
// =============================================================
var reservations = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];

$("#viewTable").on("click", function() {
  $.get("/api/", function(data) {
    console.log(data);
    if (data) {
      $("#reserved").append("<div class='card'><h4 class='card-header'>"data.name"</h4></div>");
      $("#wait").append("<div class='card'><h4 class='card-header'>"data.name"</h4></div>");
    }
    else {
      $("#reserved").text("No Current Reservations");
    }
  });
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  characters.push(newcharacter);

  res.json(newcharacter);
});