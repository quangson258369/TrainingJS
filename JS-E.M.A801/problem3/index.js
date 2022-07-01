let i = 500;
let para = document.createElement('p');

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}


for (i; i >= 0; i--) {
    if (isPrime(i) === false) {
        continue;
    }
    para.textContent += `${i} `;
}

let section = document.querySelector('section');
section.appendChild(para);