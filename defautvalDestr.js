// Default value destructuring

const colors = ["blue", "black", "army green"];

const [ primary = "light blue", secondary = "gray", tertiary = "green", others = "light purple" ] = colors;

console.log(primary); // blue
console.log(secondary); // black
console.log(tertiary); // army green
console.log(others); // light purple