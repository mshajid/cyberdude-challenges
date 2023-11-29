// I need to create a book lists in an Array of Objects.
// Each object should contain Book Name / Book Author / Pages / Genre
// Logic: I wanted to find How many hours would go to complete each book.
// ! 238 Words Per Minute (Silent Reader)
// ! 183 Words Per Minute (Loud Reader)
// ! Formula -> 2500 Words / 238 Words Per Minute = 10.50 (It Will take approximately ~10 Minutes) (Avergae Silent Reader);
// ! Formula -> 2500 Words / 183 Words Per Minute = 13.66 (It Will take appriximately ~13 Minutes) (Average Loud Reader);

// First Match with the book, then map and find the correct answer.

const bookLists = [
  {
    id: 1,
    bookName: "Think Like A Monk",
    author: "Jay Shetty",
    words: 101370,
  },
  {
    id: 2,
    bookName: "Atomic Habits",
    author: "James Clear",
    words: 80000,
  },
  {
    id: 3,
    bookName: "Courage Is Calling",
    author: "Ryan Holiday",
    words: 70000,
  },
];

const userPrompt = "Think Like A Monk";

const findHours = bookLists
  .filter(function (value) {
    return value.bookName === userPrompt;
  })
  .map(function (value) {
    return parseInt(value.words);
  }); 
  
  // This will return an array! using parseInt converted the array into an Number.

const findBookDetails = bookLists.find(function (value) {
  return value.bookName === userPrompt;
});

// Todo: Source : https://www.tutorialspoint.com/how-to-convert-array-of-strings-to-array-of-numbers-in-javascript

if (findHours) {
  const totalHours = (findHours / 238 / 60).toFixed(2);
  console.log(`

    📕 Book Name: ${findBookDetails.bookName}.
    ✍🏽 Author: ${findBookDetails.author}.
    ⌛ Hours to Complete: ${totalHours} Hours.  
    `);
} else {
  console.log("Enter A Correct Book On Our Data Collection");
}
