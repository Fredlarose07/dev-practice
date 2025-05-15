const nestedArray = [1, [2, [3, [4, 5]]]];

function flattenTheMatrix(){

    let array = []
    

    for(i = 0; i < nestedArray.length; i++){

        if(typeof nestedArray[i] === "number"){
            array.push(nestedArray[i])
        } else{
            nestedArray[i].forEach(element => {
                array.push(element)
            });
        }
    } 
    
    console.log(nestedArray[0], nestedArray[1], nestedArray[1][1])

}

flattenTheMatrix()