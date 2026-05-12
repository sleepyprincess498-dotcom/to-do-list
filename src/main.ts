import { Task } from "./models/Task.js";
import { TaskManager } from "./models/TaskManager.js";
import { Calendar } from "./models/Calendar.js";
import { renderFullCalendar } from "./render/renderFullCalendar.js";
import { renderWeekCalendar } from "./render/renderWeekCalendar.js";
import { renderTask } from "./render/renderTask.js";

// шаблоны
const calendarMonthTemplate = document.getElementById('fullCalendarTemplate') as HTMLTemplateElement;
const calendarDayTemplate = document.getElementById('calendarDayTemplate') as HTMLTemplateElement;
const taskTemplate = document.getElementById('taskTemplate') as HTMLTemplateElement;

// контейнеры
const body = document.body;
const taskContainer = document.querySelector('.task-platform') as HTMLElement;

// диалоговые окна
const newTaskDialog = document.getElementById('dialog__new-task');
const editTaskDialog = document.getElementById('dialog__current-task');
const settingDialog = document.getElementById('dialog__setting');

// кнопки
const buttonFullWeek = document.getElementById('buttonFullCalendar');
const createButton = document.getElementById('createButton') as HTMLButtonElement;
const saveEditButton = document.getElementById('saveButton') as HTMLButtonElement;
const deleteButton = document.getElementById('deleteButton') as HTMLButtonElement;

// инпуты
const newTaskNameInput = document.getElementById('task__name') as HTMLInputElement;
const newTaskCommentInput = document.getElementById('task__comment') as HTMLInputElement;
const newTaskDayInput = document.getElementById('task__day') as HTMLInputElement;
const newTaskTimeInput = document.getElementById('task__time') as HTMLInputElement;

const editTaskNameInput = document.getElementById('edit__name') as HTMLInputElement;
const editTaskCommentInput = document.getElementById('edit__comment') as HTMLInputElement;
const editTaskDayInput = document.getElementById('edit__day') as HTMLInputElement;
const editTaskTimeInput = document.getElementById('edit__time') as HTMLInputElement;


// инициализация
const calendar = new Calendar();
const taskManager = new TaskManager;

// данные для начала работы
taskManager.loadFromLocal();
renderWeekCalendar(calendar);
let fullCalendarRendered = false;

// слушатели событий
buttonFullWeek?.addEventListener("click", (ev) => {
  body?.classList.toggle("calendar-open");

  if (!fullCalendarRendered) {
    const monthRange = calendar.getMonthsRange();
    renderFullCalendar(monthRange, calendar, calendarDayTemplate, calendarMonthTemplate);
    fullCalendarRendered = true;
  }
});

createButton?.addEventListener("click", (ev) => {
  const name = newTaskNameInput.value;
  const comm = newTaskCommentInput.value;
  const day = newTaskDayInput.value;
  const time = newTaskTimeInput.value;

  if (!name  || !day || !time) return;

  const task = new Task(Date.now(), name, comm, day, time);
  taskManager.addTask(task);
  taskManager.saveAllTasks();
  renderTask(task.getTaskData(), taskTemplate, taskContainer);
  newTaskNameInput.value = '';
  newTaskCommentInput.value = '';
  newTaskDayInput.value = '';
  newTaskTimeInput.value = '';
})
