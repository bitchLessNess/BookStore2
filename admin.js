document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const description = document.getElementById("description").value.trim();
  const coverFile = document.getElementById("cover").files[0];

  const reader = new FileReader();

  reader.onload = function () {
    const imageData = reader.result;

    const newBook = {
      title,
      author,
      description,
      cover: imageData,
    };

    let books = JSON.parse(localStorage.getItem("bookList")) || [];
    books.push(newBook);
    localStorage.setItem("bookList", JSON.stringify(books));

    alert("Book added successfully!");
    document.getElementById("bookForm").reset();
  };

  if (coverFile) {
    reader.readAsDataURL(coverFile);
  }
});

const category = document.getElementById("category").value;

const newBook = {
  title,
  author,
  description,
  cover,
  category // ← Save it!
};
