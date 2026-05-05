import { Calendar } from "../models/Calendar.js";
import type { IMonth } from "../types/index.js";

const dayTemplate = document.getElementById(
  "calendarDayTemplate",
) as HTMLTemplateElement;

export function renderWeekCalendar(calendar: Calendar) {
  const container = document.getElementById("weekDays") as HTMLTemplateElement;
  if (!container) return;
  const week = calendar.getWeek(new Date());

  week.forEach((day) => {
    const dayClone = dayTemplate?.content.cloneNode(true) as DocumentFragment;

    const dayNum = dayClone.querySelector(".day__num") as HTMLElement;
    const dayContainer = dayClone.querySelector(
      ".calendar__day",
    ) as HTMLElement;
    dayContainer.dataset.date = `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()}`;
    dayNum.textContent = String(day.getDate());

    container.append(dayClone);
  });
}
