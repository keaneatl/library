const myLibrary = [];
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const submitBook = document.querySelector('#submit-book');
const booksContainer = document.querySelector('.books-container');
let bookStatus = document.querySelector("input[name=book-status]:checked");
let newBook;

// WORK ON DELETING A BOOK, MAKING THE FORM POP UP AFTER CLICKING A BUTTON,
//  AND TOGGLE IT BEING READ/UNREAD
// newBook.prototype.toggleRead = function(){

// }

submitBook.addEventListener('click', addBookToLib);
submitBook.addEventListener('click', displayBook);

// if (document.querySelector('#status-1').checked){
//     bookStatus.value = document.querySelector('#status-1').value;
// }

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', ' + status
    }
}

function addBookToLib(){
    if (bookTitle.value ==="" || bookAuthor.value === "" || bookPages.value === "")return
    bookStatus = document.querySelector("input[name=book-status]:checked");
    newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    myLibrary.push(newBook);
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
}



function displayBook(){
    myLibrary.forEach(book => {
        const newBookCard = document.createElement('div');
        const newBookDesc = document.createElement('p');
        const deleteNewBook = document.createElement('img');
        const newBookInfo = book.info();
        deleteNewBook.setAttribute('src', 'images/close.svg');
        deleteNewBook.classList.add('delete-book');
        newBookCard.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
        newBookDesc.textContent = `${newBookInfo}`;
        newBookDesc.classList.add('book');
        newBookCard.classList.add('book-card');
        newBookCard.append(deleteNewBook);
        newBookCard.append(newBookDesc);
        booksContainer.append(newBookCard);
    })
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

