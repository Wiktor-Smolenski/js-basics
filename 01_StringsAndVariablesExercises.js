const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

if (a > b) {
  console.log("a is bigger");
} else {
  console.log("b is bigger");
}
for (let i = 4; i <= 5; i++) {
  console.log(i);
}
let variable = "moge tu dac co chce";
console.log(variable);
let firstName = "Wiktor";
let lastName = "Smoleński";
console.log(firstName + " " + lastName); //way to add strings together
let greeting = "Siema";
greeting += " Buzia";
console.log(greeting);
let imie = "Wiktor";
let powitanie = "Siema";
console.log(powitanie, imie, "i tutaj moge kazdy tekst dac", "z spacjami trzeba walczyc");

let number = 17; //odd or even
if ((number%2) === 0) {
    console.log(number, "is even");
}
else {
    console.log(number, "is odd");
}
let n = 4; // print sum 1 + 2 + 3 + ... + n
let sum = 0;
for (let i=1; i<=n; i++) {
    sum += i;
}
console.log("sum of 1 to", n, "is", sum);

let x = 5;
let y = 12;
let z = 9;
 let biggest = "is the biggest";
if (x>y && x>z) {
    console.log(x, biggest);
}
else if (y>x && y>z) {
    console.log(y, biggest);
}
else {
    console.log(z, biggest);
}
let name = "Wiktor";
console.log(name[3], "way to choose letter in a word"); // do wybierania ktora litere slowa chcemy wyswietlic
console.log(name.length, "this is the length of the name");
let reversed1 = "";
for (let i = name.length -1; i>=0; i--) {
    reversed1 += name[i];
}
console.log(reversed1, "this is the name reversed");
let reversed2 = "";
let text = "JavaScript";
for (let j = text.length -1; j>=0; j--) {
    reversed2 += text[j];
}
console.log(reversed2, "this is the text reversed");
let word2 = "programming";
let vowelSum = 0;
for (let h = word2.length -1; h>=0; h--) {
    if (word2[h] === "a" || word2[h] === "e" || word2[h] === "i" || word2[h] === "o" || word2[h] === "u") {
       vowelSum++;
}
}
console.log(vowelSum, "this is the number of vowels in the word");
console.log(typeof vowelSum, "this is the type of the variable vowelSum");
let kot = {
    age: 10,
    name: "Tequila",
    color: "grey",
    speak: function() {
        console.log("Hi there!");
    }
}

const botName = "teacherBot";
greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");
