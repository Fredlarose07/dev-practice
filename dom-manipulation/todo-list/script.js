// const { createElement } = require("react");

// function TodoList(){

// const input = document.getElementById("todo-input");
// const addBtn = document.getElementById("add-btn");
// const todoList = document.getElementById("todo-list");
// const achieveTodo = document.getElementById("achieveTodo");


// addBtn.addEventListener("click", () => {
//   const taskText = input.value.trim();

//   if (taskText === "") return;

//     const li = document.createElement("li");
//     li.textContent = taskText;

//     const suppBtn = document.createElement("span");
//     suppBtn.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" 
//             width="16" height="16" viewBox="0 0 24 24" 
//             fill="none" stroke="currentColor" stroke-width="2" 
//             stroke-linecap="round" stroke-linejoin="round" 
//             class="feather feather-trash">
//             <polyline points="3 6 5 6 21 6"></polyline>
//             <path d="M19 6l-2 14H7L5 6"></path>
//             <path d="M10 11v6"></path>
//             <path d="M14 11v6"></path>
//         </svg>
//         `;
//     suppBtn.classList.add("iconBtn")
    
    

//   // ✅ Clic sur l'élément => barré / décoché
//   li.addEventListener("click", () => {

//     li.classList.toggle("done");
    
//        if(li.classList == "done"){
//         achieveTodo.appendChild(li);
//         console.log("done")
//     } else {
//         todoList.appendChild(li);
//         console.log("pas done")
//     }
// });

  
//   todoList.appendChild(li);
//   li.appendChild(suppBtn)
//   input.value = "";
// });


// }


// TodoList()


// ========== TodoList ==========


// function createTask(){

//     // Je récupére le input, la liste de tache, et le bouton pour envoyer la tache. 
//     const taskList = document.getElementById('taskList')
//     const taskInput = document.getElementById('taskInput')

    
//     // quand je clique sur le btn alors je crée une tache et je lui ajoute en contenu la value de mon input
//     // je crée également un btn pour supprimer la tache sur chaque task, via innerHTML j'ajoute le svg et j'ajoute aussi une classe de style
//     // La liste (taskList) a un enfant li (task) et (task) a un enfant (removeBtn)
//     taskInput.addEventListener("keydown", (event) => {

//         if(event.key === "Enter"){

//             if (taskInput.value.trim() === "") return;

//                 const task = document.createElement('li')
//                 task.textContent = taskInput.value.trim()
//                 const btnPanel = document.createElement('div')
//                 const removeBtn = document.createElement('span')
//                 const addTask = document.createElement('span')
//                 removeBtn.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FFFFFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FFFFFF"></path> </g></svg>`
//                 removeBtn.classList.add("iconBtn")
//                 addTask.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
//   <g id="SVGRepo_iconCarrier">
//     <!-- Barre horizontale (capsule) -->
//     <path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FFFFFF"/>
    
//     <!-- Barre verticale (capsule), bien centrée -->
//     <path d="M12 7C11.4477 7 11 7.44772 11 8V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V8C13 7.44772 12.5523 7 12 7Z" fill="#FFFFFF"/>

//     <!-- Cercle autour -->
//     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FFFFFF"/>
//   </g>
// </svg>
// `
//                 addTask.classList.add("iconBtn")
//                 taskList.appendChild(task)   
//                 task.appendChild(btnPanel)
//                 btnPanel.appendChild(removeBtn)
//                 btnPanel.appendChild(addTask)
                
//                 removeTask(removeBtn, task)
//         }
//     }) 
// }


// createTask()


// // function remove task

// function removeTask(removeBtn, task){

//     removeBtn.addEventListener('click', () => {

//         task.remove();
//     })
    
// }






function task(parent, content){

    //li
    const task = document.createElement('li')
    task.textContent = content.value.trim()
    // task.classList.add()
    parent.appendChild(task)
}


// task(taskList, taskInput)


function generateTask(input, ul){

    input.addEventListener("keydown", (e) =>{

        if(e.key == "Enter"){
            if(input.value.trim() === '') return;
            task(ul, taskInput)
        }
    })
}



function initTask(){

    const taskList = document.getElementById('taskList')
    const taskInput = document.getElementById('taskInput')

    generateTask(taskInput, taskList)

}

initTask()