var x = 2,
    fns = [];

(function() {
    var x = 5;

    for (let i = 0; i < x; i++) {
        fns[i] = () => i;
    }
})();


console.log(x * 2 === fns[x * 2]());