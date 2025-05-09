// function findMissingNumber(arr){
//     start = arr[0]
//     arr.forEach(element => {
//         if(element == start){
//             start++
//         } 
//     });
//     return start
// }

// console.log(findMissingNumber([1, 2, 3, 5, 6, 8]))


function findMissingNumber(array){
    index = array[0]
    array.forEach(element => {
        if(element !== index){
            while(index < element){
                return console.log(index)
                index++
            }
        }
        index++
    });
}


console.log(findMissingNumber([1, 2, 3, 5, 6, 8]))