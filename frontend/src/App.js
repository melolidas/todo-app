import React, { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskList } from "./components/TaskList";

function App() {
    const { tasks, addTask, toggleTask } = useTasks();
    const [newTask, setNewTask] = useState("");

    const handleAdd = () => {
        if (!newTask.trim()) return;
        addTask(newTask);
        setNewTask("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>ToDo App</h1>
            <div>
                <input
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Новая задача"
                />
                <button onClick={handleAdd}>Добавить</button>
            </div>
            <TaskList tasks={tasks} onToggle={toggleTask} />
        </div>
    );
}

export default App;
