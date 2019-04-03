// Show Cart
//var parsedCartItems;

$(document).ready(function () {

    // (function () {
    //     const cartInfo = document.getElementById('cart-info');
    //     const cart = document.getElementById('cart');

    //     cartInfo.addEventListener('click', function () {
    //         cart.classList.toggle('show-cart');
    //     });
    // })();

    //collect items stored in local storage

    cartItems = JSON.parse(localStorage.getItem("cartItems")) || cartItems;
    console.log(cartItems);
    let price = calculatePrice(cartItems);
    console.log(price, 'price of cart');


    for (var i = 0; i < cartItems.length; i++) {
        $("#cartBody").append(`
        <tr>
                        <td>Item 1 Image</td>
                        <td>
                            <a href="#">${cartItems[i].name}</a>
                            <p>Product Department</p>
                            <button class="btn btn-danger btn-sm">Remove</button>
                        </td>
                        <td>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon03">-</button>
                                </div>
                                    <input class="text-center" type="text" maxlength="3" size="1">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">+</button>
                                </div>
                            </div>
                        </td>
                        <td><span class="currency">$<span class="amount">100</span></span></td>
                      </tr>
        `)
    }

// returns a Dinero object with amount 600
const rates = {
    rates: {
      EUR: 0.81162
    }
  }
  
  const money= Dinero({ amount: 500 })
    .convert('EUR', {
      endpoint: new Promise(resolve => resolve(rates))
    })
    console.log(money);
});
