// false
// true

// when you use the < operator to compare values, it
// performs a process called type coercion to convert the values into a
// common type before making the comparison.

// When you compare strings using the < operator, it performs a
// lexicographic comparison. That means JavaScript examines the
// character codes (Unicode values) of the corresponding characters from
// left to right. In Unicode, the character code for "[" (opening square
// bracket) is greater than the character code for "F" (uppercase letter F).

const a = "f"<{};
const b = "F"<{};

console.log(a);
console.log(b);