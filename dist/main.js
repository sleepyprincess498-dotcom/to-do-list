import { Task } from "./models/Task.js";
import { TaskManager } from "./models/TaskManager.js";
import { Calendar } from "./models/Calendar.js";
import { renderFullCalendar } from "./render/renderFullCalendar.js";
import { renderWeekCalendar } from "./render/renderWeekCalendar.js";
// диалоговые окна
const newTaskDialog = document.getElementById('dialog__new-task');
const editTaskDialog = document.getElementById('dialog__current-task');
const settingDialog = document.getElementById('dialog__setting');
// кнопки
const buttonFullWeek = document.getElementById('buttonFullCalendar');
const body = document.body;
// инициализация
const calendar = new Calendar();
// данные для начала работы
renderWeekCalendar(calendar);
let fullCalendarRendered = false;
// слушатели событий
buttonFullWeek?.addEventListener("click", (ev) => {
    body?.classList.toggle("calendar-open");
    if (!fullCalendarRendered) {
        const monthRange = calendar.getMonthsRange();
        renderFullCalendar(monthRange, calendar);
        fullCalendarRendered = true;
    }
});
//# sourceMappingURL=main.js.map