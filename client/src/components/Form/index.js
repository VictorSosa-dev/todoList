import React, { useReducer, useState } from 'react'

function Form({ createTodo }) {
  const [error, setError] = useState(false)
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: ''
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
      setUserInput({ task: '' })
      setError(false)
    } else {
      setError(true)
    }
  }

  return (
    <>
      <div className='text-red-500'>{error ? 'Please enter a task' : ''}</div>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <div className='flex mt-4'>
            <input
              value={userInput.task}
              onChange={handleChange}
              id='task'
              type='text'
              name='task'
              className='shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker'
              placeholder='New Todo'
            />
            <button className='p-3 rounded text-white rounded bg-indigo-600 hover:bg-indigo-800'>Add</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form