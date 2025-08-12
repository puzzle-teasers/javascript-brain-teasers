// [
//    1,  2,  3,  4,  5,  6,  7,
//    8,  9, 10, 11, 12, 13, 14,
//   15, 16, 17, 18, 19, 20
// ]
// method to generate an array of numbers from 1 to n using the powerful combination of arrow
// functions, the spread operator, and the map() method.
const f = (n) => [...Array(n)].map((_, i) => i + 1);

console.log(f(20));