// La factorielle d'un nombre n (notée n!) est le produit de tous les entiers de 1 à n.
// exemple : 5! = 5 × 4 × 3 × 2 × 1 = 120

// function factorial(n){
// let result = 1 
// for (let i = n; i >= 1; i--) {
//     result *= i
// }
// return result;
// }

// console.log(factorial(5))


// // facto with récursion

// function factorialWithRecursion(n) {
//     if(n === 0) return 1
//     return n * factorialWithRecursion(n - 1)
// }            

// console.log(factorialWithRecursion(5))


let result = 1


for(let i = 5; i >= 1; i--){
    result *= i
}

console.log(result)


function facto(n){
    if(n === 0) return 1
    return n * facto(n - 1)
}

console.log(facto(6))