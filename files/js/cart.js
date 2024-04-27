// Example cart item structure
let cartItems = [];

// Function to add an item to the cart
function addtocart(name, amount) {
    request.showloader('adding to cart')
   request.sendRequest('POST', '/cart/add', {item_name: name, amount: amount})
        .then((data) => {
             request.succ(data)   // further actions here
           })  
           .catch((error) =>{
               request.err(error)
           });
        }
   


// Function to update the cart UI
// Function to update the cart UI
function updateCartUI() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear current items
    // Example of adding a delete button to each cart item
cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <div class="cart-item-details">
        <p class="cart-item-title"><strong>Item:</strong> ${item.name}</p>
        <p class="cart-item-quantity"><strong>Quantity:</strong> ${item.quantity}</p>
        <p class="cart-item-price"><strong>Price:</strong> $${item.price}</p>
      </div>
      <button onclick="removeFromCart(${item.id})" class="remove-item-btn"> <i style='color:black;' class="fa fa-trash"></i></button>
    `;
    cartItemsContainer.appendChild(itemElement);
  });
    updateCartTotal();
  }

// Function to calculate and update the cart total
function updateCartTotal() {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
}

// Example of adding an item to the cart
// This function should be linked to your "Add to cart" button click event


// Toggle cart visibility
function toggleCart() {
  const cartSection = document.getElementById('cartSection');
  if (cartSection.style.right === '0px') {
    cartSection.style.right = '-500px';
  } else {
    cartSection.style.right = '0px';
  }
}

function removeFromCart(itemId) {
  // Logic to remove the item from the cart
  // This might involve filtering the cartItems array and updating the UI
  cartItems = cartItems.filter(item => item.id !== itemId);
  updateCartUI(); // Refresh the cart UI
}