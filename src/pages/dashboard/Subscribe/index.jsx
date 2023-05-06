import React from 'react'

const Subscribe = () => {
  return (
    <div className='block lg:flex justify-between mt-32 px-0 md:px-24'>
      <div className='text-center lg:text-left'>
        <p className="text-[32px] xl:text-[56px] font-semibold leading-[60px] text-white font-[DotBold]">Subscribe to <br /> new letter</p>
        <p className="text-[14px] mt-4 text-gray-400">Get daily news, update and post about <br/> crypto and trading directly to your email</p>
      </div>
      <div className='flex flex-col gap-4 text-white w-full lg:w-[520px] mt-4 lg:mt-0'>
        <div className='flex flex-col sm:flex-row items-center mx-auto lg:mx-0 gap-4'>
          <p className='text-lg md:text-2xl font-semibold'>Name</p>
          <input placeholder='Input your Name.' className='bg-gray-900 outline-none border-2 border-gray-800 p-4 rounded-lg w-[200px] sm:w-[400px]'/>
        </div>
        <div className='flex flex-col sm:flex-row items-center mx-auto lg:mx-0 gap-4'>
          <p className='text-lg md:text-2xl font-semibold'>Email</p>
          <input placeholder='Input your Email.' className='bg-gray-900 outline-none border-2 border-gray-800 p-4 rounded-lg w-[200px] sm:w-[400px]' />
        </div>
        <div className='py-4 rounded-md duration-300 transition cursor-pointer ease-in-out text-[14px] hover:opacity-[0.8] w-[80%] sm:w-[300px] text-center mx-auto' style={{background: 'radial-gradient(100% 341.37% at 0% 24.29%, #5C1693 0%, #201DAD 100%)'}}>Get Started</div>
      </div>
    </div>
  )
}

export default Subscribe