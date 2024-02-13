import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPesoSign } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'

const AllCat = () => {
    const [data, setData] = useState([
        {id: '6', bname: 'Coffee Shop', whoCommit: 'Ellon Musk', capital: 50000, from: '01/12/2024', to: '01/12/2024', wExp: 85000, woExp: 100000, createdAt: '3 days ago'},
        {id: '2', bname: 'Jollibee', whoCommit: 'Lerry Pefien', capital: 100000, from: '01/12/2024', to: '02/12/2024', wExp: 250000, woExp: 400000, createdAt: '2 days ago'},
        {id: '1', bname: 'KJM Restaurant', whoCommit: 'Jason Trump', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 week ago'},
        {id: '4', bname: 'KJM Restaurant', whoCommit: 'Loid Caraz', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '4 days ago'},
        {id: '5', bname: 'KJM Restaurant', whoCommit: 'Patrick Poe', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 mon ago'},
        {id: '1', bname: 'KJM Restaurant', whoCommit: 'Jason Trump', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 week ago'},
        {id: '4', bname: 'KJM Restaurant', whoCommit: 'Loid Caraz', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '4 days ago'},
        {id: '5', bname: 'KJM Restaurant', whoCommit: 'Patrick Poe', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 mon ago'},
        {id: '1', bname: 'KJM Restaurant', whoCommit: 'Jason Trump', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 week ago'},
        {id: '4', bname: 'KJM Restaurant', whoCommit: 'Loid Caraz', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '4 days ago'},
        {id: '5', bname: 'KJM Restaurant', whoCommit: 'Patrick Poe', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 mon ago'},
        {id: '7', bname: 'KJM Restaurant', whoCommit: 'Jason Trump', capital: 500000, from: '01/12/2024', to: '02/12/2024', wExp: 850000, woExp: 1000000, createdAt: '1 day ago'},
        {id: '3', bname: 'Mang Inasal', whoCommit: 'Steve Jhones', capital: 100000, from: '01/12/2024', to: '02/12/2024', wExp: 350000, woExp: 500000, createdAt: '1 mon ago'},
    ])
    const [expen, setExpen] = useState([
        {bname: 'KJM Restaurant', empSalary: 2500000, others: 1500000, total: 6800000},
        {bname: 'Jollibee', empSalary: 100000, others: 50000, total: 250000},
        {bname: 'Mang Inasal', empSalary: 100000, others: 50000, total: 350000},
        {bname: 'Coffee Shop', empSalary: 10000, others: 5000, total: 85000}
    ])
    const [isShowExpenses, setIsShowExpenses] = useState(false)
    const [paramsData, setParamsData] = useSearchParams({
        bName: '',
        date: null
    })
    const bName = paramsData.get('bName')
    const date = paramsData.get('date')

  return (
    <div className={isShowExpenses ? 'w-full h-5/6 pt-8' : 'w-full h-5/6 flex justify-center items-center'}>
        <div className='flex flex-col justify-start items-center w-full sm:mt-20 mt-10 sm:px-10 px-2'>
            {/* header */}
            <div className='flex sm:justify-evenly justify-around w-full sm:mb-16 mb-10'>
                <select className='outline-none border-b-2 border-gray-500 cursor-pointer sm:pl-2 pl-1 sm:pr-6 pr-1 sm:text-lg text-sm'
                 value={bName} onChange={e => setParamsData(prev => {
                    prev.set('bName', e.target.value)
                    return prev
                 }, {replace: true})}>
                    <option className='sm:text-lg text-sm'>All</option>
                    <option className='sm:text-lg text-sm'>Restaurant</option>
                    <option className='sm:text-lg text-sm'>Farm</option>
                </select>
                <select className='outline-none border-b-2 border-gray-500 cursor-pointer sm:pl-2 pl-1 sm:pr-4 pr-1 sm:text-lg text-sm'
                 value={date} onChange={e => setParamsData(prev => {
                    prev.set('date', e.target.value)
                    return prev
                 }, {replace: true})}>
                    <option className='sm:text-lg text-sm'>All</option>
                    <option className='sm:text-lg text-sm'>1 week</option>
                    <option className='sm:text-lg text-sm'>1 month</option>
                    <option className='sm:text-lg text-sm'>2 months</option>
                    <option className='sm:text-lg text-sm'>3 months</option>
                    <option className='sm:text-lg text-sm'>4 months</option>
                    <option className='sm:text-lg text-sm'>5 months</option>
                    <option className='sm:text-lg text-sm'>6 months</option>
                    <option className='sm:text-lg text-sm'>7 months</option>
                    <option className='sm:text-lg text-sm'>8 months</option>
                    <option className='sm:text-lg text-sm'>9 months</option>
                    <option className='sm:text-lg text-sm'>10 months</option>
                    <option className='sm:text-lg text-sm'>11 months</option>
                    <option className='sm:text-lg text-sm'>1 year</option>
                    <option className='sm:text-lg text-sm'>2 years</option>
                    <option className='sm:text-lg text-sm'>5 years</option>
                    <option className='sm:text-lg text-sm'>10 years</option>
                    <option className='sm:text-lg text-sm'>more than 10 years</option>
                </select>
            </div>
            {/* body */}
            <div className='shadow-xl shadow-gray-400 rounded-xl w-full max-h-72 pb-1 overflow-auto'>
                <table className='bg-green-100 w-full whitespace-nowrap'>
                    <thead className='bg-teal-400 px-4 sticky -top-1'>
                        <tr>
                            <th className='pl-4 pr-3 border-r py-3 text-teal-950'>ID</th>
                            <th className='px-2 border-r py-3 text-teal-950'>Business Name</th>
                            <th className='px-2 border-r py-3 text-teal-950'>Incharged</th>
                            <th className='px-2 border-r py-3 text-teal-950'>Capital</th>
                            <th className='px-2 border-r py-3 text-teal-950'>From</th>
                            <th className='px-2 border-r py-3 text-teal-950'>To</th>
                            <th className='px-2 border-r py-3 text-teal-950'>Without Expenses</th>
                            <th className='px-2 border-r py-3 text-teal-950'>With Expenses</th>
                            <th className='pr-8 pl-4 py-3 text-teal-950'>CreatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(d => (
                            <tr key={d.id} className='border-b border-teal-200'>
                                <td className='pl-4 pr-3 text-center'>{d.id}</td>
                                <td className='px-4'>{d.bname}</td>
                                <td className='px-4'>{d.whoCommit}</td>
                                <td className='px-2 text-center'><FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {d.capital}</td>
                                <td className='px-2 text-center'>{d.from}</td>
                                <td className='px-2 text-center'>{d.to}</td>
                                <td className='px-2 text-center'><FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {d.woExp}</td>
                                <td className='px-2 text-center'><FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {d.wExp}</td>
                                <td className='pl-4 pr-8 text-center'>{d.createdAt}</td>
                            </tr>
                        ))}
                        {/* <tr>
                            <td colSpan={3}>Total:</td>
                            <td>P 100 000</td>
                            <td colSpan={2}></td>
                            <td>P 200 000</td>
                            <td>P 150 000</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
            <div className='flex flex-col items-center w-full justify-center my-6 pb-6'>
                <button onClick={() => setIsShowExpenses(prev => !prev)} className='text-gray-700 mb-2 hover:text-orange-500 duration-200 transition ease-out'>
                    {isShowExpenses ? 'Hide Table' : 'Show others . . .'}
                </button>
                {isShowExpenses && (
                    <div className='max-h-40 sm:w-auto w-full overflow-auto shadow-md shadow-gray-500 rounded-md'>
                        <table className='whitespace-nowrap bg-green-50 w-full'>
                            <thead className='bg-cyan-200 px-4 sticky top-0'>
                                <tr className=''>
                                    <th className='px-4 text-cyan-900 border-red-500'>Business Name</th>
                                    <th className='px-4 text-cyan-900'>Employees Salary</th>
                                    <th className='px-4 text-cyan-900'>Others</th>
                                    <th className='px-4 text-cyan-900'>Total Income</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expen.map((exp, i) => (
                                <tr key={i}>
                                        <td className='border-b border-cyan-200 text-center px-4'>{exp.bname}</td>
                                        <td className='border-b border-cyan-200 text-center px-4'>
                                            <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {exp.empSalary}
                                        </td>
                                        <td className='border-b border-cyan-200 text-center px-4'>
                                            <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {exp.others}
                                        </td>
                                        <td className='border-b border-cyan-200 text-center px-4'>
                                            <FontAwesomeIcon icon={faPesoSign} className='text-gray-500' /> {exp.total}
                                        </td>
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

export default AllCat
