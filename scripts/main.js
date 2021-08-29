let myLibrary = []

function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;

    this.info = function(){
        return title + ' by ' + author + ', ' + pages + ', ' + status
    }
}

function addBooktoLib(){
    let book = prompt('')
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'not read yet');