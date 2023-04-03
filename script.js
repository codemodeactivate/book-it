const apiKey = "AIzaSyDgkEGYXtMspRSkU0XU4Q4OmgOU0URxhno";
const form = document.querySelector("form");
const resultsTable = document.querySelector("#results tbody");
form.addEventListener("submit", event => 
{
    event.preventDefault();
    const searchBookName = document.querySelector("#bookName").value;
    const searchGenre = document.querySelector("#genre").value;

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBookName}&key=${apiKey}`)
    .then(response => {console.log(response);
        return response.json()
    } )
    .then(data => {
    const books = data.items;
    resultsTable.innerHTML = "";
    books.forEach(book => {
        const title = book.volumeInfo.title;
        const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown";
        const publishedDate = book.volumeInfo.publishedDate;
        const previewLink = book.volumeInfo.previewLink;
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = title;
        const authorCell = document.createElement("td");
        authorCell.textContent = author;
        const publishedDateCell = document.createElement("td");
        publishedDateCell.textContent = publishedDate;
        const previewLinkCell = document.createElement("td");
        const previewLinkButton = document.createElement("a");
        previewLinkButton.textContent = "Preview";
        previewLinkButton.href = previewLink;
        previewLinkCell.appendChild(previewLinkButton);
        row.appendChild(titleCell);
        row.appendChild(authorCell);
        row.appendChild(publishedDateCell);
        row.appendChild(previewLinkCell);
        resultsTable.appendChild(row);
        });
    })
    .catch(error => console.error(error));
});