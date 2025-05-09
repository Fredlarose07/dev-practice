// Extrait les noms d’utilisateurs depuis un tableau d’objets.

const users = [
    { name: "Alice", email: "alice@example.com", role: "admin" },
    { name: "Bob", email: "bob@example.com", role: "user" },
    { name: "Charlie", email: "charlie@example.com", role: "user" },
  ];



  function userNameList(tab){

    let array = []

    tab.forEach(element => {
        array.push(element.name)
    });

    console.log(array)
}


  userNameList(users)