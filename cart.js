// Retrieve the cart items from localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Check if there are any items in the cart
if (cartItems && cartItems.length > 0) {
  var cartHTML = '';
  var total = 0;

  // Loop through each item in the cart
  cartItems.forEach(function(item) {
    // Add the item to the cart display
    cartHTML += `
      <div class="item-row">
        <div class="row">
          <div class="col-xs-6 text">${item.name}</div>
          <div class="col-xs-3 text right">R${item.price.toFixed(2)}</div>
          <div class="col-xs-3 right">
            <span>Qty: ${item.quantity}</span>
          </div>
        </div>
      </div>`;

    // Add the item total (price * quantity) to the overall total
    total += item.total;
  });

  // Display the cart items and total price
  document.getElementById('cartContent').innerHTML = cartHTML;
  document.getElementById('totalPrice').innerHTML = total.toFixed(2); // Show the total price in the format "Rxx.xx"
} else {
  // If the cart is empty
  document.getElementById('cartContent').innerHTML = '<p>Your cart is empty.</p>';
  document.getElementById('totalPrice').innerHTML = '0.00';
}

// Function to clear the cart
function clearCart() {
  // Clear the cart from localStorage
  localStorage.removeItem('cartItems');

  // Empty the cart content section
  document.getElementById('cartContent').innerHTML = '<p>Your cart is empty.</p>';
  document.getElementById('totalPrice').innerHTML = '0.00';
}
