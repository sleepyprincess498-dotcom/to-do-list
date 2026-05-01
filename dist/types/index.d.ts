export interface ITask {
    id: number;
    title: string;
    description: string;
    date: string;
    time: string;
    completed: boolean;
}
export interface IMonth {
    year: number;
    month: number;
    name: string;
    daysCount: number;
    firstDayWeekday: number;
}
export type TWeek = Date[];
//# sourceMappingURL=index.d.ts.map