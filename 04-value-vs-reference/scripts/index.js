
const student = {
	name: 'Sarah',
	age: 35,	
	family: [
    	{ name: 'Mark', age: 29 },
    	{ name: 'Linda', age: 33 }
	] 
}


// shallow copy

// spread operator
const objCopy1 = { ...student }



// deep copy

// structuredClone(obj)
const deepCopy1 = structuredClone(student);


// Poor man deep copy - JSON.parse(JSON.stringify())
const deepCopy2 = JSON.parse(JSON.stringify(student));

