import React from "react";
import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    }

    return <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input 
                value = {value} 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={(e) => setValue(e.target.value) } 
            />
            <button>Add</button>
        </form>
    </div>;
};

export default TodoForm