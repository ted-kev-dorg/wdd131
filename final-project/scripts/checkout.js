document.addEventListener("DOMContentLoaded", function () {
  const checkoutForm = document.getElementById("checkout-form");
  const checkoutContent = document.getElementById("checkout-content");
  const successMessage = document.getElementById("success-message");
  const summaryList = document.getElementById("checkout-summary-list");
  const subtotalElem = document.getElementById("checkout-subtotal");
  const taxElem = document.getElementById("checkout-tax");
  const totalElem = document.getElementById("checkout-total");
  const TAX_RATE = 0.13;

  function getCartItems() {
    const cart = JSON.parse(localStorage.getItem("afrobasketCart")) || [];
    return cart;
  }

  function renderOrderSummary() {
    const cart = getCartItems();
    summaryList.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
      checkoutContent.innerHTML = `<h2>Your cart is empty.</h2><p>Please add items to your cart before checking out.</p><a href="index.html" class="btn back-to-home">Continue Shopping</a>`;
      return;
    }

    cart.forEach(item => {
      subtotal += item.price * item.quantity;
      const itemElement = document.createElement("div");
      itemElement.innerHTML = `
        <span>${item.name} (${item.quantity})</span>
        <span>$${(item.price * item.quantity).toFixed(2)}</span>
      `;
      summaryList.appendChild(itemElement);
    });

    const tax = subtotal * TAX_RATE;
    const total = subtotal + tax;
    subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    taxElem.textContent = `$${tax.toFixed(2)}`;
    totalElem.textContent = `$${total.toFixed(2)}`;
  }

  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(checkoutForm);
    const shippingDetails = Object.fromEntries(formData.entries());
    alert("Order placed with shipping details: " + JSON.stringify(shippingDetails));

    // Clear the cart from local storage
    localStorage.removeItem("afrobasketCart");

    // Hide the form and show the success message
    checkoutContent.style.display = "none";
    successMessage.style.display = "block";
  });

  renderOrderSummary();
});