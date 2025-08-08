// Start
// End
// Promise
// Timeout

// because of the event loop and how JavaScript handles asynchronous tasks.
// The event loop is an important part of JavaScript that ensures code execution happens in a non-blocking way. It takes care of tasks like managing asynchronous operations, timers, and callbacks.

// 1. The synchronous code is executed.
// 2. The setTimeout callback is placed in the event queue.
// 3. The Promise callback is executed immediately.
// 4. The event loop picks up the setTimeout callback from the event queue and executes it.

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");