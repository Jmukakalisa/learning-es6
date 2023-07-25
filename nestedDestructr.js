// Nested Destructuring

const student = {
    data: {
        studentName: "Jane Doe",
        age: "22",
        studentNumber: 277972,
    },
    performance: [ 84, 97, 92, 87 ]
};

const {
    data: { studentName, age, studentNumber },
    performance: [ network, AI, CD, MD ]  
} = student; 

console.log("Student Name:", studentName);
console.log("Student N0:", studentNumber);
console.log("Age:", age);
console.log("Network Grades:", network);
console.log("Artificial Intelligence:", AI);
console.log("Cloud Dev:", CD);
console.log("Mobile Dev:", MD);