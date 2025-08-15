// ReferenceError: namex is not defined
// namex has what we call function scope, meaning it’s accessible only within that function.
//  immediately invoked function expression (IIFE)

!function() {
  const namex = "john";
  const agex = 20;
}();

const capitalizedName = namex[0].toUpperCase() + namex.slice(1);

console.log(capitalizedName);