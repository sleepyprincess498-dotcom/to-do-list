import type { ITask } from "../types/index.js";

export class Task {
  private id: number;
  private title: string;
  private description: string;
  private date: string;
  private time: string;
  private completed: boolean;

  constructor(
    id: number,
    title: string,
    description: string,
    date: string,
    time: string,
    completed: boolean = false,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
    this.completed = completed;
  }

  getTaskData(): ITask {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      date: this.date,
      time: this.time,
      completed: this.completed,
    };
  }

  getTaskCompleted(): boolean {
    return this.completed;
  }

  getTaskId(): number {
    return this.id;
  }

  setCompleted(completed: boolean): void {
    this.completed = completed;
  }

  editTaskData(
    title: string,
    description: string,
    date: string,
    time: string,
  ): void {
    this.title = title;
    this.description = description;
    this.date = date;
    this.time = time;
  }
}
