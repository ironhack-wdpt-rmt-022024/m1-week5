const h1 = document.querySelector("h1");
const googleLink = document.querySelector("#google-link");

// Manipulating element attributes (read, setting, removing)
// Getting attributes - getAttribute()
const h1Id = h1.getAttribute("id");
const googleLinkHref = googleLink.getAttribute("href");
const nonexitsent = h1.getAttribute("class");

// console.log('h1Id', h1Id);
// console.log('googleLinkHref', googleLinkHref)
// console.log('nonexitsent', nonexitsent)

// Setting attributes - setAttribute()
const contentDiv = document.querySelector("#content");
contentDiv.setAttribute("id", "main");

// Remove attributes - removeAttribute()
const itemList = document.querySelector("#item-list");
itemList.removeAttribute("id");
// console.log('itemList', itemList);


// CREATING NEW ELEMENTS - createElement()
// 1. Create a new element
const h2Tag = document.createElement("h2");
// 2. Update content or styling
h2Tag.textContent = "Sub Title";
// 3. Append the new element somwhere in the DOM
const body = document.querySelector("body");
body.appendChild(h2Tag);

// Methods for adding elements to the DOM
// appendChild(), insertBefore(), after()
// const button = document.querySelector("button");
// body.insertBefore(h2Tag, button);


// Creating a text node
// 1. Create Elements
const articleTitle = document.createElement("h3");
const articleContent = document.createElement("p");

// 2. Create text nodes and append to the new elements
// articleTitle.textContent = "Article Title";
const textNode1 = document.createTextNode("Article Title");
articleTitle.appendChild(textNode1);

// articleContent.textContent = "lorem ipsum".repeat(100);
const textNode2 = document.createTextNode("lorem ipsum".repeat(100));
articleContent.appendChild(textNode2);

// 3. Add the new elemments to the DOM
body.appendChild(articleTitle);
body.appendChild(articleContent);








