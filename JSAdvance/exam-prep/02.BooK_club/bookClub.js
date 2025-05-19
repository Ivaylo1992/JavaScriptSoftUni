class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {

    for (const book of this.books) {
      if (book.title === title) {
        return `The book "${book.title}" by ${book.author} is already in ${this.library} library.`;
      }
    }
    
    const newBook = {
      title,
      author,
    };

    this.books.push(newBook);

    return `The book "${newBook.title}" by ${newBook.author} has been added to ${this.library} library.`;
  }

  addMember(memberName) {
    if (this.members.includes(memberName)) {
      return `Member ${memberName} is already a part of the book club.`;
    }

    this.members.push(memberName);
    return `Member ${memberName} has been joined to the book club.`;
  }

  assignBookToMember(memberName, bookTitle) {
    if (!this.members.includes(memberName)) {
      throw new Error(`Member ${memberName} not found.`);
    }

    for (const book of this.books) {
      if (book.title === bookTitle) {
        const bookIndex = this.books.indexOf(book);
        let removedBook = this.books.splice(bookIndex, 1);
        
        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`;
      }
    }

    throw new Error(`Book "${bookTitle}" not found.`);
  }

  generateReadingReport() {
    if (!this.members.length) {
      return `No members in the book club.`;
    }

    if (!this.books.length) {
      return `No available books in the library.`;
    }

    const result = this.books.map((b) => {
      return `"${b.title}" by ${b.author}`;
    });
    

    result.unshift(`Available Books in ${this.library} library:`);

    return result.join('\n')
  }

}

//Testing All

let Club = new BookClub("The Bookaholics");
Club.addBook("To Kill a Mockingbird", "Harper Lee")
  // 'The book "To Kill a Mockingbird" by Harper Lee has been added to The Bookaholics library.'

Club.addBook("1984", "George Orwell")
  // 'The book "1984" by George Orwell has been added to The Bookaholics library.'

Club.addMember("Alice")
  // "Member Alice has been joined to the book club."

const result = Club.assignBookToMember("Alice", "To Kill a Mockingbird")
const expected = 'Member Alice has been assigned the book "To Kill a Mockingbird" by Harper Lee.'


const result2 = Club.generateReadingReport()
const expected2 = 'Available Books in The Bookaholics library:\n"1984" by George Orwell'

console.log(expected2);
console.log(result2);

