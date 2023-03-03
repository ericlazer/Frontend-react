import React from 'react'
import LinkIcon from '../../../assets/icon/LinkIcon.png'

const Question = () => {
  return (
    <div className='flex justify-between mt-32 px-24 items-center'>
      <div>
        <p className="text-2xl font-semibold text-white">For your common question find <br /> the answer, Email us at <br/> support@conexio.com</p>
        <div className='flex gap-4 mt-6 items-center text-[14px] hover:opacity-[0.5] transition ease-in-out cursor-pointer text-white'>
          <p>Connect Support</p>
          <img src={LinkIcon} alt="Link Icon" className='w-3 h-3' />
        </div>
      </div>
      <div className='flex flex-col gap-4 text-white w-[520px]'>
        <p className='text-2xl font-semibold'>What is crypto exchange ?</p>
        <p className='text-2xl font-semibold'>How do i open an account on a conexio ?</p>
        <p className='text-2xl font-semibold'>What payment methods are available on conexio ?</p>
        <p className='text-2xl font-semibold'>Why i have to choose conexio over other ?</p>
        <p className='text-2xl font-semibold'>Type of trade i can do using conexio ?</p>
      </div>
    </div>
  )
}

export default Question