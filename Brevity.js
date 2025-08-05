// when using square brackets to access an object property, the value inside the brackets is treated as a key. 
// So, {on:1, off:0}[response] is essentially accessing the value of the
// property whose key matches the value of the response. Since the
// response is "on", the expression evaluates to {on:1, off:0}["on"], which
// returns the value 1. 

let response = "on",
state = {on: 1, off: 0}[response]

console.log(state);