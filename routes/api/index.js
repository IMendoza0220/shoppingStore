var route = require("express").Router();

// route.use("/users", require("./users"));
route.use("/products", require("./products"));
//route.use("/customers", require("./customers"));

exports = module.exports = {
    route
};