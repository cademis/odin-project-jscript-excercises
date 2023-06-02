const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (data) {
  let allBooks = [];
  for (let book of data) {
    allBooks.push(book.title);
  }
  return allBooks;
};

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
