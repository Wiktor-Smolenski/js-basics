function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

function getPunctuationCount(sentence) {
  const punctuations = ".,!?;:-()[]{}\"'–";
  let count = 0;

  for (const char of sentence) {
    if (punctuations.includes(char)) {
      count++;
    }
  }
  return count;
}

function getWordCount(sentence) {
  if (sentence.trim() === '') {
    return 0;
  }
  
  const words = sentence.trim().split(' ');
  let count = 0;

  for (const word of words) {
    if (word !== '') {
      count++;
    }
  }

  return count;
}

const testSentence = "Hello, world! This is a test sentence.";
console.log("Test sentence:", testSentence);
console.log("Vowel count:", getVowelCount(testSentence)); // Vowel count: 9
console.log("Consonant count:", getConsonantCount(testSentence)); // Consonant count: 21
console.log("Punctuation count:", getPunctuationCount(testSentence)); // Punctuation count: 3
console.log("Word count:", getWordCount(testSentence)); // Word count: 7


// Space Mission Crew Management
const squad = [];

const firstAstronaut = {
  id: 1,
  name: "Andy",
  role: "Commander",
  isEVAEligible: true,
  priority: 3
};

function addCrewMember(crew, astronaut) {
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].id === astronaut.id) {
      console.log("Duplicate ID: " + astronaut.id);
      return;
    }
  }
  crew.push(astronaut);
}

addCrewMember(squad, firstAstronaut);

const remainingCrew = [
  { id: 2, name: "Bart", role: "Pilot", isEVAEligible: false, priority: 8 },
  { id: 3, name: "Caroline", role: "Engineer", isEVAEligible: true, priority: 4 },
  { id: 4, name: "Diego", role: "Scientist", isEVAEligible: false, priority: 1 },
  { id: 5, name: "Elise", role: "Medic", isEVAEligible: true, priority: 7 },
  { id: 6, name: "Felix", role: "Navigator", isEVAEligible: true, priority: 6 },
  { id: 7, name: "Gertrude", role: "Communications", isEVAEligible: false, priority: 4 },
  { id: 8, name: "Hank", role: "Mechanic", isEVAEligible: true, priority: 2 },
  { id: 9, name: "Irene", role: "Specialist", isEVAEligible: true, priority: 5 },
  { id: 10, name: "Joan", role: "Technician", isEVAEligible: false, priority: 1 },
];

for (let i = 0; i < remainingCrew.length; i++) {
  addCrewMember(squad, remainingCrew[i]);
}

function swapCrewMembers(crew, fromIndex, toIndex) {
  if (
    fromIndex < 0 || 
    toIndex < 0 ||
    fromIndex >= crew.length ||
    toIndex >= crew.length
  ) {
    console.log("Invalid crew indices");
    return;
  }

  const updatedCrew = crew.slice();
  updatedCrew[fromIndex] = updatedCrew.splice(toIndex, 1, updatedCrew[fromIndex])[0];

  return updatedCrew; 
}

const updatedSquad = swapCrewMembers(squad, 2, 5);

function sortByPriorityDescending(crew) {
  for (let i = 0; i < crew.length - 1; i++) {
    for (let j = 0; j < crew.length - 1 - i; j++) {
      if (crew[j].priority < crew[j + 1].priority) {
        const temp = crew[j];
        crew[j] = crew[j + 1];
        crew[j + 1] = temp;
      }
    }
  }
}

function getEVAReadyCrew(crew) {
  const eligible = [];
  for (const astronaut of crew) {
    if (astronaut.isEVAEligible) eligible.push(astronaut);
  }
  sortByPriorityDescending(eligible); 

  return eligible;
}

const EVAReadySquad = getEVAReadyCrew(updatedSquad);
function chunkCrew(crew, size) {
  if (size < 1) {
    console.log("Chunk size must be >= 1");
    return;
  }

  const chunks = [];
  for (let i = 0; i < crew.length; i += size) {
    chunks.push(crew.slice(i, i + size));
  }

  return chunks;
}

const EVAChunks = chunkCrew(EVAReadySquad, 3);

function printCrewSummary(crew) {
  const sorted = crew.slice();
  sortByPriorityDescending(sorted); 
  for (const astronaut of sorted) {
    console.log(astronaut.name);
  }
}

printCrewSummary(updatedSquad);

//longest word length finder

function findLongestWordLength(singleParameter) {
let a = singleParameter.length;
let spaceArray = [];
  for (let i = 0; i <= a ; i++) {
    if (singleParameter[i] == " ") {
      spaceArray.push(i +1);
    }
  }
  spaceArray.unshift(0)
  spaceArray.push(a + 1)
  let b = spaceArray.length;
  let wordLengthArray = [];
  for (let i = 1; i < b; i++) {
    wordLengthArray.push((spaceArray[i] - spaceArray[i - 1]) - 1);
  }
  let longestWord = 0;
  for (let i = 0; i < wordLengthArray.length; i++) {
    if (wordLengthArray[i] > longestWord) {
      longestWord = wordLengthArray[i];
    }
  }
  return longestWord;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

//factorial of a chosen number
let num = 5;
function factorialCalculator(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result*i
  }
  return result;
}
let factorial = factorialCalculator(num);
let resultMsg = "Factorial of " + num + " is " + factorial;
console.log(resultMsg);

//mutation checker
function mutation(arr) {
let a = arr[0].toLowerCase();
let b = arr[1].toLowerCase();
let testArr = [];
for (let i = 0; i < b.length; i++) {
  if (a.includes(b[i])) {
    testArr.push("true");
  } else
  testArr.push("false");
}
if (testArr.includes("false")) {
  return false;
} else
return true;
}
console.log(mutation(["hello", "Hello"]))

//person detail checker 
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile (name, property) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name && contacts[i][property] != undefined) {
      return contacts[i][property];
    } else if (contacts[i].firstName == name && contacts[i][property] == undefined) {
      return "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Akira", "address"));

//repeat function without repeat()
function repeatStringNumTimes (string, number) {

  let phrase = "";

  if (number <= 0) return "";
  for (let i = 0; i < number; i++) {
    phrase += string;
    }
    return phrase;
}
console.log(repeatStringNumTimes("*", 3));

//amount of times word appears in a array
function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}
printCharacters("hello");

function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"));