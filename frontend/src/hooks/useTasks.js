import { useState, useEffect } from "react";
import axios from "axios";

export function useTasks() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const res = await axios.get("http://localhost:3001/tasks");
        setTasks(res.data);
    };

    const addTask = async (title) => {
        const res = await axios.post("http://localhost:3001/tasks", { title });
        setTasks((prev) => [...prev, res.data]);
    };

    const toggleTask = async (id, completed) => {
        await axios.patch(`http://localhost:3001/tasks/${id}`, { completed });
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return { tasks, addTask, toggleTask };
}
