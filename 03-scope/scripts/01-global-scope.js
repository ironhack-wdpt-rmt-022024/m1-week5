// Global scope

const firstName = "John";  // global variable
let lastName = "Carr";   // global variable


function printName () {     // globally available function
  console.log(firstName + " " + lastName);
}

if (true) {
  printName();
}

function run () {
  printName()
}

run()
