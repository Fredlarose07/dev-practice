let randomArray = [12, 32, 1, 34, 23, 35, 1, 50]

function sort(array){

    for(let j = 0; j < array.length; j++){

        for(let i = 0; i < array.length -1; i++){
        
            if(array[i] > array[i +1]){
                let temp = array[i]
                array[i] = array[i +1]
                array[i +1] = temp
            }
        }
    }
    
    console.log(array)

    }

// sort(randomArray)
