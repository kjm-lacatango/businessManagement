import { faArrowLeft, faPencil, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'

const ManageProfile = ({setIsProfileOpen, setIsManageProfile, isManageProfile}) => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    const [isFnameOpen, setIsFnameOpen] = useState(false)
    const [isLnameOpen, setIsLnameOpen] = useState(false)
    const [newFname, setNewFname] = useState('')
    const [newLname, setNewLname] = useState('')

    const handleUploadPic = () => {
        const formData = new FormData()
        formData.append('image', file)
        Axios.post('http://localhost:5001/uploadPic', formData).then(res => console.log(res.data.result))
    }

  return (
    <div className='bg-gradient-to-t from-gray-300 to-white border-b border-gray-400 rounded-b-xl fixed sm:top-10 top-0 right-0 lg:w-1/3 sm:w-1/2 w-full'>
        {isManageProfile ? (
            <div className='relative'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsManageProfile(false)}
                 className='absolute sm:top-3 top-10 left-8 text-gray-500 text-2xl hover:text-orange-500 cursor-pointer duration-200' />
                <div className='w-full flex justify-center items-center'>
                    <div className='relative mb-4 mt-20'>
                        <input id='pic' type='file' onChange={e => setFile(e.target.files[0])} className='hidden' />
                        <label htmlFor='pic'>
                            <FontAwesomeIcon icon={faPencil} title='update' className='absolute right-0 text-gray-500 cursor-pointer text-lg' />
                        </label>
                        {file ? (
                            <div className='relative px-2'>
                                <img src={URL.createObjectURL(file)} alt='pic' className='w-44 h-44 rounded-full shadow-sm shadow-gray-500' />
                                <div className='flex justify-between absolute w-full bottom-2 left-0'>
                                    <button onClick={() => setFile(null)}
                                     className='bg-gray-500 px-2 rounded-2xl shadow-sm shadow-white text-gray-200 hover:bg-red-600 duration-200 text-sm'>Cancel</button>
                                    <button onClick={handleUploadPic}
                                     className='bg-blue-600 px-2 rounded-2xl shadow-sm shadow-white text-gray-200 hover:bg-blue-800 duration-200'>Save</button>
                                </div>
                            </div>
                        ) : (
                            <>
                                {false ? (
                                    <img src='' alt='pic' className='w-44 h-44 rounded-full shadow-sm shadow-gray-500' />
                                ) : (
                                    <FontAwesomeIcon icon={faUser} className='bg-gray-400 text-gray-100 text-8xl w-40 px-0.5 py-8 rounded-full shadow-sm shadow-gray-500' />
                                )}
                            </>
                        )}
                    </div>
                </div>
                <h1 className='text-center cursor-default text-lg'>Username</h1>
                <hr />
                <div className='flex mt-4 justify-between items-center px-8'>
                    {isFnameOpen ? (
                        <>
                            <input placeholder='Enter Firstname' value={newFname} onChange={e => setNewFname(e.target.value)} autoFocus
                             className='bg-transparent border-b border-gray-500 pl-1 outline-none' />
                            <div>
                                <button className='bg-blue-600 px-2 mr-3 rounded-2xl text-white hover:bg-blue-800 pb-0.5'>save</button>
                                <button onClick={() => setIsFnameOpen(false)} className='hover:text-red-500 duration-200'>X</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Fname</p>
                            <FontAwesomeIcon onClick={() => setIsFnameOpen(true)} icon={faPencil} title='update' className='text-gray-500 cursor-pointer' />
                        </>
                    )}
                </div>
                <div className='flex mt-4 justify-between items-center px-8 mb-8'>
                    {isLnameOpen ? (
                        <>
                            <input placeholder='Enter Lastname' value={newLname} onChange={e => setNewLname(e.target.value)} autoFocus
                             className='bg-transparent border-b border-gray-500 pl-1 outline-none' />
                            <div>
                                <button className='bg-blue-600 px-2 mr-3 rounded-2xl text-white hover:bg-blue-800 pb-0.5'>save</button>
                                <button onClick={() => setIsLnameOpen(false)} className='hover:text-red-500 duration-200'>X</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Lname</p>
                            <FontAwesomeIcon onClick={() => setIsLnameOpen(true)} icon={faPencil} title='update' className='text-gray-500 cursor-pointer' />
                        </>
                    )}
                </div>
            </div>
        ) : (
            <div className='relative flex flex-col items-center justify-center sm:pt-14 pt-24 pb-8 px-10'>
                <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsProfileOpen(false)}
                className='absolute sm:top-3 top-10 left-8 text-gray-500 text-2xl hover:text-orange-500 cursor-pointer duration-200' />
                <button onClick={() => setIsManageProfile(true)}
                className='py-2 mb-10 text-gray-600 hover:bg-gray-300 duration-200 text-center rounded-xl w-full'>
                    <FontAwesomeIcon icon={faUser} className='mr-2 ' /><span className='border-b border-gray-300'>Manage Account</span>
                </button>
                <button onClick={() => navigate('/')} className='py-1 px-4 bg-blue-600 border border-blue-600 hover:bg-transparent hover:text-blue-600 text-white duration-200 text-center rounded-3xl'>
                    <FontAwesomeIcon icon={faPowerOff} className='mr-2' />Logout
                </button>
            </div>
        )}
    </div>
  )
}

export default ManageProfile
