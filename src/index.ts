class Book {
  title: string;
  author: string;
  pages: number;
  status: string;

  constructor(title: string, author: string, pages: number, status: string) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.collectInfo;
  }

  public collectInfo() {
    const { title, author, pages } = this;
    return `${title} by ${author}, ${pages} pages.`;
  }
}

interface ParsedBook {
  title: string;
  author: string;
  pages: number;
  status: string;
  collectInfo(): string;
}

const library = (() => {
  let myLibrary: Array<Book> = [];

  // cache DOM
  const submitBook: HTMLButtonElement = document.querySelector(
    "#submit-book"
  ) as HTMLButtonElement;
  const addBookContainer: HTMLDivElement = document.querySelector(
    "#add-book-container"
  ) as HTMLDivElement;
  const addBookButton: HTMLButtonElement = document.querySelector(
    ".add-book-button"
  ) as HTMLButtonElement;
  const closeForm: HTMLImageElement = document.querySelector(
    ".close-form"
  ) as HTMLImageElement;

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
  const sampleBook = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J.K Rowling",
    223,
    "Planning to Read"
  );
  localStorage.setItem("savedLibrary", JSON.stringify([sampleBook]));
}

function updateLibraryStorage(newLib: Array<Book>) {
  localStorage.setItem("savedLibrary", JSON.stringify(newLib));
}

function addBookToLib(lib: Array<Book>) {
  const bookTitle = document.querySelector("#book-title") as HTMLInputElement;
  const bookAuthor = document.querySelector("#book-author") as HTMLInputElement;

  const bookPages: HTMLInputElement = document.querySelector(
    "#book-pages"
  ) as HTMLInputElement;

  const bookStatus: HTMLInputElement = document.querySelector(
    "input[name=book_status]:checked"
  ) as HTMLInputElement;

  if (!bookTitle.value || !bookAuthor.value || !bookPages.value) {
    return;
  }

  const newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    +bookPages.value,
    bookStatus.value
  );

  lib.push(newBook);
  updateLibraryStorage(lib);
  resetNewBookForm();
}

function getStoredLibrary() {
  const storedLibrary: Array<Book> = JSON.parse(
    localStorage.getItem("savedLibrary") as string
  );
  storedLibrary.map((book: ParsedBook) => {
    const { title, author, pages } = book;
    book.collectInfo = () => {
      return `${title} by ${author}, ${pages} pages.`;
    };
    return book;
  });

  return storedLibrary;
}

function displayLibrary(myLibrary: Array<Book>) {
  const booksContainer: HTMLDivElement = document.querySelector(
    ".books-container"
  ) as HTMLDivElement;

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
  const hamBurgerIcon: HTMLImageElement = document.querySelector(
    ".hambg-icon"
  ) as HTMLImageElement;
  const hamBurgerMenu: HTMLDivElement = document.querySelector(
    "#hambgmenu"
  ) as HTMLDivElement;
  const closeHamBurgerIcon: HTMLImageElement = document.querySelector(
    ".close-hambg-icon"
  ) as HTMLImageElement;
  const mainContainer: HTMLDivElement = document.querySelector(
    ".main-container"
  ) as HTMLDivElement;

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
  const bookTitle: HTMLInputElement = document.querySelector(
    "#book-title"
  ) as HTMLInputElement;
  const bookAuthor: HTMLInputElement = document.querySelector(
    "#book-author"
  ) as HTMLInputElement;
  const bookPages: HTMLInputElement = document.querySelector(
    "#book-pages"
  ) as HTMLInputElement;

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
