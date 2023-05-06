import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-[65px] text-white font-[DotBold]'>daisugi</p>
        {/* <div className='flex text-xl gap-0 sm:gap-10 text-white items-center'>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>HOW-TO</div></Link>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>CAREER</div></Link>
          <Link><div className='text-[14px] tracking-[.05em] text-gray-300 hover:text-white transition ease-in-out hidden sm:block'>ABOUT</div></Link>
          <Link to="/home"><div className='py-2 px-6 rounded-md px-8 duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Get Started</div></Link>
        </div> */}
      </div>
      <div className='mt-16 flex justify-between'>
        <div>
          <img src="/img/LandingPage_tree.png" className='rounded-lg' width={500} alt="Landing Page Tree" />
        </div>
        <div className='flex flex-col'>
          <Link to="/home">
            <button className='text-sm font-semibold text-black bg-white px-6 py-3 rounded-md cursor-pointer transition ease-in-out duration-300 hover:opacity-[0.8]' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #FFFFFF 0%, #C8C8C8 100%)'}} >GET STARTED</button>
          </Link>
        </div>
      </div>
      <div className='mt-16'>
        <img src="/img/LandingPange.png" className='m-auto rounded-lg' alt="Preview App" width={1000} />
      </div>
    </>
  )
}

export default Intro