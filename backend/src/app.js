const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
    getAllTasks,
    createTask,
    toggleTask,
} = require("./controllers/tasks.controller");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Роуты
app.get("/tasks", getAllTasks);
app.post("/tasks", createTask);
app.patch("/tasks/:id", toggleTask);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
