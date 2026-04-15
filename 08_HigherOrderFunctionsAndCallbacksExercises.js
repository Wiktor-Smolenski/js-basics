//theory first
//forEach
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});

//map
numbers = [3, 4, 5, 6, 7].map((element, index, array) => {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
  return element * 2;
});
console.log(numbers);

//filter
const developers = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 25 }
];

const youngPeople = developers.filter((person) => person.age < 30);
console.log(youngPeople);

//reduce
numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15