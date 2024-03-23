// Shallow-copying arrays
const students = [
  ["Alex", "Michael"],
  ["Mafhoz", "Adrian"]
];

// slice method
const arrCopy1 = students.slice();

// spread operator
const arrCopy2 = [ ...students ];

// array reverse
const arrCopy3 = students.reverse().reverse();

// array concat
const arrCopy4 = [].concat(students);


// Deep-copying arrays

// structuredClone(arr)
const deepCopy1 = structuredClone(students);

// Poor man deep copy - JSON.parse(JSON.stringify())
console.log( JSON.parse('{ "name": "bob" }') )
console.log( JSON.stringify( { brand: "Tesla", model: "X"}  ) )


const deepCopy2 = JSON.parse(JSON.stringify(students));
