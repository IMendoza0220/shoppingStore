var express = require("express");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
require('dotenv').config()
//setup express app to handle data parsing from post requests in db.js
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//render homepage
app.use("/", express.static(path.join(__dirname,"public")));
//when using require('x') method, the file called JS attempt to locate x.js, x.json, x.index.js file 
//routes for /api/users and /api/products
//to create users, use postman to make a post request at /api/users
app.use("/api", require("./routes/api").route);

module.exports = app.listen(PORT, function(){console.log(`Server started at http://localhost:${PORT}`)});