const toDoList = document.querySelector(".tasklist");
const addTaskButton = document.getElementById("addtaskbutton");
const removeAllButton = document.getElementById("removeallbutton");
const userInput = document.querySelector("#inputfield");

const getCurrentlist = async () => {
  const todosArray = await getData();
  todosArray.forEach((task) => {
    taskAttributes(task);
  });
};

getCurrentlist();

const addTask = async () => {
  if (userInput.value !== "") {
    let task = { _id: "", description: userInput.value, done: false };
    userInput.value = "";
    taskAttributes(task);
    let data = await postData(task);
    task._id = data._id;
  } else alert("Please, fill in a task!");
};

addTaskButton.addEventListener("click", addTask);
userInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) addTask();
});

const taskAttributes = (task) => {
  const checkbox = document.createElement("input");
  checkbox.classList = "tasklist__checkbox";
  checkbox.type = "checkbox";

  const newTask = document.createElement("li");
  newTask.classList.add("tasklist__task");
  newTask.innerHTML = task.description;

  if (task.done) {
    newTask.classList.add("tasklist__linethrough");
    checkbox.checked = task.done;
  }

  const editTaskButton = document.createElement("button");
  editTaskButton.innerHTML = "Edit task";
  editTaskButton.classList.add("tasklist__editbutton");
  const removeButton = document.createElement("button");
  removeButton.innerHTML = `<i class="fas fa-trash-alt"></i>`;
  removeButton.classList.add("tasklist__removebutton");

  removeButton.addEventListener("click", () => {
    newTask.remove();
    checkbox.remove();
    editTaskButton.remove();
    removeButton.remove();
    deleteData(task);
  });

  checkbox.addEventListener("click", () => {
    if (task.done == false) {
      checkbox.checked = true;
      task.done = true;

      newTask.classList.add("tasklist__linethrough");
      editData(task);
    } else {
      checkbox.checked = false;
      task.done = false;
      newTask.classList.remove("tasklist__linethrough");
      editData(task);
    }
  });

  editTaskButton.addEventListener("click", () => {
    if (task.done == false)
      newTask.innerHTML = `<div> 
  <input class="tasklist__editfield" type="text"  value="${task.description}"</div>`;
    newTask.addEventListener("keyup", (event) => {
      if (event.keyCode == 13) {
        task.description = event.target.value;
        newTask.innerHTML = task.description;
        editData(task);
      }
    });
    if (task.done == true)
      alert("Task is already done! Please uncheck for edit task.");
  });

  toDoList.prepend(checkbox, newTask, editTaskButton, removeButton);

  removeAllButton.addEventListener("click", () => {
    deleteAllData();
    while (toDoList.firstChild) {
      toDoList.removeChild(toDoList.firstChild);
    }
  });
};
