// function createDailyRoutine() {
//     const routineInput = document.getElementById("dailyRoutineInput");
//     const routineBoard = document.getElementById("dailyRoutine");

//     routineInput.addEventListener("keydown", (event) => {
//         if (event.key === 'Enter') {
//             if (routineInput.value === '') return;

//             const dailyTask = document.createElement("li");

//             // Création de la checkbox
//             const checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.classList.add("checkbox");

//             // Création du span contenant le texte
//             const taskText = document.createElement("span");
//             taskText.textContent = routineInput.value;
//             taskText.classList.add("task-text");

//             // Bouton de suppression
//             const removeBtn = document.createElement('span');
//             removeBtn.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FFFFFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FFFFFF"></path></svg>`;
//             removeBtn.classList.add("iconBtn");

//             // Assemble les éléments
//             dailyTask.appendChild(checkbox);
//             dailyTask.appendChild(taskText);
//             dailyTask.appendChild(removeBtn);
//             routineBoard.appendChild(dailyTask);

//             removeTask(removeBtn, dailyTask);
//             checkRoutine(dailyTask, checkbox, taskText); // clic sur le <li>, toggle la checkbox

//             routineInput.value = '';
//         }
//     });
// }

// createDailyRoutine();

// function checkRoutine(task, checkbox, textElement) {
//     task.addEventListener("click", (e) => {
//         // Évite le clic sur le bouton de suppression de cocher aussi
//         if (e.target.closest(".iconBtn")) return;

//         checkbox.checked = !checkbox.checked;
//         textElement.classList.toggle("check");
//     });
// }



function createRoutine(value, ul){

    // create element 
    element = document.createElement("li")

    // checkbox
    checkbox = document.createElement("input")
    checkbox.type = 'checkbox'
    checkRoutine(checkbox, element)

    // text
    text = document.createElement("span")
    text.textContent = value

    // delete
    btnDelete = document.createElement("span")
    btnDelete.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><path d="M17 12C17 11.4477 16.5523 11 16 11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44771 13 8 13H16C16.5523 13 17 12.5523 17 12Z" fill="#FFFFFF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#FFFFFF"></path></svg>`
    btnDelete.classList.add("iconBtn")
    deleteTask(btnDelete, element)

        //call 
        ul.appendChild(element)
        element.appendChild(checkbox)
        element.appendChild(text)
        element.appendChild(btnDelete)
}


function callRoutine(){

    const inputRoutine = document.getElementById("dailyRoutineInput")
    const listRoutine = document.getElementById("dailyRoutine")

    inputRoutine.addEventListener("keydown", (e) => {
        if(e.key === 'Enter'){ // e.key propriété de l'evenement
            createRoutine(inputRoutine.value, listRoutine)
        }
    })
}

callRoutine()


function deleteTask(btnDelete, li){
    btnDelete.addEventListener("click", () => {
        li.remove()
    })
}


function checkRoutine(checkbox, element){

    element.addEventListener("click", () => {

        checkbox.checked = !checkbox.checked;
        element.classList.toggle("check")
    })
}
