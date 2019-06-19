let oldArray = [1, 2, 3, 4];

let newArray = []

function multiplicateArray(array) {
    for(let i = 0; i < array.length + 1; i++){
        for(let k = 0; k < i; k++) {
            newArray.push(i);
        };
    };
    console.log(newArray);
};

multiplicateArray(oldArray);


