document.addEventListener("DOMContentLoaded", function () {
  const cartItemsContainer = document.getElementById("cart-items-container");
  const subtotalPriceElem = document.getElementById("subtotal-price");
  const taxPriceElem = document.getElementById("tax-price");
  const totalPriceElem = document.getElementById("total-price");
  const TAX_RATE = 0.10;

  function getCartItems() {
    const cart = JSON.parse(localStorage.getItem("afrobasketCart")) || [];
    return cart;
  }

  function saveCartItems(cart) {
    localStorage.setItem("afrobasketCart", JSON.stringify(cart));
  }

  function renderCart() {
    const cart = getCartItems();
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      updateSummary(0);
      return;
    }

    let subtotal = 0;

    cart.forEach(item => {
      subtotal += item.price * item.quantity;

      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
        </div>
        <div class="quantity-controls">
          <input type="number" value="${item.quantity}" min="1" data-product-id="${item.id}">
        </div>
        <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
        <button class="remove-item-btn" data-product-id="${item.id}">
          <i class="fas fa-trash"></i>
        </button>
      `;
      cartItemsContainer.appendChild(itemElement);
    });

    updateSummary(subtotal);
  }

  function updateSummary(subtotal) {
    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;

    subtotalPriceElem.textContent = `$${subtotal.toFixed(2)}`;
    taxPriceElem.textContent = `$${tax.toFixed(2)}`;
    totalPriceElem.textContent = `$${total.toFixed(2)}`;
  }

  // Event listener for quantity changes and removing items
  cartItemsContainer.addEventListener("change", (e) => {
    if (e.target.type === "number") {
      const productId = e.target.dataset.productId;
      const newQuantity = parseInt(e.target.value);
      
      let cart = getCartItems();
      const itemToUpdate = cart.find(item => item.id === productId);

      if (itemToUpdate && newQuantity > 0) {
        itemToUpdate.quantity = newQuantity;
        saveCartItems(cart);
        renderCart();
      }
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.closest(".remove-item-btn")) {
      const productId = e.target.closest(".remove-item-btn").dataset.productId;

      let cart = getCartItems();
      const updatedCart = cart.filter(item => item.id !== productId);
      
      saveCartItems(updatedCart);
      renderCart();
    }
  });

  renderCart();
});