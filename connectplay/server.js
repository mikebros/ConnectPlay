require("dotenv").config();

// server.js
// load the things we need
var express = require('express');
var expressLayouts = require('express-ejs-layouts');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 




// about page 

// app.listen(8080);
// console.log('8080 is the magic port');
// var express = require("express");
// var exphbs = require("express-handlebars");

var db = require("./models");


var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// // Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "'ejs'");

// // Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var syncOptions = { force: false };

// // If running a test, set syncOptions.force to true
// // clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// // Starting the server, syncing our models ------------------------------------/
//db.sequelize.sync(syncOptions).then(function () {
app.listen(PORT, function () {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT,
    PORT
  );
});
//});

module.exports = app;
