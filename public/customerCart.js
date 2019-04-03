
$(document).ready(function () {

    cartItems = JSON.parse(localStorage.getItem("cartItems")) || cartItems;
    //console.log(cartItems);
    var price = calculatePrice(cartItems);
    //console.log(price, 'price of cart');
    for (var i = 0; i < cartItems.length; i++) {
        $("#cartBody").append(`
        <tr>
            <td><img src=${cartItems[i].picture}></td>
            <td>
                <a href="#">${cartItems[i].name}</a>
                <p>${cartItems[i].department}</p>
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
            <td><span class="currency"><span class="amount">${Dinero({ amount:cartItems[i].price, currency: 'USD' }).toFormat('$0.00')}</span></span></td>
        </tr>
        `);

    }
    if (cartItems.length === 0) {
        $("#cart-info").html(`
            <span class="cart-info__icon mr-lg-3"><i class="fa fa-shopping-cart"></i></span>
            <p class="mb-0 text-capitalize"><span id="item-count">0</span> items - <span id="item-total">$0</span>
            </p>
    `);
    } else {
        $("#cart-info").html(`
            <span class="cart-info__icon mr-lg-3"><i class="fa fa-shopping-cart"></i></span>
            <p class="mb-0 text-capitalize">
            <span id="item-count">${cartItems.length}</span> items - <span id="item-total">${Dinero({ amount: price, currency: 'USD' }).toFormat('$0.00')}</span>
            </p>
        `);
    }

    if (cartItems.length === 0) {
        $("#total-price").html(`
          <h3>$0</h3>
        `);
    } else {
        $("#total-price").html(`
        <h3> Total: ${Dinero({ amount: price, currency: 'USD' }).toFormat('$0.00')}</h3>
      `);
    }


});
