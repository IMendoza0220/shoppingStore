// Show Cart
$(document).ready(function () {

    (function () {
        const cartInfo = document.getElementById('cart-info');
        const cart = document.getElementById('cart');
    
        cartInfo.addEventListener('click', function () {
            cart.classList.toggle('show-cart');
        });
    })();

    //collect items stored in local storage
    var parsedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    var totalCartItems = parsedCartItems.length;
    
    //Set blank array that will contain prices of parsed cart items
    var pricesArray = []
    for (i = 0; i < totalCartItems; i++) {
        pricesArray.push(parsedCartItems[i].price);
    }
    //use reduce method to calculate sum of the items stored in local storage
    var totalPrice = pricesArray.reduce((partial_sum, a) => partial_sum + a); 
    console.log(totalCartItems, totalPrice);  

});
