import type { IMonth, TWeek } from "../types/index.js";
export declare class Calendar {
    private selectedDate;
    getCurrentDate(): Date;
    setCurrentDate(date: Date): void;
    getMonthData(year: number, month: number): IMonth;
    getMonthsRange(): IMonth[];
    getWeek(date: Date): TWeek;
    getMonthGrid(year: number, month: number): (number | null)[];
}
//# sourceMappingURL=Calendar.d.ts.map