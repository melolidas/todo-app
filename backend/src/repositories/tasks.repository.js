const Task = require("../models/task.model");

class TasksRepository {
    constructor() {
        this.tasks = [];
    }

    getAll() {
        return this.tasks;
    }

    create(title) {
        const newTask = new Task(Date.now(), title, false);
        this.tasks.push(newTask);
        return newTask;
    }

    update(id, completed) {
        const task = this.tasks.find((t) => t.id === id);
        if (!task) throw new Error("Задача не найдена");
        task.completed = completed;
        return task;
    }
}

module.exports = new TasksRepository();
