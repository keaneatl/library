let myLibrary = [];
const sampleBook = document.querySelector('#sample-book');
const markSampleRead = document.querySelector('.mark-read');
const deleteSampleBook = document.querySelector('.delete-book');
const mainContainer = document.querySelector('.main-container');
const bookTitle = document.querySelector('#book-title');
const bookAuthor = document.querySelector('#book-author');
const bookPages = document.querySelector('#book-pages');
const submitBook = document.querySelector('#submit-book');
const booksContainer = document.querySelector('.books-container');
const addBookContainer = document.querySelector('#add-book-container');
const addBookButton = document.querySelector('.add-book-button');
const closeForm = document.querySelector('.close-form')
const hamBurger = document.querySelector('.hambg');
const hamBurgerMenu = document.querySelector('#hambgmenu');
const closeHamBurger = document.querySelector('.close-hambg');
let bookStatus = document.querySelector("input[name=book-status]:checked");
let storedBooks;

markSampleRead.addEventListener('click', () => {
    sampleBook.classList.toggle('book-card');
    sampleBook.classList.toggle('mark-sample-read');
    localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
})
deleteSampleBook.addEventListener('click', () => {
    sampleBook.remove();
})

submitBook.addEventListener('click', addBookToLib);
submitBook.addEventListener('click', displayBook);
submitBook.addEventListener('click', () => {
    addBookContainer.removeAttribute('style');
    addBookButton.removeAttribute('style');
})
addBookButton.addEventListener('click', () => {
    addBookContainer.setAttribute('style', 'display: flex;');
    addBookButton.setAttribute('style', 'display: none;');
})
closeForm.addEventListener('click', () => {
    addBookContainer.removeAttribute('style');
    addBookButton.removeAttribute('style');
})

hamBurger.addEventListener('click', () => {
    mainContainer.setAttribute('style', 'display: none;');
    hamBurgerMenu.setAttribute('style', 'display: flex;');
})

closeHamBurger.addEventListener('click', () => {
    mainContainer.removeAttribute('style');
    hamBurgerMenu.removeAttribute('style');
})

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function(){
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages.';
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
    localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
}

function displayBook(){
    let bookIndex = document.querySelectorAll('[data-index]');
    let bookIndexArr = Array.from(bookIndex);
    
    myLibrary.forEach(book => {
        if (bookIndexArr[myLibrary.indexOf(book)] === undefined || 
        !bookIndexArr[myLibrary.indexOf(book)].hasAttribute('data-index')){
            const newBookCard = document.createElement('div');
            const newBookDesc = document.createElement('p');
            const markBookRead = document.createElement('p');
            const deleteNewBook = document.createElement('img');
            const newBookInfo = book.info();
            deleteNewBook.setAttribute('src', 'images/cardclose.png');
            deleteNewBook.classList.add('delete-book');
            deleteNewBook.addEventListener('click', () => {
                myLibrary.splice(myLibrary.indexOf(book), 1);
                newBookCard.remove()
                localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
            })

            newBookCard.classList.add('book-card');
            newBookCard.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
            newBookDesc.textContent = `${newBookInfo}`;
            newBookDesc.classList.add('book');
            markBookRead.textContent = 'Mark as read';
            markBookRead.classList.add('mark-read');
            markBookRead.addEventListener('click', () => {
                newBookCard.classList.toggle('book-card');
                newBookCard.classList.toggle('mark-read-bg');
                book.status === 'Read' ? book.status = 'Planning to Read' : book.status = 'Read';
                localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
            }) 
            if (book.status === 'Read'){
                newBookCard.classList.toggle('book-card');
                newBookCard.classList.toggle('mark-read-bg');
            }

            newBookCard.append(deleteNewBook);
            newBookCard.append(newBookDesc);
            newBookCard.append(markBookRead);
            booksContainer.append(newBookCard);
        }
        else if (bookIndexArr[myLibrary.indexOf(book)].hasAttribute('data-index'))return
    })
}

function saveLibrary(){
    localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
    storedBooks = JSON.parse(localStorage.getItem("currentLibrary"));
}

if(!localStorage.getItem('currentLibrary')){
    saveLibrary();
    myLibrary = storedBooks;
    myLibrary.forEach(book =>{
        book.info = function(){
            return this.title + ' by ' + this.author + ', ' + this.pages + ' pages.';
        }
    })
}
else{
    storedBooks = JSON.parse(localStorage.getItem("currentLibrary"));
    myLibrary = storedBooks;
    myLibrary.forEach(book =>{
        book.info = function(){
            return this.title + ' by ' + this.author + ', ' + this.pages + ' pages.';
        }
    })
    displayBook();
}