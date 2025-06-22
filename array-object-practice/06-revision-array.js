const users = [
    { name: "Alice", email: "alice@example.com", role: "admin" },
    { name: "Bob", email: "bob@example.com", role: "user" },
    { name: "Charlie", email: "charlie@example.com", role: "user" },
  ];

  function extractUser(arr){

    tab = []

    arr.forEach(element => {
        
      tab.push(element.name)
    });


    console.log(tab)
  }

  // extractUser(users)

  function arrayDictionary(){

    const entries = [
    ["name", "Alice"],
    ["age", 30],
    ["role", "admin"]
  ];

  obj = {}

  entries.forEach(element => {
    obj[element[0]] = element[1] 
  });


    console.log(obj)
  }

  // arrayDictionary()

  function wordCounter(){

    const sentence = "Le chat saute le mur et le chien regarde le chat";

    let tab = sentence.toLowerCase().split(' ')
    obj = {}

    tab.forEach(element => {
      obj[element] = (obj[element] || 0) +1
    });

    console.log(obj)
    
  }

  // wordCounter()


  function groupUserRole(){

    const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" }
];

  obj = {}

    users.forEach(element => {

      obj[element.role] = (obj[element.role] || [])  
      
      obj[element.role].push(element.name)
      
    });


    console.log(obj)
  }

  // groupUserRole()

  const nestedArray = [1, [2, [3, [4, 5]]]];

  const newArr = []

function flattenTheMatrix(arr,newArr = []){

  arr.forEach(element => {
    if(typeof element === "object"){
      flattenTheMatrix(element, newArr)
      
    }else {
      newArr.push(element)
    }
  });

  return newArr

}

// console.log(flattenTheMatrix(nestedArray))



const sentence = "Le chat saute le mur et le chien regarde le chat";


function test(sentence){

  let arr = sentence.toLowerCase().split(" ")

  obj = {}

  arr.forEach(element => {
    
    obj[element] = (obj[element] || 0) +1

    
  });

  console.log(obj)
}

  test(sentence)