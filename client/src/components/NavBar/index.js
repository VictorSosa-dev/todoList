import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return <header className='border-b border-gray-300 py-6 bg-white'>
    <div className='container mx-auto max-w-screen-lg'>
      <div className='flex justify-between align-center'>
        <p className='text-3xl font-medium'>Todo List</p>
        <div>
          <ul className='flex'>
            <li className='mr-2'>
              <Link to='/' className='text-sm px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-800 text-white'>Log out </Link>
            </li>
            {<li>
              <span className='text-sm pl-4 py-2'>Bienvenido, {props.user.username}</span>
            </li> }
          </ul>
        </div>
      </div>
    </div>
  </header>
}

export default NavBar
