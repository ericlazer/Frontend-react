import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
      <div className='flex justify-between'>
        <img src="/img/Logo.png" className='sm:w-[250px] w-[130px]' alt="Logo" />
        <div className='flex text-xl gap-0 sm:gap-10 text-white items-center'>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>HOW-TO</div></Link>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>CAREER</div></Link>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>ABOUT</div></Link>
          <Link to="/home"><div className='py-2 px-6 rounded-md px-8 duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Ged Started</div></Link>
        </div>
      </div>
      <div className='mt-32 text-[30px] sm:text-[40px] lg:text-[62px] text-center font-bold'>
        <span className='text-white'>Analyze The Blockchain Market</span>
        <br />
        <span className='text-white'>TODAY</span>
      </div>
      <div className='mt-4 text-center text-sm sm:text-base text-gray-300'>
        Welcome to the future of blockchain! Our DAISUGI is the ultimate solution for all your Blockchain information <br /> needs.
        With our technology and user-friendly platform, you can easily manage, store information and <br/> get recent news about Blockchain.
      </div>
      <div className='mt-8 flex justify-center gap-5'>
        <Link to="/home">
          <button className='text-sm font-semibold text-black bg-white px-6 py-3 rounded-md cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #FFFFFF 0%, #C8C8C8 100%)'}} >GET STARTED</button>
        </Link>
        <Link to="/home">
          <button className='text-sm text-white font-semibold px-6 py-3 rounded-md cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, rgba(255, 255, 255, 0.17) 0%, rgba(200, 200, 200, 0.14) 100%)'}}>WATCH VIDEO</button>
        </Link>
      </div>
      <div className='mt-16'>
        <img src="/img/LandingPange.png" className='m-auto' alt="Preview App" />
      </div>
    </>
  )
}

export default Intro