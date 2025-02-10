// Using Built-in Methods (Simple & Efficient)

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));

//------------------------------------

// 2. Using a For Loop (Iterative Approach) :

function reverseStringIterative(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseStringIterative("hello"));

// 3. Using Reduce  (Functional Approach) :

function reverseStringReduce(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}
console.log(reverseStringReduce("hello"));
