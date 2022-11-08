let myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.Title = Title
    this.Author = Author
    this.Pages = Pages
    this.Read = Read
}

function addBookToLibrary(Title, Author, Pages,  Read) {
    let book = new Book(Title, Author, Pages, Read);
    myLibrary.push(book);
}

function displayBooks() {
    const books = document.querySelector(".books")
    myLibrary.forEach(myLibrary => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrary[key]}`);
            card.appendChild(para); 
        }
    })
}
addBookToLibrary('Book1', 'Author1', "298 Pages", "Read");
addBookToLibrary('Book2', 'Author2', "172 Pages", "Not Read Yet");
addBookToLibrary('Book3', 'Author3', "512 Pages", "Read");
addBookToLibrary('Book4', 'Author4', "467 Pages", "Read");

console.log("End of array", myLibrary);
displayBooks();