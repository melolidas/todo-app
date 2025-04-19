import React from "react";

export function TaskList({ tasks, onToggle }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id, !task.completed)}
                    />
                    <span
                        style={{
                            textDecoration: task.completed
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {task.title}
                    </span>
                </li>
            ))}
        </ul>
    );
}
