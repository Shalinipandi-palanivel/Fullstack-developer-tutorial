document.querySelector('body').addEventListener("click",function(){
    console.log("body");
},true); //Event capturing - happens from parent to child(outer to inner) capture me first and then do event bubbling

const todoWrapper = document.getElementById("todoList");
todoWrapper.onclick = function(){
    console.log('TodoWrapper');
}

//Input wrapper
const inputWrapper = document.createElement('section');
inputWrapper.id = 'inputWrapper';

//Input box
const inputBox = document.createElement('input');
inputBox.placeholder = 'Add a new item';
inputBox.addEventListener('keypress',function(ev){
    if (ev.key == 'Enter'){
        addTodoItem(ev.target.value);
        inputBox.value = ''; // we can add an item without removing what we entered manually
    }
})

inputWrapper.append(inputBox);
todoWrapper.append(inputWrapper);

//List wrapper
const listWrapper = document.createElement('section');
listWrapper.id = 'listWrapper';
listWrapper.addEventListener("click",function(ev){
    if(ev.target.tagName === "BUTTON"){
        const selectedId = ev.target.closest(".todoItem").getAttribute("data-Id");
        removetodoItem(selectedId);
    }
})

todoWrapper.append(listWrapper);

//Load todo List using API
//API - Application Programming Interface. 
// Interface used to interact with other server to fetch the datas.


let todoListData;

// const todoListData = [{
//     value: 'First',
//     Completed: false,
// },{
//     value: 'Second',
//     Completed: false,
// },{
//     value: 'Third',
//     Completed: false,
// }];

function fetchTodoList(){
fetch('https://dummyjson.com/todos', {
    // mode: 'no-cors',
    method: 'GET',
    headers: {
        "content-type": "application/json"
    }
})
.then(res => res.json()) //de-serialize the data using .json()
.then(data => {
    todoListData = data.todos;
    renderTodoList();
    // console.log(data);]
})
.catch(err => console.log(err));
}


/* updating completed status of todo with id */
function toggleCompletedStatus(todoId, completed){
   return fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ //serialize the data using .stringify
      completed: completed,
    })
  })
  .then(res => res.json())
}
//Add a todo item
function createTodoItem(todo){
return fetch('https://dummyjson.com/todos/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      todo,
      completed: false,
      userId: 5,
    })
  })
  .then(res => res.json())
}

//delete todo item
function deletetodoItem(selectedId){
return fetch(`https://dummyjson.com/todos/${selectedId}`, {
    method: 'DELETE',
  })
  .then(res => res.json());
}

function clearTodoList(){
    listWrapper.innerHTML = '';
}

//displays todo item that we already have in th data

function renderTodoList(){
    todoListData.forEach(item => {
        renderTodoItem(item);
    })
}

//stores todo item as data in array
function addTodoItem(value){
    createTodoItem(value).then((data) => {
    todoListData.push(data);
    renderTodoItem(data); // to display
    // console.log(todoListData);
})
}

function removetodoItem(selectedId){
    // const selectedItemIndex = todoListData.findIndex(item => item.value == ev.target.getAttribute('data-Id'));
    // const selectedId = ev.target.parentElement.getAttribute('data-Id'); //check for sellectedId in listWrapper
    //to make the eventlistener for each and every remove button we have created a single event listener in the parent level list wrapper
    deletetodoItem(selectedId).then(()=>{
    const selectedItemIndex = todoListData.findIndex(item => item.id == selectedId);
    todoListData.splice(selectedItemIndex, 1);
    clearTodoList();
    renderTodoList();  
    })
}

function toggleTodoItem(ev){
    // const selectedItem = todoListData.find(item => item.value == ev.target.getAttribute('data-Id'));
    const selectedId = ev.target.parentElement.getAttribute('data-Id');
    const selectedItem = todoListData.find(item => item.id == selectedId);
    // console.log(selectedId);
    selectedItem.Completed = !selectedItem.Completed;
    toggleCompletedStatus(selectedId, selectedItem.Completed).then((data)=> {      
    clearTodoList();
    renderTodoList(); 
    })
}

function updateTodoItem(ev){
        if(ev.key=='Enter'){
            const updatedValue = ev.target.value;
            const selectedId = ev.target.parentElement.getAttribute('data-Id');
            const selectedItemIndex = todoListData.findIndex((item)=>{
                return item.id == selectedId;
            });
            todoListData.splice(selectedItemIndex,1,{...todoListData[selectedItemIndex],
                todo: updatedValue,
            });
            clearTodoList();
            renderTodoList();
        }
}

function replaceTextBoxWithInputBox(ev){
    ev.stopPropagation();
    const inputBox = document.createElement("input");
    inputBox.value = ev.target.innerHTML;
    inputBox.style.width = "100%";
    const parentEl = ev.target.parentElement;
    parentEl.replaceChild(inputBox, ev.target);
    parentEl.querySelector("button").style.display = "none";
    inputBox.onclick = function(ev){
        ev.stopPropagation(); // event bubbling concept
    }
    inputBox.addEventListener('keypress', updateTodoItem);
}

//displays todo item that we enter in th list
function renderTodoItem(item){
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.setAttribute('data-Id', item.id);
    // todoItem.onclick = function(){ // To check "Event Bubbling(from child to parent i.e inner to outer)" for "onclick" event using "ev.stopPropagation()", debug in sources using breakpoint
    //     todoItem.style.background = 'red';
    //     console.log('Todo item li');
    // }
    
    listWrapper.append(todoItem);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    // checkBox.setAttribute('data-Id', item.value);
    todoItem.append(checkBox);
    checkBox.onchange = toggleTodoItem;


    const textBox = document.createElement('span');
    textBox.innerHTML = item.todo;
    textBox.addEventListener('click', replaceTextBoxWithInputBox);
    todoItem.append(textBox);

    const buttonBox = document.createElement('button');
    buttonBox.innerHTML = 'Remove';
    // buttonBox.setAttribute('data-Id', item.value);
    buttonBox.onclick = removetodoItem;
    todoItem.append(buttonBox);
    // buttonBox.onclick = function(){
    //     console.log('Remove Button');
    // }
    buttonBox.style.display = 'none'; 

    if(item.Completed){
        todoItem.classList.add('completed');
        checkBox.checked = true; 
        buttonBox.style.display = 'block';
    }
}

fetchTodoList();

// to change the behaviour of the html - hardoded in the js file
document
        .querySelector("#description a")
        .addEventListener("click", function(ev){
        ev.preventDefault();
        window.open("https://www.youtube.com/@engineerchirag", "_blank");
     })
