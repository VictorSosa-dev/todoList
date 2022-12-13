import React, { useState } from "react"
import "./Todo.css"

function Todo({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState(todo.task)

  const handleDeleteTodo = evt => {
    console.log("deleteTodo", evt.target.id)
    deleteTodo(evt.target.id)
  }
  const toggleFrom = evt => {
    setIsEditing(!isEditing)
  }
  const handleUpdate = evt => {
    evt.preventDefault()
    const updatedTask = { task: task }
    updateTodo(todo.id, updatedTask)
    toggleFrom()
  }
  const handleChange = evt => {
    setTask(evt.target.value)
  }

  const toggleCompleted = evt => {
    updateTodo(todo.id, { completed: !todo.completed })
  }

  let result
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    )
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.completed ? "Todo-task completed" : "Todo-task"}
        >
          {todo.task}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleDeleteTodo}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    )
  }
  return result
}

export default Todo