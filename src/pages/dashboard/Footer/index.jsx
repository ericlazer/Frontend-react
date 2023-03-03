import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pb-8 mt-16'>
      <div className='text-4xl font-semibold text-white pt-12'>CONEXIO</div>
      <div className='flex gap-24 mt-12'>
        <div className='flex flex-col gap-4'>
          <p className='text-gray-400'>Quick Links</p>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Home</p></Link>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Blog</p></Link>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Pricing</p></Link>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Help Center</p></Link>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-gray-400'>Company</p>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Career</p></Link>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>About</p></Link>
          <Link><p className='text-white hover:opacity-[0.4] transition ease-in-out'>Join us</p></Link>
        </div>
      </div>
      <div className='mt-12 text-center text-white'>
        Copyright @CONEXIO 2023
      </div>
    </div>
  )
}

export default Footer