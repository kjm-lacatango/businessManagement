import React, { useState } from 'react'
import CreateCommit from '../CreateCommit'
import UpdateCommit from '../UpdateCommit'

const CommitCat = () => {
  const [isCreateCommit, setIsCreateCommit] = useState(true)
  const [isUpdateCommit, setIsUpdateCommit] = useState(false)

  const handleCreate = () => {
    setIsCreateCommit(true)
    setIsUpdateCommit(false)
  }
  const handleUpdate = () => {
    setIsCreateCommit(false)
    setIsUpdateCommit(true)
  }

  return (
    <div className='h-full w-full flex flex-col items-center pt-16'>
      {/* header category */}
      <div className='border-2 border-blue-900 rounded-2xl w-60 flex justify-between overflow-hidden bg-gray-200 mt-16 mb-6'>
        <button onClick={handleCreate} className={isCreateCommit ? 'bg-blue-800 w-full rounded-2xl px-14 text-white' : 'text-gray-500 w-full hover:text-blue-950 duration-200'}>Create</button>
        <button onClick={handleUpdate} className={isUpdateCommit ? 'bg-blue-800 w-full rounded-2xl px-14 text-white' : 'text-gray-500 w-full hover:text-blue-950 duration-200'}>Update</button>
      </div>
      {/* this is for create commit */}
      <div className='h-auto w-full flex justify-center px-1'>
        {isCreateCommit && <CreateCommit />}
        {isUpdateCommit && <UpdateCommit />}
      </div>
    </div>
  )
}

export default CommitCat
