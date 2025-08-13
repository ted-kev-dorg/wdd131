//Promotions & new arrival
const featuredProductsData = [
  { id: "yam-flour", name: "African Yam Flour", price: 6.99, image: "../images/products/yam-flour.webp" },
  { id: "baobab-juice", name: "Baobab Juice", price: 10.50, image: "../images/products/baobab-juice.webp" },
  { id: "shea-butter", name: "Shea Butter", price: 15.00, image: "../images/products/shea-butter.webp" },
  { id: "spiced-tea", name: "Spiced Tea Blend", price: 5.25, image: "../images/products/spiced-tea.webp" },
  ];


// Array for Fresh & Frozen products
const freshFrozenProducts = [
  { id: "frozen-snails", name: "Frozen Snails", price: 6.99, image: "../images/products/frozen-snails.avif" },
  { id: "frozen-catfish", name: "Fresh Catfish (Frozen)", price: 10.50, image: "../images/products/fresh-catfish-frozen.webp" },
  { id: "frozen-mackerel", name: "Frozen Mackerel", price: 15.00, image: "../images/products/frozen-mackerel.avif" },
  { id: "frozen-spinach", name: "Frozen Spinach", price: 5.25, image: "../images/products/frozen-spinach.avif" },
  { id: "frozen-turkey", name: "Frozen Turkey", price: 5.25, image: "../images/products/frozen-turkey.avif" },
  { id: "frozen-yam-sticks", name: "Frozen Yam Sticks", price: 5.25, image: "../images/products/frozen-yam-sticks.avif" },
  { id: "frozen-okra", name: "Frozen Okra", price: 5.25, image: "../images/products/okrookra.webp" },
  { id: "ugu-leave-frozen", name: "Frozen Ugu Leaves", price: 5.25, image: "../images/products/ugu-leave-frozen.webp" },
];

// Array for Canned Goods
const cannedGoodsProducts = [
  { id: "canned-corned-beef", name: "Corned Beef", price: 7.99, image: "../images/products/canned-corned-beef.webp" },
  { id: "canned-grace-sardines-in-vegetable", name: "Grace Sardines in Vegetable Oil", price: 2.50, image: "../images/products/canned-grace-sardines-in-vegetable.webp" },
  { id: "canned-ghana-fresh-palmnut-cream", name: "Ghana Fresh Palmnut Cream", price: 1.99, image: "../images/products/canned-ghana-fresh-palmnut-cream.webp" },
  { id: "canned-obaatanpa-maquereau", name: "Obaatanpa Mackerel", price: 1.50, image: "../images/products/canned-obaatanpa-maquereau.avif" },
  { id: "canned-peak-dry-whole-milk-400g", name: "Peak Dry Whole Milk", price: 0.99, image: "../images/products/canned-peak-dry-whole-milk-400g.webp" },
  { id: "canned-praise-egg-plant", name: "Praise Egg Plant", price: 1.25, image: "../images/products/canned-praise-egg-plant.webp" },
  { id: "canned-titus-sardine", name: "Titus Sardine", price: 0.75, image: "../images/products/canned-titus-sardine.webp" },
];

// Array for Beverages
const beveragesProducts = [
  { id: "baobab", name: "Baobab Juice", price: 5.99, image: "../images/products/baobab-juice.webp" },
  { id: "beverages-coke-pepsi-cans", name: " Coke & Pepsi Cans", price: 4.75, image: "../images/products/beverages-coke-pepsi-cans.webp" },
  { id: "beverages-geisha-cinnamon-tea", name: "Geisha Cinnamon Tea", price: 3.50, image: "../images/products/beverages-geisha-cinnamon-tea.webp" },
  { id: "beverages-green-tea", name: "Green Tea", price: 2.99, image: "../images/products/beverages-green-tea.jpg" },
  { id: "beverages-lipton-tea", name: "Lipton Tea", price: 6.25, image: "../images/products/beverages-lipton-tea.webp" },
  { id: "beverages-malta-guiness", name: "Malta Guinness", price: 4.50, image: "../images/products/beverages-malta-guiness.webp" },
  { id: "beverages-nigeria-fanta-big", name: "Nigeria Fanta Big", price: 5.00, image: "../images/products/beverages-nigeria-fanta-big.jpg" },
  { id: "beverages-vita-malt", name: "Vita Malt", price: 2.99, image: "../images/products/beverages-vita-malt.webp" },
  { id: "beverages-zobo-drink", name: "Zobo Drink", price: 2.99, image: "../images/products/beverages-zobo-drink.webp" },
  // ... more products
];

