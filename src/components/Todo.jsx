import React from "react";

const Todo = ({todo, removeTodo, completeTodo}) => {
    return(
        <div className='todo' style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className='content'>
              <p>{todo.text}</p>
            </div>
            <div>
              <button className="completar" onClick={() => completeTodo(todo.id)} >Completar</button>
              <button className="cancelar" onClick={() => removeTodo(todo.id)}>X</button>
            </div>
        </div>
    )
}

export default Todo