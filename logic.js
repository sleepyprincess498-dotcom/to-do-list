const taskTemplate = document.getElementById("taskTemplate");
const taskSection = document.querySelector(".task-platform");
const checkboxTemplate = document.getElementById("checkboxTemplate");
const allButton = document.querySelectorAll(".button");
const editDialog = document.getElementById("dialog__current-task");

//inputs
const inputTaskName = document.getElementById("task__name");
const inputTaskComm = document.getElementById("task__comment");
const inputTaskDay = document.getElementById("task__day");
const inputTaskTime = document.getElementById("task__time");

const editTaskName = document.getElementById("edit__name");
const editTaskComm = document.getElementById("edit__comment");
const editTaskDay = document.getElementById("edit__day");
const editTaskTime = document.getElementById("edit__time");

//buttons
const buttonCreate = document.getElementById("createButton");
const buttonFixed = document.getElementById("button__fix");
const saveButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");

//START  PROGRAM
let tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";
let currentTask = null;

//save all tasks function
function saveAllTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasksList));
}

//delete task function

//create task
function createTAsk() {
  let taskTitle = inputTaskName.value;
  let taskComm = inputTaskComm.value;
  let taskDay = inputTaskDay.value;
  let taskTime = inputTaskTime.value;

  const newTask = {
    id: Date.now(),
    name: taskTitle,
    comm: taskComm,
    day: taskDay,
    time: taskTime,
    completed: false,
  };

  tasksList.push(newTask);

  saveAllTasks();
}

//date buttons
const dateButtons = document.querySelectorAll(".calendar__day");

function setActiveDay(button) {
  dateButtons.forEach((item) => {
    item.classList.remove("calendar__day-today");
  });
  button.classList.add("calendar__day-today");
}

let selectionData = new Date().toISOString().split("T")[0];

dateButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectionData = button.dataset.date;

    setActiveDay(button);
    renderTask();
  });
});

//calendar day functions
function getMonday() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  today.setDate(today.getDate() - diff);
  return today;
}

//render
function renderTask() {
  let filteredTasks;

  if (currentFilter === "all") {
    filteredTasks = tasksList;
  } else if (currentFilter === "active") {
    filteredTasks = tasksList.filter((task) => task.completed === false);
  } else if (currentFilter === "completed") {
    filteredTasks = tasksList.filter((task) => task.completed === true);
  }

  filteredTasks = filteredTasks.filter((task) => task.day === selectionData);

  taskSection.innerHTML = "";

  filteredTasks.forEach((task) => {
    const clone = taskTemplate.content.cloneNode(true);

    const time = clone.querySelector(".time__text");
    const title = clone.querySelector(".task-name");
    const comment = clone.querySelector(".comments");

    time.textContent = task.time;
    title.textContent = task.name;
    comment.textContent = task.comm;

    const checkbox = clone.querySelector(".checkbox__task-done");
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", function () {
      task.completed = this.checked;
      saveAllTasks();
      renderTask();
    });

    const buttonFix = clone.querySelector(".fixedButton");

    buttonFix.addEventListener("click", (ev) => {
      currentTask = task.id;

      editTaskName.value = task.name;
      editTaskComm.value = task.comm;
      editTaskDay.value = task.day;
      editTaskTime.value = task.time;

      editDialog.showModal();
    });

    taskSection.append(clone);
  });
}

function renderCalendar() {
  const monday = getMonday();
  const today = new Date().toISOString().split("T")[0];

  dateButtons.forEach((button, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);

    const dayNumber = date.getDate();

    const fullDate = date.toISOString().split("T")[0];

    button.querySelector(".day__num").textContent = dayNumber;
    button.dataset.date = fullDate;

    if (fullDate === today) {
      button.classList.add("today");
    } else {
      button.classList.remove("today");
    }
  });
}

//toggle button filter
const allFilter = document.getElementById("buttonAllTasks");
const activeFilter = document.getElementById("buttonActiveTasks");
const completedFilter = document.getElementById("buttonFinishTasks");
const buttonsToggle = document.querySelector(".toggle__button");
const filterSelector = document.querySelectorAll(".filter__select");

function setActiveButton(button) {
  filterSelector.forEach((item) => {
    item.classList.remove("active-select");
  });
  button.closest(".toggle-select").classList.add("active-select");
}

allFilter.addEventListener("click", (ev) => {
  currentFilter = "all";
  setActiveButton(ev.target);
  renderTask();
});
activeFilter.addEventListener("click", (ev) => {
  currentFilter = "active";
  setActiveButton(ev.target);
  renderTask();
});
completedFilter.addEventListener("click", (ev) => {
  currentFilter = "completed";
  setActiveButton(ev.target);
  renderTask();
});

buttonCreate.addEventListener("click", (ev) => {
  if (!ev.target.closest(".create__button")) return;
  createTAsk();
  renderTask();
  inputTaskName.value = "";
  inputTaskComm.value = "";
  inputTaskDay.value = "";
  inputTaskTime.value = "";
});

saveButton.addEventListener("click", (ev) => {
  const task = tasksList.find((t) => t.id === currentTask);

  task.name = editTaskName.value;
  task.comm = editTaskComm.value;
  task.day = editTaskDay.value;
  task.time = editTaskTime.value;

  saveAllTasks();
  renderTask();
  editDialog.close();
});

deleteButton.addEventListener("click", (ev) => {
  tasksList = tasksList.filter((t) => t.id !== currentTask);

  saveAllTasks();
  renderTask();
  editDialog.close();
});

renderTask();
renderCalendar();
