import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/img/Logo.png'
import PreviewAppImg from '../../assets/img/dashboard.png'

const Dashboard = () => {
  return (
    <div className='min-h-screen dashboard-background'>
      <div className='max-w-[1500px] m-auto pt-10 px-10'>
        <div className='flex justify-between'>
          <img src={ Logo } className='sm:w-[250px] w-[150px]' />
          <div className='flex text-xl gap-10 text-white items-center'>
            <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out'>HOW-TO</div></Link>
            <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out'>CAREER</div></Link>
            <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out'>ABOUT</div></Link>
            <Link to="/app"><div className='py-2 px-6 rounded-md px-8 duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Ged Started</div></Link>
          </div>
        </div>
        <div className='mt-32 text-[30px] sm:text-[40px] lg:text-[62px] text-center font-bold'>
          <span className='text-white'>Analyze The Blockchain Market</span>
          <br />
          <span className='text-white'>TODAY</span>
        </div>
        <div className='mt-4 text-center text-base text-gray-300'>
          Welcome to the future of blockchain! Our CONEXIO is the ultimate solution for all your Blockchain information <br /> needs.
          With our technology and user-friendly platform, you can easily manage, store information and <br/> get recent news about Blockchain.
        </div>
        <div className='mt-8 flex justify-center gap-5'>
          <Link to="/app">
            <button className='text-sm font-semibold text-black bg-white px-6 py-3 rounded-md cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #FFFFFF 0%, #C8C8C8 100%)'}} >GET STARTED</button>
          </Link>
          <Link to="/app">
            <button className='text-sm text-white font-semibold px-6 py-3 rounded-md cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, rgba(255, 255, 255, 0.17) 0%, rgba(200, 200, 200, 0.14) 100%)'}}>WATCH VIDEO</button>
          </Link>
        </div>
        <div className='mt-16'>
          <img src={PreviewAppImg} className='m-auto' alt="Preview App Image" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard