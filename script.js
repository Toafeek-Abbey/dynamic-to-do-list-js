document.addEventListener('DOMContentLoaded', function () {

         const addButton = document.getElementById('add-task-btn')
         const taskInput = document.getElementById('task-input')
         const taskList = document.getElementById('task-list')
         function loadTasks() {
                  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                  storedTasks.forEach(taskText => addTask(taskText, false)); 
         }
         

         function addTask(taskText, save = true) {

                  var taskText = taskInput.value.trim()
                  if (taskText !== "" ) {
                       const li = document.createElement(li)
                       li.textContent = taskText
                       const button = document.createElement(button)
                       button.textContent = Remove
                       button.classList.add(remove-btn)
                       button.onclick = function () {
                              taskList.removeChild(li)
                       }
                       li.appendChild(button)
                       taskList.appendChild(li)
                       taskInput.value = ""
                  }
                  else {
                     alert('Please enter a task...')
                  }
                  addButton.addEventListener("click", addTask)
                  taskInput.addEventListener('keypress',
                      if (event.key == "Enter") {
                         addTask()
                      }
                  )
                    if (save) {
                      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
                      storedTasks.push(taskText);
                      localStorage.setItem('tasks', JSON.stringify(storedTasks));
                    }
         }
         
          document.addEventListener('DOMContentLoaded', ()=>{
                   loadTasks();
                   addTask()
          })
  
})
