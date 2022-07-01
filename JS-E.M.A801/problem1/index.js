const myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const list = document.createElement('ul');

// Add your code here
for (let item of myArray) {

    let bullet = document.createElement('li')
    bullet.textContent += item;
    list.appendChild(bullet);

}


const section = document.querySelector('section');
section.appendChild(list);