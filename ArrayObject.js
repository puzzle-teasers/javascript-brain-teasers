// 2
// because "user" is a string, it gets included just as a property within the array

const groceryList = [];

groceryList[0] = "Bread";
groceryList[1] = "Milk";
groceryList.user = "John";

console.log(groceryList.length);