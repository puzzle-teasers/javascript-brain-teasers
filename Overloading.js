// following output: 16
// JavaScript doesn’t support function overloading 

// Calculate the area of a rectangle
function calculateArea(length, width) {
  return length * width;
}

// Calculate the area of a square
function calculateArea(length) {
  return length * length;
}

console.log(calculateArea(4, 6));