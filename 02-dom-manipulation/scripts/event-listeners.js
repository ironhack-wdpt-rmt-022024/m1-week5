const students = ["Michael", "Fatma", "Mafhoz"];
const newStudents = ["Alex", "Mimmy", "Rapha"];

const ulList = document.querySelector("#item-list");

students.forEach((str) => {
  const newLi = document.createElement("li");
  newLi.textContent = str;
  ulList.appendChild(newLi);
});

// EVENTS
// addEventListener()   /  removeEventListener()

function handleClick () {
  const newLi = document.createElement("li");
  newLi.textContent = newStudents.pop();
  ulList.appendChild(newLi);
}

// Adding an event listener
const button = document.querySelector("button");
button.addEventListener("click", handleClick);


// Removing an existing event listener
const stopButton = document.querySelector("#stop");

stopButton.addEventListener("click", function () {
  console.log("event listener removed")
  button.removeEventListener("click", handleClick);
})


