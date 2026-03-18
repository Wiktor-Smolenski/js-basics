//hello to the Arrays section!
console.log("Grocery shopping list");

const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr}`;
}

console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

console.log("It looks like we need to get some cooking oil.");

shoppingList.unshift("Vegetable Oil");
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Popcorn", "Beef Jerky", "Potato Chips");
console.log(getShoppingListMsg(shoppingList));

console.log("This looks like too much junk food.");

shoppingList.pop();
console.log(getShoppingListMsg(shoppingList));

console.log("It might be nice to get a dessert.");

shoppingList.unshift("Chocolate Cake");
console.log(getShoppingListMsg(shoppingList));

console.log("On second thought, maybe we should be more health conscious.");

shoppingList.shift();
shoppingList[0] = "Canola Oil";

console.log(getShoppingListMsg(shoppingList));

// lunch menu exercises
const lunches = [];

function addLunchToEnd(lunches, string) {
  console.log(string + " added to the end of the lunch menu.");
  lunches.push(string);
  return lunches;
}

function addLunchToStart(lunches, string) {
  console.log(string + " added to the start of the lunch menu.");
  lunches.unshift(string);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches == 0) {
    console.log("No lunches to remove.")
  } else {
    console.log(lunches.pop() + " removed from the end of the lunch menu.");
  } 
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches == 0) {
    console.log("No lunches to remove.");
  } else {
    console.log(lunches.shift() + " removed from the start of the lunch menu.");
  }
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches == 0) {
    console.log("No lunches available.");
  } else {
    let i = lunches.length;
    let j = (Math.floor(Math.random() * i));
    let randomLunch = lunches[j];
    console.log("Randomly selected lunch: " + randomLunch);
  }
  return lunches;
}

function showLunchMenu(lunches) {
  if (lunches == 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + lunches.join(", "));
  }
  return lunches;
}

//golf counter
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return "dupa";
}

golfScore(1, 1);
