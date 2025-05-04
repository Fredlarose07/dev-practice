array = [25, 35, 45, 55, 65, 75, 75, 75, 85, 95]


function deleteDuplicate(tab) {
    let objet = {}
    tab.forEach(element => {
        objet[element] = true
    });

    let arrayWithoutDelete = Object.keys(objet).map(Number);
    console.log(arrayWithoutDelete)

}

deleteDuplicate(array)


// c'est la méthode qu'on utilisait avant ES6 qui a implenté new Set()


arraySecond = [25, 35, 35, 35, 35, 45, 75, 85, 95]

let arrayWithoutDuplicate = [...new Set(arraySecond)]

console.log(arrayWithoutDuplicate)