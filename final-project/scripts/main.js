document.addEventListener("DOMContentLoaded", function () {
  // Update year in footer
  const year = new Date().getFullYear();
  document.getElementById("currentyear").textContent = year;

  // Set last modified date
  const lastModified = document.lastModified;
  const lastModifiedElem = document.getElementById("lastModified");
  if (lastModifiedElem) {
    lastModifiedElem.textContent = `Last Modified: ${lastModified}`;
  }

  // Elements
  const hamButton = document.getElementById("menu");
  const navigation = document.querySelector(".navigation");
  const logo = document.querySelector(".logo"); // Changed from #title to .logo

  // Toggle mobile menu
  hamButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open"); // show/hide nav
    hamButton.classList.toggle("open");                  // toggle hamburger icon

    if (logo) {
      logo.classList.toggle("hidden");                   // hide/show logo when menu toggled
    }

    // Update aria-expanded for accessibility
    hamButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when a nav link is clicked (mobile UX improvement)
  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (navigation.classList.contains("open")) {
        navigation.classList.remove("open");
        hamButton.classList.remove("open");
        if (logo) logo.classList.remove("hidden");
        hamButton.setAttribute("aria-expanded", "false");
      }
    });
  });

  // Hero slider setup
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  let slideInterval = setInterval(nextSlide, 5000);

  const nextBtn = document.querySelector('.arrow.right');
  const prevBtn = document.querySelector('.arrow.left');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Function to render product cards dynamically
  function renderProductCards(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      img.loading = "lazy";

      const title = document.createElement("h3");
      title.textContent = product.name;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = `$${product.price.toFixed(2)}`;

      const viewBtn = document.createElement("a");
      viewBtn.className = "btn view-btn";
      viewBtn.href = product.url;
      viewBtn.textContent = "View Product";

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(viewBtn);

      container.appendChild(card);
    });
  }

  // Sample featured products data
  const featuredProductsData = [
  { id: "cassava", name: "Frozen Cassava", price: 6.99, image: "../images/products/cassava.webp" },
  { id: "tilapia", name: "Whole Tilapia Fish", price: 10.50, image: "../images/products/tilapia.webp" },
  { id: "yam", name: "Puna Yam", price: 15.00, image: "../images/products/puna-yam.webp" },
  { id: "okra", name: "Frozen Okra", price: 5.25, image: "../images/products/okra.webp" },
  ];
  // const featuredProductsData = [
  //   {
  //     name: "African Yam Flour",
  //     price: 12.99,
  //     image: "../images/products/yam-flour.webp",
  //     url: "product-details.html?product=yam-flour"
  //   },
  //   {
  //     name: "Baobab Juice",
  //     price: 5.99,
  //     image: "../images/products/baobab-juice.webp",
  //     url: "product-details.html?product=baobab-juice"
  //   },
  //   {
  //     name: "Shea Butter",
  //     price: 8.5,
  //     image: "../images/products/shea-butter.webp",
  //     url: "product-details.html?product=shea-butter"
  //   },
  //   {
  //     name: "Spiced Tea Blend",
  //     price: 6.25,
  //     image: "../images/products/spiced-tea.webp",
  //     url: "product-details.html?product=spiced-tea"
  //   }
  // ];

  // Sample promo products data
  const promoProductsData = [
    {
      name: "Palm Oil",
      price: 9.99,
      image: "../images/products/palm-oil.webp",
      url: "product-details.html?product=palm-oil"
    },
    {
      name: "Coconut Candy",
      price: 4.5,
      image: "../images/products/coconut-candy.webp",
      url: "product-details.html?product=coconut-candy"
    },
    {
      name: "Chili Powder",
      price: 3.75,
      image: "../images/products/chili-powder.webp",
      url: "product-details.html?product=chili-powder"
    },
    {
      name: "Dried Fish",
      price: 11.0,
      image: "../images/products/dried-fish.webp",
      url: "product-details.html?product=dried-fish"
    }
  ];

  // Render product cards on page load
  renderProductCards("featured-products", featuredProductsData);
  renderProductCards("promo-products", promoProductsData);

  // Newsletter form handling
  const newsletterForm = document.getElementById("newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("newsletter-email");
      const email = emailInput.value.trim();

      // Simple email regex for validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
      }

      // Here you would typically send the email to your server/API
      alert(`Thank you for subscribing with ${email}!`);

      // Reset form after successful submission
      newsletterForm.reset();
    });
  }

  // --- New and improved logic for Category Pages ---
  function getCategoryKeyFromUrl() {
    const pathSegments = window.location.pathname.split('/');
    // The category name is the last part of the path, without the .html extension.
    // For a path like /category/fresh-frozen.html, this will return "fresh-frozen".
    const filename = pathSegments[pathSegments.length - 1];
    return filename.replace('.html', '');
  }

  const categoryKey = getCategoryKeyFromUrl();

  // The `allCategoryProducts` object must be defined in products.js and linked in your HTML.
  // Ensure the keys in this object match the filenames of your category pages (e.g., 'fresh-frozen', 'canned-goods').
  if (categoryKey && allCategoryProducts[categoryKey]) {
    const productsToRender = allCategoryProducts[categoryKey];
    const containerId = `${categoryKey}-products`;
    // Create the container element if it doesn't exist
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.className = 'product-grid';
      // Find where to append this new container. You might need to adjust this depending on your HTML.
      const mainContent = document.querySelector('main');
      mainContent.appendChild(container);
    }
    renderProductCards(containerId, productsToRender);
  }
  // --- End of new logic ---

  // --- All your other existing functions (like renderProductCards, addToCart, etc.) follow here. ---

  function renderProductCards(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = ""; // Clear existing content

    products.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.name;
      img.loading = "lazy";

      const title = document.createElement("h3");
      title.textContent = product.name;

      const price = document.createElement("p");
      price.className = "price";
      price.textContent = `$${product.price.toFixed(2)}`;

      const cartBtn = document.createElement("button");
      cartBtn.className = "btn view-btn add-to-cart-btn";
      cartBtn.textContent = "Add to Cart";
      cartBtn.setAttribute("data-product-id", product.id);

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(price);
      card.appendChild(cartBtn);

      container.appendChild(card);
    });
  }

  // Event listener for 'Add to Cart' buttons using event delegation
  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      const productId = e.target.getAttribute("data-product-id");
      const product = findProductById(productId);
      if (product) {
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
      }
    }
  });

  function findProductById(id) {
    for (const category in allCategoryProducts) {
      const found = allCategoryProducts[category].find(p => p.id === id);
      if (found) return found;
    }
    return null;
  }

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("afrobasketCart")) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("afrobasketCart", JSON.stringify(cart));
  }
});
