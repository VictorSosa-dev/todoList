import React from "react"
import TodoList from "../components/TodoList"
import NavBar from "../components/NavBar"


const TodoPage = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    return <>
        <NavBar user={user}/>
        <main className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
            <TodoList />
        </main>
    </>
}

export default TodoPage