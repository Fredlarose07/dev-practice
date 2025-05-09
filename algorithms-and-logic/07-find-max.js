const numbers = [9, 3, 2, 34, 24, 13];

function findMax(array){
    let highNum = array[0]
    array.forEach(element => {
        if(highNum < element){
            highNum = element
        }
    });
    console.log("le numéro le plus grand est " + highNum)
}

findMax(numbers)

// ---------------------------------------------------------