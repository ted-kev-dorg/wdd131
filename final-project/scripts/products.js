// Array for Fresh & Frozen products
const freshFrozenProducts = [
  { id: "cassava", name: "Frozen Cassava", price: 6.99, image: "../images/products/cassava.webp" },
  { id: "tilapia", name: "Whole Tilapia Fish", price: 10.50, image: "../images/products/tilapia.webp" },
  { id: "yam", name: "Puna Yam", price: 15.00, image: "../images/products/puna-yam.webp" },
  { id: "okra", name: "Frozen Okra", price: 5.25, image: "../images/products/okra.webp" },
];

// Array for Canned Goods
const cannedGoodsProducts = [
  { id: "palm-nut-soup", name: "Palm Nut Soup", price: 7.99, image: "../images/products/palm-nut-soup.webp" },
  { id: "canned-beans", name: "Canned Black-Eyed Beans", price: 2.50, image: "../images/products/canned-beans.webp" },
  { id: "tin-tomatoes", name: "Tin Tomatoes Paste", price: 1.99, image: "../images/products/tin-tomatoes.webp" },
  // ... more products
];

// Array for Beverages
const beveragesProducts = [
  { id: "baobab", name: "Baobab Juice", price: 5.99, image: "../images/products/baobab-juice.webp" },
  { id: "sobolo", name: "Hibiscus Drink (Sobolo)", price: 4.75, image: "../images/products/sobolo.webp" },
  // ... more products
];

// Array for Spices & Condiments
const spicesProducts = [
  { id: "shito", name: "Ghanaian Chili Sauce (Shito)", price: 8.50, image: "../images/products/shito.webp" },
  { id: "curry-powder", name: "Curry Powder Blend", price: 3.99, image: "../images/products/curry-powder.webp" },
  // ... more products
];

// ... create arrays for all other categories

// Combine all product data into a single object for easy access
const allCategoryProducts = {
  "fresh-frozen": freshFrozenProducts,
  "canned-goods": cannedGoodsProducts,
  "beverages": beveragesProducts,
  "spices": spicesProducts,
  // ... add all other categories here
};