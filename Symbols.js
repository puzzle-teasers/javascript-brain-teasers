// Netherlands
// JavaScript feature called Symbol. Symbols let us define hidden or private properties within objects. 
// Since symbols are unique, they’re unlikely to cause conflicts with otherproperties. 
// They won’t show up in for...in loops or Object.keys(), making them suitable for creating properties that are not intended to be
// accessed by external code.

const country = {
  namex: "Netherlands"
};

const namex = Symbol("namex");

country[namex] = "Holland";

console.log(country["namex"]);