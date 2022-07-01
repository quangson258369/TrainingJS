let finalResult;

let evenOddResult;


let num1 = 3;
let num2 = 5;
let num3 = 11;
let num4 = 17;

let result1 = num1 + num2;
let result2 = num4 - num3;

finalResult = result1 * result2;

evenOddResult = finalResult % 2




const section = document.querySelector('section');

let para1 = document.createElement('p');
let finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
let para2 = document.createElement('p');
let evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.'
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);