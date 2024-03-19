const ulList = document.querySelector("#item-list");
const input = document.querySelector("#create");
const buttonAdd = document.querySelector("#add");


buttonAdd.addEventListener("click", function () {
  // Get the input value (text)
  const inputText = input.value;
  // Create the new element
  const newLi = document.createElement('li');

  // Add the input text to the new element
  newLi.textContent = inputText;

  // Append the new element to the list
  ulList.appendChild(newLi);

  // Clear the input of text
  input.value = "";
})