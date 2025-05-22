
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
  input.value = "";
});


}


TodoList()