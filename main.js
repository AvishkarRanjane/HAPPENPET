/* ==============================
    HERO SLIDER LOGIC
================================= */

let slides = document.querySelectorAll(".slide");
let index = 0;

/**
 * Display the current slide
 */
function showSlide() {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
}

/**
 * Go to next slide manually
 */
function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide();
}

/**
 * Auto-slide every 5 seconds
 */
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide();
}, 5000);


/* ==============================
    PRODUCT DETAIL MODAL
================================= */

let detailModal = document.getElementById("detail-modal");
let detailTitle = document.getElementById("detail-title");
let detailPrice = document.getElementById("detail-price");
let detailImg = document.getElementById("detail-img");

/**
 * Open product detail modal
 * @param {string} name - Product name
 * @param {string} price - Product price
 * @param {string} img - Product image URL
 */
function openDetail(name, price, img) {
    detailTitle.innerText = name;
    detailPrice.innerText = price;
    detailImg.src = img;
    detailModal.style.display = "flex";
}

/**
 * Close product detail modal
 */
if (document.getElementById("close-detail")) {
    document.getElementById("close-detail").onclick = () => {
        detailModal.style.display = "none";
    };
}


/* ==============================
    LOGIN MODAL
================================= */

let loginBtn = document.getElementById("login-btn");
let loginModal = document.getElementById("login-modal");
let closeLoginBtn = document.getElementById("close-login");

/**
 * Open login modal
 */
if (loginBtn) {
    loginBtn.onclick = () => {
        loginModal.style.display = "flex";
    };
}

/**
 * Close login modal
 */
if (closeLoginBtn) {
    closeLoginBtn.onclick = () => {
        loginModal.style.display = "none";
    };
}

/**
 * Close modal when clicking outside
 */
window.onclick = (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
};


/* ==============================
    CART SYSTEM
================================= */

let cartCount = 0;
let cartItems = [];

/**
 * Add item to cart
 */
let addCartBtn = document.getElementById("add-cart");
if (addCartBtn) {
    addCartBtn.onclick = () => {
        cartCount++;
        document.getElementById("cart-btn").innerText = `Cart (${cartCount})`;
        alert("Added to cart!");
        localStorage.setItem("cartCount", cartCount);
    };
}

/**
 * Load cart count from localStorage on page load
 */
window.onload = () => {
    let savedCount = localStorage.getItem("cartCount");
    if (savedCount) {
        cartCount = parseInt(savedCount);
        document.getElementById("cart-btn").innerText = `Cart (${cartCount})`;
    }
};


/* ==============================
    LOGIN FORM HANDLING
================================= */

/**
 * Handle login form submission
 * @param {event} event - Form submit event
 */
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        alert("Login successful! Welcome to HappenPet Store!");
        localStorage.setItem("userEmail", email);
        window.location.href = "index.html";
    }
}

/**
 * Handle signup form submission
 * @param {event} event - Form submit event
 */
function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    if (name && email && password) {
        alert("Account created successfully! Welcome to HappenPet Store!");
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userName", name);
        window.location.href = "index.html";
    }
}


/* ==============================
    CART PAGE FUNCTIONS
================================= */

let cart = [];

/**
 * Display cart items
 */
function displayCart() {
    const container = document.getElementById("cart-items-container");
    const summary = document.getElementById("cart-summary");
    
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <p style="font-size:14px; color:#666;">Start shopping now and explore our premium pet products!</p>
                <a href="index.html">← Continue Shopping</a>
            </div>
        `;
        if (summary) summary.style.display = "none";
        return;
    }

    let html = '<div class="cart-items">';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        html += `
            <div class="cart-item">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    <div style="color:#999; font-size:14px;">
                        Qty: <span id="qty-${index}">${item.quantity}</span> × ₹${item.price}
                    </div>
                    <div class="item-price">₹${itemTotal.toLocaleString()}</div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;

    if (summary) {
        const shipping = 100;
        const tax = Math.round(subtotal * 0.05);
        const total = subtotal + shipping + tax;

        document.getElementById("subtotal").innerText = `₹${subtotal.toLocaleString()}`;
        document.getElementById("tax").innerText = `₹${tax.toLocaleString()}`;
        document.getElementById("total").innerText = `₹${total.toLocaleString()}`;

        summary.style.display = "block";
    }
}

/**
 * Remove item from cart
 * @param {number} index - Item index in cart array
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount = Math.max(0, cartCount - 1);
    document.getElementById("cart-btn").innerText = `Cart (${cartCount})`;
    localStorage.setItem("cartCount", cartCount);
    displayCart();
}

/**
 * Proceed to checkout
 */
function proceedCheckout() {
    if (cart.length > 0) {
        alert("Thank you for your purchase! Proceeding to checkout...");
        cart = [];
        cartCount = 0;
        localStorage.setItem("cartCount", 0);
        localStorage.removeItem("showCart");
        document.getElementById("cart-btn").innerText = "Cart (0)";
        displayCart();
    }
}

/**
 * Load sample cart items for demo
 */
function loadSampleCart() {
    const sampleCart = [
        { id: 1, name: "Royal Dog House", price: 2999, quantity: 1 },
        { id: 2, name: "Luxury Cat Tower", price: 4999, quantity: 1 },
        { id: 3, name: "Dog Toy Set", price: 499, quantity: 2 }
    ];
    
    cart = [...sampleCart];
    cartCount = 3;
    document.getElementById("cart-btn").innerText = `Cart (${cartCount})`;
    localStorage.setItem("cartCount", cartCount);
    displayCart();
}
