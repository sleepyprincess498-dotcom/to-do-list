import { Calendar } from "../models/Calendar.js";
const calendarMonthTemplate = document.getElementById('fullCalendarTemplate');
const calendarDayTemplate = document.getElementById('calendarDayTemplate');
export function renderFullCalendar(monthsRange, calendar, dayTemplate, monthTemplate) {
    const container = document.getElementById('calendarFullContainer');
    if (!container)
        return;
    monthsRange.forEach(month => {
        const monthClone = monthTemplate?.content.cloneNode(true);
        if (!monthClone)
            return;
        let monthTitle = monthClone.querySelector('.calendar__month-title');
        if (!monthTitle)
            return;
        monthTitle.textContent = month.name;
        const calendarDays = monthClone.querySelector('.calendar__days-full');
        const monthDays = calendar.getMonthGrid(month.year, month.month);
        monthDays.forEach(day => {
            let calendarDay = dayTemplate?.content.cloneNode(true);
            let dayNum = calendarDay.querySelector('.day__num');
            let dayContainer = calendarDay.querySelector('.calendar__day');
            if (!dayNum || !dayContainer)
                return;
            dayNum.textContent = String(day);
            if (day === null)
                dayNum.textContent = '';
            dayContainer.dataset.date = `${month.year}-${month.month + 1}-${day}`;
            calendarDays?.append(calendarDay);
        });
        container.append(monthClone);
    });
}
//# sourceMappingURL=renderFullCalendar.js.map