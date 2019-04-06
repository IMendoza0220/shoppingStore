// var Customer = require("../../db").Customer;
// var route = require("express").Router();


// route.get("/", function(req, res) {
//     //Get all Products; sequelize will fetch all products following a get request
//     Customer.findAll()
//     .then(function(customers) {
//         res.status(200).send(customers);
//     })
//     .catch(function(err) {
//         res.status(500).send({
//             error: "Could not  retrieve products"
//         });
//     });

// });

// route.post("/", function(req, res) {
//     //NOTE: Add customer form field validation
//     //Add a new customer
//     Customer.create({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         address1: req.body.address1,
//         address2: req.body.address2,
//         city: req.body.city,
//         state: req.body.state,
//         zip: req.body.zip
//     }).then(function(customer){
//         res.status(201).send(customer);
//     }).catch(function(err) {
//         res.status(501).send({
//             error: "Error adding customer"
//         });
//     });
// });

// exports = module.exports = route;