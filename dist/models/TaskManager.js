import { Task } from "./Task.js";
export class TaskManager {
    tasksList = [];
    loadFromLocal() {
        const data = localStorage.getItem("tasks");
        const parsed = data ? JSON.parse(data) : [];
        this.tasksList = parsed.map((item) => new Task(item.id, item.title, item.description, item.date, item.time, item.completed));
    }
    getAllTasks() {
        return this.tasksList;
    }
    getTaskById(id) {
        let task = this.tasksList.find((item) => item.getTaskId() === id);
        return task || null;
    }
    addTask(task) {
        this.tasksList.push(task);
    }
    removeTask(id) {
        let newList = this.tasksList.filter((task) => task.getTaskId() !== id);
        this.tasksList = newList;
    }
    saveAllTasks() {
        const data = this.tasksList.map((task) => task.getTaskData());
        localStorage.setItem("tasks", JSON.stringify(data));
    }
}
//# sourceMappingURL=TaskManager.js.map