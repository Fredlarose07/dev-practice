function sumDigits(value){
    let arrayNum = value.toString().split("")
    let somme = 0;
    arrayNum.forEach(element => {
        somme += parseInt(element)
    });
    return somme
};

console.log(sumDigits('28'))
