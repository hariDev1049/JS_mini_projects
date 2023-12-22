const addTodoButton = document.querySelector("#add")
let input = document.querySelector("#input")
let newTodo = document.querySelector("#container")

let delNodes = document.querySelectorAll(".delete")
let editNodes = document.querySelectorAll(".edit")

deleteTodo();
editTodo();

addTodoButton.addEventListener("click",(e)=>{
    if(input.value ===''){
        alert("Enter a valid Todo..!")
        return
    }
    createNewTodo(input.value); 
    input.value = ''

    delNodes = document.querySelectorAll(".delete")
    editNodes = document.querySelectorAll(".edit")
    deleteTodo()
    editTodo()
},false)


function createNewTodo(input){
    let textNode = createInputText(input)
    let editButton = createButtons(true);
    let delButton = createButtons(false);
    let rootDiv = createRootDiv();
    rootDiv.appendChild(textNode);
    rootDiv.appendChild(editButton);
    rootDiv.appendChild(delButton);
    // newTodo.insertBefore(rootDiv,newTodo.firstChild);
    newTodo.appendChild(rootDiv);
}


function createInputText(input){
    const todo = document.createElement('div');
    todo.className='todo'
    const addText = document.createTextNode(input);
    todo.append(addText);
    return todo;
}

function createButtons(value){
    const button = document.createElement('input');
    button.type='button'
    if(value){ 
    button.className='button edit'
    button.value='Edit Todo'
    button.id = 'edit'
    }
    else{
        button.className='button delete'
        button.value='Delete Todo'
        button.id='delete'
    }
    return button;
}

function createRootDiv(){
    const div = document.createElement('div');
    div.className='new_todo'
    div.id='new_todo'
    return div;
}

function deleteTodo(){
    delNodes.forEach((node)=>{
        node.addEventListener("click", (e)=>{
            delTodo(node)
        },false)
    })
}

function editTodo(){
    editNodes.forEach((node) => {
        node.addEventListener("click", (e)=>{
            addTodoButton.value = 'Update Todo';
            let editTodo = node.parentNode.firstElementChild
            input.value = editTodo.innerHTML
            delTodo(node)
        },false)
    })
    addTodoButton.value = 'Add Todo';
}

function delTodo(node){
    let deletedTodo = node.parentNode
            if(deletedTodo.className === 'new_todo'){
                deletedTodo.parentNode.removeChild(deletedTodo);
            }
}
