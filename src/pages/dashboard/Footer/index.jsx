import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <p className='text-4xl font-semibold text-white mt-24 mb-12'>CONEXIO</p>
      <div className='flex gap-24'>
        <div className='flex flex-col gap-4'>
          <p className='text-gray-400'>Quick Links</p>
          <Link><p className='text-white'>Home</p></Link>
          <Link><p className='text-white'>Blog</p></Link>
          <Link><p className='text-white'>Pricing</p></Link>
          <Link><p className='text-white'>Help Center</p></Link>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-gray-400'>Company</p>
          <Link><p className='text-white'>Career</p></Link>
          <Link><p className='text-white'>About</p></Link>
          <Link><p className='text-white'>Join us</p></Link>
        </div>
      </div>
      <div className='mt-6 text-center text-white'>
        Copyright @CONEXIO 2023
      </div>
    </div>
  )
}

export default Footer