// Counter: 5
// Counter: 5
// Counter: 5
// Counter: 5
// Counter: 5
// This result is because var has function-level scope, not block-level scope.
// The variable i declared in the for loop is shared across all the closure
// functions. By the time the functions are called, the for loop has already
// finished executing, and the final value of i is 5.
// A straightforward approach to fix this issue is to use the let keyword
// instead of var to declare the variable i. Using let will create a new block-
// scoped variable for each iteration of the loop:
function createCounterArray() {
  const counterArray = [];
  for (var i = 0; i < 5; i++) {
    counterArray.push(() => {
      console.log(`Counter: ${i}`);
    });
  }
  return counterArray;
}

const counters = createCounterArray();

counters.forEach(counter => counter());