function greet(name) {
    return ("Welcome, " + name + "!"); // when we use return we dont get undefined in consolelog
}
console.log(greet("Wiktor")); //so pretty much what is inside () = name of the "variable"

console.log(greet()); // but "variable" is not remembered
console.log(greet("Jessica"));

function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5,10));

//another way to create same function but with const variable
const velocity = (distance, time) => {
    return distance / time;
}
console.log(velocity(100, 10) + " m/s");

//yet another way 
const acceleration = (startingVelocity, finalVelocity, time) => (finalVelocity - startingVelocity) / time;
console.log(acceleration(0, 100, 10) + " m/s^2");
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

function calculateDifference(num1, num2) {
  return num1 - num2;
}

console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

function calculateProduct(num1, num2) {
  return num1 * num2;
}

console.log(calculateProduct(13, 5));


function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}

console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

function calculateSquare(num) {
  return num ** 2;
}

console.log(calculateSquare(2));
console.log(calculateSquare(9));

function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));

// exercise to show part of email with fucntion 
let email = "wiktorsmolenski@email.com";
function maskEmail(email) {
let i = email.indexOf("@");
let slicedEmail = email.slice(1,i-1);
let maskEmail = email.replace(slicedEmail,"*".repeat(i-2));
return maskEmail;
}
console.log(maskEmail(email));
email = "apple.pie@example.com";
console.log(maskEmail(email));
email = "freecodecamp@example.com";
console.log(maskEmail(email));
email = "info@test.dev";
console.log(maskEmail(email));
email = "user@domain.org";
console.log(maskEmail(email));

//simple function to check if someone is eligible for a loan based on income and credit sccore
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if(creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan."
  } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
    return "You qualify for a condo and car loan."
  } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
    return "You qualify for a car loan."
  } else {
    return "You don't qualify for any loans."
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
console.log(duplexLoanMsg);
const condoLoanMsg = getLoanMessage(65000, 690);
console.log(condoLoanMsg);
const carLoanMsg = getLoanMessage(45000, 660);
console.log(carLoanMsg);
const noLoanMsg = getLoanMessage(25000, 550);
console.log(noLoanMsg);

//quick converter from celcius to fahrenheit
const convertCtoF = (tempC) => (tempC*9/5) + 32;
console.log(convertCtoF(0));

//card counter
let count = 0;
function cardCounter(card) {
    if (card >= 2 && card <= 6) {
    count++;
  }else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count--;
  } if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cardCounter(4);
console.log(cardCounter(2));

//leap year checker
let year = 2000;
function isLeapYear(year) {
  if (year%400 === 0 || (year%100 !== 0 && year%4 === 0)) {
   return year + " is a leap year.";
} else {
   return year + " is not a leap year.";
}
}
let result = isLeapYear(year);
console.log(result);

//string manipulator
function truncateString(string, number) {
  if (string.length <= number) {
    return string;
  } else {
    return string.slice(0, number) + "...";
  }
}
console.log(truncateString("Wiktor", 6));

//end of sequence checker
function confirmEnding(string1, string2) {
  let a = string1.length;
  let b = string2.length;
  if ((string1.slice(a-b, a)) == (string2)) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n"));

//overall very cool stuff with those functions I liked it Picasso!