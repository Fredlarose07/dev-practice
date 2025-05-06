

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


function fractionnal(value){

    let sum = 1

    for(i = value; 1 <= i; i--){

        sum *= i
    }

    console.log(sum)
}

// fractionnal(5)


function palindrome(palindrome){

    
}