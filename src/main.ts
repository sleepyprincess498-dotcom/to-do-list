import { Task } from "./models/Task.js";
import { TaskManager } from "./models/TaskManager.js";
import { Calendar } from "./models/Calendar.js";
import { renderFullCalendar } from "./render/renderFullCalendar.js";

//шаблоны
const buttonFullWeek = document.getElementById('buttonFullCalendar')
const body = document.body;


// инициализация
const calendar = new Calendar();
const today = new Date()

buttonFullWeek?.addEventListener("click", (ev) => {
  body?.classList.toggle("calendar-open");
  const monthRange = calendar.getMonthsRange();
  renderFullCalendar(monthRange);
});

console.log('hiiii')