// Show Cart
$(document).ready(function () {


    (function () {
        const cartInfo = document.getElementById('cart-info');
        const cart = document.getElementById('cart');

        cartInfo.addEventListener('click', function () {
            cart.classList.toggle('show-cart');
        });
    })();

    // add items to the cart

    (function () {

        const cartBtn = document.querySelectorAll('#product-list');


        cartBtn.addEventListener("click", function (event) {

            console.log(event.target);
            console.log(event.target.nodeName);
            if (event.target.nodeName === "BUTTON") {
                console.log("hello")
            }

            // if(event.target.parentElement.classList.contains('mybtn')){
            //     console.log(this);
            // }

            // });
        });


    })();

});