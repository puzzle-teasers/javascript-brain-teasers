// This code will output a number between 0 and 99.
// when you perform integer math on a new Date object, it is converted into a number like 1687530684418,
// which represents the number of milliseconds since January 1, 1970.
// The modulo operation with 100 will give you the last two digits of that number.

const date = new Date;
const x = date % 100;

console.log(x);