import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex justify-center gap-[200px] mt-24'>
      <div>
        <p className="text-[64px] font-semibold leading-[60px] text-white">Subscribe to <br /> new letter</p>
        <p className="text-[14px] mt-4 text-gray-400">Get daily news, update and post about <br/> crypto and trading directly to your email</p>
      </div>
      <div className='flex flex-col gap-4 text-white'>
        <p className='text-2xl font-semibold'>Name</p>
        <input placeholder='Please input your Name.' className='bg-gray-900 outline-none border-2 border-gray-800 p-4 rounded-lg w-[400px]'/>
        <p className='text-2xl font-semibold'>Email</p>
        <input placeholder='Please input your Email.' className='bg-gray-900 outline-none border-2 border-gray-800 p-4 rounded-lg w-[400px]' />
        <div className='py-4 rounded-md duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8] w-[300px] text-center' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Ged Started</div>
      </div>
    </div>
  )
}

export default Subscribe