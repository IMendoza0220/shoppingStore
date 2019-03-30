function fetchProducts(done) {
    $.get("/api/products", function (data) {
        done(data);
    });
}

function addProduct(name, department, price, done) {
    $.post('/api/products', {
            name: name,
            department: department,
            price: price
        }, function (data) {
            done(data);
        }
    );
}

function createProductCard(product) {
    return $(`
    <div class="col-4 card mx-2 mb-2 p-1">
         <h4 class="product-name">${product.name}</h4>
        <div><b class="product-department">${product.department}</b></div>
        <div class="row">
        <br>
        <div class="row">
            <div class="col m-3 p-3">
                <b class="product-price">$ ${product.price}</b>
            </div>
        </div>
        <div class="col-6">
            <button class="btn btn-primary">Buy</button>
        </div>
    </div>
    `);
}
