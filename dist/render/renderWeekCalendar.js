import { Calendar } from "../models/Calendar.js";
const dayTemplate = document.getElementById("calendarDayTemplate");
export function renderWeekCalendar(calendar) {
    const container = document.getElementById("weekDays");
    if (!container)
        return;
    const week = calendar.getWeek(new Date());
    week.forEach((day) => {
        const dayClone = dayTemplate?.content.cloneNode(true);
        const dayNum = dayClone.querySelector(".day__num");
        const dayContainer = dayClone.querySelector(".calendar__day");
        dayContainer.dataset.date = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
        dayNum.textContent = String(day.getDate());
        container.append(dayClone);
    });
}
//# sourceMappingURL=renderWeekCalendar.js.map