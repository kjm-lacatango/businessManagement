import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPesoSign, faUpload } from '@fortawesome/free-solid-svg-icons'

const UpdateCommit = () => {
  const [selectedBusiness, setSelectedBusiness] = useState('')
  const [selectedEmployee, setSelectedEmployee] = useState('')
  const [capital, setCapital] = useState(null)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [wExp, setWExp] = useState(null)
  const [woExp, setWoExp] = useState(null)
  const [id, setId] = useState('')
  const [isUpdate, setIsUpdate] = useState(false)
  
  const handleCreateCommit = (e) => {
    e.preventDefault()
  }
  const handleSumitID = (e) => {
    e.preventDefault()
    if (id === '1') {
      setIsUpdate(true)
      setId('')
    } else {
      alert("Invalid. Id doesn't existed!")
    }
  }

  const handleCancel = () => {
    setSelectedBusiness('')
    setSelectedEmployee('')
    setCapital(null)
    setFrom('')
    setTo('')
    setWExp(null)
    setWoExp(null)
    setIsUpdate(false)
  }

  return (
    <>
      {isUpdate ? (
        <div className='shadow-lg shadow-sky-700 p-4 bg-gradient-to-b from-teal-50 to-white rounded-3xl overflow-auto h-full border border-blue-600'>
          <form onSubmit={handleCreateCommit} className='px-2 py-2 w-full h-full' style={{width: '620px'}}>
            <div className='flex justify-around mb-4'>
              <select required className='outline-none bg-transparent text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
               value={selectedBusiness} onChange={(e) => setSelectedBusiness( e.target.value)}>
                <option value='' selected hidden disabled>Select Business</option>
                <option>KJM Restaurant</option>
                <option>Jollibee</option>
                <option>Mang Inasal</option>
                <option>Coffee Shop</option>
              </select>
              <select required className='outline-none bg-transparent text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
               value={selectedEmployee} onChange={(e) => setSelectedEmployee(e.target.value)}>
                <option value='' selected hidden disabled className='text-gray-500'>Employee Name</option>
                <option>Patrick Poe</option>
                <option>Jason Trump</option>
                <option>Loid Caraz</option>
              </select>
            </div>
            <div className='flex flex-col items-center mb-4'>
              <label htmlFor='cap' className='border-b border-gray-200'>C A P I T A L</label>
              <div className='flex flex-col items-center border border-gray-300 rounded-xl mt-2 px-4 py-2'>
                <div>
                  <FontAwesomeIcon icon={faPesoSign} className='ml-2 text-gray-500' />
                  <input required className='border-b-2 bg-transparent border-gray-500 pl-2' id='cap' type='number' placeholder='0.00'
                   value={capital} onChange={e => setCapital(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='flex justify-around items-center mt-2'>
              <label htmlFor='from'>
                From: <input required id='from' type='date' className='text-gray-700 bg-transparent border-b-2 border-gray-500 ml-2 pl-1' 
                 value={from} onChange={e => setFrom(e.target.value)} />
              </label>
              <label htmlFor='to'>
                To: <input required id='to' type='date' className='text-gray-700 bg-transparent border-b-2 border-gray-500 ml-2 pl-1'
                 value={to} onChange={e => setTo(e.target.value)} />
              </label>
            </div>
            <div className='flex flex-col justify-center items-center my-3 mb-6'>
              <h1 className='border-b border-gray-200'>P R O F I T</h1>
              <div className='flex justify-around w-full'>
                <div className='flex flex-col items-center border border border-gray-300 rounded-xl my-2 px-4 py-2'>
                  <label htmlFor='wExp' className='border-b border-gray-200'>w/ Expenses:</label>
                  <div>
                    <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' />
                    <input required type='number' id='wExp' placeholder='0.00' className='border-b-2 bg-transparent border-gray-500 pl-2 mt-2'
                     value={wExp} onChange={e => setWExp(e.target.value)} />
                  </div>
                </div>
                <div className='flex flex-col items-center border border border-gray-300 rounded-xl my-2 px-4 py-2'>
                  <label htmlFor='woExp' className='border-b border-gray-200'>w/o Expenses:</label>
                  <div>
                    <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' />
                    <input required type='number' id='woExp' placeholder='0.00' className='border-b-2 bg-transparent border-gray-500 pl-2 mt-2' 
                     value={woExp} onChange={e => setWoExp(e.target.value)} />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full justify-around'>
              <h1 onClick={handleCancel}
               className='bg-gray-400 text-white px-4 py-1 rounded-3xl shadow-sm shadow-gray-500 hover:bg-red-500 border border-gray-400 hover:border-red-500 duration-200 cursor-pointer'>Cancel</h1>
              <button className='bg-blue-700 px-4 py-1 rounded-3xl text-white shadow-sm shadow-gray-500 hover:bg-white border border-blue-700 hover:text-blue-700 hover:border-blue-700 duration-200 transition ease-in'>
                <FontAwesomeIcon icon={faUpload} className='text-sm mr-2' />Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className='flex justify-center items-center mt-20'>
          <form onSubmit={handleSumitID} className='bg-gradient-to-t from-teal-50 to-white border-2 border-teal-500 flex flex-col p-8 rounded-xl shadow-lg shadow-teal-700'>
            <input placeholder='Enter ID' autoFocus required className='text-center border border-gray-300 py-1 rounded-t-lg mb-0.5'
             value={id} onChange={e => setId(e.target.value)} />
            <button className='bg-blue-600 rounded-b-lg text-white py-1 hover:bg-blue-700 duration-200'>Submit</button>
          </form>
        </div>
      )}
    </>
  )
}

export default UpdateCommit
