module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    app.get("/customerPayment", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/customerPayment.html"));
    });
  
    app.get("/customerPayment", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/customerPayment.html"));
    });

    app.get("/customerInfo", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/customerInfo.html"));
    });

    app.get("/add_products", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add_products.html"));
    });
  
  };