// Task 1

// let count = 1;
// setInterval(function () {
//   console.log('count', count);
//   count++;
// }, 1000);


// Task 2
// Implement the counter but this time using only setTimeout() that calls itself recursively.

let count2 = 1;
function printCount () {
  console.log("count2", count2);
  count2++;

  setTimeout(printCount, 1000);
}

setTimeout(printCount, 1000);







