// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. 

var counter = 1;
function increment() {
    console.clear()
    console.log(counter)
    counter++;
}


for (let i = 0; i < 10; i++) {
    setTimeout(increment, (i+1)*1000);
}
 







































































