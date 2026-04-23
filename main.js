// Sample Mehndi Products
const products = [
    {
        id: 1,
        name: "Premium Arabic Mehndi Cone",
        price: 150,
        image: "https://images.unsplash.com/photo-1606534176803-8fed2965b8f4?w=400",
        category: "cones"
    },
    {
        id: 2,
        name: "Bridal Mehndi Cone Pack (5)",
        price: 650,
        image: "https://images.unsplash.com/photo-1606534176803-8fed2965b8f4?w=400",
        category: "cones"
    },
    {
        id: 3,
        name: "Natural Rajasthani Henna Powder",
        price: 250,
        image: "https://images.unsplash.com/photo-1589933805568-8583189a2bb9?w=400",
        category: "powder"
    },
    {
        id: 4,
        name: "Mehndi Design Book",
        price: 350,
        image: "https://images.unsplash.com/photo-1574169208507-84376144848b?w=400",
        category: "accessories"
    },
    {
        id: 5,
        name: "Organic Mehndi Oil",
        price: 180,
        image: "https://images.unsplash.com/photo-1625772276497-d9a595f5e8f7?w=400",
        category: "oils"
    },
    {
        id: 6,
        name: "Mehndi Cone Holder",
        price: 80,
        image: "https://images.unsplash.com/photo-1589933805568-8583189a2bb9?w=400",
        category: "accessories"
    }
];

// Load featured products
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    updateCartCount();
});

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    if (!featuredContainer) return;

    const featuredProducts = products.slice(0, 6);
    featuredProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-info">
            <h3>${product.name}</h3>
            <div class="product-price">₹${product.price}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    return card;
}
