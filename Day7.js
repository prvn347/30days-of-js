//day 7 objects

const book = {
  "title": "some book",
  "author": "some author",
  "year": "2020",
};

console.log(typeof book);
console.log(book);

//task 2
console.log(
  "the book title is " + book.title + "and book's author is " + book.author
);

//TASK 3  i don't understand the task requirement

const book1 = {
  "title": "some book",
  "author": "some author",
  "year": "2020",
  getDetails: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
};
//task 4
const book2 = [
  {
    "title": "some book",
    "author": "some author",
    "year": "2020",
    addYear: function (year) {
      this.year = year;
      return `Title: ${this.title}, Author: ${this.author} and the updated year is ${this.year}`;
    },
  },
  {
    "title ": "1 tha raja",
    "author": "1 this ranji",
    "year": "khtm kahni",
  },
];
// console.log(book2.addYear(2323));

//TASK 5    skipped very easy but time taking nothing new

//task 6 and 7 are similler to prev task 4 and 5

//task 8
book2.map((item) => {
  console.log(
    "phla book ka title" +
      item.title +
      "aur author" +
      item.author +
      "and uska published date" +
      item.year +
      "\n"
  );
});

//task 9
const keys = Object.keys(book1);

const values = Object.values(book1);
console.log("book1's keys are " + keys + "their values are " + values + "\n");

//done day 7
