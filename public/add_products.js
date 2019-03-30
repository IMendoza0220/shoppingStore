$(function () {
    var productName = $('#productName');
    var productDepartment = $('#productDepartment');
    var productPrice = $('#productPrice');
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