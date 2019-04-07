// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/api/products", function(req, res) {
        //Get all Products; sequelize will fetch all products following a get request
        db.Product.findAll()
        .then(function(products) {
            res.status(200).send(products);
        })
        .catch(function(err) {
            res.status(500).send({
                error: "Could not  retrieve products"
            });
        });
    
    });
    
    app.post("/api/products", function(req, res) {
        //Validate the values and reject if not a number
        if (isNaN(req.body.price)) {
            return res.status(403).send({
                error: "Price is not valid number"
            });
        }
        //Add a new Product
        db.Product.create({
            name: req.body.name,
            department: req.body.department,
            price: parseFloat(req.body.price),
            picture: req.body.picture  
        }).then(function(product){
            res.status(201).send(product);
        }).catch(function(err) {
            res.status(501).send({
                error: "Error adding product"
            });
        });
    });
    
    app.get("/api/products/:id", function(req, res) {
        var numberId = parseInt(req.params.id);
    
        console.log(typeof numberId);
        //Get all Products; sequelize will fetch all products following a get request
        db.Product.findOne({
            where: {
                id: numberId
            }
        })
        .then(function(products) {
            res.status(200).send(products);
        })
        .catch(function(err) {
            res.status(500).send({
                error: "Could not  retrieve products"
            });
        });
    
    });
    
    app.get("/api/customers", function(req, res) {
        //Get all Products; sequelize will fetch all products following a get request
        db.Customer.findAll()
        .then(function(customers) {
            res.status(200).send(customers);
        })
        .catch(function(err) {
            res.status(500).send({
                error: "Could not  retrieve products"
            });
        });
    
    });
    
    app.post("/api/customers", function(req, res) {
        //NOTE: Add customer form field validation
        //Add a new customer
        db.Customer.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        }).then(function(customer){
            res.status(201).send(customer);
        }).catch(function(err) {
            res.status(501).send({
                error: "Error adding customer"
            });
        });
    });
    app.get("/api/users", function(req, res)  {
        //we want to send array of all users
        //from our database here
        db.User.findAll()
            .then(function(users) {
                res.status(200).send(users);
            })
            .catch(function(err) {
                res.status(500).send({
                    error: "Could not retrieve users"
                });
            });
    });
    
    app.post("/api/users", function(req, res) {
        db.User.create({
            //we expect  the req to  have name in it as it cannot be null per db.js
            //we will create new user
            name: req.body.name
        }).then(function(user)  {
            res.status(201).send(user);
        }).catch(function(err){
            res.status(501).send({
                error: "Could not add new user"
            });
        });
    });
    
};