// Retrieve cart items from localStorage
var cartItems = JSON.parse(localStorage.getItem('cartItems'));

// Display cart items for review
if (cartItems && cartItems.length > 0) {
  var checkoutHTML = '';
  var total = 0;

  // Loop through the cart items and display them
  cartItems.forEach(function(item) {
    checkoutHTML += `
      <div class="item-row">
        <div class="row">
          <div class="col-xs-6 text">${item.name}</div>
          <div class="col-xs-3 text right">R${item.price.toFixed(2)}</div>
          <div class="col-xs-3 right">
            <span>Qty: ${item.quantity}</span>
          </div>
        </div>
      </div>`;

    // Calculate the total price
    total += item.total;
  });

  // Display cart items and the total price
  document.getElementById('checkoutContent').innerHTML = checkoutHTML;
  document.getElementById('totalPrice').innerHTML = total.toFixed(2);
} else {
  // If the cart is empty
  document.getElementById('checkoutContent').innerHTML = '<p>Your cart is empty.</p>';
}

// Handle the form submission (Place Order)
document.getElementById('shippingForm').addEventListener('submit', function(e) {
  e.preventDefault();  // Prevent the form from submitting if invalid

  // Check if the form is valid
  if (this.checkValidity()) {
    // Get the shipping information
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postal = document.getElementById('postal').value;
    var phone = document.getElementById('phone').value;

    // Here, you would typically process the order (e.g., send to server)
    alert('Order placed successfully!');

    // Optionally clear the cart
    localStorage.removeItem('cartItems');

    // Redirect to a confirmation or thank you page
    window.location.href = 'thankyou.html';  // Redirect to a thank-you page
  } else {
    // If the form is invalid, show an alert (you can enhance this with custom messages)
    alert('Please fill out all fields correctly.');
  }
});
