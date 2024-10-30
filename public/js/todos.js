const plusBtn = document.querySelector('.fa-circle-plus')
const addForm = document.getElementById('addForm')
const addDiscard = document.getElementById('discard')
const newTaskInput = document.getElementById('newTask')

const deleteBtn = document.querySelectorAll('.fa-trash')
const pendingTask = document.querySelectorAll('label.pending')
const completedTask = document.querySelectorAll('label.completed')
const checkbox = document.querySelectorAll('.checkbox')

plusBtn.addEventListener('click', toggleAddForm)
addDiscard.addEventListener('click', cleanInput)

Array.from(deleteBtn).forEach((el) => {
    el.addEventListener('click', deleteTask)
})

Array.from(pendingTask).forEach((el) => {
    el.addEventListener('click', markComplete)
})

Array.from(completedTask).forEach((el) => {
    el.addEventListener('click', markIncomplete)
})

function toggleAddForm(){
    const currentDisplay = window.getComputedStyle(addForm).display; // Actual display of the addForm div in the css file.
    currentDisplay === 'none' ? addForm.style.display = 'block' : addForm.style.display = 'none';
}

function cleanInput(){
    toggleAddForm()
    newTaskInput.value = ''
}

async function deleteTask(){
    const id = this.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTask', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const id = this.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const id = this.parentNode.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': id
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}