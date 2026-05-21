// Write js variables in camelCase (myVariableName)
let countEl = document.getElementById("count-el") // pass in arguments (input) into the function, like getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl) // passing in the variable to log

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

