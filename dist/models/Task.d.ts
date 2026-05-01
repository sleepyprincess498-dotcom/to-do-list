import type { ITask } from "../types/index.js";
export declare class Task {
    private id;
    private title;
    private description;
    private date;
    private time;
    private completed;
    constructor(id: number, title: string, description: string, date: string, time: string, completed?: boolean);
    getTaskData(): ITask;
    getTaskCompleted(): boolean;
    getTaskId(): number;
    setCompleted(completed: boolean): void;
    editTaskData(title: string, description: string, date: string, time: string): void;
}
//# sourceMappingURL=Task.d.ts.map