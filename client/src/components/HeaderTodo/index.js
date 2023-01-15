import React from 'react'
import './HeaderTodo.css'

function HeaderTodo(props) {

  return (
    <div className='my-2'>
      <h4 className=''>
        Hay {props.todos.length} tareas
      </h4>
    </div>
  )
}

export default HeaderTodo