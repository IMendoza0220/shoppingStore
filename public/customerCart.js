// Show Cart
//var parsedCartItems;

$(document).ready(function () {

    (function () {
        const cartInfo = document.getElementById('cart-info');
        const cart = document.getElementById('cart');
    
        cartInfo.addEventListener('click', function () {
            cart.classList.toggle('show-cart');
        });
    })();

    //collect items stored in local storage

    cartItems = JSON.parse(localStorage.getItem("cartItems")) || cartItems; 
    let price = calculatePrice(cartItems);
    console.log(price, 'price of cart');
    
  
    

});
