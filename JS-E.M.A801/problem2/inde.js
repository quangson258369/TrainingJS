let name = 'Mustafa';
let i = 0;
let para = document.createElement('p');

let phonebook = [
    { name: 'A', number: '1111' },
    { name: 'B', number: '2222' },
    { name: 'C', number: '3333' },
    { name: 'D', number: '4444' },
    { name: 'Mustafa', number: '6888' },
    { name: 'E', number: '5555' },
    { name: 'F', number: '6666' },
    { name: 'G', number: '7777' },
];


for (let item of phonebook) {
    let phonebook_name = item.name;
    let phonebook_number = item.number;
    if (phonebook_name === name) {
        para.textContent += `${phonebook_name}'s number is ${phonebook_number}`;
        break;
    }
}
let section = document.querySelector('section');
section.appendChild(para);