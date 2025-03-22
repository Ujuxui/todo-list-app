import React from "react"
import ToDoItem from "./ToDoItem"

function ToDoList(props){
    return(
        <div className="p-8">
      {props.items.map((item) => (
        <ToDoItem 
        key={item.id} 
        item={item}
        editTask={props.editTask}
        markTask={props.markTask}
        deleteTask={props.deleteTask}
        />
      ))}
    </div>
    )
}

export default ToDoList