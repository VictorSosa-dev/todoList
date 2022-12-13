import React, { useState, useEffect } from "react"
import Todo from "../Todo"
import Form from "../Form"
import Header from "../HeaderTodo"
import "./TodoList.css"
import api from "../../services/todoServices"


function TodoList() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    getTodos()
  }, [todos])

  const getTodos = async () => {
    return await api.getTodos().then((res) => {
      setTodos(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const createTodo = newTodo => {
    api.createTodo(newTodo).catch((err) => console.log(err))
    getTodos()
  }

  const deleteTodo = id => {
    api.deleteTodo(id).catch((err) => console.log(err))
    getTodos()
  }

  const updateTodo = (id, updtedTask) => {
    api.updateTodo(id, updtedTask).catch((err) => console.log(err))
    getTodos()
  }

  const todosList = todos.map(todo => (
    <Todo
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      key={todo.id}
      todo={todo}
    />
  ))

  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <Header todos={todos} />
      <Form createTodo={createTodo} />
      <ul>{todosList}</ul>
    </div>
  )
}

export default TodoList