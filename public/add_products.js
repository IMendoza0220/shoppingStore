$(function () {
    let productName = $('#productName');
    let productDepartment = $('#productDepartment');
    let productPrice = $('#productPrice');
    $('#btnProductAdd').click(function () {
        addProduct(
            productName.val(),
            productDepartment.val(),
            productPrice.val(),
            function (addedProduct) {
                window.alert("Added " + addedProduct.name + "to Database")
            }
        )
    })
});