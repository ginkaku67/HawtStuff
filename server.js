var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var tableReservations = [
  {
    customerName: "Sir Welington",
    customerPhone: "555-555-5555",
    email: "fancypants@gmail.com",
    customerID: "RichMan001"
  },
  {
    customerName: "Bob",
    customerPhone: "555-555-5555",
    email: "pooppauper@gmail.com",
    customerID: "Steamy Hams"
  }
];
//routes
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// Displays a single tableReservation, or returns false
app.get("/tables/:tableReservations", function(req, res) {
  var tabeel = req.params.tableReservations;
  console.log(tabeel);
  for (var i = 0; i < tableReservations.length; i++) {
    if (tabeel === tableReservations[i].customerID) {
      return res.json(tableReservations[i]);
    }
  }
  return res.json(false);
});
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newCharacter = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  console.log(newCharacter);
  characters.push(newCharacter);
  res.json(newCharacter);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
