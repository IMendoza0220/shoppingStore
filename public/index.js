
$(function(){
    let productList = $('#product-list');
    fetchProductsCard(function(products){
        productList.empty();
        for (product of products){
            productList.append(createProductCard(product));
        }
    })
})