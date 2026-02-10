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