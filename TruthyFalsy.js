// [ 1, 8, 15 ]

// using the arrow function to just return  the value from the array itself. 
// Since NaN and the empty string are falsy, they undergo automatic conversion to false, 
// leading to their elimination from the array.

// you can use double exclamation marks (!!) as a shortcut
// for the Boolean() function.


const arr = [1, 8, NaN, 15, ""];

const newArr = arr.filter(function(item) {
  return !!item
});

console.log(newArr);