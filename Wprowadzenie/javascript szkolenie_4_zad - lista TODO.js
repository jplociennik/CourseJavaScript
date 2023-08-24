/*HTML - index.html
    <title>JS</title>
    <meta charset="UTF-8">
    <link href="styles.css" rel="stylesheet">

    <input type="text" id="addTaskInput">
    <button id="addTaskButton" disabled>Dodaj</button>

    <ul id="todoList">Lista zadań:</ul>

    <script src="app.js"></script>
*/

const todoList = document.getElementById('todoList');
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('addTaskInput');

function clearInput() { taskInput.value = ''; addTaskButton.disabled = true; }

function addElementToList(task)
{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task + '\n'));
    li.setAttribute('class', 'undone');
    todoList.appendChild(li);
    clearInput();
}

function validateList(task)
{
    const listElements = todoList.getElementsByTagName('li');

    if(listElements.length === 0) return true;
    
    for(let i = 0; i < listElements.length; i++)
    {
        if(listElements[i].innerHTML.includes(task)) 
        {
            alert('Podałeś już takie zadanie!'); 
            clearInput(); return false;
        }   
    }

    return true;
}

taskInput.addEventListener('keyup', event =>
    {
        addTaskButton.disabled = event.target.value != '' ? false : true;
    })

addTaskButton.addEventListener('click', event =>
    {
        console.log(taskInput.value); console.log(event); console.log(todoList);
        console.log(todoList.getElementsByTagName('li'));

        if(validateList(taskInput.value))
            addElementToList(taskInput.value);
    });


todoList.addEventListener('click', event =>
{
    let listElement = event.target;

    if(!(listElement.id === 'todoList' && listElement.innerHTML.includes('Lista')))
    {
        if (listElement.classList.contains('done')) listElement.classList.remove('done');
        else  listElement.classList.add('done');
    }
});
