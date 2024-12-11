const addToDoButton = document.querySelector('#addTask');
const inputField = document.querySelector('#userTaskInput');
const toDoContainer = document.querySelector('.todos');

inputField.addEventListener('click', selectInput);
addToDoButton.addEventListener('click', addTask);

function selectInput() {
        inputField.style['boxShadow'] = '0 6px 2px -2px green';
}

function addTask() {
    if(inputField.value.trim().length) {
        //create a new li element
        let newTodo = document.createElement('li');
        //add a selector to the element
        newTodo.classList.add('li-styling');
        //add content to the new li element
        newTodo.innerText = inputField.value;
        toDoContainer.appendChild(newTodo);

        newTodo.addEventListener('click', () => {
            newTodo.style.color = 'grey';
            newTodo.style.textDecoration = 'line-through';
        });

        newTodo.addEventListener('dblclick', () => {
            toDoContainer.removeChild(newTodo);
        });

    }
    else {
        console.log('empty value');
        inputField.style['boxShadow'] = '0 6px 2px -2px red';
    }

    inputField.value = '';
}