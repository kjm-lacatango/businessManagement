import React, { useState } from 'react'
import AllCat from '../components/dashCategory/AllCat'
import CommitCat from '../components/dashCategory/CommitCat'
import ExpensesCat from '../components/dashCategory/ExpensesCat'
import BusinessCat from '../components/dashCategory/BusinessCat'
import ManageProfile from '../components/ManageProfile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Dash = () => {
  const [isAll, setIsAll] = useState(true)
  const [isCommit, setIsCommit] = useState(false)
  const [isExpenses, setIsExpenses] = useState(false)
  const [isBusiness, setIsBusiness] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isManageProfile, setIsManageProfile] = useState(false)

  const showAll = () => {
    setIsAll(true)
    setIsCommit(false)
    setIsExpenses(false)
    setIsBusiness(false)
  }
  const showCommit = () => {
    setIsCommit(true)
    setIsAll(false)
    setIsExpenses(false)
    setIsBusiness(false)
  }
  const showExpenses = () => {
    setIsExpenses(true)
    setIsCommit(false)
    setIsAll(false)
    setIsBusiness(false)
  }
  const showBusiness = () => {
    setIsBusiness(true)
    setIsCommit(false)
    setIsAll(false)
    setIsExpenses(false)
  }

  return (
    <div>
      <header className='fixed w-full flex justify-between items-center py-2 bg-white sm:px-20 px-8'>
        <h1 className='text-xl text-blue-900'>KJM</h1>
        <div onClick={() => setIsProfileOpen(true)} className='flex items-center cursor-pointer'>
          <h1 className='text-gray-500 text-sm mr-2'>fname lname</h1>
          {false ? (
            <img src='#' alt='pic' className='shadow-sm shadow-gray-600 w-7 h-7 rounded-full' />
          ) : (
            <FontAwesomeIcon icon={faUser} className='bg-gray-400 px-1.5 pt-1 pb-1.5 rounded-full text-gray-100 text-sm' />
          )}
        </div>
      </header>

      <main onClick={() => {setIsProfileOpen(false);setIsManageProfile(false)}}
       className={isProfileOpen ? 'flex h-screen justify-center items-center blur-sm' : 'flex h-screen justify-center items-center'}>
        {/* nav category */}
        <div className='fixed w-full top-11 flex items-center justify-center backdrop-blur-sm py-1'>
          <ul className='flex items-center justify-center md:gap-20 sm:gap-12 gap-4 border-2 border-gray-400 rounded-3xl sm:px-10 px-4'>
            <li onClick={showAll}
            className={isAll ? 'cursor-pointer duration-200 py-0.5 text-blue-500 sm:text-xl text-lg' : 'cursor-pointer hover:text-blue-500 sm:text-lg text-sm text-gray-500 duration-200 py-0.5'}>All</li>
            <li onClick={showCommit}
            className={isCommit ? 'cursor-pointer duration-200 py-0.5 text-blue-500 sm:text-xl text-lg' : 'cursor-pointer hover:text-blue-500 sm:text-lg text-sm text-gray-500 duration-200 py-0.5'}>Commit</li>
            <li onClick={showExpenses}
            className={isExpenses ? 'cursor-pointer duration-200 py-0.5 text-blue-500 sm:text-xl text-lg' : 'cursor-pointer hover:text-blue-500 sm:text-lg text-sm text-gray-500 duration-200 py-0.5'}>Expenses</li>
            <li onClick={showBusiness}
            className={isBusiness ? 'cursor-pointer duration-200 py-0.5 text-blue-500 sm:text-xl text-lg' : 'cursor-pointer hover:text-blue-500 sm:text-lg text-sm text-gray-500 duration-200 py-0.5'}>Business</li>
          </ul>
        </div>
        {/* nav category body */}
        <div className='h-full w-full flex justify-center items-center sm:px-8 md:px-20 px-0'>
          {isAll && <AllCat />}
          {isCommit && <CommitCat />}
          {isExpenses && <ExpensesCat />}
          {isBusiness && <BusinessCat />}
        </div>
      </main>

      {/* this is for profile */}
      {isProfileOpen && (
        <ManageProfile
          setIsProfileOpen={setIsProfileOpen}
          setIsManageProfile={setIsManageProfile}
          isManageProfile={isManageProfile}
        />
      )}
    </div>
  )
}

export default Dash
