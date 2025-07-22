const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const bookContainer = document.getElementById("bookContainer");
const books = JSON.parse(localStorage.getItem("bookList")) || [];

books.forEach((book, index) => {
  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <img src="${book.cover}" alt="${book.title} cover" />
    <h3 class="book-title">${book.title}</h3>
    <p class="book-author">by ${book.author}</p>
    <p class="book-desc">${book.description}</p>
    <button class="add-to-cart" data-index="${index}"> Add to Cart </button>
  `;

  bookContainer.appendChild(card);
});

// Add to Cart Logic
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const index = e.target.dataset.index;
    const selectedBook = books[index];

    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    cart.push(selectedBook);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    alert("Book added to cart!");
  }
});

card.setAttribute("data-category", book.category); // For filtering

card.innerHTML = `
  <img src="${book.cover}" alt="${book.title} cover" />
  <h3 class="book-title">${book.title}</h3>
  <p class="book-author">by ${book.author}</p>
  <p class="book-desc">${book.description}</p>
  <p class="book-category">Category: ${book.category}</p>
  <button class="add-to-cart" data-index="${index}">Add to Cart</button>
`;
document.querySelectorAll("nav.categories button").forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    document.querySelectorAll(".book-card").forEach(card => {
      const cardCategory = card.dataset.category;

      if (filter === "all" || cardCategory === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
