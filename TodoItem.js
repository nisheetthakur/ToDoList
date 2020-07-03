import React from "react"
import App from "./App"
function TodoItem(props) {
    const completedStyle={
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={()=>props.handleChange(props.item.id)}
            />
            <p style={props.item.completed?completedStyle:null}>{props.item.text}</p>
        </div>
    )
}
function todone(){
    console.log("Todo Item completed")
}

export default TodoItem