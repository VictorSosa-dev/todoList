import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

const LoginPage = () => {
  const [error, setError] = useState('')
  const { handleSubmit, register, reset } = useForm()
  const history = useHistory()
  const [shown, setShown] = useState(false)
  const [password, setPassword] = useState('')

  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
  const switchShown = (e) => {
    e.preventDefault()
    setShown(!shown)
  }

  const onSubmit = async (values) => {
    setError('') // Resetting submit errors
    if (!values.email || !values.password) {
      setError('Please fill in all fields')
      return
    }
    const response = await fetch(process.env.REACT_APP_BACKEND_API + '/auth/login', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json()
    if (!response.ok) {
      setError(body.message)
    } else {
      reset()
      window.localStorage.setItem('token', body.token)
      window.localStorage.setItem('user', JSON.stringify(body.user))
      history.push('/todo')
    }
  }

  return <>
    <div className='min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5'>
      <div className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-96 overflow-hidden mx-6'>
        <div className='w-full rounded p-6'>
          <h2 className='text-2xl mb-8 text-center text-opacity-75 font-bold'>Welcome a <span className='text-indigo-500' >toDoList</span></h2>
          {error
            ? <span className='inline-block w-full px-3 py-2 rounded bg-red-500 text-white mb-4'>
              {error}
            </span>
            : null}
          <form className='space-y-1.5' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-5'>
                <label htmlFor='' className='text-base font-semibold px-1'>Email</label>
                <div className='flex'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-email-outline text-gray-400 text-lg'></i></div>
                  <input
                    ref={register}
                    name='email'
                    type='email'
                    className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                    placeholder='johnsmith@example.com' />
                </div>
              </div>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-6'>
                <label htmlFor='name' className='text-base font-semibold px-1'>Password</label>
                <div className='flex items-center relative'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-lock-outline text-gray-400 text-lg'></i></div>
                  <input
                    id='name'
                    ref={register}
                    value={password}
                    name='password'
                    type={shown ? 'text' : 'password'}
                    className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                    placeholder='************'
                    onChange={onChange} />
                  <button className='w-10 z-10 pl-1 text-center flex items-center justify-center absolute inset-y-0 right-0 mr-3' onClick={switchShown}>
                    {shown ? <i className='mdi mdi-eye-off text-gray-400 text-lg'></i> : <i className='mdi mdi-eye text-gray-400 text-lg'></i>}
                  </button>
                </div>
              </div>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-5'>
                <button className='bg-indigo-600 block w-full max-w-xs mx-auto hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'>
                  LOGIN
                </button>
              </div>
            </div>
            <div className='text-center'>
              <p className='text-gray-600'> Don't have an account? <Link to="/signup" className='text-indigo-500 hover:text-indigo-700 font-semibold'>Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* <section className="py-20">
      <div className="container mx-auto max-w-screen-lg">
        <div className="py-1 grid grid-cols-8">
          <div className="col-span-3">
            <form className="bg-gray-100 rounded p-6" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-2xl mb-8 text-center text-opacity-75 font-bold">Welcome</h2>
              {error
                ? <span className="inline-block w-full px-3 py-2 rounded bg-red-500 text-white mb-4">
                  {error}
                </span>
                : null}
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Email Address</label>
                <input ref={register} className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col mb-6">
                <label className="font-semibold mb-1">Password</label>
                <input ref={register} className="py-2 px-4 bg-white rounded border-2 border-gray-600" type={shown ? 'text' : 'password'} onChange={onChange} name="password" placeholder="" value={password} minLength={6} />
              </div>
              <div className="flex">
                <button type='submit' className="px-2 py-4 inline-flex text-white rounded w-full justify-center bg-indigo-600">
                  Login
                </button>
              </div>
              <div className="flex">
                <button className="inline-flex bg-gray-600 py-2 my-1 rounded justify-center text-white" onClick={switchShown}>
                  {shown ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <div className="flex justify-center mt-4">
                <Link to="/signup" className="text-black-600">Don't have an account? <span className='text-indigo-600'>Sign up</span></Link>
              </div>
            </form>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
              </section> */}

  </>
}
export default LoginPage