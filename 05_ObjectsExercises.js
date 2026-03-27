
//recipes book with objects
const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

recipes.push(recipe1, recipe2, recipe3);

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients);
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);

//quiz game with objects

const questions = [
{
  category: "muzyka",
  question: "pytam o muzyke?",
  choices: ["muzyka1", "muzyka2", "muzyka3"],
  answer: "muzyka2",
},
{
  category: "sport",
  question: "pytam o sport?",
  choices: ["sport1", "sport2", "sport3"],
  answer: "sport1",
},
{
  category: "matematyka",
  question: "pytam o matematyke?",
  choices: ["matematyka1", "matematyka2", "matematyka3"],
  answer: "matematyka3",
},
{
  category: "fizyka",
  question: "pytam o fizyke?",
  choices: ["fizyka1", "fizyka2", "fizyka3"],
  answer: "fizyka2",
},
{
  category: "chemia",
  question: "pytam o chemie?",
  choices: ["chemia1", "chemia2", "chemia3"],
  answer: "chemia3",
}
];

function getRandomQuestion(questions) {
  let i = Math.floor(Math.random() * questions.length);
  return questions[i];
}

let a = getRandomQuestion(questions);
let b = a.choices;

function getRandomComputerChoice(b) {
  let i = Math.floor(Math.random() * b.length);
  return b[i];
}

let c = getRandomComputerChoice(b);

function getResults(a, c) {
  let i = a.answer;
  if (i === c) {
    return "The computer's choice is correct!";
  } else {
    return "The computer's choice is wrong. The correct answer is: " + i;
  }
}

console.log(a);
console.log("Computer's choice: " + c);
console.log(getResults(a, c));

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// record collection update function
function updateRecords(records, id, prop, value) {
  let a = records[id];
  if (value === "") {
    delete a[prop]; //number 2
  } else if (prop !== "tracks" && value !== ""){
    a[prop] = value; // number 3
  } else if (prop === "tracks" && value !== "" && a.hasOwnProperty(prop) === false) {
    a[prop] = [value]; //number 4
  } else if(prop === "tracks" && value !== "") {
    a[prop].push(value); // number 5
  }else {
    return "conditions not met";
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollection, 2548, "artist", ""));
console.log(updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollection, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollection, 2548, "tracks", ""));
console.log(updateRecords(recordCollection, 1245, "albumTitle", "Riptide"));

//shipping manifest with objects
function normalizeUnits(manifest) {
  let copy = {... manifest};
  if (copy.unit == "lb") {
    copy.weight = (copy.weight) * 0.45;
    copy.unit = "kg";
  }
  return copy;
}

let test = { containerId: 1, destination: "hej", weight: 101, unit: "kg", hazmat: false };

function validateManifest(manifest) {

  let errors = {};

  if (manifest.containerId == undefined) {
    errors.containerId = "Missing";
  } else if (manifest.containerId > 0 && typeof manifest.containerId == "number" && Number.isInteger(manifest.containerId) == true) {
  } else 
  errors.containerId = "Invalid";

  if (manifest.destination == undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination == "string") {
    if (manifest.destination.trim() == "") {
      errors.destination = "Invalid";
    }
  } else
  errors.destination = "Invalid";

  if (manifest.weight == undefined) {
    errors.weight = "Missing";
  } else if (Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid"
  } else if (manifest.weight >= 0 && typeof manifest.weight == "number") {
  } else
  errors.weight = "Invalid";

  if (manifest.unit == undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit == "kg" || manifest.unit == "lb") {
  } else
  errors.unit = "Invalid";

  if (manifest.hazmat == undefined) {
    errors.hazmat = "Missing";
  } else if (manifest.hazmat == true || manifest.hazmat == false) {
  } else
  errors.hazmat = "Invalid";

  return errors;
}

function processManifest(manifest) {
  if(validateManifest(manifest).containerId == undefined) {
    console.log("Validation success: " + manifest.containerId);
    console.log("Total weight: " + normalizeUnits(manifest).weight + " kg");
  } else {
  console.log("Validation error: " + manifest.containerId);
  console.log(validateManifest(manifest));
  }
}

console.log(validateManifest(test));
console.log(test);