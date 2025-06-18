function findMissingNumber(arr){
    start = arr[0]
    arr.forEach(element => {
        if(element == start){
            start++
        } 
    });
    return start
}

console.log(findMissingNumber([1, 2, 3, 5, 6, 8]))


