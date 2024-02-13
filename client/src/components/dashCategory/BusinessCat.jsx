import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPesoSign } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'

const BusinessCat = () => {
  const [paramsData, setParamsData] = useSearchParams({
    bussAllSelected: ''
  })
  const bussAllSelected = paramsData.get('bussAllSelected')
  const [isAll, setIsAll] = useState(true)
  const [isAddBusiness, setIsAddBusiness] = useState(false)
  const [isAddEmployee, setIsAddEmployee] = useState(false)
  const [isDeleteBusiness, setIsDelBusiness] = useState(false)
  const [isDeleteEmployee, setIsDeleteEmployee] = useState(false)
  const [bname, setBname] = useState('')
  const [selectedBnameEmpCat, setSelectedBnameEmpCat] = useState('')
  const [empName, setEmpName] = useState('')
  const [selectedBnameDelCat, setSelectedBnameDelCat] = useState('')
  const [selectedEmpDelCat, setSelectedEmpDelCat] = useState('')
  const [businessTable, setBusinessTable] = useState([
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
    {empName: 'Loopy Pelestine', empSalary: '20000', startedAt: '2 months ago'},
  ])

  const handleAddBusiness = (e) => {
    e.preventDefault()
  }
  const handleAddEmployee = (e) => {
    e.preventDefault()
  }
  const handleDelBusiness = (e) => {
    e.preventDefault()
  }
  const handleDelEmployee = (e) => {
    e.preventDefault()
  }

  const showAll = () => {
    setIsAddBusiness(false)
    setIsAddEmployee(false)
    setIsDelBusiness(false)
    setIsDeleteEmployee(false)
    setIsAll(true)
  }
  const addBusinessCat = () => {
    setIsAddBusiness(true)
    setIsAddEmployee(false)
    setIsDelBusiness(false)
    setIsDeleteEmployee(false)
    setIsAll(false)
  }
  const addEmployeeCat = () => {
    setIsAddBusiness(false)
    setIsAddEmployee(true)
    setIsDelBusiness(false)
    setIsDeleteEmployee(false)
    setIsAll(false)
  }
  const DeleteBusinessCat = () => {
    setIsAddBusiness(false)
    setIsAddEmployee(false)
    setIsDelBusiness(true)
    setIsDeleteEmployee(false)
    setIsAll(false)
  }
  const DeleteEmployeeCat = () => {
    setIsAddBusiness(false)
    setIsAddEmployee(false)
    setIsDelBusiness(false)
    setIsDeleteEmployee(true)
    setIsAll(false)
  }

  return (
    <div className='h-5/6 w-full flex justify-center items-center px-2'>
      <div className='shadow-lg shadow-sky-700 p-4 pt-0 rounded-3xl overflow-auto border border-blue-600 mt-14'>
        {/* header category for business */}
        <ul className='flex justify-center bg-gradient-to-t from-gray-50 to-white items-center gap-2 py-5' style={{width: '660px'}}>
          <li onClick={showAll} className={isAll ? 'text-lg cursor-pointer bg-teal-700 text-white px-3 py-1 whitespace-nowrap border border-teal-700 text-gray-500 duration-200 rounded-3xl' : 'cursor-pointer px-3 py-1 whitespace-nowrap border border-gray-200 text-gray-400 duration-500 rounded-3xl hover:bg-gray-400 hover:text-white transition ease-out'}>
            All
          </li>
          <li onClick={addBusinessCat} className={isAddBusiness ? 'text-lg cursor-pointer bg-teal-700 text-white px-3 pb-1 whitespace-nowrap border border-teal-700 duration-200 rounded-3xl' : 'cursor-pointer px-3 pb-1 whitespace-nowrap border border-gray-200 text-gray-400 duration-500 rounded-3xl hover:bg-gray-400 hover:text-white transition ease-out'}>
            <span className={isAddBusiness ? 'mr-2 text-2xl' : 'mr-2 text-xl'}>+</span>Add Business
          </li>
          <li onClick={addEmployeeCat} className={isAddEmployee ? 'text-lg cursor-pointer bg-teal-700 text-white px-3 pb-1 whitespace-nowrap border border-teal-700 text-gray-500 duration-200 rounded-3xl' : 'cursor-pointer px-3 pb-1 whitespace-nowrap border border-gray-200 text-gray-400 duration-500 rounded-3xl hover:bg-gray-400 hover:text-white transition ease-out'}>
            <span className={isAddEmployee ? 'mr-2 text-2xl' : 'mr-2 text-xl'}>+</span>Add Employee
          </li>
          <li onClick={DeleteBusinessCat} className={isDeleteBusiness ? 'text-lg cursor-pointer bg-teal-700 text-white px-3 py-1 whitespace-nowrap border border-teal-700 text-gray-500 duration-200 rounded-3xl' : 'cursor-pointer px-3 py-1 whitespace-nowrap border border-gray-200 text-gray-400 duration-500 rounded-3xl hover:bg-gray-400 hover:text-white transition ease-out'}>
            Delete Business
          </li>
          <li onClick={DeleteEmployeeCat} className={isDeleteEmployee ? 'text-lg cursor-pointer bg-teal-700 text-white px-3 py-1 whitespace-nowrap border border-teal-700 text-gray-500 duration-200 rounded-3xl' : 'cursor-pointer px-3 py-1 whitespace-nowrap border border-gray-200 text-gray-400 duration-500 rounded-3xl hover:bg-gray-400 hover:text-white transition ease-out'}>
            Delete Employee
          </li>
        </ul>

        <div className='bg-gradient-to-b from-white to-blue-50 px-2 pb-4 border-t border-gray-300 h-80 flex justify-center items-center rounded-b-xl' style={{width: '660px'}}>
          {/* for all category */}
          {isAll && (
            <div className='h-full overflow-auto pt-6' style={{width: '660px'}}>
              <div className='w-full flex justify-center mb-8'>
                <select className='outline-none bg-transparent cursor-pointer border-b-2 border-gray-500 pl-1 pr-8'
                 value={bussAllSelected} onChange={e => setParamsData(prev => {
                  prev.set('bussAllSelected', e.target.value)
                  return prev
                }, {replace: true})}>
                  <option>KJM Restaurant</option>
                  <option>Coffee Shop</option>
                </select>
              </div>
              <table className='whitespace-nowrap bg-green-50 w-full border-b-2 border-teal-600'>
                <thead className='bg-cyan-200 px-4 sticky top-0'>
                  <tr className=''>
                    <th className='px-4 text-cyan-900'>Employee Name</th>
                    <th className='px-4 text-cyan-900'>Employee Salary</th>
                    <th className='px-4 text-cyan-900'>startedAt</th>
                  </tr>
                </thead>
                <tbody>
                  {businessTable.map((b,i) => (
                    <tr key={i}>
                      <td className='border-b border-cyan-200 text-center px-4'>{b.empName}</td>
                      <td className='border-b border-cyan-200 text-center px-4'>
                        <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {b.empSalary}
                      </td>
                      <td className='border-b border-cyan-200 text-center px-4'>{b.startedAt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* for add business category */}
          {isAddBusiness && (
            <form onSubmit={handleAddBusiness} className='flex flex-col items-center justify-center'>
              <label htmlFor='bname' className='ml-2 mb-2 mt-2'>Business Name</label>
              <div className='border border-gray-300 px-8 pt-6 pb-3 rounded-lg mb-20'>
                <input autoFocus placeholder='Enter Business Name' id='bname' value={bname} onChange={e => setBname(e.target.value)} className='bg-transparent border-b-2 border-gray-500 text-lg text-center outline-none' required />
              </div>
              <button className='bg-blue-700 px-3 py-1 rounded-3xl text-white border border-blue-700 hover:bg-white hover:border-blue-700 hover:text-blue-700 duration-200 transition ease-in'>Add Business</button>
            </form>
          )}
          {/* for add employee category */}
          {isAddEmployee && (
            <form onChange={handleAddEmployee} className='flex flex-col items-center justify-center'>
              <div className='flex flex-col items-center justify-center w-full mb-8 mt-0'>
                <select onChange={e => setSelectedBnameEmpCat(e.target.value)} required className='cursor-pointer bg-transparent border-b-2 border-gray-500 pl-1 pr-8 outline-none ml-10'>
                  <option value='' selected hidden disabled>Select Business</option>
                  <option value={0}>KJM Restaurant</option>
                  <option value={1}>Coffee Shop</option>
                </select>
                <div className='flex mt-10 gap-8 mb-2'>
                  <div>
                    <label htmlFor='empName' className='ml-2'>Employee Name:</label>
                    <div className='border border-gray-300 p-4 rounded-xl'>
                      <input placeholder='Enter Name' id='empName' value={empName} onChange={e => setEmpName(e.target.value)} required className='border-b-2 bg-transparent border-gray-500 pl-2' />
                    </div>
                  </div>
                  <div>
                    <label htmlFor='empSal' className='ml-2'>Employee Salary:</label>
                    <div className='border border-gray-300 p-4 rounded-xl'>
                      <FontAwesomeIcon icon={faPesoSign} className='mr-2 text-gray-500' />
                      <input type='number' placeholder='0.00' id='empSal' value={empName} onChange={e => setEmpName(e.target.value)} required className='border-b-2 bg-transparent border-gray-500 pl-2' />
                    </div>
                  </div>
                </div>
              </div>
              <button className='bg-blue-700 px-3 py-1 rounded-3xl text-white border border-blue-700 hover:bg-white hover:border-blue-700 hover:text-blue-700 duration-200 transition ease-in'>Add Employee</button>
            </form>
          )}
          {/* for delete business category */}
          {isDeleteBusiness && (
            <form onSubmit={handleDelBusiness} className='flex flex-col items-center justify-center'>
              <select onChange={e => setSelectedBnameDelCat(e.target.value)} required className='text-lg bg-transparent outline-none cursor-pointer border-b-2 border-gray-500 pl-1 pr-8 mb-20'>
                <option value='' selected hidden disabled>Select Business</option>
                <option value={0}>KJM Restaurant</option>
                <option value={1}>Coffee Shop</option>
              </select>
              <button className='hover:bg-red-500 px-3 py-1 rounded-3xl hover:text-white border border-red-500 bg-white border-red-500 text-red-500 duration-200 transition ease-in'>Delete Business</button>
            </form>
          )}
          {/* for delete employee category */}
          {isDeleteEmployee && (
            <form onChange={handleDelEmployee} className='flex flex-col items-center justify-center'>
              <div className='flex gap-16 items-center w-full'>
                <select onChange={e => setSelectedBnameDelCat(e.target.value)} required className='text-lg bg-transparent outline-none cursor-pointer border-b-2 border-gray-500 pl-1 pr-8'>
                  <option value='' selected hidden disabled>Select Business</option>
                  <option value={0}>KJM Restaurant</option>
                  <option value={1}>Coffee Shop</option>
                </select>
                <select onChange={e => setSelectedEmpDelCat(e.target.value)} required className='text-lg bg-transparent outline-none cursor-pointer border-b-2 border-gray-500 pl-1 pr-8'>
                  <option value='' selected hidden disabled>Select Employee</option>
                  <option value={0}>Loid Tarras</option>
                  <option value={1}>Smith Jones</option>
                </select>
              </div>
              <button className='mt-20 hover:bg-red-500 px-3 py-1 rounded-3xl hover:text-white border border-red-500 bg-white border-red-500 text-red-500 duration-200 transition ease-in'>Delete Employee</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default BusinessCat
