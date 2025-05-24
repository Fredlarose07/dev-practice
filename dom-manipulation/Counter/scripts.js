
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