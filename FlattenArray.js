// [ 'apple', 'blueberry', 'blackberry', 'tangerine', 'orange', 'grape' ]
// Flatten a nested array using Array.prototype.concat and apply

const nestedArray = ["apple", ["blueberry", "blackberry"], 
                    ["tangerine", "orange"], "grape"];
const newArr = [].concat.apply([], nestedArray);

console.log(newArr);