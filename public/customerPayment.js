$(function () {
    var storedName = JSON.parse(localStorage.getItem("Full Name"));
    console.log(storedName.join(" "));
    $("#customerName").text(storedName.join(" "));
    $("#returnToHomePage").on("click", function(event){
        event.preventDefault();
        window.location.href = "./index.html";
        localStorage.clear();
    });
});