import React, { useState, useEffect } from 'react'
import Todo from '../Todo'
import Form from '../Form'
import HeaderTodo from '../HeaderTodo'
import api from '../../services/todoServices'


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
    <>
      <div className='flex flex-col items-center justify-center my-1 mx-3'>
        <h5 className='text-slate-500 text-2xl font-medium'>
          Hello, here are your latest tasks
        </h5>
        <HeaderTodo todos={todos} />
      </div>
      <div> 
        <Form createTodo={createTodo} />
        <div className='h-80 overflow-scroll'>
          <ul className='flex flex-col w-full'>{todosList}</ul>
        </div>
      </div>
    </>
  )
}

export default TodoList