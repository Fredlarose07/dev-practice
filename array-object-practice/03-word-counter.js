// Compter le nombre d’occurrences de chaque mot dans une phrase

const sentence = "Le chat saute le mur et le chien regarde le chat";

function wordCounter(chaine){

    arr = chaine.split(' ') 
    
    obj = {}

    arr.forEach(element => {
        obj[element] = (obj[element] || 0) +1
    });


    return obj
}


console.log(wordCounter(sentence))