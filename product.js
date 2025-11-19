// Function to add item to the cart
function addItemToCart(id, name, price) {
  // Get the quantity input value
  var quantity = parseInt(document.getElementById("quantity-" + id).value);

  // Validate quantity (must be a positive number)
  if (quantity <= 0 || isNaN(quantity)) {
    alert("Please select a valid quantity.");
    return;
  }

  // Create the item object, including quantity
  var item = {
    id: id,
    name: name,
    price: price,
    quantity: quantity,
    total: price * quantity  // Calculate the total price based on quantity
  };

  // Retrieve existing cart items from localStorage (or initialize an empty array)
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if the item is already in the cart
  var existingItem = cartItems.find(item => item.id === id);

  if (existingItem) {
    // If the item is already in the cart, update its quantity and total price
    existingItem.quantity += quantity;
    existingItem.total = existingItem.price * existingItem.quantity;
  } else {
    // Otherwise, add the new item to the cart
    cartItems.push(item);
  }

  // Save the updated cart back to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart count in the navbar
  updateCartCount();

  // Redirect to the cart page
  window.location.href = 'cart.html';  // This should immediately redirect
}

// Function to update the cart count in the navbar
function updateCartCount() {
  // Retrieve cart items from localStorage
  var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Calculate the total number of items in the cart
  var itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Update the cart count in the navbar
  document.getElementById("itemCount").textContent = itemCount;

  // Update the cart button title to reflect the total items count
  document.getElementById("cartButton").title = `View Shopping Cart - ${itemCount} Items`;
}
