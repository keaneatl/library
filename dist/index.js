"use strict";
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.collectInfo;
    }
    collectInfo() {
        const { title, author, pages } = this;
        return `${title} by ${author}, ${pages} pages.`;
    }
}
const library = (() => {
    let myLibrary = [];
    // cache DOM
    const submitBook = document.querySelector("#submit-book");
    const addBookContainer = document.querySelector("#add-book-container");
    const addBookButton = document.querySelector(".add-book-button");
    const closeForm = document.querySelector(".close-form");
    // bind events
    submitBook.addEventListener("click", () => {
        addBookToLib(myLibrary);
        displayLibrary(myLibrary);
    });
    submitBook.addEventListener("click", () => {
        addBookContainer.removeAttribute("style");
        addBookButton.removeAttribute("style");
    });
    addBookButton.addEventListener("click", () => {
        addBookContainer.setAttribute("style", "display: flex;");
        addBookButton.setAttribute("style", "display: none;");
    });
    closeForm.addEventListener("click", () => {
        addBookContainer.removeAttribute("style");
        addBookButton.removeAttribute("style");
    });
    if (!localStorage.getItem("savedLibrary")) {
        createLibStorage();
    }
    myLibrary = getStoredLibrary();
    displayLibrary(myLibrary);
})();
function createLibStorage() {
    const sampleBook = new Book("Harry Potter and the Philosopher's Stone", "J.K Rowling", 223, "Planning to Read");
    localStorage.setItem("savedLibrary", JSON.stringify([sampleBook]));
}
function updateLibraryStorage(newLib) {
    localStorage.setItem("savedLibrary", JSON.stringify(newLib));
}
function addBookToLib(lib) {
    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author");
    const bookPages = document.querySelector("#book-pages");
    const bookStatus = document.querySelector("input[name=book_status]:checked");
    if (!bookTitle.value || !bookAuthor.value || !bookPages.value) {
        return;
    }
    const newBook = new Book(bookTitle.value, bookAuthor.value, +bookPages.value, bookStatus.value);
    lib.push(newBook);
    updateLibraryStorage(lib);
    resetNewBookForm();
}
function getStoredLibrary() {
    const storedLibrary = JSON.parse(localStorage.getItem("savedLibrary"));
    storedLibrary.map((book) => {
        const { title, author, pages } = book;
        book.collectInfo = () => {
            return `${title} by ${author}, ${pages} pages.`;
        };
        return book;
    });
    return storedLibrary;
}
function displayLibrary(myLibrary) {
    const booksContainer = document.querySelector(".books-container");
    myLibrary.forEach((book, i) => {
        if (!!document.getElementById(`book-${i}`)) {
            return;
        }
        const newBookCard = document.createElement("div");
        const newBookDesc = document.createElement("p");
        const markBookRead = document.createElement("p");
        const deleteNewBook = document.createElement("img");
        const newBookInfo = book.collectInfo();
        deleteNewBook.setAttribute("src", "images/cardclose.png");
        deleteNewBook.classList.add("delete-book");
        deleteNewBook.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            newBookCard.remove();
            localStorage.setItem("savedLibrary", JSON.stringify(myLibrary));
        });
        newBookCard.classList.add("book-card");
        newBookCard.setAttribute("id", `book-${i}`);
        newBookDesc.textContent = `${newBookInfo}`;
        newBookDesc.classList.add("book");
        markBookRead.textContent = "Mark as read";
        markBookRead.classList.add("mark-read");
        markBookRead.addEventListener("click", () => {
            newBookCard.classList.toggle("book-card");
            newBookCard.classList.toggle("mark-read-bg");
            book.status === "Read"
                ? (book.status = "Planning to Read")
                : (book.status = "Read");
            localStorage.setItem("savedLibrary", JSON.stringify(myLibrary));
        });
        if (book.status === "Read") {
            newBookCard.classList.toggle("book-card");
            newBookCard.classList.toggle("mark-read-bg");
        }
        newBookCard.append(deleteNewBook);
        newBookCard.append(newBookDesc);
        newBookCard.append(markBookRead);
        booksContainer.append(newBookCard);
    });
}
const hamBurgerMenu = (() => {
    // cache DOM
    const hamBurgerIcon = document.querySelector(".hambg-icon");
    const hamBurgerMenu = document.querySelector("#hambgmenu");
    const closeHamBurgerIcon = document.querySelector(".close-hambg-icon");
    const mainContainer = document.querySelector(".main-container");
    // bind events
    hamBurgerIcon.addEventListener("click", () => {
        mainContainer.setAttribute("style", "display: none;");
        hamBurgerMenu.setAttribute("style", "display: flex;");
    });
    closeHamBurgerIcon.addEventListener("click", () => {
        mainContainer.removeAttribute("style");
        hamBurgerMenu.removeAttribute("style");
    });
})();
function resetNewBookForm() {
    const bookTitle = document.querySelector("#book-title");
    const bookAuthor = document.querySelector("#book-author");
    const bookPages = document.querySelector("#book-pages");
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
}
// sample book
// const sampleBook = (() => {
//   // cache DOM
//   const sampleBook = document.querySelector("#sample-book");
//   const markSampleRead = document.querySelector(".mark-read");
//   const deleteSampleBook = document.querySelector(".delete-book");
//   // bind events
//   markSampleRead.addEventListener("click", () => {
//     sampleBook.classList.toggle("book-card");
//     sampleBook.classList.toggle("mark-sample-read");
//   });
//   deleteSampleBook.addEventListener("click", () => {
//     sampleBook.remove();
//   });
// })();
