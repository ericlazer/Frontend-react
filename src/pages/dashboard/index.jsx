import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'

const Dashboard = () => {
  return (
    <div className='bg-slate-800 min-h-screen'>
      <div className='max-w-[1800px] m-auto p-10'>
        <div className='flex justify-between'>
          <img src={ Logo } className='sm:w-[250px] w-[150px]' />
          <div className='flex text-xl gap-20 text-white items-center'>
            <div className='bg-blue-600 py-4 rounded-xl px-8 duration-300 transition cursor-pointer ease-in-out hover:opacity-[0.8] text-sm sm:text-xl'>Ged Started</div>
          </div>
        </div>
        <div className='mt-12 bg-blue-600 border text-[20px] lg:text-[30px] text-center text-white py-4 rounded-xl px-4'>
          Best Blockchain Market Overview in the world!
        </div>
        <div className='mt-16 text-[30px] sm:text-[40px] lg:text-[60px] text-center'>
          <span className='text-white'>Analyze Blockchain Market Today</span>
          <br />
          <span className='text-white'>with <span className='text-violet-700 font-bold'>CONEXIO</span></span>
        </div>
        <div className='mt-16 flex justify-center'>
          <Link to="/app">
            <button className='text-xl text-white bg-indigo-500 px-8 py-4 rounded-xl cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard