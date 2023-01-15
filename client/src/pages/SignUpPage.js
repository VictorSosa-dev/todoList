import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'

import sign from '../assets/signup.svg'

const SignUpPage = () => {
  const [error, setError] = useState('')
  const [shown, setShown] = useState(false)
  const [password, setPassword] = useState('')
  const { handleSubmit, register, reset } = useForm()
  const history = useHistory()

  const onChange = ({ currentTarget }) => setPassword(currentTarget.value);
  const switchShown = (e) => {
    e.preventDefault()
    setShown(!shown)
  }

  const onSubmit = async (values) => {
    setError('') // Resetting submit errors
    const response = await fetch(process.env.REACT_APP_BACKEND_API + '/auth/signup', {
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
      history.push('/')
    }
  }

  return <>
    <div className='min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5'>
      <div className='bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden mx-6'>
        <div className='md:flex w-full'>
          <div className='hidden md:block w-1/2 bg-indigo-300 py-10 px-10'>
            <img className='object-cover' src={sign} alt='sign up' width='100%' />
          </div>
          <div className='w-full md:w-1/2 py-10 px-5 md:px-10'>
            <div className='text-center mb-10'>
              <h2 className='font-bold text-3xl text-gray-900'>REGISTER</h2>
              <p>Enter your information to register</p>
              {error
                ? <span classNameNameName='inline-block w-full px-3 py-2 rounded bg-red-500 text-white mb-4'>
                  {error}
                </span>
                : null}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex -mx-3'>
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='name' className='text-base font-semibold px-1'>First name</label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-account-outline text-gray-400 text-lg'></i></div>
                    <input 
                      id='name'
                      ref={register} 
                      name='name' 
                      type='text' 
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500' 
                      placeholder='John' />
                  </div>
                </div>
                <div className='w-1/2 px-3 mb-5'>
                  <label htmlFor='lastname' className='text-base font-semibold px-1'>Last name</label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-account-outline text-gray-400 text-lg'></i></div>
                    <input
                      id='lastname'
                      ref={register} 
                      name='lastname' 
                      type='text' 
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500' 
                      placeholder='Smith' />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label htmlFor='username' className='text-base font-semibold px-1'>User Name</label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-account-outline text-gray-400 text-lg'></i></div>
                    <input 
                      id='username'
                      ref={register} 
                      name='username' 
                      type='text' 
                      className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500' 
                      placeholder='john smith' />
                  </div>
                </div>
              </div>
              <div className='flex -mx-3'>
                <div className='w-full px-3 mb-5'>
                  <label htmlFor='email' className='text-base font-semibold px-1'>Email</label>
                  <div className='flex'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-email-outline text-gray-400 text-lg'></i></div>
                    <input 
                      id='email'
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
                  <label htmlFor='password' className='text-base font-semibold px-1'>Password</label>
                  <div className='flex items-center relative'>
                    <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'><i className='mdi mdi-lock-outline text-gray-400 text-lg'></i></div>
                    <input
                      id='password'
                      value={password}
                      ref={register}
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
                    REGISTER NOW
                  </button>
                </div>
              </div>
              <div className='text-center'>
                <p className='text-gray-600'>Already have an account? <Link to='/' className='text-indigo-500 hover:text-indigo-700 font-semibold'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    {
  /*
    <section classNameNameName='py-20'>
      <div classNameNameName='container mx-auto'>
        <div classNameNameName='py-1 grid grid-cols-8'>
          <div classNameNameName='col-span-3'>
            <form classNameNameName='bg-gray-100 rounded p-6' onSubmit={handleSubmit(onSubmit)}>
              <h2 classNameNameName='text-2xl mb-4 text-center font-ligth'>Sign Up</h2>
              {error
                ? <span classNameNameName='inline-block w-full px-3 py-2 rounded bg-red-500 text-white mb-4'>
                  {error}
                </span>
                : null}
              {showSuccessMessage
                ? <span classNameNameName='inline-block w-full px-3 py-2 rounded bg-green-400 text-white mb-4'>
                  {showSuccessMessage}
                </span>
                : null}
              <div classNameNameName='flex flex-col mb-4'>
                <label classNameNameName='font-ligth mb-1'>Name</label>
                <input ref={register} classNameNameName='py-2 px-4 bg-white rounded border-2 border-gray-600' type='text' name='name' placeholder='' />
              </div>
              <div classNameNameName='flex flex-col mb-1'>
                <label classNameNameName='font-ligth mb-1'>Last Name</label>
                <input ref={register} classNameNameName='py-2 px-4 bg-white rounded border-2 border-gray-600' type='text' name='lastname' placeholder='' />
              </div>
              <div classNameNameName='flex flex-col mb-1'>
                <label classNameNameName='font-ligth mb-1'>User Name</label>
                <input ref={register} classNameNameName='py-2 px-4 bg-white rounded border-2 border-gray-600' type='text' name='username' placeholder='' />
              </div>
              <div classNameNameName='flex flex-col mb-4'>
                <label classNameNameName='font-ligth mb-1'>Email Address</label>
                <input ref={register} classNameNameName='py-2 px-4 bg-white rounded border-2 border-gray-600' type='text' name='email' placeholder='Email Address' />
              </div>
              <div classNameNameName='flex flex-col mb-6'>
                <label classNameNameName='font-ligth mb-1'>Password</label>
                <input ref={register} classNameNameName='py-2 px-4 bg-white rounded border-2 border-gray-600' type={shown ? 'text' : 'password'} onChange={onChange} name='password' placeholder='' value={password} minLength={6} />
                <button classNameNameName='inline-flex bg-gray-600 py-2 my-1 rounded justify-center text-white' onClick={switchShown}>
                  {shown ? 'Ocultar' : 'Mostrar'}
                </button>
              </div>
              <div classNameNameName='flex'>
                <button type='submit' classNameNameName='py-2 px-4 inline-flex text-white rounded w-full justify-center bg-indigo-600'>
                  Register
                </button>
              </div>
            </form>
            <div classNameNameName='flex justify-center mt-4'>
                <Link to='/' classNameNameName='text-indigo-500'>Already have an account?</Link>
            </div>
          </div>
          <div classNameNameName='col-span-5 ml-3'>
            <img classNameNameName='w-4 h-5' src={sign} alt='Sign Up' />
          </div>
        </div>
      </div>
    </section>
              */}
  </>
}

export default SignUpPage