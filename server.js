var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

//not sure what this does but it seems important
app.use(express.urlencoded({ extended: true }));
//to serve JSON data
app.use(express.json());
//to serve static files (background Image) with express
app.use(express.static("./app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});