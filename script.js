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
    displayBooks();
}

function displayBooks() {
    const books = document.querySelector(".books");
    const removeDivs = document.querySelectorAll(".card");
    for (let i = 0; i < removeDivs.length; i++) {
        removeDivs[i].remove();
    }
    let index = 0;
    myLibrary.forEach(myLibrarys => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        
        const removeBookBtn = document.createElement("button");
        removeBookBtn.classList.add("removebookbtn");
        removeBookBtn.textContent = ("Remove From Library")
        removeBookBtn.dataset.linkedArray = index;
        index++;
        card.appendChild(removeBookBtn);
        removeBookBtn.addEventListener("click", removeBook);

        function removeBook() {
            let bookToRemove = removeBookBtn.dataset.linkedArray;
            myLibrary.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayBooks();
        }
        const readStatusBtn = document.createElement("button");
        readStatusBtn.classList.add("readstatusbtn");
        readStatusBtn.textContent = ("Toggle Read Status");
        readStatusBtn.textContent.linkedArray = index;
        card.appendChild(readStatusBtn);
        readStatusBtn.addEventListener("click", toggleReadStatus);
        function toggleReadStatus() {
            let retrieveBookToToggle = readStatusBtn.textContent.linkedArray = index;
            Book.prototype = Object.create(Book.prototype);
            const toggleBook = new Book;
            if (myLibrary[parseInt(retrieveBookToToggle).Read == "Yes"]) {
                toggleBook.Read = "No";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            } else if ((myLibrary[parseInt(retrieveBookToToggle)].Read) == "No") {
                toggleBook.Read = "Yes";
                myLibrary[parseInt(retrieveBookToToggle)].Read = toggleBook.Read;
            }
            displayBooks();
        }

        for (let key in myLibrarys) {
            console.log(`${key}: ${myLibrarys[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${myLibrarys[key]}`);
            card.appendChild(para); 
        }
    index++;
    })
}
const addBookButton = document.querySelector(".addbookbtn");
addBookButton.addEventListener("click", displayForm);

function displayForm() {
    document.getElementById("bookform").style.display = "";
}
const submitButton = document.querySelector(".submitbtn");
submitButton.addEventListener("click", intakeFormData);

function intakeFormData() {
    let Title = document.getElementById("Title").value;
    let Author = document.getElementById("Author").value;
    let Pages = document.getElementById("Pages").value;
    let Read = document.getElementById("Read").value;
    if (Title == "" || Author == "" || Pages == "" || Read == "") {
        return;
    }
    addBookToLibrary(Title, Author, Pages,  Read);
    document.getElementById("add-book").reset();
}
const clearButton = document.querySelector(".resetbtn");
clearButton.addEventListener("click", clearForm);

function clearForm() {
    document.getElementById("add-book").reset();
}