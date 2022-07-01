let season = 'summer';
let response;

// Add your code here
if (season.match("summer") != null) {
    response = "It's probably nice and warm where you are ;enjoy the sun";
} else {
    response = "we don't know what  season it is";
}
// Don't edit the code below here!

const section = document.querySelector("section");
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);