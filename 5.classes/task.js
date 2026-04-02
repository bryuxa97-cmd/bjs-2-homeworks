class PrintEditionItem {
  constructor(itemName, itemReleaseDate, itemPagesCount) {
    this.name = itemName;
    this.releaseDate = itemReleaseDate;
    this.pagesCount = itemPagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newStateValue) {
    if (newStateValue < 0) {
      this._state = 0;
      return;
    }

    if (newStateValue > 100) {
      this._state = 100;
      return;
    }

    this._state = newStateValue;
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(magazineName, magazineReleaseDate, magazinePagesCount) {
    super(magazineName, magazineReleaseDate, magazinePagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(bookAuthor, bookName, bookReleaseDate, bookPagesCount) {
    super(bookName, bookReleaseDate, bookPagesCount);
    this.author = bookAuthor;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(bookAuthor, bookName, bookReleaseDate, bookPagesCount) {
    super(bookAuthor, bookName, bookReleaseDate, bookPagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(bookAuthor, bookName, bookReleaseDate, bookPagesCount) {
    super(bookAuthor, bookName, bookReleaseDate, bookPagesCount);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(bookAuthor, bookName, bookReleaseDate, bookPagesCount) {
    super(bookAuthor, bookName, bookReleaseDate, bookPagesCount);
    this.type = "detective";
  }
}

class Library {
  constructor(libraryName) {
    this.name = libraryName;
    this.books = [];
  }

  addBook(bookItem) {
    if (bookItem.state > 30) {
      this.books.push(bookItem);
    }
  }

  findBookBy(type, value) {
    const findResult = this.books.find((item) => item[type] === value);
    return findResult || null;
  }

  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);
    if (!book) return null;
    this.books = this.books.filter((item) => item.name !== bookName);
    return book;
  }
}

class Student {
  constructor(studentName) {
    this.name = studentName;
    this.marks = {};
  }

  addMark(markValue, subjectName) {
    if (markValue < 2 || markValue > 5) {
      return;
    }

    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }

    this.marks[subjectName].push(markValue);
  }

  getAverageBySubject(subjectName) {
    const subjectMarks = this.marks[subjectName];

    if (!subjectMarks || subjectMarks.length === 0) {
      return 0;
    }

    const marksSum = subjectMarks.reduce((currentSum, currentMark) => {
      return currentSum + currentMark;
    }, 0);

    return marksSum / subjectMarks.length;
  }

  getAverage() {
    const subjectNames = Object.keys(this.marks);

    if (subjectNames.length === 0) {
      return 0;
    }

    let totalAverageSum = 0;

    for (let subjectIndex = 0; subjectIndex < subjectNames.length; subjectIndex += 1) {
      const currentSubjectName = subjectNames[subjectIndex];
      const subjectAverage = this.getAverageBySubject(currentSubjectName);
      totalAverageSum += subjectAverage;
    }

    return totalAverageSum / subjectNames.length;
  }
}

