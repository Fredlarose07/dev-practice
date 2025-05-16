const nestedArray = [1, [2, [3, [4, 5]]]];

    

function flattenTheMatrix(arr, array = []){
    
    
    arr.forEach(element => {
        if(Array.isArray(element)){
            flattenTheMatrix(element, array)
        } else {
            array.push(element)
        }
    });

    
    return array
}


console.log(flattenTheMatrix(nestedArray))

