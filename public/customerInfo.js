$(function () {
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var address1 = $("#address");
    var address2 = $("#address2");
    var city = $("#address");
    var state = $("#state");
    var zip = $("#zip");
    $("#continue").on("click", function (event) {
        event.preventDefault();
        addCustomer(
            firstName.val(),
            lastName.val(),
            address1.val(),
            address2.val(),
            city.val(),
            state.val(),
            zip.val(),
            function (addedCustomer) {
                var customerNameArr = [addedCustomer.firstName, addedCustomer.lastName];
                localStorage.setItem("Full Name", JSON.stringify(customerNameArr));
                window.location.href = "./customerPayment.html";
            }
        );
    });
});