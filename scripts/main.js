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
    let bookIndex = document.querySelectorAll('[data-index]');
    let bookIndexArr = Array.from(bookIndex);
    
    myLibrary.forEach(book => {
        if (bookIndexArr[myLibrary.indexOf(book)] === undefined || !bookIndexArr[myLibrary.indexOf(book)].hasAttribute('data-index')){
            const newBookCard = document.createElement('div');
            const newBookDesc = document.createElement('p');
            const deleteNewBook = document.createElement('img');
            const newBookInfo = book.info();
            deleteNewBook.setAttribute('src', 'images/cardclose.png');
            deleteNewBook.classList.add('delete-book');
            deleteNewBook.addEventListener('click', () => {
                myLibrary.splice(myLibrary.indexOf(book), 1);
                newBookCard.remove()
            })
            newBookCard.classList.add('book-card');
            newBookCard.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
            newBookDesc.textContent = `${newBookInfo}`;
            newBookDesc.classList.add('book');
    
            newBookCard.append(deleteNewBook);
            newBookCard.append(newBookDesc);
            booksContainer.append(newBookCard);
        }
        else if (bookIndexArr[myLibrary.indexOf(book)].hasAttribute('data-index'))return
    })
}




const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');

