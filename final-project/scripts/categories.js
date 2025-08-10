/*<a href="../category/baby-kids.html" class="category-card">
          <img src="../images/categories/baby.webp" alt="Baby & Kids" loading="lazy" />
          <span>Baby & Kids</span>
        </a>
        <a href="../category/health.html" class="category-card">
          <img src="../images/categories/grains.webp" alt="Grains & Flour" loading="lazy" />
          <span>Grains & Flour</span>
        </a>
        <a href="../category/beauty-care.html" class="category-card">
          <img src="../images/categories/beauty.webp" alt="Beauty & Care" loading="lazy" />
          <span>Beauty & Care</span>
        </a>
        <a href="../category/home-hygiene.html" class="category-card">
          <img src="../images/categories/home.webp" alt="Home & Hygiene" loading="lazy" />
          <span>Home & Hygiene</span>
        </a>
        <a href="../category/fresh-frozen.html" class="category-card">
            <img src="../images/categories/fresh.webp" alt="Fresh & Frozen Foods" loading="lazy" />
            <span>Fresh & Frozen Foods</span>
          </a>
          <a href="../category/canned-goods.html" class="category-card">
            <img src="../images/categories/canned.webp" alt="Canned Goods" loading="lazy" />
            <span>Canned Goods</span>
          </a>
          <a href="../category/beverages.html" class="category-card">
            <img src="../images/categories/beverages.webp" alt="Beverages" loading="lazy" />
            <span>Beverages</span>
          </a>
          <a href="../category/spices.html" class="category-card">
            <img src="../images/categories/spices.webp" alt="Spices & Condiments" loading="lazy" />
            <span>Spices & Condiments</span>
          </a>       
    */


const categoriesData = [
  {
    name: "Fresh & Frozen Foods",
    image: "../images/categories/fresh.webp",
    description: "Fresh produce and frozen delights.",
    type: "food",
    url: "../category/fresh-frozen.html",
  },
  {
    name: "Canned Goods",
    image: "../images/categories/canned.webp",
    description: "Shelf-stable flavors for every meal.",
    type: "food",
    url: "../category/canned-goods.html",
  },
  {
    name: "Beverages",
    image: "../images/categories/beverages.webp",
    description: "Cold and cozy drinks, anytime.",
    type: "food",
    url: "../category/beverages.html",
  },
  {
    name: "Spices & Condiments",
    image: "../images/categories/spices.webp",
    description: "Flavorful additions for every dish.",
    type: "food",
    url: "../category/spices.html",
  },
  {
    name: "Baby & Kids",
    image: "../images/categories/baby.webp",
    description: "Essentials for the little ones.",
    type: "baby",
    url: "../category/baby-kids.html",
  },
  {
    name: "Grains & Flour",
    image: "../images/categories/grains.webp",
    description: "Staples for every kitchen.",
    type: "food",
    url: "../category/grains-flour.html",
  },
  {
    name: "Beauty & Care",
    image: "../images/categories/beauty.webp",
    description: "Beauty essentials from Africa.",
    type: "beauty",
    url: "../category/personal-care.html",
  },
  {
    name: "Home & Hygiene",
    image: "../images/categories/home.webp",
    description: "Clean and care for your home.",
    type: "home",
    url: "../category/home-hygiene.html",
  }
  // Add other categories as needed
];

function renderCategories(filter) {
  const container = document.getElementById("category-list");
  container.innerHTML = "";
  categoriesData
    .filter(cat => filter === "all" || cat.type === filter)
    .forEach(cat => {
      const card = document.createElement("div");
      card.className = "category-card";
      card.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}">
        <h3>${cat.name}</h3>
        <p>${cat.description}</p>
        <a href="${cat.url}"><button class="btn view-btn" data-category="${cat.name}">View Products</button></a>
      `;
      container.appendChild(card);
    });
}

// Filtering
document.addEventListener("click", e => {
  if (e.target.matches(".filter-buttons button")) {
    renderCategories(e.target.dataset.filter);
  }

  if (e.target.matches(".view-btn")) {
    const catName = e.target.dataset.category;
    const category = categoriesData.find(c => c.name === catName);
    document.getElementById("modal-title").textContent = category.name;
    const modalProducts = document.getElementById("modal-products");
    modalProducts.innerHTML = category.products.map(
      p => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h4>${p.name}</h4>
        <p class="price">$${p.price.toFixed(2)}</p>
        <button onclick="addToFavorites('${p.name}')">Add to Favorites</button>
      </div>
      `
    ).join("");
    document.getElementById("category-modal").classList.remove("hidden");
  }
});


renderCategories("all");
