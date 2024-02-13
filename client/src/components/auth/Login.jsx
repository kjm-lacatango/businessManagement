import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = ({handleExit, handleIsReg}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLog = (e) => {
    e.preventDefault()
    if (username.trim() === '' || password.trim() === '') {
      alert('Invalid. All fields are required!')
    } else {
      navigate('/dash')
    }
  }

  return (
    <form onSubmit={handleLog} className='border-blue-800 border relative bg-white flex flex-col justify-center items-center w-96 sm:px-10 px-5 py-5 rounded-3xl shadow-2xl shadow-gray-950'>
      <h1 onClick={handleExit} className='cursor-pointer absolute top-1.5 right-4 font-semibold hover:text-red-500'>X</h1>
      <h1 className='text-blue-900 text-3xl mb-4'>Sign In</h1>
      <input value={username} onChange={e => setUsername(e.target.value)} required
       placeholder='Username' className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <input value={password} onChange={e => setPassword(e.target.value)} required
       placeholder='Password' type='password' className='w-full pl-1 border-b border-gray-400 outline-none mb-2 sm:text-lg' />
      <p className='mt-4 mb-2 text-gray-700 text-sm sm:text-md whitespace-nowrap'>
        <i>Don't have an account?</i>
        <span onClick={handleIsReg} className='cursor-pointer ml-2 font-semibold hover:text-orange-500 duration-200'>Register</span>
      </p>
      <button type='submit' className='bg-orange-600 border border-orange-600 text-white px-3 py-0.5 rounded-2xl hover:border-orange-600 hover:bg-white hover:text-orange-600 duration-200'>Login</button>
    </form>
  )
}

export default Login