// Array for Spices & Condiments
const spicesProducts = [
  { id: "spices-bay-leaf", name: "Bay Leaf", price: 2.99, image: "../images/products/spices-bay-leaf.webp" },
  { id: "spices-blended-hot-pepper-Ata-gigun", name: "Blended Hot Pepper (Ata Gigun)", price: 3.99, image: "../images/products/spices-blended-hot-pepper-Ata-gigun.webp" },
  { id: "spices-cocoyam-powder", name: "Cocoyam Powder", price: 1.99, image: "../images/products/spices-cocoyam-powder.webp" },
  { id: "spices-curry-powder-25g", name: "Curry Powder", price: 2.50, image: "../images/products/spices-curry-powder-25g.jpg" },
  { id: "spices-egusi", name: "Ground Egusi", price: 1.75, image: "../images/products/spices-egusi.webp" },
  { id: "spices-irie-garlic-powder-200g", name: "Irie Garlic Powder", price: 2.25, image: "../images/products/spices-irie-garlic-powder-200g.webp" },
  { id: "spices-irie-nutmeg-grounded", name: "Irie Nutmeg (Ground)", price: 3.50, image: "../images/products/spices-irie-nutmeg-grounded.webp" },
  { id: "spices-knorr-maggi-beef", name: "Knorr Maggi Beef", price: 1.99, image: "../images/products/spices-knorr-maggi-beef.avif" },
  { id: "spices-maggi-star", name: "Maggi Star", price: 2.99, image: "../images/products/spices-maggi-star.webp" },
  // ... more products
];

const babiesProducts = [
  { id: "baby-care-bears-universal-monsters-9-inches", name: "Care Bears Universal Monsters 9-Inches", price: 25.99, image: "../images/products/baby-care-bears-universal-monsters-9-inches.webp" },
  { id: "baby-cerelac-honey-wheat-with-milk-baby-cereal", name: "Cerelac Honey Wheat with Milk Baby Cereal", price: 12.99, image: "../images/products/baby-cerelac-honey-wheat-with-milk-baby-cereal.webp" },
  { id: "baby-christie-ritz-bits-sandwiches-cheese", name: "Christie Ritz Bits Sandwiches - Cheese", price: 29.99, image: "../images/products/baby-christie-ritz-bits-sandwiches-cheese.webp" },
  { id: "baby-gerber-stage-wheat-biscuit-baby", name: "Gerber Stage Wheat Biscuit", price: 15.99, image: "../images/products/baby-gerber-stage-wheat-biscuit-baby.webp" },
  { id: "baby-huggies-skin-essentials-baby-wipes", name: "Baby Wipes", price: 10.99, image: "../images/products/baby-huggies-skin-essentials-baby-wipes.webp" },
  { id: "baby-johnsonss-sensitive-care-baby-wash-shampoo", name: "Johnson's Sensitive Care Baby Wash & Shampoo", price: 8.99, image: "../images/products/baby-johnsonss-sensitive-care-baby-wash-shampoo.jpg" },
  { id: "baby-kelloggs-rice-crispies-square-bars-660g", name: "Kellogg's Rice Crispies Square Bars", price: 3.50, image: "../images/products/baby-kelloggs-rice-crispies-square-bars-660g.webp" },
  { id: "baby-philips-one-for-kids-by-sonicare", name: "Philips One for Kids by Sonicare", price: 49.99, image: "../images/products/baby-philips-one-for-kids-by-sonicare.webp" },
  { id: "baby-training-pants", name: "Training Pants", price: 2.99, image: "../images/products/baby-training-pants.webp" },
  // ... more products
];

