const cartItemsDiv = document.getElementById("cartItems");
const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

if (cart.length === 0) {
  cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((book) => {
    const item = document.createElement("div");
    item.className = "book-card";
    item.innerHTML = `
      <img src="${book.cover}" alt="${book.title}" />
      <h3>${book.title}</h3>
      <p>by ${book.author}</p>
      <p>${book.description}</p>
    `;
    cartItemsDiv.appendChild(item);
  });
}

document.getElementById("clearCart").addEventListener("click", () => {
  localStorage.removeItem("cartItems");
  location.reload();
});
