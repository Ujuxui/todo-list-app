import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
    const [items, setItems] = useState([]);
    const [task, setTask] = useState("");

    // Add Task
    const addTask = () => {
        if (task.trim()) {
            const newItem = { id: Date.now(), text: task, completed: false };
            setItems([...items, newItem]);
            setTask("");
        }
    };

    // Edit Task
    const editTask = (id, newText) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, text: newText } : item
            )
        );
    };

    // Mark Task as Completed
    const markTask = (id) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    // Delete Task
    const deleteTask = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div className="m-4 max-w-md mx-auto shadow-lg">
            <Header />
            <div className="flex mt-6 p-4 gap-3">
                <input
                    className="flex-grow p-2 border rounded"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task"
                />
                <button
                    onClick={addTask}
                    className="bg-cyan-500 text-white px-4 py-2 rounded"
                >
                    Add Task
                </button>
            </div>
            <ToDoList items={items} editTask={editTask} markTask={markTask} deleteTask={deleteTask} />
        </div>
    );
}

export default App;