const grainsAndFloursProducts = [
  { id: "gf-cassava-flour", name: "Cassava Flour", price: 25.99, image: "../images/products/gf-cassava-flour.webp" },
  { id: "gf-cassava-fufu", name: "Cassava Fufu", price: 12.99, image: "../images/products/gf-cassava-fufu.webp" },
  { id: "gf-honey-beans", name: "Honey Beans", price: 29.99, image: "../images/products/gf-honey-beans.webp" },
  { id: "gf-wheat-flour", name: "Wheat Flour", price: 15.99, image: "../images/products/gf-wheat-flour.webp" },
  { id: "gf-nupak-corn-meal", name: "Nupak Corn Meal", price: 10.99, image: "../images/products/gf-nupak-corn-meal.webp" },
  { id: "gf-ofada-rice", name: "Ofada Rice", price: 8.99, image: "../images/products/gf-ofada-rice.jpg" },
  { id: "gf-parboil-rice", name: "Parboil Rice", price: 3.50, image: "../images/products/gf-parboil-rice.webp" },
  { id: "gf-plantain-flour", name: "Plantain Flour", price: 49.99, image: "../images/products/gf-plantain-flour.jpeg" },
  { id: "gf-scotmaple-oat-flour", name: "Scotmapple Oat Flour", price: 2.00, image: "../images/products/gf-scotmaple-oat-flour.webp" },
  // ... more products
];

const beautyAndCareProducts = [
  { id: "beauty-african-pride-styling-gel", name: "African Pride Styling Gel", price: 25.99, image: "../images/products/beauty-african-pride-styling-gel.webp" },
  { id: "beauty-argan-oil", name: "Argan Oil", price: 12.99, image: "../images/products/beauty-argan-oil.webp" },
  { id: "beauty-cantu-shea-butter", name: "Cantu Shea Butter", price: 29.99, image: "../images/products/beauty-cantu-shea-butter.webp" },
  { id: "beauty-eco-styler-gel", name: "Eco Styler Gel", price: 15.99, image: "../images/products/beauty-ecco-gel.webp" },
  { id: "beauty-hair-relaxers", name: "Hair Relaxers with Olive Oil", price: 10.99, image: "../images/products/beauty-hair-relaxers.webp" },
  { id: "beauty-hard-brush", name: "Hard Brush", price: 8.99, image: "../images/products/beauty-hard-brush.jpg" },
  { id: "beauty-jamaica-black-castor-oils", name: "Jamaica Black Castor Oil", price: 3.50, image: "../images/products/beauty-jamaica-black-castor-oils.webp" },
  { id: "beauty-ors-new-growth-no-lye-hair-relaxer", name: "ORS New Growth No-Lye Hair Relaxer", price: 49.99, image: "../images/products/beauty-ors-new-growth-no-lye-hair-relaxer.webp" },
  { id: "beauty-ors-olive-oil", name: "ORS Olive Oil", price: 5.00, image: "../images/products/beauty-ors-olive-oil.webp" },
  { id: "beauty-shine-n-jam-magic-fingers", name: "Shine & Jam Magic Fingers", price: 15.99, image: "../images/products/beauty-shine-n-jam-magic-fingers.webp" },
  // ... more products
];

const homeAndHygieneProducts = [
  { id: "hh-4-in-1-colander-with-bowl-set", name: "4-in-1 Colander with Bowl Set", price: 25.99, image: "../images/products/hh-4-in-1-colander-with-bowl-set.webp" },
  { id: "hh-bath-towels-for-bathroom", name: "Bath Towels for Bathroom", price: 12.99, image: "../images/products/hh-bath-towels-for-bathroom.webp" },
  { id: "hh-dish-drying-mat-for-kitchen-counter", name: "Dish Drying Mat for Kitchen Counter", price: 29.99, image: "../images/products/hh-dish-drying-mat-for-kitchen-counter.webp" },
  { id: "hh-silicone-cooking-utensils-set", name: "Silicone Cooking Utensils Set", price: 15.99, image: "../images/products/hh-silicone-cooking-utensils-set.webp" },
  { id: "hh-mop-and-bucket-with-wringer-set", name: "Mop and Bucket with Wringer Set", price: 10.99, image: "../images/products/hh-mop-and-bucket-with-wringer-set.webp" },
  { id: "hh-vegetable-chopper-cutter-mandoline-slicer", name: "Vegetable Chopper Cutter Mandoline Slicer", price: 8.99, image: "../images/products/hh-vegetable-chopper-cutter-mandoline-slicer.webp" },  // ... more products
];

// Combine all product data into a single object for easy access
const allCategoryProducts = {
  "fresh-frozen": freshFrozenProducts,
  "canned-goods": cannedGoodsProducts,
  "beverages": beveragesProducts,
  "spices": spicesProducts,
  "featured": featuredProductsData,
  "baby-kids": babiesProducts,
  "grains-flour": grainsAndFloursProducts,
  "personal-care": beautyAndCareProducts,
  "home-hygiene": homeAndHygieneProducts,
  // ... add all other categories here
};