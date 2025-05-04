// ----------------------------------- FizzBuzz -----------------------------------------------------

function fizzBuzz(){
    for(i = 0; i <= 100; i++){

        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        } else if(i % 3 === 0){
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// fizzBuzz()

// ----------------------------------- Palindrome -----------------------------------------------------



function reverseCharacter(word){
    let reverse = word.split('').reverse().join('')
    console.log(reverse)

    if(reverse === word){
        console.log("it's a palindrome")
    } else {
        console.log("this is not a palindrome")
    }
}

// reverseCharacter("kayak")
// reverseCharacter("vert")


// -------------------------------------- findOftenNumber --------------------------------------------------

findOftenNumber

firstArray = [23, 1, 2, 3, 4, 1, 1, 5, 23, 12, 13, 52, 23]

function findOftenNumber(array){

    let obj = {}
    let maxCount = 0
    let result = []

    array.forEach(element => {
        obj[element] = (obj[element] || 0) +1
        
        if(obj[element] >= maxCount){
            maxCount = obj[element]
        }
            
    });

    for(element in obj){
        if(maxCount == obj[element]){
        result.push(Number(element))
        }
    }

    console.log(result)

}

// findOftenNumber(firstArray)


// ------------------------------------- deleteDuplicate ---------------------------------------------------


let arrayDuplicate = ["pomme", "kiwi", "raisin", "kiwi"] 

    let duplicateObjet = {}
    let arrayWhitoutDuplicate = []

function deleteDuplicate(){
    arrayDuplicate.forEach(element => {
        duplicateObjet[element] = (duplicateObjet[element] || true) 
        arrayWhitoutDuplicate = Object.keys(duplicateObjet)
    });

    console.log(arrayWhitoutDuplicate)
}

// deleteDuplicate()


// ------------------------------------- sortwithoutsortmethod ---------------------------------------------------


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

// ------------------------------------- withsortmethod ---------------------------------------------------


let fruits = ["pomme", "poire", "raisin", "abricot"]
let randomArrNumber = [3, 1, 10, 2]
let randomArrObj = [
    {name: "Franklin", age: 24},
    {name: "Anna", age: 16},
    {name: "Ben", age: 35}
]

// fruits.sort()
// console.log(fruits)

// randomArrNumber.sort((a, b) => a - b)
// console.log(randomArrNumber)

// randomArrObj.sort((a, b) => a.age - b.age)
// console.log(randomArrObj)

// ------------------------------------- sortwithoutsortmethod ---------------------------------------------------


function target(target){

    let saveTarget = target
    target = target -1

    for(i = 1; i < target+ 1; i++){

        if(i + target == saveTarget){
            console.log(i + " et " + target + " sont des paires")
        }

        target--
    }

}

target(14);



