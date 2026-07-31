// ui.js
const products = [
    {
        id: 1,
        name: "Cozy Cloud Dog Bed",
        price: 2499,
        img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Interactive Cat Wand",
        price: 499,
        img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Premium Salmon Treats",
        price: 899,
        img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Squeaky Bone Toy",
        price: 299,
        img: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Luxury Bird Cage",
        price: 3499,
        img: "https://images.unsplash.com/photo-1552554705-7286377759b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Tropical Fish Flakes",
        price: 199,
        img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    
    if (productList) {
        products.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">₹${p.price}</p>
                <button class="btn btn-secondary" style="width: 100%; border-radius: var(--radius-pill);" onclick='handleAdd(${JSON.stringify(p)})'>
                    Add to Cart
                </button>
            `;
            productList.appendChild(card);
        });
    }
});

function handleAdd(product) {
    addToCart(product);
}
