console.log("Hello World!");
//Adding two variables and making basic operations with them
console.log("This is the first exercise with variables and basic operations");

let a = 10;
let b = 10;

console.log("a=", a);
console.log("b=", b);
console.log("(a + b) =", a + b);
console.log("(a - b) =", a - b);
console.log("(a * b) =", a * b);
console.log("(a / b) =", a / b);

//Basic if statement and for loop
console.log("This is result of exercise in which I want to check which variable is bigger");
if (a > b) {
  console.log("a is bigger");
} else if (b > a) {
  console.log("b is bigger");
} else {
  console.log("a and b are equal");
}

//Adding two strings together with many ways to do it
console.log("What's your name?");
let firstName = "Wiktor";
let lastName = "Smoleński";
console.log(firstName + " " + lastName);
let greeting = "Hey ";
greeting += firstName;
console.log(greeting, "nice to meet you", "hope you will have great coding session today :)");

//few exercises with variables and strings
console.log("Here are results of few exercises with variables and strings");
//odd or even number
console.log("In this exercise I can choose and number and check if it's odd or even");
 let number = 17;
if ((number%2) === 0) {
    console.log(number, "is even");
}
else {
    console.log(number, "is odd");
}
//print sum of 1 + 2 + 3 + ... + n
console.log("In this exercise I can choose a number n and find the sum of 1 + 2 + 3 + ... + n");
let n = 4;
let sum = 0;
for (let i=1; i<=n; i++) {
    sum += i;
}
console.log("sum of numbers from \"1\" to", n, "is", sum);

//find the biggest of three numbers
console.log("In this exercise I can choose three numbers and find the biggest one");
let x = 5;
console.log(x, "this is the first number");
let y = 12;
console.log(y, "this is the second number");
let z = 9;
console.log(z, "this is the third number");
 let biggest = "is the biggest";
if (x>y && x>z) {
    console.log("x = ", x, biggest);
}
else if (y>x && y>z) {
    console.log("y = ", y, biggest);
}
else {
    console.log("z = ", z, biggest);
}

//string exercises on a word
console.log("Here is the word I will be working with");
let word = "JavaScript";
console.log(word);

//choosing exact letter from a word
let i = 3;
if (i <= word.length) {
console.log(i, "th letter of the word", word, "is", word[i-1]);
}
else {
    console.log("There is no", i, "th letter in the word", word);
}
//finding the length of the word
console.log(word.length, "letters is the length of the word");

//reverse the word
console.log ("Now I will print the word in reverse order");
let reversed1 = "";
for (let i = word.length -1; i>=0; i--) {
    reversed1 += word[i];
}
console.log(reversed1);

//checkin for number of vowels in the word
let vowelSum = 0;
for (let h = word.length -1; h>=0; h--) {
    if (word[h] === "a" || word[h] === "e" || word[h] === "i" || word[h] === "o" || word[h] === "u") {
       vowelSum++;
}
}
console.log(vowelSum, "this is the number of vowels in the word", word);

//a try to check te location of those vowels in the word
console.log("Now I will print the locations of these vowels in the word");
/*
//letter a
for (let a = 0; a<=word.length; a++) {
    if (word[a] === "a") {
        console.log("a is located at", a+1);
    }
}
if (word.indexOf("a") === -1) {
    console.log("There is no a in the word", word);
}

//letter e
for (let e = 0; e<=word.length; e++) {
    if (word[e] === "e") {
        console.log("e is located at", e+1);
    }
}
if (word.indexOf("e") === -1) {
    console.log("There is no e in the word", word);
}

//letter i
for (let i = 0; i<=word.length; i++) {
    if (word[i] === "i") {
        console.log("i is located at", i+1);
    }
}
if (word.indexOf("i") === -1) {
    console.log("There is no i in the word", word);
}

//letter o
for (let o = 0; o<=word.length; o++) {
    if (word[o] === "o") {
        console.log("o is located at", o+1);
    }
}
if (word.indexOf("o") === -1) {
    console.log("There is no o in the word", word);
}

//letter u
for (let u = 0; u<=word.length; u++) {
    if (word[u] === "u") {
        console.log("u is located at", u+1);
    }
}
if (word.indexOf("u") === -1) {
    console.log("There is no u in the word", word);
}

//letter y
for (let y = 0; y<=word.length; y++) {
    if (word[y] === "y") {
        console.log("y is located at", y+1);
    }
}
if (word.indexOf("y") === -1) {
    console.log("There is no y in the word", word);
}
*/
//there is a faster way to do it
let vowels = ["a", "e", "i", "o", "u", "y"];
for (let v= 0; v<word.length; v++) {
    if (vowels.includes(word[v])) {
        console.log (word[v], "is located at", v+1);
    }
} 

//function I am learing from freecodecamp maybe I will use to them to make some of the exercises later
//a way to check the type of variable
console.log("The type of word variable:",typeof word);
let letter = "a";
console.log("The position of letter", letter, "in the word", word, "is", word.indexOf(letter)+1); //this is to check if a letter is in the word and in which position

//a way to add a new property to an object
let kot = {
    age: 10,
    name: "Tequila",
    color: "grey",
    speak()
    {
        console.log("Hi there!"); //gotta work on that i dont get it 
    }
};

//function I am learing from freecodecamp maybe I will use to them to make some of the exercises later
let char = String.fromCharCode(65);
console.log(char);
char = String.fromCharCode(97);
console.log(char);
letter = "A";
console.log(letter.charCodeAt(0));
let symbol = "!";
console.log(symbol.charCodeAt(0));

let message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!

message = "Hello, world!";
greeting = message.slice(0, 5);

console.log(greeting);  // Hello

greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // "HELLO, WORLD!"

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"

greeting = "   Hello!   ";
console.log(greeting);
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"

greeting = "   Hello!   ";
console.log(greeting);
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "

message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);

//String modifications methods?/String transformer
const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

console.log("I am trying to learn how to type all types of special character with website called keybr.com because \nI had huge issues with that and I want to be able to type all of them without lookinng at keyboard");
//const answer = window.prompt("What's your favorite animal?");
