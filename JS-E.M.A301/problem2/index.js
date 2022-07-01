// Final result should be 10.42
// Add/update your code here

let result = 1.04222;
let result2 = 10;
result *= result2;
const finalResult = result.toFixed(2);
typeof finalResult;
const finalNumber = Number(finalResult);


// Don't edit the code below here!

const section = document.querySelector('section');

const para1 = document.createElement('p');
para1.textContent = `Your finalResult is ${ finalResult }`;
const para2 = document.createElement('p');
const finalNumberCheck = isNaN(finalNumber) === false ? 'finalNumber is a number type. Well done!' : `Ooops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;

section.appendChild(para1);
section.appendChild(para2);