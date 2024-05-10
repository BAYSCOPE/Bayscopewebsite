

// array for calculating total price of items

let cartItems = [];
// update cart UI when page is loaded
window.onload = () => {
updateCartUI();
}

// Function to add an item to the cart

function addtocart(name, price) {


  request.showloader('adding item to cart')
  postdata = new FormData();
  postdata.append('service_name', name);
  postdata.append('amount', 1);
  postdata.append('price', price);

  request.sendRequest('POST', '/cart/add', postdata)
    .then(data => {
      request.succ(data);
      updateCartUI();
      // load(data);
      // further actions here
      toggleCart();
      console.log(data)

      //updateCartUI()
    })
    .catch((error) => {
      request.err(error)
    });
}

// Function to update the cart UI
// Function to update the cart UI
function updateCartUI() {
  const cartItemsContainer = document.querySelector('.cart-items');
  cartItemsContainer.innerHTML = '';

  // Send a request to the server to get the cart items
  request.sendRequest('GET', '/cart/show')
    .then((data) => {
      // Example of adding a delete button to each cart item
      data.cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
      <div class="cart-item-details">
        <p class="cart-item-title"><strong>Service:</strong> ${item.service_name}</p>
        <p class="cart-item-quantity"><strong>Quantity:</strong> ${item.amount}</p>
        <p class="cart-item-price"><strong>Price:</strong> $${item.price}</p>
      </div>
      <button onclick="removeFromCart(${item.id})" class="remove-item-btn"> <i style='color:black;' class="fa fa-trash"></i></button>
    `;
        cartItemsContainer.appendChild(itemElement);
        cartItems.push(item);
      });
    
       
      updateCartTotal(data);
    
     

    })


}

// Function to calculate and update the cart total
function updateCartTotal(data) {
 
  total = data.cartItems.reduce((acc, item) => acc + (item.price * item.amount), 0);
  document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;
}



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
 // Send a request to the server to remove the cart item
  request.showloader('removing item from cart')
  
  request.sendRequest('GET', `/cart/remove/${itemId}`,)
    .then((data) => {
      request.succ(data);
      updateCartUI();
      
    })
    .catch((error) => {
      request.err(error)
    });
}