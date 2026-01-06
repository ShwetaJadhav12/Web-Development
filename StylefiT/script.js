let cart = 0;
let mood = "happy";

const products = [
    { name: "Casual Outfit", price: 2999 },
    { name: "Party Outfit", price: 3999 },
    { name: "Formal Outfit", price: 3499 },
    { name: "Sports Outfit", price: 2599 },
    { name: "Ethnic Outfit", price: 4599 },
    { name: "Winter Outfit", price: 4999 },
    { name: "Summer Outfit", price: 2799 },
    { name: "Office Outfit", price: 3199 },
    { name: "Travel Outfit", price: 3899 },
];


const products1 = [
    { name: "T-Shirt", price: 799 },
    { name: "Jeans", price: 1199 },
    { name: "Sneakers", price: 1499 },
    { name: "Jacket", price: 1999 },
    { name: "Dress", price: 1599 },
    { name: "Skirt", price: 999 },
    { name: "Boots", price: 1799 },
    { name: "Hat", price: 499 },
    { name: "Sunglasses", price: 699 },
    { name: "Watch", price: 2499 },
    { name: "Belt", price: 599 },
    { name: "Scarf", price: 399 },
    { name: "Gloves", price: 299 },
];

const productList = document.getElementById("productList");
const productList1 = document.getElementById("productList1");

const cartCount = document.getElementById("cartCount");
const model = document.getElementById("model");

// Load products
products.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";

    col.innerHTML = `
        <div class="card text-center">
            <div class="card-body">
                <h5>${p.name}</h5>
                <p>₹${p.price}</p>
                <p>Style Score: ${Math.floor(Math.random()*20)+80}/100</p>
                <button class="btn btn-dark w-100">Add to Cart</button>
            </div>
        </div>
    `;

    col.querySelector("button").onclick = () => {
        cart++;
        cartCount.innerText = cart;
        alert(p.name + " added to cart!");
    };

    productList.appendChild(col);
});

// Try-On Logic
function changeOutfit(type) {
    if (type === "shirt") {
        model.src = "https://i.imgur.com/1X6hQ6z.png";
    }
    if (type === "pant") {
        model.src = "https://i.imgur.com/6X2cKkH.png";
    }
    if (type === "shoe") {
        model.src = "https://i.imgur.com/FLqKZ4z.png";
    }
}

// Mood-based styling
function setMood(selectedMood) {
    mood = selectedMood;

    if (mood === "happy") {
        document.body.style.backgroundColor = "#fff8dc";
    }
    if (mood === "confident") {
        document.body.style.backgroundColor = "#e3f2fd";
    }
    if (mood === "bold") {
        document.body.style.backgroundColor = "#ffe6e6";
    }
}
