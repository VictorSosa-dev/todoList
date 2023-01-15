import React, { useState } from 'react'

function Todo({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [task, setTask] = useState(todo.task)

  const handleDeleteTodo = evt => {
    console.log('deleteTodo', evt.target.id)
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
      <form className='flex p-1' onSubmit={handleUpdate}>
        <input
          className='shadow appearance-none border rounded w-full px-3 mr-4 text-grey-darker'
          onChange={handleChange}
          value={task}
          type='text' />
        <button className='flex-no-shrink p-2 rounded text-white rounded bg-indigo-600 hover:bg-indigo-800'>Save</button>
      </form>
    )
  } else {
    result = (
      <div className='inline-flex items-center space-x-2 flex justify-between items-center border-b border-slate-200 py-3 px-2 border-l-4 border-l-indigo-300 hover:bg-gradient-to-r from-indigo-100 to-transparent hover:from-indigo-200 transition ease-linear duration-150'>
        <button onClick={toggleCompleted}>
          {todo.completed ? (<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 text-slate-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4.5 12.75l6 6 9-13.5' />
          </svg>) : (<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-6 h-6 text-slate-500 hover:text-indigo-600 hover:cursor-pointer'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg>)}

        </button>
        <li
          id={todo.id}
          className={todo.completed ? 'text-slate-500 line-through' : 'Todo-task '}
        >
          {todo.task}
        </li>
        <div className='inline-flex items-center'>
          <button onClick={toggleFrom}>
            <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' className='w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer'>
              <path d='M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z' /></svg>
          </button>
          <button onClick={handleDeleteTodo}>
            <svg id={todo.id} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='w-4 h-4 text-slate-500 hover:text-slate-700 hover:cursor-pointer'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0' />
            </svg>
          </button>
        </div>
      </div>
    )
  }
  return result
}

export default Todo