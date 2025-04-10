const todoWrapper = document.getElementById("todoList");

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

todoWrapper.append(listWrapper);

const todoListData = [{
    value: 'First',
    isCompleted: false,
},{
    value: 'Second',
    isCompleted: false,
},{
    value: 'Third',
    isCompleted: false,
}];

function clearTodoList(){
    listWrapper.innerHTML = '';
}

//displays todo item that we already have in th data

function renderTodoList(){
    todoListData.forEach(item => {
        renderTodoItem(item);
    })
}
renderTodoList();

//stores todo item as data in array
function addTodoItem(value){
    const item = {value, isCompleted:false};
    todoListData.push(item);
    renderTodoItem(item); // to display
    // console.log(todoListData);
}

function removetodoItem(ev){
    const selectedItemIndex = todoListData.findIndex(item => item.value == ev.target.getAttribute('data-Id'));
    todoListData.splice(selectedItemIndex, 1);
    clearTodoList();
    renderTodoList();  
}

function toggleTodoItem(ev){
    const selectedItem = todoListData.find(item => item.value == ev.target.getAttribute('data-Id'));
    selectedItem.isCompleted = !selectedItem.isCompleted;
    clearTodoList();
    renderTodoList();  
}

//displays todo item that we enter in th list
function renderTodoItem(item){
    const todoItem = document.createElement('li');
   
    todoItem.classList.add('todoItem')
    
    listWrapper.append(todoItem);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('data-Id', item.value);
    todoItem.append(checkBox);
    checkBox.onchange = toggleTodoItem;


    const textBox = document.createElement('span');
    todoItem.append(textBox);
    textBox.innerHTML = item.value;

    const buttonBox = document.createElement('button');
    buttonBox.innerHTML = 'Remove';
    buttonBox.setAttribute('data-Id', item.value);
    buttonBox.onclick = removetodoItem;
    todoItem.append(buttonBox);
    buttonBox.style.display = 'none'; 

    if(item.isCompleted){
        todoItem.classList.add('completed');
        checkBox.checked = true; 
        buttonBox.style.display = 'block';
    }
    // textBox.onclick = toggleTodoItem;
}