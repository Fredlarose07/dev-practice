


function findOftenNumber(array) {

    let counts = {};
    let maxCount = 0;
    let result = [];

    array.forEach(element => {
        counts[element] = (counts[element] || 0) + 1;
        if (counts[element] > maxCount){
            maxCount = counts[element]
        }
    });

    for (let element in counts) {
        if (counts[element] === maxCount) {
            result.push(Number(element));
        }
    }

    console.log(result)
}


let firstArray = [12, 42, 34, 24, 42, 15, 53, 53];


findOftenNumber(firstArray)