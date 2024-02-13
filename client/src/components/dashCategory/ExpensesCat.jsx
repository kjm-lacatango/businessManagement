import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPesoSign, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'

const ExpensesCat = () => {
  const [paramsData, setParamsData] = useSearchParams({
    selectedBussName: '',
    selectedEmpName: '',
    salary: null,
    others: null,
    selectedBusinessForExp: ''
  })
  const bName = paramsData.get('selectedBussname')
  const empName = paramsData.get('selectedEmpName')
  const salary = paramsData.get('salary')
  const others = paramsData.get('others')
  const selectedBusinessForExp = paramsData.get('selectedBusinessForExp')
  const [isCreateExpenses, setIsCreateExpenses] = useState(true)
  const [isDeleteExpenses, setIsDeleteExpenses] = useState(false)
  const [isShowAllExpenses, setIsShowAllExpenses] = useState(false)
  // const [selectedBusinessForExp, setSelectedBusinessForExp] = useState('')
  const [expen, setExpen] = useState([
    {id: '1', bname: 'KJM Restaurant', incharge: 'Smith Dwyne', empSalary: 2500000, others: 1500000, createdAt: '1 mon ago'},
    {id: '2', bname: 'Jollibee', incharge: 'Smith Dwyne', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '1', bname: 'KJM Restaurant', incharge: 'Smith Dwyne', empSalary: 2500000, others: 1500000, createdAt: '1 mon ago'},
    {id: '2', bname: 'Jollibee', incharge: 'Smith Dwyne', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '3', bname: 'Mang Inasal', incharge: 'Jason Trump', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '1', bname: 'KJM Restaurant', incharge: 'Smith Dwyne', empSalary: 2500000, others: 1500000, createdAt: '1 mon ago'},
    {id: '2', bname: 'Jollibee', incharge: 'Smith Dwyne', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '3', bname: 'Mang Inasal', incharge: 'Jason Trump', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '3', bname: 'Mang Inasal', incharge: 'Jason Trump', empSalary: 100000, others: 50000, createdAt: '1 mon ago'},
    {id: '4', bname: 'Coffee Shop', incharge: 'Smith Dwyne', empSalary: 10000, others: 5000, createdAt: '3 days ago'}
  ])

  const handleCreate = () => {
    setIsCreateExpenses(true)
    setIsDeleteExpenses(false)
    setIsShowAllExpenses(false)
  }
  const handleDelete = () => {
    setIsCreateExpenses(false)
    setIsDeleteExpenses(true)
    setIsShowAllExpenses(false)
  }
  const handleShowAll = () => {
    setIsCreateExpenses(false)
    setIsDeleteExpenses(false)
    setIsShowAllExpenses(true)
  }

  const handleSubmitExpenses = (e) => {
    e.preventDefault()
  }
  const handleDeleteExpenses = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className='h-5/6 w-full flex items-center justify-center px-2'>
      <div className='shadow-lg shadow-sky-700 p-4 rounded-3xl overflow-auto border border-blue-600 mt-14'>
        <div className='flex justify-start' style={{width: '620px'}}>
          <button onClick={handleCreate} className={isCreateExpenses ? 'bg-gradient-to-t from-sky-50 to-sky-100 text-gray-700 px-10 py-2 rounded-t-xl' : 'bg-gray-100 text-gray-500 px-10 py-2 rounded-t-xl hover:bg-sky-100 duration-500 transition ease-out'}>Create</button>
          <button onClick={handleDelete} className={isDeleteExpenses ? 'bg-gradient-to-t from-orange-50 to-red-100 text-gray-700 px-10 py-2 rounded-t-xl' : 'bg-gray-100 text-gray-500 px-10 py-2 rounded-t-xl hover:bg-orange-100 duration-500 transition ease-out'}>Delete</button>
          <button onClick={handleShowAll} className={isShowAllExpenses ? 'bg-gradient-to-t from-teal-50 to-teal-100 text-gray-700 px-10 py-2 rounded-t-xl' : 'bg-gray-50 text-gray-400 px-10 py-2 rounded-t-xl hover:bg-teal-100 duration-500 transition ease-out'}>Show All</button>
        </div>

        <div className='h-80 pb-4 flex justify-center items-center' style={{width: '760px'}}>
          {/* for adding */}
          {isCreateExpenses && (
            <form onSubmit={handleSubmitExpenses} className='px-2 py-2 w-full h-full bg-gradient-to-t from-white to-sky-50' style={{width: '760px'}}>
              <div className='flex justify-around mt-12'>
                <select required className='bg-transparent outline-none text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
                 value={bName} onChange={(e) => setParamsData(prev => {
                  prev.set('selectedBussname', e.target.value)
                  return prev
                }, {replace: true})}>
                  <option value='' selected hidden disabled>Select Business</option>
                  <option>KJM Restaurant</option>
                  <option>Jollibee</option>
                  <option>Mang Inasal</option>
                  <option>Coffee Shop</option>
                </select>
                <select required className='bg-transparent outline-none text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
                 value={empName} onChange={(e) => setParamsData(prev => {
                  prev.set('selectedEmpName', e.target.value)
                  return prev
                }, {replace: true})}>
                  <option value='' selected hidden disabled className='text-gray-500'>Employee Name</option>
                  <option>Patrick Poe</option>
                  <option>Jason Trump</option>
                  <option>Loid Caraz</option>
                </select>
              </div>
              <div className='flex justify-around mt-14 mb-10'>
                <div>
                  <label htmlFor='salary' className='ml-2 mb-2'>Employees Salary:</label>
                  <div className='border border-gray-300 rounded-lg px-4 pb-2 pt-1'>
                    <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' />
                    <input required type='number' id='salary' placeholder='0.00' className='bg-transparent border-b-2 border-gray-500 pl-2 mt-2'
                     value={salary} onChange={e => setParamsData(prev => {
                      prev.set('salary', e.target.value)
                      return prev
                    }, {replace: true})} />
                  </div>
                </div>
                <div>
                  <label htmlFor='others' className='ml-2 mb-2'>Others:</label>
                  <div className='border border-gray-300 rounded-lg px-4 pb-2 pt-1'>
                    <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' />
                    <input required type='number' id='others' placeholder='0.00' className='bg-transparent border-b-2 border-gray-500 pl-2 mt-2'
                     value={others} onChange={e => setParamsData(prev => {
                      prev.set('others', e.target.value)
                      return prev
                    }, {replace: true})} />
                  </div>
                </div>
              </div>
              <div className='flex w-full justify-center'>
                <button className='bg-blue-700 px-4 py-1 rounded-3xl text-white shadow-sm shadow-gray-500 hover:bg-white border border-blue-700 hover:text-blue-700 hover:border-blue-700 duration-500 transition ease-out'>
                  <FontAwesomeIcon icon={faUpload} className='text-sm mr-2' />Submit
                </button>
              </div>
            </form>
          )}
          {/* for deletion */}
          {isDeleteExpenses && (
            <form onSubmit={handleDeleteExpenses} className='relative px-2 py-2 w-full h-full bg-gradient-to-b from-orange-50 to-white' style={{width: '760px'}}>
              <div className='absolute w-full flex justify-center top-5'>
                <input required autoFocus placeholder='ID' className='w-12 bg-white text-center text-xl outline-sky-800 shadow-sm shadow-blue-500 rounded-full h-12' />
              </div>
              <div className='flex justify-around mt-12'>
                <div className='flex flex-col items-center justify-center h-14'>
                  <h1 className='text-gray-800'>Empty</h1>
                  <h1 className='px-4 mt-1 italic text-gray-500 border-t border-gray-300'>Business Name</h1>
                </div>
                <div className='flex flex-col items-center justify-center h-14'>
                  <h1 className='text-gray-800'>Empty</h1>
                  <h1 className='px-4 italic text-gray-500 border-t border-gray-300'>Employee Name</h1>
                </div>
              </div>
              <div className='flex justify-around items-center mt-9 mb-10'>
                <div className='flex border border-gray-300 rounded-lg p-4 pr-2 w-64'>
                  <h1 className='mr-2'>Employees Salary:</h1>
                  <h1 className='text-gray-500'><FontAwesomeIcon icon={faPesoSign} /> 0.00</h1>
                </div>
                <div className='flex border border-gray-300 rounded-lg p-4 pr-2 w-64'>
                  <h1 className='mr-2'>Others:</h1>
                  <h1 className='text-gray-500'><FontAwesomeIcon icon={faPesoSign} /> 0.00</h1>
                </div>
              </div>
              <div className='flex w-full justify-center'>
                <button className='hover:bg-red-500 px-4 py-1 rounded-3xl hover:text-white shadow-sm shadow-gray-500 bg-white border text-red-500 border-red-500 duration-500 transition ease-out'>
                  Delete
                </button>
              </div>
            </form>
          )}
          {/* for show */}
          {isShowAllExpenses && (
            <div className='px-2 py-2 h-full overflow-auto bg-gradient-to-t from-white to-teal-50' style={{width: '760px'}}>
              <div className='w-full flex justify-center mt-5 mb-10'>
                <select required className='bg-transparent outline-none text-gray-700 border-b-2 border-gray-500 cursor-pointer pr-4'
                 value={selectedBusinessForExp} onChange={(e) => setParamsData(prev => {
                  prev.set('selectedBusinessForExp', e.target.value)
                  return prev
                }, {replace: true})}>
                  <option>KJM Restaurant</option>
                  <option>Jollibee</option>
                  <option>Mang Inasal</option>
                  <option>Coffee Shop</option>
                </select>
              </div>
              <table className='whitespace-nowrap bg-green-50 w-full border-b-2 border-teal-600'>
                <thead className='bg-cyan-200 px-4 sticky -top-2'>
                  <tr className=''>
                    <th className='px-4 text-cyan-900'>ID</th>
                    <th className='px-4 text-cyan-900'>Business Name</th>
                    <th className='px-4 text-cyan-900'>Employee Name</th>
                    <th className='px-4 text-cyan-900'>Employees Salary</th>
                    <th className='px-4 text-cyan-900'>Others</th>
                    <th className='px-4 text-cyan-900'>CreatedAt</th>
                  </tr>
                </thead>
                <tbody>
                  {expen.map((exp, i) => (
                    <tr key={i}>
                      <td className='border-b border-cyan-200 text-center px-4'>{exp.id}</td>
                      <td className='border-b border-cyan-200 text-center px-4'>{exp.bname}</td>
                      <td className='border-b border-cyan-200 text-center px-4'>{exp.incharge}</td>
                      <td className='border-b border-cyan-200 text-center px-4'>
                        <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {exp.empSalary}
                      </td>
                      <td className='border-b border-cyan-200 text-center px-4'>
                        <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {exp.others}
                      </td>
                      <td className='border-b border-cyan-200 text-center px-4'>{exp.createdAt}</td>
                    </tr> 
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ExpensesCat
