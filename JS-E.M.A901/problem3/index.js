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

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function chooseName(array) {
    return array[random(0, array.length - 1)];
}
para.textContent = chooseName(names);



const section = document.querySelector('section');

section.appendChild(para);