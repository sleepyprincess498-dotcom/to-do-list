import { Task } from "./Task.js";
export declare class TaskManager {
    tasksList: Task[];
    loadFromLocal(): void;
    getAllTasks(): Task[];
    getTaskById(id: number): Task | null;
    addTask(task: Task): void;
    removeTask(id: number): void;
    saveAllTasks(): void;
}
//# sourceMappingURL=TaskManager.d.ts.map