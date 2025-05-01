let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalAmountContainer = document.getElementById('total-amount');
  let cartItemsHTML = '';

  let totalAmount = 0;

  cart.forEach((item, index) => {
    cartItemsHTML += `<div class="cart-item">
                        <span>${item.name}</span>
                        <span>Rs${item.price.toFixed(2)}</span>
                        <span class="remove-btn" onclick="removeFromCart(${index})">Remove</span>
                      </div>`;
    totalAmount += item.price;
  });

  cartItemsContainer.innerHTML = cartItemsHTML;
  totalAmountContainer.textContent = `Total: Rs${totalAmount.toFixed(2)}`;
}