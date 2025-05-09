//  Transformer un tableau en objet clé/valeur (type dictionnaire)

const entries = [
    ["name", "Alice"],
    ["age", 30],
    ["role", "admin"]
  ];


  function arrayToDictionary(arr){

    obj = {}

    arr.forEach(tab => {
        obj[tab[0]] = tab[1]
        console.log(obj)
        
    });
  }


  arrayToDictionary(entries)