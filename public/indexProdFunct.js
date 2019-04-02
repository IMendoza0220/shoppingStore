function fetchProducts(done) {
    $.get("/api/products", function (data) {
        done(data);
    });
}

function addProduct(name, department, price, picture, done) {
    $.post('/api/products', {
        name: name,
        department: department,
        price: price,
        picture: picture
    }, function (data) {
        done(data);
    }
    );
}

function fetchProduct(product) {
    //store this somewhere 
    console.log(product);
    $.get(`/api/products/${product.id}`, function(data) {
        console.log(data);
        var ids = [];
        localStorage.setItem("ids", [...ids, ...product.id])
    })
    
}

function createProductCard(product) {
    return $(`
    <div class="col-lg-3 col-md-3 m-2">
    <div class="card h-100 mt-3">
        <a href="#"><img class="card-img-top" src="${product.picture}" alt="${product.name}"></a>
        <div class="card-body">
            <h4 class="card-title product-name">${product.name}</h4>
            <h5 class="card-title product-price"><span>$</span>${product.price}</h5>
            <p class="card-text product-department">${product.department}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted" id="${product.id}" onclick="fetchProduct(this)"><button class="btn btn-primary">Add to Cart</button></small>
        </div>
    </div>
    </div>
    `);
}

function fetchCustomers(done) {
    $.get("/api/customers", function (data) {
        done(data);
    });
}

function addCustomer(firstName, lastName, address1, address2, city, state, zip, done) {
    $.post("api/customers", {
        firstName: firstName,
        lastName: lastName,
        address1: address1,
        address2: address2,
        city: city,
        state: state,
        zip: zip
    }, function (data) {
        done(data);
    }
    );
}

