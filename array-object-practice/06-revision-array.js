const users = [
    { name: "Alice", email: "alice@example.com", role: "admin" },
    { name: "Bob", email: "bob@example.com", role: "user" },
    { name: "Charlie", email: "charlie@example.com", role: "user" },
  ];

  function extractUser(arr){

    finalTab = []

    arr.forEach(element => {
        element.name
        finalTab.push(element.name)
    });

    finalTab
    console.log("🚀 ~ extractUser ~ finalTab:", finalTab)
  }

  // extractUser(users)

const entries = [
    ["name", "Alice"],
    ["age", 30],
    ["role", "admin"]
  ];

  function arrayToDictionary(array){

  obj = {}

  array.forEach(element => {
      obj[element[0]] = element[1]
  });
    
  console.log("🚀 ~ arrayToDictionary ~ obj:", obj)
  }

  // arrayToDictionary(entries);



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