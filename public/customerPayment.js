$(function () {
    $("#returnToHomePage").on("click", function(event){
        event.preventDefault();
        window.location.href = "./index.html";
    });
});