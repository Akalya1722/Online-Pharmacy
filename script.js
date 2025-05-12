fetch("http://localhost:5000/products")
    .then(response => response.json())
    .then(data => {
        let productSection = document.getElementById("products");
        productSection.innerHTML = "";
        data.forEach(product => {
            productSection.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>₹${product.price}</p>
                    <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
                </div>`;
        });
    });

function addToCart(name, price) {
    fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, price })
    })
    .then(response => response.json())
    .then(data => alert(data.message));
}
