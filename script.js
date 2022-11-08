let myLibrary = [];
addBookToLibrary('Book1', 'Author1', 298, true);
addBookToLibrary('Book2', 'Author2', 172, false);
addBookToLibrary('Book3', 'Author3', 512, true);
addBookToLibrary('Book4', 'Author4', 467, true);

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title, author, pages,  read) {
    myLibrary.push(new Book(title, author, pages, read));
}

function displayLibrary() {
    console.table(myLibrary)
}