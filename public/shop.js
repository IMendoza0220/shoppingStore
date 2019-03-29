function fetchProductsCard(done) {
    $.get('/api/products', function (data) {
        done(data);
    })
}

function addProduct(name, depart, price, done) {
    $.post('/api/products', {
            name: name,
            department: depart,
            price: price
        }, function (data) {
done(data)
        }

    )
}

function createProductCard(product) {
    return $(`<div class="col-4 card ml-1 p-1">
         <h4 class="product-name">${product.name}</h4>
        <div class="product-department">${product.department}</div>
        
        <div class="row">
            <div class="col m-3 p-3 ">
                <b>$ ${product.price}</b>
            </div>
            <button class="btn btn-primary m-3">Buy</button>
        </div>
</div>`)
}

