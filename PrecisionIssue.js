// 10000000000000000 and not 10000000000000001
// This is because of how JavaScript handles floating-point arithmetic.
// It uses double-precision floating-point format, which can lead to precision issues with large numbers
const largeNumber = Math.pow(10, 16);
const smallNumber = 1;

console.log(largeNumber + smallNumber);