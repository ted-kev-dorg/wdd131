// js/form-validation.js

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const checkoutForm = document.getElementById('checkout-form');

  function validateEmail(email) {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showError(input, message) {
    let errorElem = input.nextElementSibling;
    if (!errorElem || !errorElem.classList.contains('error-message')) {
      errorElem = document.createElement('div');
      errorElem.className = 'error-message';
      input.parentNode.insertBefore(errorElem, input.nextSibling);
    }
    errorElem.textContent = message;
  }

  function clearError(input) {
    let errorElem = input.nextElementSibling;
    if (errorElem && errorElem.classList.contains('error-message')) {
      errorElem.textContent = '';
    }
  }

  function validateForm(form) {
    let valid = true;

    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      clearError(input);
      if (input.hasAttribute('required') && input.value.trim() === '') {
        showError(input, 'This field is required.');
        valid = false;
      }
      if (input.type === 'email' && input.value) {
        if (!validateEmail(input.value)) {
          showError(input, 'Please enter a valid email address.');
          valid = false;
        }
      }
    });

    return valid;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm(contactForm)) {
        alert('Message sent successfully!');
        contactForm.reset();
      }
    });
  }

  if (checkoutForm) {
    checkoutForm.addEventListener('submit', e => {
      e.preventDefault();
      if (validateForm(checkoutForm)) {
        alert('Order submitted successfully!');
        checkoutForm.reset();
        localStorage.removeItem('cart');
        // Optionally redirect or show confirmation page here
      }
    });
  }
});
