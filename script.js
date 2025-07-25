// ====== Products with Categories ======
const products = [
  // Electronics
    { id: 1, name: "Wireless Earbuds", price: 1499, image: "https://rukminim2.flixcart.com/image/1200/1200/xif0q/headphone/g/o/x/buds-t110-wireless-stereo-earbuds-13mm-drivers-38h-battery-clear-original-imahc8uvgwmxqmdh.jpeg",category: "Electronics"},
  { id: 2, name: "Laptop Stand", price: 999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRK0w56ETQWd2Y9fVQi1_SasocpUOjRpxoEVv8eONSl8a9pdb2Ic7WPICkSfxdpi48yppBsJN9dn_2mImLjn0CbV5roOOTcKgja5h5_Buu-SBYum7vIN_sMdAZ-5D7QGFl72N4gkkzstfY&usqp=CAcs",category: "Electronics" },
  { id: 3, name: "Smartphone", price: 24999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbiyIZ40W8p0JGQKRf2quL4WcuX1bWh_brA&s",category: "Electronics"},
  { id: 4, name: "Bluetooth Speaker", price: 1299, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTvV7yOCvVWGdGhPQSKqZYCvDeC0oZCcLTQRevRkWIqwd288IKKUo_LrPT9V2_iTkHUiIGog2CvIG5b5IarWkI2TeFDYOJdfMCTDt6CfHVhPrLhdk8Gr3phz0TVqJUGc7oiSjEU894V5FI&usqp=CAc",category: "Electronics"},
  { id: 5, name: "Gaming Mouse", price: 799, image: "https://zebronics.com/cdn/shop/files/Zeb-Scorpio-Pro-pic1.jpg?v=1727178755",category: "Electronics" },
  { id: 6, name: "Smartwatch", price: 1999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPU3mN_8WC8hNeGLDI11g-nV4KHXfQcW2GA&s",category: "Electronics" },

  // Grocery
  { id: 7, name: "Groceries Pack", price: 59.99, image: "https://giftflys.com/wp-content/uploads/2023/03/Grocery-pack.jpg", category: "Grocery" },
  { id: 8, name: "Avocado", category: "Grocery", price: 120, image: "https://images-cdn.ubuy.co.in/67c05235eee11915602c61d5-fresh-produce-tropical-avocado-each.jpg" },
  { id: 9, name: "Bananas (1kg)", category: "Grocery", price: 70, image: "https://cdn11.bigcommerce.com/s-kc25pb94dz/images/stencil/1280x1280/products/188/602/1-Bunch-Bananas__30199.1650549450.jpg?c=2" },
  { id: 10, name: "Strawberries (500g)", category: "Grocery", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSNftENy4IRboYdi72dlxf7yj6xiKS0uMzfw&s" },
  { id: 11, name: "Broccoli (500g)", category: "Grocery", price: 90, image: "https://cdn.britannica.com/25/78225-050-1781F6B7/broccoli-florets.jpg" },
  { id: 12, name: "Whole Wheat Flour (1kg)", category: "Grocery", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0QrB7ziUnk2lmIvoeukDRTk4VLqh-7VD4g&s" },
  { id: 13, name: "Greek Yogurt (1ltr)", category: "Grocery", price: 110, image: "https://cdn.mafrservices.com/sys-master-root/ha0/h18/63903487885342/1938353_main.jpg" },
  { id: 14, name: "Kimchi Jar", category: "Grocery", price: 220, image: "https://m.media-amazon.com/images/I/81JsQaoKUPL._UF1000,1000_QL80_.jpg" },

  // Fashion
  { id: 23, name: "T-Shirt", category: "Fashion", price: 499, image: "https://5.imimg.com/data5/ANDROID/Default/2023/2/KO/BV/FG/153179165/product-jpeg-500x500.jpg"},
  { id: 24, name: "Dell Laptop", category: "Electronics", price: 64999, image: "https://m.media-amazon.com/images/I/51tRMZKn4tL.jpg" },
  { id: 25, name: "Bread", category: "Grocery", price: 40, image: "https://www.seriouseats.com/thmb/a70rPcJcKQcnPyqrQ9y4rQkDx7Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20240306-SEA-DebbieWee-milkbread-step13-1nolid-909fb1a05c3648378d008648e1b6ddbe.jpg" },
  { id: 26, name: "Headphones", category: "Electronics", price: 1299, image: "https://thekairoshome.com/wp-content/uploads/2024/11/1-1.jpg" },
  { id: 27, name: "Jeans", category: "Fashion", price: 1299, image: "https://m.media-amazon.com/images/I/51gMD8DGiSL._UY1100_.jpg" },
  { id: 28, name: "Sugar 1kg", category: "Grocery", price: 40, image: "https://bodomama.com/wp-content/uploads/2024/02/sugar-1kg-1000x1000-1.jpg" },
  { id: 29, name: "Suit", category: "Fashion", price: 4599, image: "https://www.pnrao.com/wp-content/uploads/2023/11/Studio-Session-1009.webp" },
  { id: 30, name: "Smart Watch", category: "Electronics", price: 54999, image: "https://suprememobiles.in/cdn/shop/files/2_9c78017c-f59c-4547-8ca7-67d518f3e3b8.png?v=1701846865" },
  { id: 31, name: "Honey", category: "Grocery", price: 140, image: "https://m.media-amazon.com/images/I/71O4OnjaHVL._UF1000,1000_QL80_.jpg" },
  { id: 32, name: "Headset", category: "Electronics", price: 1299, image: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/308673_jxaozj.png" },
  { id: 33, name: "Embriodery Kurta", category: "Fashion", price: 1299, image: "https://img.faballey.com/images/Product/MKS00376Z/3.jpg" },
  { id: 34, name: "Blackgram", category: "Grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUghyiH_mXaI5ZH6re7gPsV87nMo6NeNYPiw&s" },
  { id: 35, name: "Shirt", category: "Fashion", price: 499, image: "https://www.blackstitch.in/cdn/shop/files/LTST_TRND_PL_BROWN_1_5333916d-e7f5-4b24-ad07-b834309650f0.webp?v=1727152908" },
  { id: 36, name: "Airpods", category: "Electronics", price: 54999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyym0Ol1OuMgioelBqkIDYWCg_jC8VN0tIA&s" },
  { id: 37, name: "Brinjal 1kg", category: "Grocery", price: 40, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw4gEu_Ppt2TqlzST2nbg2YaRXdzVxSXF6g&s" },
  { id: 38, name: "Neckband", category: "Electronics", price: 499, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQagqeSiWXhsuOLEhXMNX93Bmcqrbj3zB-Q&s" },
  { id: 39, name: "Black Bodycon", category: "Fashion", price: 2999, image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2025/APRIL/23/vGGPZPi3_218d5965e97a4d80b0d8df8e9b0e2795.jpg" },
  { id: 40, name: "Curd", category: "Grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tea6OFM6KiTDwMe0ENPjf4cqmITvakWuxw&s" },
  { id: 41, name: "Kurta Set", category: "Fashion", price: 499, image: "https://assets.ajio.com/medias/sys_master/root/20231102/mmWP/654378beafa4cf41f56eaaa9/-473Wx593H-466766854-black-MODEL.jpg" },
  { id: 42, name: "Laptop Screen Guard", category: "Electronics", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQ29mrMbXt7y3oLDzenDOFDe1g4r3CeyQCg&s" },
  { id: 44, name: "Tomatoes 1kg", category: "Grocery", price: 50, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXbdAvhUzEfr5X36ipO1Cn6IEFmaV7l5uWw&s" },
  { id: 45, name: "Earphones", category: "Electronics", price: 599, image: "https://computechstore.in/wp-content/uploads/2024/03/Honeywell-Moxie-V50-Wired-Earphone-Black-.jpg" },
  { id: 47, name: "Long Top", category: "Fashion", price: 499, image: "https://www.apparelcandy.com/cdn/shop/files/YMT20005V-DJ-4-removebg-preview_800x.png?v=1727665040" },
  { id: 48, name: "Milk", category: "Grocery", price: 60, image: "https://img.freepik.com/premium-vector/realistic-milk-splash-full-transparent-bottle-milk-with-lot-droplets-blue-background_212889-4424.jpg?w=360" },
  { id: 49, name: "Hoodie", category: "Fashion", price: 899, image: "https://cdn-images.farfetch-contents.com/27/48/39/46/27483946_57262455_600.jpg" },
  { id: 50, name: "Formal Shirt", category: "Fashion", price: 749, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUD6H9XP0Xdio2yXyYLizZTCson6cv_GTHtQ&s" },
  { id: 51, name: "Skirt", category: "Fashion", price: 599, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnOs08z7jrKRmMP2lOG3lpPphjcbbfKdUQw&s" },
  { id: 52, name: "Smartphone", category: "Electronics", price: 23999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8xEHyZoTfv97MUoCvUgZK_XqFimG3AEp9g&s" },
  { id: 53, name: "Smartwatch", category: "Electronics", price: 4999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0-VLJgjJL9ylZxPzq3HOpvP9Ndcx0bhkFQ&s" },
  { id: 54, name: "Eggs (12 Pack)", category: "Grocery", price: 70, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3NYOP0WdYbSJddEnj4kbiQWoD1W2PsDOEzw&s" },
  { id: 55, name: "Rice (1kg)", category: "Grocery", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7ljz2j4FkCfLkIQ-bV4FlQLintKdFwtZWKw&s" },
  { id: 56, name: "Lipton Green Tea", category: "Grocery", price: 120, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7qS2WqCYBZaVDrK2r1lsszwIUkoIi5IRyA&s" },
  { id: 57, name: "Apples (1kg)", category: "Grocery", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-7qdggKNdLXBORgy4dVT2nTtAihCAnY1Fg&s" },
  { id: 58, name: "Fortune Oil (1L)", category: "Grocery", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBhSzD4srbX-rESY7FBwMuoiUmEdOfslTodw&s" },
  { id: 59, name: "Keyboard", category: "Electronics", price: 899, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReW-UMkfWintNFu-tvIavy-DgopvOXSuJJLA&s" },
  { id: 60, name: "Mouse", category: "Electronics", price: 399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPZO-OHVBCnawWFfeBFA-Y4SQIUbDFzg87FA&s" },
  { id: 61, name: "Tablet", category: "Electronics", price: 15999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS96jJnj4Nt3kN_j_oh0KPLdyubbPFKegh-g&s" },
  { id: 62, name: "Jacket", category: "Fashion", price: 1399, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tck2KmJGbRqFQhHvL-S3NRLHGYE13qVqOg&s" }
];

const cart = [];

// ====== Selectors ======
const productGrid = document.getElementById("product-grid");
const cartBtn = document.getElementById("cart-btn");
const cartCount = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const closeCartBtn = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const userDropdown = document.querySelector(".user-dropdown");

// ====== Render Products (with category filter) ======
function renderProducts(category = null) {
  if (!productGrid) return;

  productGrid.innerHTML = "";
  let filteredProducts = category ? products.filter(p => p.category === category) : products;

  filteredProducts.forEach(product => {
    const productEl = document.createElement("div");
    productEl.classList.add("product");
    productEl.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productEl);
  });
}

// ====== Cart Functions ======
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  if (cartCount) cartCount.textContent = totalItems;
}

function renderCartItems() {
  if (!cartItems) return;
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.qty} - $${(item.price * item.qty).toFixed(2)}`;
    cartItems.appendChild(li);
  });
}

// ====== Cart Modal Events ======
if (cartBtn) {
  cartBtn.addEventListener("click", () => {
    renderCartItems();
    cartModal.style.display = "flex";
  });
}

if (closeCartBtn) {
  closeCartBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });
}

window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// ====== Detect Page and Render ======
if (window.location.pathname.includes("electronics.html")) {
  renderProducts("Electronics");
} else if (window.location.pathname.includes("grocery.html")) {
  renderProducts("Grocery");
} else if (window.location.pathname.includes("fashion.html")) {
  renderProducts("Fashion");
} else {
  renderProducts(); // Home page
}

// ====== Show User Name if Logged In ======
function checkUserLogin() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.name && userDropdown) {
    userDropdown.innerHTML = `
      <button class="user-btn">Hi, ${user.name} ▼</button>
      <div class="dropdown-content">
        <a href="#">Orders</a>
        <a href="#" id="logout">Logout</a>
      </div>
    `;

    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("user");
      alert("Logged out successfully");
      window.location.reload();
    });
  }
}

checkUserLogin();
