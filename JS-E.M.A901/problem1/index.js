let names = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
];
let para = document.createElement('p');


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function print_random(array) {
    para.textContent += names[getRandomInt(0, names.length - 1)];
}
print_random(names);


const section = document.querySelector('section');

section.appendChild(para);