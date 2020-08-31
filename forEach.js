function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    let newNames = [];
    let curNames = [];
    
    arr1.forEach(function(item1) {
        arr2.forEach(function(item2) {
            if (item1[1] === item2[1]) {
                item1[0] += item2[0]
            }
        })
    })

    arr1.forEach(function (item) {
        curNames.push(item[1])
    });
    
    arr2.forEach(function (item) {
        newNames.push(item[1])
    });

    newNames.forEach(function(item){
        if(curNames.indexOf(item) === -1){
            arr1.push(arr2[newNames.indexOf(item)])
        }
    })

    arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));