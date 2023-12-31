// Create a Todo list item
function ToDo(toDoStatus, title, description, dueDate, priority, notes, project) {
  this.toDoStatus = toDoStatus;
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.project = project;
  this.info = function () {
    console.log(
      `New todo created: ${title} is due ${dueDate} and is of ${priority} priority. Status: ${toDoStatus}`
    );
  };
}

// const toDo = new ToDo(false, "title", "description", "duedate", "priority", "notes", "project");

// toDo.info();

let createButton = document.getElementById("createButton");
let newToDo;

// Get the priority options
function getPriorityOptions(selectedPriority) {
  const priorities = ["low", "medium", "high"];
  console.log("Selected Priority:", selectedPriority);

  const options = priorities
    .map(
      (priority) =>
        `<option value="${priority}" ${
          selectedPriority === priority ? "selected" : ""
        }>${priority}</option>`
    )
    .join("");
  return `<option disabled selected style="display:none">no priority</option>${options}`;
}

// Create a todo item in the DOM
function createTodo() {
  newToDo = new ToDo(false, "", "description", "", "", "notes", "project");
}

// Create button event listener
createButton.onclick = function () {
  // Create a new todo
  createTodo();

  // Create a new list item element
  let newToDoItem = document.createElement("li");

  // Create and append checkbox element
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = newToDo.toDoStatus;
  newToDoItem.appendChild(checkbox);

  // Create and append title element
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.placeholder = "Add a title...";
  titleInput.value = newToDo.title;
  newToDoItem.appendChild(titleInput);

  // Create and append description element
  let descriptionElement = document.createElement("input");
  descriptionElement.type = "text";
  descriptionElement.placeholder = "Add a description...";
  newToDoItem.appendChild(descriptionElement);

  // Create and append due date element
  let dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.value = newToDo.dueDate;
  newToDoItem.appendChild(dueDateInput);

  // Create and append priority element
  let prioritySelect = document.createElement("select");
  prioritySelect.innerHTML = getPriorityOptions("");
  prioritySelect.addEventListener("change", () => {
    newToDo.priority = prioritySelect.value;
  });
  newToDoItem.appendChild(prioritySelect);

  // Create and append notes element
  let notesElement = document.createElement("p");
  notesElement.textContent = `Notes: ${newToDo.notes}`;
  newToDoItem.appendChild(notesElement);

  // Create and append project element
  let projectElement = document.createElement("p");
  projectElement.textContent = `Project: ${newToDo.project}`;
  newToDoItem.appendChild(projectElement);

  // Add todo details to the list item

  // Append the new todo item to the todoList
  document.getElementById("todoList").appendChild(newToDoItem);

  newToDo.info();
};

// Manipulate the DOM
// let label = document.getElementById(todoId + "Label");
// let input = document.getElementById(todoId + "Edit");

// function editTodo(todoId) {
//   label.style.display = "none";
//   input.style.display = "inline-block";
//   input.value = label.innerText;
// }

// function removeTodo(todoId) {}
