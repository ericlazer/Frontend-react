import React from 'react'
import Layout from '../../components/Layout'

const Dapp = () => {

  return (
    <Layout>
      <div className='w-full'>
        <div className='flex items-center'>
          <input className='bg-black p-4 rounded-md w-[500px] text-white outline-0 border-0 mx-auto flex' placeholder='Search by name, type & more' />
          <div className='text-white text-[14px] font'>
            <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300'>Sign Up</button>
            <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 ml-4'>Login</button>
          </div>
        </div>  
        <div className='flex justify-between mt-10 gap-10'>
          <div className='bg-black w-[50%] flex px-8 py-16 rounded-lg'>
            <div>
            </div>
            <div className='m-auto'>
              <div className='text-[32px] text-white font-bold'>Coin Market List</div>
              <div className='text-[18px] text-white'>Get all informaion about Coins</div>
              <button className='border-2 border-white px-6 py-2 rounded-[10px] min-w-[100px] transition ease-in-out hover:bg-white hover:text-black duration-300 text-white mt-8'>Explore All</button>
            </div>
          </div>
        </div>
        <div className='mt-16'>
          <p className='text-center text-[40px] font-bold text-white'>Crypto Prices Today</p>
          <div className='m-8'>
            
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dapp