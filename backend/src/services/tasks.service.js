const repository = require("../repositories/tasks.repository");

class TasksService {
    getAllTasks() {
        return repository.getAll();
    }

    createTask(title) {
        if (!title) throw new Error("Напишите задачу");
        return repository.create(title);
    }

    toggleTask(id) {
        const task = repository.getAll().find((t) => t.id === id);
        if (!task) throw new Error("Задача не найдена");
        return repository.update(id, !task.completed);
    }
}

module.exports = new TasksService();
