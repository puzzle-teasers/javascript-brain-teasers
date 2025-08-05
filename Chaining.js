// 0
// attempt to increment x by 1 through optional chaining, but since titles is null, the increment operation is not executed. 
// So, it prints the value of x (which is still 0) to the console

const titles = null;
let x = 0;
 
titles?.[++x].toUpperCase();
 
console.log(x);