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

//a way to check the type of variable
typeof vowelSum;

//a way to add a new property to an object
let kot = {
    age: 10,
    name: "Tequila",
    color: "grey",
    speak()
    {
        console.log("Hi there!");
    }
};