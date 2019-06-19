const array = ["3", "5", "1", "8", "2"];

let numArray = []

function numConversion(element, index, array) {
    numArray.push(Number(element));
    return numArray;
};

function orderedArray(array) {
    console.log(array.sort(function(a, b){return a - b}));
};

array.forEach(numConversion);

console.log(array);

orderedArray(numArray);

