//variables

const addTask = document.getElementById('add-task');
const inputTask = document.getElementById('input-Task');
const taskContainer = document.getElementById('task-container');

//event listeners

addTask.addEventListener('click', () =>{
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn=document.createElement("button");
    checkBtn.innerHTML=`<i class="fa fa-check"></i>`;
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn=document.createElement("button");
    deleteBtn.innerHTML=`<i class="fa fa-trash-can"></i>`;
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if(inputTask.value === ""){
        alert('Please enter a task');
    }
    else{
        taskContainer.appendChild(task);
    }
    inputTask.value = "";
    saveData();

    checkBtn.addEventListener('click', ()=>{
        checkBtn.parentElement.style.textDecoration="line-through";
    });
    deleteBtn.addEventListener('click', ()=>{
        deleteBtn.parentElement.remove();
        });
});

saveData = () =>{
    localStorage.setItem("data", taskContainer.innerHTML);
}

loadData=()=> {
    taskContainer.innerHTML = localStorage.getItem("data");

    const checkButtons = document.querySelectorAll('.checkTask');
    const deleteButtons = document.querySelectorAll('.deleteTask');

    checkButtons.forEach(checkBtn => {
        checkBtn.addEventListener('click', () => {
            checkBtn.parentElement.style.textDecoration = "line-through";
        });
    });

    deleteButtons.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', () => {
            deleteBtn.parentElement.remove();
            saveData(); // Update local storage after removing a task
        });
    });
}

loadData();
