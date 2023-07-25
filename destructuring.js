// Array destructuring
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, , fourth, , ...rest ] = numbers;

console.log(first, second, fourth,  rest ); // Output: 0 1 3 [ 5, 6, 7, 8, 9, 10 ]