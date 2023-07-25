// Object destructuring

const person = {
    name: "Yves Robert", 
    age: 21,
    hobby: "Dancing",
    funFact: "Don't eat as much as I wish to!"
};

const { name, age, hobby, funFact } = person;

console.log("Name:", name); // Output: Yves Robert
console.log("age:", age); // Output: 21
console.log("hobby:", hobby); // Output: Dancing 
console.log("Fun Fact:", funFact); // Output: Don't eat as much as I wish to!