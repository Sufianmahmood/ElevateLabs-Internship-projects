const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskSpan.style.cursor = 'pointer';

  taskSpan.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove');

  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(taskSpan);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = '';
});
