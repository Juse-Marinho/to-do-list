import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForms'
import Header from './components/Header'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text:"LPOO",
      isCompleted: false
    },
    {
      id: 2,
      text:"Cálculo",
      isCompleted: false
    },
    {
      id: 3,
      text:"Cálculo Numérico",
      isCompleted: false
    },
  ])

  const addTodo = (text) => {

    const newTodos = [
      ...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      isCompleted: false,
    }];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos)
  }

  return <div>
      <Header />
      <div className='app'>
      <h1>To-do list</h1>
      <TodoForm addTodo={addTodo}/>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      </div>
    </div>
  
}

export default App
