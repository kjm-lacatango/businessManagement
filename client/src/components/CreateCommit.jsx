import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPesoSign, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'

const CreateCommit = () => {
    const [paramsData, setParamsData] = useSearchParams({
        cSelectedBusiness: '',
        cSelectedEmployee: '',
        cCapital: null, 
        cFrom: null,
        cTo: null,
        cWExp: null,
        cWoExp: null
    })
    const bname = paramsData.get('cSelectedBusiness')
    const empName = paramsData.get('cSelectedEmployee')
    const capital = paramsData.get('cCapital')
    const from = paramsData.get('cFrom')
    const to = paramsData.get('cTo')
    const wExp = paramsData.get('cWExp')
    const woExp = paramsData.get('cWoExp')
  
    const handleCreateCommit = (e) => {
      e.preventDefault()
    }

  return (
    <div className='shadow-lg bg-gradient-to-b from-sky-50 to-white shadow-sky-700 p-4 rounded-3xl overflow-auto h-full border border-blue-600'>
        <form onSubmit={handleCreateCommit} className='px-2 pt-4 h-full' style={{width: '620px'}}>
            <div className='flex justify-around mb-4'>
                <select required className='outline-none bg-transparent text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
                 value={bname} onChange={e => setParamsData(prev => {
                    prev.set('cSelectedBusiness', e.target.value)
                    return prev
                 }, {replace: true})}>
                    <option value='' selected hidden disabled>Select Business</option>
                    <option>KJM Restaurant</option>
                    <option>Jollibee</option>
                    <option>Mang Inasal</option>
                    <option>Coffee Shop</option>
                </select>
                <select required className='outline-none bg-transparent text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
                 value={empName} onChange={(e) => setParamsData(prev => {
                    prev.set('cSelectedEmployee', e.target.value)
                    return prev
                 }, {replace: true})}>
                    <option value='' selected hidden disabled className='text-gray-500'>Employee Name</option>
                    <option>Patrick Poe</option>
                    <option>Jason Trump</option>
                    <option>Loid Caraz</option>
                </select>
            </div>
            <div className='flex flex-col items-center mb-4'>
                <label htmlFor='cap' className='border-b border-gray-200'>C A P I T A L</label>
                <div className='flex flex-col items-center border border border-gray-300 rounded-xl mt-2 px-4 py-2'>
                    <div>
                        <FontAwesomeIcon icon={faPesoSign} className='ml-2 text-gray-500' />
                        <input required className='border-b-2 bg-transparent border-gray-500 pl-2' id='cap' type='number' placeholder='0.00'
                         value={capital} onChange={e => setParamsData(prev => {
                            prev.set('cCapital', e.target.value)
                            return prev
                        }, {replace: true})} />
                    </div>
                </div>
            </div>
            <div className='flex justify-around items-center mt-2'>
                <label htmlFor='from'>
                    From: <input required id='from' type='date' className='text-gray-700 bg-transparent border-b-2 border-gray-500 ml-2 pl-1'
                     value={from} onChange={e => setParamsData(prev=> {
                        prev.set('cFrom', e.target.value)
                        return prev
                     }, {replace: true})} />
                </label>
                <label htmlFor='to'>
                    To: <input required id='to' type='date' className='text-gray-700 bg-transparent border-b-2 border-gray-500 ml-2 pl-1'
                     value={to} onChange={e => setParamsData(prev => {
                        prev.set('cTo', e.target.value)
                        return prev
                     },{replace: true})} />
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
                             value={wExp} onChange={e => setParamsData(prev => {
                                prev.set('cWExp', e.target.value)
                                return prev
                             }, {replace: true})} />
                        </div>
                    </div>
                    <div className='flex flex-col items-center border border border-gray-300 rounded-xl my-2 px-4 py-2'>
                        <label htmlFor='woExp' className='border-b border-gray-200'>w/o Expenses:</label>
                        <div>
                            <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' />
                            <input required type='number' id='woExp' placeholder='0.00' className='border-b-2 bg-transparent border-gray-500 pl-2 mt-2'
                             value={woExp} onChange={e => setParamsData(prev => {
                                prev.set('cWoExp', e.target.value)
                                return prev
                             }, {replace: true})} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full justify-center mt-8 pb-3'>
                <button className='bg-blue-700 px-4 py-1 rounded-3xl text-white shadow-sm shadow-gray-500 hover:bg-white border border-blue-700 hover:text-blue-700 hover:border-blue-700 duration-700 transition ease-out'>
                    <FontAwesomeIcon icon={faUpload} className='text-sm mr-2' />Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default CreateCommit
