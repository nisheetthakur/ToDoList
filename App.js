/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

import React,{Component} from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
    constructor()
    {
        super()
        this.state={
            todo:todosData
        }
       this.handleChange=this.handleChange.bind(this) 
    }
    
     handleChange(id){
       this.setState(prevState=>{
           const uptodo=prevState.todo.map(todo=>{
               if(todo.id===id){todo.completed=!todo.completed}
               return todo
           })
           return{todos:uptodo}
       })
    }
    
    render(){
    const todoItems = this.state.todo.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    
    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )    
    }
    
   
}

export default App