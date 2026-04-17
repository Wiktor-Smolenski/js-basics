//theory first
//forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});

//map
numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});
console.log(numbers);

//filter
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);

//reduce
numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 15
console.log(numbers); // Output: [1, 2, 3, 4, 5];

//library manager
const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

console.log("Books in the Library:\n");

function getBookInformation(catalog) {
  return catalog.map(book => `${book.title} by ${book.author}`).join("\n");
}

console.log(getBookInformation(library));

console.log("\nList of book summaries:\n");

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n");
}

console.log(getBookSummaries(library));

console.log("\nList of books by Arvid Kahl:\n");

function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

console.log(getBooksByAuthor(library, "Arvid Kahl"));

console.log("\nList of books by James Clear:\n");
console.log(getBooksByAuthor(library, "James Clear"));

console.log("\nTotal number of pages for all library books:\n");

function getTotalPages (catalog) {
  return catalog.reduce((i, catalog) => i + catalog.pages, 0);
}
console.log(getTotalPages(library));


//book sorter
let books = [
  {title: "Book1", authorName: "Author1", releaseYear: 1},
  {title: "Book2", authorName: "Author2", releaseYear: 2},
  {title: "Book3", authorName: "Author3", releaseYear: 3}
];
function sortByYear(book1, book2) {
  if (book1.releaseYear === book2.releaseYear) {
    return 0;
  } else if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  }
}
let filteredBooks = books.filter((obj) => obj.releaseYear < 3);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);

//index finder
function getIndexToIns (arr, number) {

let sorted = arr.slice().sort((a, b) => a - b);

const index = sorted.findIndex(value => value >= number)

return index === -1 ? sorted.length : index;
}

console.log(getIndexToIns([], 19));

// array difference
function diffArray(arr1, arr2) {
  return [
    ...arr1.filter(item => !arr2.includes(item)),
    ...arr2.filter(item => !arr1.includes(item))
  ];
}

console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));

//destroyer function
function destroyer (arr, ...args) {
  return arr.filter(word => !args.includes(word));
}
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));

//matching objects filter
function whatIsInAName(arr, obj) {

  return arr.filter(object =>
    Object.keys(obj).every(key => object[key] === obj[key]));

}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 })) //6