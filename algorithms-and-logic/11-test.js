

function fizzBuzz(){

    for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz")
    } else if(i % 3 === 0 ){
        console.log("fizz")
    } else if(i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
} 
}

// fizzBuzz()


function sumDigits(value){

    let sum = 0;

    let save = value.toString().split('')
    save.forEach(element => {
        sum = sum + parseInt(element)
    });
    console.log(sum)
}


// sumDigits(127)


function factorial(value){

    let sum = 1

    for(i = value; 1 <= i; i--){

        sum *= i
    }

    console.log(sum)
}

// factorial(5)


function palindrome(word){

    let result = word.split('').reverse().join('')

    if(result === word){
        console.log( word + " is a palindrome")
    } else {
        console.log(word + " is not a palindrome")
    }
}

// palindrome("Rugby")
// palindrome("Kayak")


function findMax(arr){

    let winner = 0;
    arr.forEach(element => {
        if(element > winner){
            winner = element
        }
    });
    console.log(winner)

}

// findMax([12, 34, 1, 3, 35, 85, 84, 92, 47])

function twoSum(){

    let nums = [11, 2, 7, 15];
    let cible = 9;

    
    nums.forEach(element => {
        nums.forEach(element2 => {
            if(cible == element + element2){
                console.log(element + " + " + element2)
            } 
        });
    });

}

// twoSum()


function deleteDuplicate(){

    arr = [12, 34, 12, 33, 24, 56]
    
    obj = {}

    arr.forEach(element => {
       obj[element] = (obj[element] || true)   
    });

    arrWithoutDouble = Object.keys(obj)

    console.log(arrWithoutDouble)
}

// deleteDuplicate()


function findMissingNumber(arr){

    count = arr[0]

    for(i = 0; i< arr.length; i++){


        if(count != arr[i]){
            for(count; count < arr[i]; count++){
                console.log(count)
            }

        } else {

        }


        count++
    }


    
}

findMissingNumber([1, 2, 3, 6, 8])
                    