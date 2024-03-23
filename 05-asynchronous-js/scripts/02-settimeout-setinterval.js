// setTimeout(cb, delay): run code once after a delay
// setIntreval(cb, interval)

// setTimeout(function () {}, 1000) --> 1 second
// setIntreval(() => {}), 1000)



setTimeout(function () {
  console.log("Hello from the inside!") 
}, 5000);



let count = 0;
setInterval(function () {
  console.log('count', count);
  count++;
}, 1000);
