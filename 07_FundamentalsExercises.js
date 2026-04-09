//reverse string
function reverseString (string) {
  let reversedString = [];
  for (let i = 1; i <= string.length; i++) {
    reversedString.push(string[string.length - i])
    console.log(reversedString);
  }
  return reversedString.join("");
}
console.log(reverseString("Hello"));

//largest number finder from array
function largestOfAll(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let biggest = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > biggest) {
        biggest = arr[i][j];
      }
    }
    array.push(biggest);
  }
  return array;
}

//first element finder
function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr[i];
    }
  }
}
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); // undefined
console.log(findElement([1, 2, 3, 4], function(num) { return num > 2; })); //3

//array slice and splice
function frankenSplice(arr1, arr2, index) {
  const result = arr2.slice(); // copy arr2

  result.splice(index, 0, ...arr1);

  return result;
}

//pyramid builder
function pyramid (string, number, bolean) {
  let pyramid = "";
  let space = " ";
  if (bolean == false) {
  for ( let i = 0 ; i < number; i++) {
    pyramid += "\n" + space.repeat(number - (i+1)) + string.repeat(2*i + 1);
    }
    pyramid += "\n";
  }

  if (bolean == true) {
    for (let i = 0; i < number; i++) {
      pyramid += "\n" + space.repeat(i) + string.repeat((number - i) * 2 - 1);
    }
    pyramid += "\n";
  }
  return pyramid;
}


console.log(pyramid("p", 5, true));
console.log("\nppppppppp\n ppppppp\n  ppppp\n   ppp\n    p\n");

//gradebook app
function getAverage(arr) {
  let averageScore = 0;
  for (let i = 0; i < arr.length; i++) {
    averageScore += arr[i]
  }
  averageScore /= arr.length;
  return averageScore;
}

function getGrade(score) {
  if (score >= 0 && score <= 59) {
    return "F";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score == 100) {
    return "A+"
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) == "F") {
    return false;
  } else
  return true;
}

function studentMsg(arr, studentScore) {
  if (hasPassingGrade(studentScore) == true) {
    return "Class average: " + getAverage(arr) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  } else
  return "Class average: " + getAverage(arr) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
}

//title case converter
function titleCase(string) {
  string = string.toLowerCase();
  let sentence = [];
  for (let i = 0; i < string.length; i++) {
    sentence[i] = string [i];
  }
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] == " ") {
      sentence[i + 1] = sentence[i + 1].toUpperCase();
    }
  }
  sentence[0] = sentence[0].toUpperCase();
  sentence = sentence.join("");
  return sentence;
}

console.log(titleCase("this senTence should have caPital letter on every first letter of a word of this sentence"));

//banned words bouncer
function bouncer(arr) {
  let banned = [false, null, 0, "", undefined, NaN];
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    if (banned.includes(arr[i])) {
    } else
    list.push(arr[i]);
  }
  return list;
}
console.log(bouncer([7, "ate", "", false, 9]));


//inventory tracker
let inventory = [{name: "flour", quantity: 5}, {name: "rice", quantity: 5}];

function findProductIndex(name) {
  let result = -1;
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == name.toLowerCase()) {
      result = i;
    }
  }
  return result;
}

function addProduct(obj) {
  obj.name = obj.name.toLowerCase();
  if (findProductIndex(obj.name) != -1) {
    inventory[findProductIndex(obj.name)].quantity += obj.quantity;
    console.log(obj.name.toLowerCase() + " quantity updated");
  } else {
    inventory.push(obj);
    console.log(obj.name + " added to inventory");
  }
  return inventory;
}

function removeProduct (name, quantity) {
  name = name.toLowerCase();
  if (findProductIndex(name) == -1) {
    console.log(name + " not found")
  } else {
    let rest = inventory[findProductIndex(name)].quantity - quantity;
    if (rest > 0) {
      inventory[findProductIndex(name)].quantity -= quantity;
      console.log("Remaining " + name + " pieces: " + rest);
    } else if (rest == 0) {
      inventory.splice(inventory[findProductIndex(name)], 1);
    } else if (rest < 0) {
      console.log("Not enough " + name + " available, remaining pieces: " + inventory[findProductIndex(name)].quantity);
    }
  }

  return inventory;
}

console.log(removeProduct("FLOUR", 5));

//unique array elements
function uniteUnique (a, b, ...c) {
  let unique = [];
  let list = [a, b, ...c];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (unique.includes(list[i][j]) == false) {
        unique.push(list[i][j]);
      }
    }
  }

  return unique;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

//random password generator
function generatePassword (num) {
  let string = "";
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  console.log(characters.length + " this is a length")
  for (let i = 0; i < num; i++) {
    string += characters[Math.floor(Math.random() * (71))];
  }
  return string;
}

let password = generatePassword(3);
console.log("Generated password: " + password);

//sum calculater of numbers between two numbers 
function sumAll([a, b]) {
  let result = 0;
  if (a > b) {
    for (let i = 0; i <= (a - b); i++) {
      result += (b + i);
    }
  }
  if (b > a) {
    for (let i = 0; i <= (b - a); i++) {
      result += (a + i);
    }
  }

  return result;
}

console.log(sumAll([4,1]))

//DNA pairer
function pairElement (string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
      if (string[i] == "A") {
      result.push(["A","T"]);
    } else if (string[i] == "T") {
      result.push(["T","A"]);
    } else if (string[i] == "C") {
      result.push(["C","G"]);
    } else if (string[i] == "G") {
      result.push(["G","C"]);
    }
  } 
  return result;
}

console.log(pairElement("AAAA"));