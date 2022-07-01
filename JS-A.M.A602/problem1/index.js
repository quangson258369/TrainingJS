var numbers = {
    [Symbol.iterator]: calculate
};

function* calculate() {
    var i = 0
    while (true) {
        yield i
        i += 1
    }
}

function* calculatePlus() {
    var i = 6
    while (true) {
        yield i
        i += 4
    }
}
var plusFour = {
    // ..
    [Symbol.iterator]: calculatePlus
};
// should print 0..100 by step 1
// 0 1 2 … 100
for (let num of numbers) {
    if (num === 101) break;
    console.log(num);
}
console.log("============================================");
// should print 6..30 by step 4
// 6 10 14 … 30
for (let num of plusFour) {
    if (num > 30) break;
    console.log(num);
}