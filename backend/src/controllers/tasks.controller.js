const service = require("../services/tasks.service");

exports.getAllTasks = (req, res) => {
    res.json(service.getAllTasks());
};

exports.createTask = (req, res) => {
    try {
        const task = service.createTask(req.body.title);
        res.status(201).json(task);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.toggleTask = (req, res) => {
    try {
        const task = service.toggleTask(parseInt(req.params.id));
        res.json(task);
    } catch (e) {
        res.status(404).json({ error: e.message });
    }
};
