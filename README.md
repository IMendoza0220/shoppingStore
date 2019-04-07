# HookahZone

## Description
Online store with hookah and shisha products. Sellers can add items to inventory. Users can add products to their cart and proceed to checkout.

## Technologies used
* MySQL
* Sequelize
* Express
* Node
* dinero-js

## Contributors
* Ivan Mendoza
* Taylor Gomez
* Sally Alwari
* Adrian Morales

## Using Existing Functionality
### Adding a product as a Seller
1. Click ```HookahZone``` from the far right from any page to return to the Home Page
2. Click ```Seller Login``` from the navigation bar
3. Add a Product Name and Department
4. The price is formatted by dinero js. See example below:
   ```10000 //returns $100.00 on the Home Page```
5. An image url must be entered in the ```Picture``` field, such as:
    ```https://images-na.ssl-images-amazon.com/images/I/81qSic03XeL._SY355_.jpg```
6. An alert will appear to confirm the product has been added to the database
7. Return to the Home Page to see your added product

### Shopping as a Buyer
1. Click ```Add to Cart``` to add an item to the shopping cart. Adding to cart saves items in Local Storage. Note: User may have to click more than once for the item to be added.
2. Click the Shopping Cart button on the top right to reveal the items in cart. Note: Increasing Quantity and Remove functionality will be added soon!
3. Click check out to proceed with payment page. No actual payment information is collected!
4. Complete Form and click ```Continue```. This will add information to the MySQL Database.
5. Name information is stored in local storage and rendered on the payment confirmation screen.

### Clearing the Shopping Cart
1. Navigate to Local Storage on your browser
2. Clear Local Storage

## Future Improvements
- [ ] Support Seller authentication 
- [ ] Reflect Seller inventory in stock
- [ ] Remove items and decrease item inventor as a Seller
- [ ] Allow Buyers to filter products by price, type, name/brand. 
- [ ] If a user clicks to buy multiple quantities of a given product, render the item once in the shopping cart html
- [ ] Support removing items on shopping cart html with mysql
- [ ] Support clearing all items in the shopping cart (e.g., shopping cart button and shopping cart html)
- [ ] Support adjusting quantities on shopping cart html with mysql
- [ ] Associate Buyers with their purchased items in the database
- [ ] Payment processing functionality using Stripe.js or PayPal integration
- [ ] Users receive email receipt confirming their purchase
- [ ] Convert currency between USD,CAN, MXN using dinero js