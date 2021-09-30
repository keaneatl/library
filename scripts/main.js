class Book {
    constructor(title, author, pages, status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

    info(){
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages.';
    }
}

const library = (() => {
    let newBook;
    let myLibrary = [];
    let storedBooks;

    // cache DOM
    const booksContainer = document.querySelector('.books-container');
    const bookTitle = document.querySelector('#book-title');
    const bookAuthor = document.querySelector('#book-author');
    const bookPages = document.querySelector('#book-pages');
    const submitBook = document.querySelector('#submit-book');
    const addBookContainer = document.querySelector('#add-book-container');
    const addBookButton = document.querySelector('.add-book-button');
    const closeForm = document.querySelector('.close-form');

    // bind events
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

    function addBookToLib(){
        if (bookTitle.value === "" || bookAuthor.value === "" || bookPages.value === "")return
        let bookStatus = document.querySelector("input[name=book-status]:checked");
        newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
        myLibrary.push(newBook);
        bookTitle.value = "";
        bookAuthor.value = "";
        bookPages.value = "";
        localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
    }

    function displayBook(){
        let bookIndexArr = Array.from(document.querySelectorAll('[data-index]'));
        myLibrary.forEach((book, i) => {
            console.log(book.status)
            if (bookIndexArr[i] === undefined || 
            !bookIndexArr[i].hasAttribute('data-index')){
                const newBookCard = document.createElement('div');
                const newBookDesc = document.createElement('p');
                const markBookRead = document.createElement('p');
                const deleteNewBook = document.createElement('img');
                const newBookInfo = book.info();
                deleteNewBook.setAttribute('src', 'images/cardclose.png');
                deleteNewBook.classList.add('delete-book');
                deleteNewBook.addEventListener('click', () => {
                    myLibrary.splice(i, 1);
                    newBookCard.remove()
                    localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
                })
    
                newBookCard.classList.add('book-card');
                newBookCard.setAttribute('data-index', `${i}`);
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
            else if (bookIndexArr[i].hasAttribute('data-index'))return
        })
    }

    function _saveLibrary(){
        localStorage.setItem('currentLibrary', JSON.stringify(myLibrary));
        storedBooks = JSON.parse(localStorage.getItem("currentLibrary"));
    }

    if(!localStorage.getItem('currentLibrary')){
        _saveLibrary();
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

})();

const hamBurger = (()=> {
    // cache DOM
    const hamBurger = document.querySelector('.hambg');
    const hamBurgerMenu = document.querySelector('#hambgmenu');
    const closeHamBurger = document.querySelector('.close-hambg');
    const mainContainer = document.querySelector('.main-container');

    // bind events
    hamBurger.addEventListener('click', () => {
        mainContainer.setAttribute('style', 'display: none;');
        hamBurgerMenu.setAttribute('style', 'display: flex;');
    })
    closeHamBurger.addEventListener('click', () => {
        mainContainer.removeAttribute('style');
        hamBurgerMenu.removeAttribute('style');
    })
})();

const sampleBook = (() => {
    // cache DOM
    const sampleBook = document.querySelector('#sample-book');
    const markSampleRead = document.querySelector('.mark-read');
    const deleteSampleBook = document.querySelector('.delete-book');
    // bind events
    markSampleRead.addEventListener('click', () => {
        sampleBook.classList.toggle('book-card');
        sampleBook.classList.toggle('mark-sample-read');
    })
    deleteSampleBook.addEventListener('click', () => {
        sampleBook.remove();
    })
})();