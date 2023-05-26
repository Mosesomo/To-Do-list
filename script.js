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

    checkBtn.addEventListener('click', ()=>{
        checkBtn.parentElement.style.textDecoration="line-through";
    });
    deleteBtn.addEventListener('click', ()=>{
        deleteBtn.parentElement.remove();
        });
});

const header = document.querySelector('header');
window.addEventListener("scroll", ()=>{
    header.classList.toggle("sticky", this.window.scrollY>0);
});
