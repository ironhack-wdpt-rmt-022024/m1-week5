// clearTimeout(timeoutId) - cancels the existing timeout
// clearInteval(intervalId) - cancels the existing interval counter

const cancelTimeoutBtn = document.querySelector("#cancel-timeout")
const cancelIntervalBtn = document.querySelector("#cancel-interval")


const timeoutId = setTimeout(function () {
  console.log("Hello from the inside!") 
}, 5000);


cancelTimeoutBtn.addEventListener("click", function () {
  clearTimeout(timeoutId);
})


let count = 0;
const intervalId = setInterval(function () {
  console.log('count', count);
  count++;
}, 1000);

cancelIntervalBtn.addEventListener("click", function () {
  clearInterval(intervalId);
})


