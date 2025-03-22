import React, { useState } from "react"

function ToDoItem(props){
 
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(props.item.text);

    // Edit Task
    const handleEdit = () => {
        if (isEditing) {
            props.editTask(props.item.id, editedText);
        }
        setIsEditing(!isEditing);
    };

    // Mark Task as Completed
    const handleMark = () => {
        props.markTask(props.item.id);
    };

    // Delete Task
    const handleDelete = () => {
        props.deleteTask(props.item.id);
    };

    return (
        <div className="flex justify-between items-center p-2 border-b">
            <span className={props.item.completed ? "line-through" : ""}>
            {isEditing ? (
                <input
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="p-1 border rounded mr-2"
                />
            ) : (
                    props.item.text
            )}
            </span>

            <div className="flex gap-2">
                <button
                    onClick={handleEdit}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button
                    onClick={handleMark}
                    className= {`px-2 py-1 rounded ${
        props.item.completed ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-500 text-white"
            }`}
                >
                    {props.item.completed ? "Completed" : "Mark"}
                </button>
                <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default ToDoItem