class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getBook() {
    return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Genre: ${this.genre}`;
  }
}

const askGenre = () => {
  // Ask book genre
  let genre;
  const genreList = ["ADVENTURE", "TERROR", "FANTASY"];
  console.log("GENRES: Adventure, Terror, Fantasy");
  do {
    genre = prompt("Write the genre of the book");
    console.log();
  } while (
    !genre ||
    genre.length <= 0 ||
    genreList.indexOf(genre.toUpperCase()) == -1
  );
  return genre;
};

const askTitle = () => {
  // Ask book title
  let bookTitle;
  do {
    bookTitle = prompt("Write the book title.");
  } while (!bookTitle || bookTitle.length <= 0);
  return bookTitle;
};

const askAuthor = () => {
  // Ask book author
  let author;
  do {
    author = prompt("Write the author of the book.");
  } while (!author || author.length <= 0);
  return author;
};

const askYear = () => {
  // Ask book year
  let year;
  do {
    year = parseInt(prompt("Write the year of the publication (YYYY)."));
  } while (!year || isNaN(year) || year <= 999 || year > 9999);
  return year;
};

const createBook = () => {
  // Create book object using the askXX() functions
  let title = askTitle();
  let author = askAuthor();
  let year = askYear();
  let genre = askGenre();
  return (book = new Book(title, author, year, genre));
};

const createBooks = () => {
  // Create 3 books
  let books = [];
  for (let index = 1; index <= 3; index++) {
    books.push(createBook());
  }
  return books;
};

const showBooks = (books) => {
  // Show all books information inside books array
  for (const book of books) {
    console.log(`${book.title} Book information:`);
    console.log(
      `Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\nGenre: ${book.genre}`
    );
  }
};

const showSortedAuthors = (books) => {
  // Show sorted authors in the books array
  let authors = [];
  for (const book of books) {
    authors.push(book.author);
  }
  return `Authors alphabetically sorted: ${authors.sort()}`;
};

const getBookByGenre = (books) => {
  const genre = askGenre();
  for (const book of books) {
    if (genre.toUpperCase() == book.genre.toUpperCase()) {
      console.log(book.getBook());
    }
  }
};

let books = createBooks(); // create books
