import React from "react"
import TodoList from "../components/TodoList"
import NavBar from "../components/NavBar"


const TodoPage = () => {
    const user = JSON.parse(window.localStorage.getItem('user'))
    return <>
        <NavBar user={user}/>
        <main className="bg-white">
            <TodoList />
        </main>
    </>
}

export default TodoPage