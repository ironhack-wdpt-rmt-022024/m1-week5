// Primitives
// string, number, boolean, null, ...

// Primitive values hold the value we specify.
// Variables stroing primitive values, store the actual value.

// When primitive values are compared (== or ===)
// we are comparing the actual values if same

let a = 10;
const b = "abc";

const aCopy = a;
const bCopy = b;

a = a + 10;

console.log('a', a)
console.log('aCopy', aCopy);

/* 
Changing one variable doesn't change the other
*/