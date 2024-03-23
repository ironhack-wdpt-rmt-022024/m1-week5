// var variables

var globalVar = "I am global";


if (true) {
  var localVar = "I am local";
  // let localVar = "I am local";
  // const localVar = "I am local";

  console.log("globalVar", globalVar);
  console.log("localVar", localVar);
}

console.log("outside", localVar)


