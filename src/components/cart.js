// cart.js
const CART_KEY = 'happenpet_cart';

let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
    }
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    
    // Micro-animation
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.classList.remove('bounce');
        void badge.offsetWidth; // trigger reflow
        badge.classList.add('bounce');
    }
    
    alert(`Added ${product.name} to your cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

function saveCart() {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadge();
}

function checkout() {
    if (cart.length === 0) return;
    alert("Thank you for choosing HappenPet! Your order has been placed.");
    cart = [];
    saveCart();
    if (typeof renderCartPage === 'function') {
        renderCartPage();
    }
}

// Cart Page Rendering
function renderCartPage() {
    const container = document.getElementById('cart-items-container');
    const summary = document.getElementById('cart-summary');
    const totalEl = document.getElementById('cart-total');
    
    if (!container) return; // Not on cart page
    
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 2rem; color: #666;"><p>Your cart is empty and waiting for playful picks!</p><a href="index.html#shop" class="btn btn-primary" style="margin-top: 1rem;">Go Shopping</a></div>';
        summary.style.display = 'none';
        return;
    }
    
    summary.style.display = 'block';
    container.innerHTML = '';
    
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h3 style="color: var(--text-dark); margin-bottom: 0.25rem;">${item.name}</h3>
                <p style="color: #666;">₹${item.price} x ${item.quantity}</p>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        `;
        container.appendChild(itemEl);
    });
    
    totalEl.innerText = total.toLocaleString();
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
