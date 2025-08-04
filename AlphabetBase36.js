// abcdefghijklmnopqrstuvwxyz
// builds a string by appending the base-36 representation of each number to the a variable
for(i=9,a='';++i<36;)a+=i.toString(36)

console.log(a);