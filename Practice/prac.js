function range(start, end, step) {
    let arra = [];

    if (step === undefined) {
        for (let i = start; i <= end; i++) {
            arra[i] = i;
        }
        arra.shift();
    }
    else if(Math.sign(step) === -1) {
        let j = start;
        for (let i = 0; i <= start; i++) {
            arra[i] = j;
            if (arra[i] === end) {
                break;
            }
            j += step;
        }
    }
    else if(Math.sign(step) === 1){
        let j = start;
        for (let i = 0; i <= end; i++) {
            arra[i] = j;
            if (arra[i] === end || arra[i] >= end) {
                arra.pop();
                break;
            }
            j += step;
        }
    }


    return arra
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1, 10, 2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10,2)));
// → 55