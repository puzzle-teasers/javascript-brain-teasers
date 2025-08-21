
// get into the habit of using let and const instead of
// var because they help prevent potential problems like variable hoisting
// and accidental variable redeclaration.
let temp = 25;

function displayTemperature() {
  console.log(`Current temperature: ${temp} °C`);
}

function forecastTemperature() {
  console.log(`Expected temperature: ${temp} °C`);
  var temp = 28;
}

displayTemperature();
forecastTemperature();