const quote = 'I do not like green eggs and ham. I do not like them, Sam-I-Am.';
const substring = 'green eggs and ham';

// Add your code here
const quoteLength = quote.length;
const index = quote.indexOf(substring);
const copyQuote = quote.substring(0, index);
const revisedQuote = `${copyQuote} ${substring}.`;

// Don't edit the code below here!

const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = `The quote is ${ quoteLength } characters long.`;
const para2 = document.createElement('p');
para2.textContent = revisedQuote;

section.appendChild(para1);
section.appendChild(para2);