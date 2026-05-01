export class Task {
    id;
    title;
    description;
    date;
    time;
    completed;
    constructor(id, title, description, date, time, completed = false) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
        this.completed = completed;
    }
    getTaskData() {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            date: this.date,
            time: this.time,
            completed: this.completed,
        };
    }
    getTaskCompleted() {
        return this.completed;
    }
    getTaskId() {
        return this.id;
    }
    setCompleted(completed) {
        this.completed = completed;
    }
    editTaskData(title, description, date, time) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.time = time;
    }
}
//# sourceMappingURL=Task.js.map