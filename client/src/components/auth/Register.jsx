import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Register = ({handleExit, handleIsLog}) => {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const navigate = useNavigate()

  const handleReg = (e) => {
    e.preventDefault()
    if (password.trim() === confirmPass.trim()) {
      if (fname.trim() === '' || lname.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPass.trim() === '') {
        alert('Invalid. All fields are required!')
      } else {
        navigate('/dash')
      }
    } else {
      alert('Password not match!')
    }
    
  }

  return (
    <form onSubmit={handleReg} className='border-blue-800 border relative bg-white flex flex-col justify-center items-center w-96 sm:px-10 px-5 py-5 rounded-3xl shadow-2xl shadow-gray-950'>
      <h1 onClick={handleExit} className='cursor-pointer absolute top-1.5 right-4 font-semibold hover:text-red-500'>X</h1>
      <h1 className='text-blue-900 text-3xl mb-4'>Sign Up</h1>
      <input value={fname} onChange={e => setFname(e.target.value)}
       placeholder='Firstname' required className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <input value={lname} onChange={e => setLname(e.target.value)}
       placeholder='Lastname' required className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <input value={username} onChange={e => setUsername(e.target.value)}
       placeholder='Username' required className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <input value={password} onChange={e => setPassword(e.target.value)}
       placeholder='Password' type='password' required className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <input value={confirmPass} onChange={e => setConfirmPass(e.target.value)}
       placeholder='Confirm Password' type='password' required className='w-full pl-1 border-b border-gray-400 outline-none mb-3 sm:text-lg' />
      <p className='mt-4 mb-2 text-gray-700 text-sm sm:text-md whitespace-nowrap'>
        <i>Already have an account?</i>
        <span onClick={handleIsLog} className='cursor-pointer ml-2 font-semibold hover:text-orange-500 duration-200'>Login</span>
      </p>
      <button type='submit' className='bg-orange-600 border border-orange-600 text-white px-3 py-0.5 rounded-2xl hover:border-orange-600 hover:bg-white hover:text-orange-600 duration-200'>Register</button>
    </form>
  )
}

export default Register
