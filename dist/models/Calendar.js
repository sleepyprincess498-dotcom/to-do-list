export class Calendar {
    selectedDate = new Date();
    monthsCache = null;
    getCurrentDate() {
        return this.selectedDate;
    }
    setCurrentDate(date) {
        this.selectedDate = date;
    }
    getMonthData(year, month) {
        const date = new Date(year, month, 1);
        const name = date.toLocaleString("ru", { month: "long" });
        const dateNextMonth = new Date(year, month + 1, 0);
        const daysCount = dateNextMonth.getDate();
        const firstDayWeekday = date.getDay();
        return { year, month, name, daysCount, firstDayWeekday };
    }
    getMonthsRange() {
        if (this.monthsCache)
            return this.monthsCache;
        const now = new Date();
        let year = now.getFullYear();
        let month = now.getMonth();
        const oneYear = [];
        for (let i = 0; i < 12; i++) {
            const newMonth = this.getMonthData(year, month);
            oneYear.push(newMonth);
            month += 1;
            if (month > 11) {
                month = 0;
                year += 1;
            }
        }
        this.monthsCache = oneYear;
        return this.monthsCache;
    }
    getWeek(date) {
        const week = [];
        let weekDay = date.getDay();
        let dateDay = date.getDate();
        if (weekDay === 0) {
            date.setDate(dateDay - 6);
        }
        else {
            date.setDate(dateDay - (weekDay - 1));
        }
        for (let i = 0; i < 7; i++) {
            let day = new Date(date);
            day.setDate(date.getDate() + i);
            week.push(day);
        }
        return week;
    }
    getMonthGrid(year, month) {
        const monthData = this.getMonthData(year, month);
        const grid = [];
        let firstDay = monthData.firstDayWeekday - 1;
        if (firstDay < 0)
            firstDay = 6;
        for (let i = 0; i < firstDay; i++) {
            grid.push(null);
        }
        for (let day = 1; day <= monthData.daysCount; day++) {
            grid.push(day);
        }
        return grid;
    }
}
//# sourceMappingURL=Calendar.js.map