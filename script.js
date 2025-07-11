// Admin Emails
const ownerEmails = [
  "imchesu6@gmail.com",
  "naziamunir993@gmail.com",
  "prochengyingxo@gmail.com"
];

// Mock "login" using prompt
const userEmail = prompt("Enter your email to access Treat Bliss:");
if (ownerEmails.includes(userEmail)) {
  document.getElementById("adminPanel").style.display = "block";
}

// Product storage
let productList = [];

function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;
  const image = document.getElementById("productImage").value;

  if (!name || !price || !image) {
    alert("Please fill out all fields.");
    return;
  }

  const product = { name, price, image };
  productList.push(product);
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById("productList");
  container.innerHTML = "";
  productList.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" />
      <h4>${prod.name}</h4>
      <p>Rs ${prod.price}</p>
      <button onclick="orderProduct('${prod.name}')">Order</button>
    `;
    container.appendChild(card);
  });
}

function orderProduct(name) {
  alert(`You have ordered: ${name}. Thank you!`);
}

function changeStatus() {
  document.getElementById("orderStatus").textContent = "Dispatched";
}
