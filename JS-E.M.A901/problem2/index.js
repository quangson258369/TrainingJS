let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let x = 50;
let y = 60;
let width = 100;
let height = 75;
let color = 'blue';


function draw(x, y, width, height, color) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

draw(x, y, width, height, color);



const section = document.querySelector('section');