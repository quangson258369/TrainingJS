function foo(a3) {
    return a3;
}

function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
    const [replaceValue, ...othervalue] = a2;
    const [first, last] = a1;
    var a3 = [first, ...othervalue];
    return foo(a3);
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join("") === "281012");
// true