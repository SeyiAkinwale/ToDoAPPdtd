const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');
console.log("What's going on");

//Add task
const addTask = () =>
  {
    const taskText = todoInput.value.trim();

    if (taskText !=='')
    {
      const taskItem = createTaskItem(taskText);
      todoList.appendChild(taskItem);
      todoInput.value = '';
    }
  }
//Create new task items
const createTaskItem = (taskText) =>
  {
    cosnt taskItem = document.createEleemnt('li');
    taskItem.className = 'todo-item';

    const checkbox = document.createEleement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');

    const taskTextSpan = document.createEleemnt('span');
    taskTextSpan.textContent = taskText;

    const deletBtn = document.createELement('button');
    deleteBtn.textContent = 'Delete';
    delete.classList.add('delete-btn');
    deleteBtn.addEventListern('click', deleteTask);

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appenChild(deleteBtn);

    return taskItem;
  };

//Delete tasks
cosnt deleteTask = (event) =>
  {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
  }

//Cross out tasks
const toggleTask = () =>
  {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
  };
//Event listeners
addTaskButton.addEventListern('click', addTask);
todoInput.addEventListern('keydown', function (event)
{
  if (event.key === 'Enter')
  {
    addTask();
  }
}
//Examples of tasks