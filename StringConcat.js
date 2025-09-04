// it treats them as strings and does string concatenation.
// use concat() or the spread operator to combine arrays instead.

const femaleMKCharacters = [
  "Sonya Blade",
  "Sindel",
  "Cassie Cage",
  "Sheeva"
];

const maleMKCharacters = [
  "Scorpion",
  "Sub-Zero",
  "Raiden",
  "Johnny Cage"
];

const MKCharacters = femaleMKCharacters + maleMKCharacters;

console.log(MKCharacters);