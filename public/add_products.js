$(function () {
    var productName = $("#productName");
    var productDepartment = $("#productDepartment");
    var productPrice = $("#productPrice");
    $("#btnProductAdd").click(function () {
        addProduct(
            productName.val(),
            productDepartment.val(),
            productPrice.val(),
            function (addedProduct) {
                alert("Added " + addedProduct.name + " to the database");
            }
        );
    });
});