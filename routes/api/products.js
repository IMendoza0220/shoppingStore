var Product = require('../../db').Product

var route = require('express').Router()


route.get('/', function(req, res) {
    //Get all Products
    Product.findAll()
        .then(function(products) {
            res.status(200).send(products)
        })
        .catch(function(err) {
            res.status(500).send({
                error: "Could not  retrieve products"
            })
        })

})
route.post('/', function(req, res) {
    //Validate the values
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    //Add a new Product
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then(function(product){
        res.status(201).send(product)
    }).catch(function(error) {
        res.status(501).send({
            error: "Error adding product"
        })
    })
})

exports = module.exports = route