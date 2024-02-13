import React, { useState } from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import pic1 from '../images/pic1.jpg'
import pic5 from '../images/pic5.png'
import pic6 from '../images/pic6.png'
import { faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Home = () => {
  const [isHome, setIsHome] = useState(true)
  const [isAbout, setIsAbout] = useState(false)
  const [isLog, setIsLog] = useState(null)
  const [isReg, setIsReg] = useState(null)
  const [isDropMenu, setIsDropMenu] = useState(false)

  const home = () => {
    setIsHome(true)
    setIsAbout(false)
  }
  const about = () => {
    setIsAbout(true)
    setIsHome(false)
  }
  const handleExit = () => {
    setIsLog(false)
    setIsReg(false)
  }
  const handleIsReg = () => {
    setIsLog(false)
    setIsReg(true)
  }
  const handleIsLog = () => {
    setIsReg(false)
    setIsLog(true)
  }

  return (
    <div>
      <img src={pic1} alt='pic1' className='absolute h-full w-full object-cover right-0' />
      {(!isLog && !isReg) && (
        <>
          <header className='z-10 flex justify-between items-center md:px-20 px-10 fixed w-full py-2'>
            <h1 className='text-blue-950 sm:text-2xl text-xl'>KJM</h1>
            <ul className='sm:flex hidden justify-between w-1/3'>
              <li onClick={home} style={{color: isHome ? 'orangered' : ''}}
              className='cursor-pointer hover:text-orange-500 duration-200'>Home</li>
              <li onClick={about} style={{color: isAbout ? 'orangered' : ''}}
              className='cursor-pointer hover:text-orange-500 duration-200'>About</li>
              <li onClick={() => setIsReg(true)}
              className='cursor-pointer border border-gray-500 text-gray-500 shadow-white shadow-sm px-2 rounded-2xl duration-200 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition ease-out'>SignUp</li>
            </ul>
            <FontAwesomeIcon icon={faBars} onClick={() => setIsDropMenu(true)}
             className='sm:hidden block cursor-pointer text-gray-700 text-lg hover:text-orange-500 duration-200 transition ease-out' />
          </header>
        
          <main className='h-screen flex justify-center items-center px-4 backdrop-blur-sm'>
            {isHome ? (
              <>
                <img src={pic6} alt='pic2' className='h-full absolute md:block hidden' />
                <div className='z-10 flex flex-col items-center bg-white rounded-3xl md:mr-60 mr-0 md:mt-4 mt-0 py-7 sm:px-10 px-5 border-2 border-blue-900 shadow-2xl shadow-gray-950'>
                  <h1 className='font-semibold sm:text-5xl text-4xl cursor-pointer text-blue-900'>Business</h1>
                  <h1 className='font-semibold sm:text-5xl text-4xl cursor-pointer text-blue-900'>Management</h1>
                  <p className='mt-6 mb-2 cursor-pointer text-gray-600'>Manage yours now</p>
                  <button onClick={() => setIsLog(true)}
                  className='bg-orange-600 text-white px-2 py-0.5 rounded-2xl border border-orange-600 hover:border-orange-500 hover:bg-transparent hover:text-orange-500 duration-500 transition ease-out'>
                    Get Started
                  </button>
                </div>
              </>
            ) : (
              <>
                <img src={pic5} alt='pic2' className='h-full absolute md:block hidden ml-40 z-20' />
                <div className='relative md:w-5/6 lg:w-2/3 w-full z-10 sm:px-8 px-5 py-8 flex justify-center flex-col bg-white sm:mt-24 mt-10 items-center rounded-3xl border-2 border-blue-900 shadow-2xl shadow-gray-950'>
                  <p className='text-lg sm:h-40 flex items-center pb-4'>
                    This was developed by Keannu Lacatango using MySql, Express, React, and Node.
                    It was made to easily know the trend of each business. You can determine whether your
                    business is slowing down or growing so that you can address it as soon as feasible.
                    If you have an assistance here, you will also be aware of who completed it and when.
                  </p>
                  <div className='absolute bottom-3 flex items-center justify-between w-40'>
                    <img src={`https://www.svgrepo.com/show/303251/mysql-logo.svg`} alt='pic' className='w-7 border border-blue-800 rounded-xl' />
                    <span className='px-1.5 pt-0.5 pb-1 bg-gray-800 text-white rounded-full'>EX</span>
                    <FontAwesomeIcon icon={faReact} className='text-2xl text-cyan-600' />
                    <FontAwesomeIcon icon={faNodeJs} className='text-2xl text-green-700' />
                  </div>
                  <div className='w-1/2 bottom-0 h-2 absolute rounded-t-3xl bg-blue-950' />
                </div>
              </>
            )}
          </main>
        </>
      )}

      {/* for small screen menu */}
      {isDropMenu && (
        <div className='z-10 absolute top-0 w-full h-screen backdrop-blur-sm sm:hidden block'>
        <div className='bg-gradient-to-b from-gray-50 to-gray-400 top-0 w-full h-1/2 border-b-2 border-gray-500 rounded-b-2xl'>
          <FontAwesomeIcon icon={faArrowLeft} onClick={() => setIsDropMenu(false)} className='absolute top-8 left-10 text-2xl text-gray-500 hover:text-orange-500 duratiton-200 cursor-pointer' />
          <ul className='flex flex-col items-center justify-center h-full px-10 pt-10'>
            <li onClick={() => {setIsHome(true);setIsDropMenu(false)}}
             className='hover:bg-gray-100 duration-500 transition ease-out w-full text-center cursor-pointer py-3 rounded-2xl mb-2'>Home</li>
            <li onClick={() => {setIsHome(false);setIsDropMenu(false)}}
             className='hover:bg-gray-200 duration-500 transition ease-out w-full text-center cursor-pointer py-3 rounded-2xl mb-2'>About</li>
            <li onClick={() => {setIsReg(true);setIsDropMenu(false)}}
             className='bg-transparent border border-orange-600 text-orange-500 mt-8 hover:bg-orange-500 hover:text-white duration-500 transition ease-out px-8 text-lg text-center cursor-pointer py-1 rounded-3xl'>SignUp</li>
          </ul>
        </div>
        </div>
      )}

      {/* for login */}
      {isLog && (
        <div className='h-screen flex justify-center items-center backdrop-blur-sm px-2'>
          <Login handleExit={handleExit} handleIsReg={handleIsReg} />
        </div>
      )}
      {/* for register */}
      {isReg && (
        <div className='h-screen flex justify-center items-center backdrop-blur-sm px-2'>
          <Register handleExit={handleExit} handleIsLog={handleIsLog} />
        </div>
      )}
    </div>
  )
}

export default Home
