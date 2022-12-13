import React, { useReducer, useState } from 'react'
import './Form.css'

function Form({ createTodo }) {
  const [error, setError] = useState(false)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ""
    }
  )

  const handleChange = evt => {
    setUserInput({ [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (userInput.task) {
      createTodo({
        task: userInput.task,
        completed: false,
      })
      setUserInput({ task: "" })
    }else{
      setError(true)
    }
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder={error ? "Please enter a task" : "New Todo"}
      />
      <button>Add Todo</button>
    </form>
  )
}

export default Form