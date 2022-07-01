var dataArr = [{
        id: 1,
        name: 'Dung',
        age: 20
    },
    {
        id: 2,
        name: 'Diu',
        age: 20
    },
    {
        id: 3,
        name: 'Ky',
        age: 20
    },
    {
        id: 1,
        name: 'Hai',
        age: 22
    }
]

var setObj = new Set();
var result = dataArr.reduce((acc, item) => {
    if (!setObj.has(item.id)) {
        setObj.add(item.id, item)
        acc.push(item)
    }
    return acc;
}, []);

console.log(result);