interface IBook {
  readonly title: string;
  readonly author: string;
  readonly year: number;
}

abstract class Book {
  constructor(
    readonly title: string,
    readonly author: string,
    readonly year: number
  ) {}

  abstract checkout(): void;
}

class LibraryBook extends Book implements IBook {
  getTitle(): string {
    return this.title;
  }

  checkout(): void {
    console.log(`Книга ${this.title} выдана на руки`);
  }
}

class DigitalBook extends Book implements IBook {
  getTitle(): string {
    return this.title;
  }
  checkout(): void {
    console.log(`Книга ${this.title} загружена на устройство.`);
  }
}

class Library {
  private books: IBook[] = [];
  addBook(book: Book): void {
    this.books.push(book);
  }
  checkoutBook(title: string): void {
    const book = this.books.find((book) => (book as Book).title === title);
    if (book) {
      (book as Book).checkout();
    } else {
      console.log(`Книга ${title} не найдена`);
    }
  }
}

const library = new Library();

const physicalBook = new LibraryBook("Война и мир", "Лев Толстой", 1869);
const digitalBook = new DigitalBook("1984", "Джордж Оруэлл", 1949);

library.addBook(physicalBook);
library.addBook(digitalBook);

library.checkoutBook("Война и мир");
library.checkoutBook("1984");
library.checkoutBook("Неизвестная книга");
console.log(library);