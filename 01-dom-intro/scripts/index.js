// The document object

// console.log(document);
// console.dir(document);


// SELECTING ELEMENTS

// Select eleements by id
//  getElementById()

const firstDiv = document.getElementById("first");
const secondDiv = document.getElementById("second");

// console.log('firstDiv', firstDiv);
// console.log('secondDiv', secondDiv);


firstDiv.textContent = "I am the first div!";
secondDiv.textContent = "I am the second div.";

// console.log(firstDiv.textContent);


// Selecting multiple elements by class or tag name 
// getElementsByClassName()
// getElementsByTagName()

const htmlCollection1 = document.getElementsByClassName("third");
const htmlCollection2 = document.getElementsByTagName("div");

// console.log('htmlCollection1', htmlCollection1);
// console.log('htmlCollection2', htmlCollection2);


// Select elements usting CSS selector syntax
// querySelectorAll()
const divs1 = document.querySelectorAll(".third");

// console.log('divs1', divs1);

divs1.forEach((el) => {
  el.textContent = "HELLO!";
})


// Select the first found element matching the CSS query
// querySelector()
const thirdDiv1 = document.querySelector(".third");
thirdDiv1.textContent = "I am the best div!";


const mixedDivs = document.querySelectorAll("#first, .third");
// console.log('mixedDivs', mixedDivs)


// innerHTML - get or set HTML content of an element
const h1 = document.querySelector("h1");
// console.log('h1.innerHTML', h1.innerHTML);


const div1 = document.querySelector("#first");
// AVOID THIS:
div1.innerHTML = "<h2>Bananarama!</h2>";


// STYLE
//         background-color
div1.style.backgroundColor = "red";
div1.style.border = "4px solid black";
div1.style.fontSize = "30px";
div1.style.marginBottom = "20px";
div1.style.paddingBottom = "30px";


// Example: Getting a list of elemnts and iterating over that list
const liList = document.querySelectorAll("li");
console.log('liList', liList)

liList.forEach(function (el) {
  el.style.border = "2px solid red";
  el.style.fontSize = "22px";
})

