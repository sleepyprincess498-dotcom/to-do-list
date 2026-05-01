import type { ITask } from "../types/index.js";
import { Task } from "./Task.js";

export class TaskManager {
  tasksList: Task[] = [];

  loadFromLocal(): void {
    const data = localStorage.getItem("tasks");
    const parsed: ITask[] = data ? JSON.parse(data) : [];

    this.tasksList = parsed.map(
      (item) =>
        new Task(
          item.id,
          item.title,
          item.description,
          item.date,
          item.time,
          item.completed,
        ),
    );
  }

  getAllTasks(): Task[] {
    return this.tasksList;
  }

  getTaskById(id: number): Task | null {
    let task = this.tasksList.find((item) => item.getTaskId() === id);
    return task || null;
  }

  addTask(task: Task): void {
    this.tasksList.push(task);
  }

  removeTask(id: number): void {
    let newList = this.tasksList.filter((task) => task.getTaskId() !== id);
    this.tasksList = newList;
  }

  saveAllTasks(): void {
    const data = this.tasksList.map((task) => task.getTaskData());
    localStorage.setItem("tasks", JSON.stringify(data));
  }
}
