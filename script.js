document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "AIzaSyDgkEGYXtMspRSkU0XU4Q4OmgOU0URxhno";
    const form = document.querySelector("#search-form");
    const resultsTable = document.querySelector("#book-results");
  
    form.addEventListener("submit", event => {
      event.preventDefault();
      const searchBookName = document.querySelector("#bookName").value;
      const searchGenre = document.querySelector("#genre").value;
  
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBookName}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const books = data.items;
          resultsTable.innerHTML = "";
          books.forEach(book => {
            const title = book.volumeInfo.title;
            const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown";
            const publishedDate = book.volumeInfo.publishedDate;
            
            const row = document.createElement("tr");
            const titleCell = document.createElement("td");
            titleCell.textContent = title;
            const authorCell = document.createElement("td");
            authorCell.textContent = author;
            const publishedDateCell = document.createElement("td");
            publishedDateCell.textContent = publishedDate;
            
            row.appendChild(titleCell);
            row.appendChild(authorCell);
            row.appendChild(publishedDateCell);
            
            resultsTable.appendChild(row);
  
            if (book.volumeInfo.industryIdentifiers) {
              const isbn10 = book.volumeInfo.industryIdentifiers.find(identifier => identifier.type === "ISBN_10");
              const isbn13 = book.volumeInfo.industryIdentifiers.find(identifier => identifier.type === "ISBN_13");
              if (isbn13) {
                const coverUrl = `http://covers.openlibrary.org/b/isbn/${isbn13.identifier}-S.jpg`;
                const coverImageCell = document.createElement("td");
                const coverImage = document.createElement("img");
                coverImage.src = coverUrl;
                coverImageCell.appendChild(coverImage);
                row.appendChild(coverImageCell);
              } else if (isbn10) {
                const isbn10WithHyphens = `${isbn10.identifier.slice(0, 1)}-${isbn10.identifier.slice(1, 4)}-${isbn10.identifier.slice(4)}`;
                const coverUrl = `http://covers.openlibrary.org/b/isbn/${isbn10WithHyphens}-S.jpg`;
                const coverImageCell = document.createElement("td");
                const coverImage = document.createElement("img");
                coverImage.src = coverUrl;
                coverImageCell.appendChild(coverImage);
                row.appendChild(coverImageCell);
              } else {
                const coverImageCell = document.createElement("td");
                const noImageAvailable = document.createTextNode("No image available");
                coverImageCell.appendChild(noImageAvailable);
                row.appendChild(coverImageCell);
              }
            } else {
              const coverImageCell = document.createElement("td");
              const noImageAvailable = document.createTextNode("No image available");
              coverImageCell.appendChild(noImageAvailable);
              row.appendChild(coverImageCell);
            }
          });
        })
        .catch(error => console.error(error));
    });
  });
  