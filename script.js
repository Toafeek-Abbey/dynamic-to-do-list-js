document.addEventListener('DOMContentLoaded', function () {

         const addButton = document.getElementById('add-task-btn')
         const taskInput = document.getElementById('task-input')
         const taskList = document.getElementById('task-list')

         function addTask() {

                  var taskText = taskInput.value.trim()
                  if (taskText !== "" ) {
                       const li = document.createElement(li)
                       li.textContent = taskText
                       const button = document.createElement(button)
                       button.textContent = Remove
                       button.className = "remove-btn"
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
                      if (event.key == ) {
                         addTask()
                      }
                  )
         }
          document.addEventListener('DOMContentLoaded', addTask)
  
})
