
// ========== Counter ==========

function counter(){

    const plusBtn = document.getElementById('plus')
    const minusBtn = document.getElementById('minus')
    const counterDisplay = document.getElementById('counter')

    let count = 0

    plusBtn.addEventListener("click", () => {

        count ++
        counterDisplay.textContent = count;
    })

    minusBtn.addEventListener("click", () => {

        if(count > 0){
            count--
        counterDisplay.textContent = count
        }
    })

}

counter()

// ========== TodoList ==========

function TodoList(){

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const achieveTodo = document.getElementById("achieveTodo");


addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();

  if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    const suppBtn = document.createElement("span");
    suppBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" 
            width="16" height="16" viewBox="0 0 24 24" 
            fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round" 
            class="feather feather-trash">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-2 14H7L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
        </svg>
        `;
    suppBtn.classList.add("iconBtn")
    
    

  // ✅ Clic sur l'élément => barré / décoché
  li.addEventListener("click", () => {

    li.classList.toggle("done");
    
       if(li.classList == "done"){
        achieveTodo.appendChild(li);
        console.log("done")
    } else {
        todoList.appendChild(li);
        console.log("pas done")
    }
});

  
  todoList.appendChild(li);
  li.appendChild(suppBtn)
  input.value = "";
});


}


TodoList()