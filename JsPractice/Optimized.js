// function optimizedSearch(arr, target) {
//   const set = new Set(arr);
//   return set.has(target);
// }
// const numbers = [10, 20, 30, 40, 50];
// console.log(optimizedSearch(numbers, 30)); // true
// console.log(optimizedSearch(numbers, 100)); // false

// indexOf() – Find the index of an element

// let numbers = [10, 20, 30, 40, 50];
// console.log(numbers.indexOf(30)); // Output: 2
// console.log(numbers.indexOf(100)); // Output: -1
// console.log(numbers.lastIndexOf(20));

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

let user = users.find((user) => user.id === 2);

console.log(user);
