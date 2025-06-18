const nums = [11, 2, 7, 15];
const cible = 9;

function twoSum(array){

    for(i = 0; i < array.length; i++){

        for(j = i+1; j < array.length; j++){
            if(array[i] + array[j] == cible){
                console.log(array[i] + " et" + array[j] + " sont des paires")
            }
        }
    }

}


twoSum(nums)


