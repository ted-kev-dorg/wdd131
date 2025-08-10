document.addEventListener("DOMContentLoaded", function () {
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();
          alert("Thank you for your message! We will get back to you shortly.");
          contactForm.reset();
        });
      }
    });