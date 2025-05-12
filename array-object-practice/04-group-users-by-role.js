const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" }
];


function byRole(list){

    obj = {}

    list.forEach(element => {

        obj[element.role] = obj[element.role] || []
        
        if(element.role === "admin"){
          obj.admin.push(element.name)
        } else if(element.role === "user"){
          obj.user.push(element.name) 
        }

      
    });

        console.log(obj)
    
}


byRole(users)


// bien mais le code dépend trop de admin et user, il faut le rendre autonome si y'a un nouveau role