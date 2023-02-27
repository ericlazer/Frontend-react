import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex'>
      <div className='w-[300px] bg-black min-h-screen py-3 px-2 flex flex-col text-xl text-white'>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>Coins</div>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>NFT</div>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>Dapp</div>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>DeFi</div>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>News</div>
        <div className='cursor-pointer transition ease-in-out duration-300 hover:bg-gray-800 rounded-lg p-3'>Insights</div>
      </div>
      <div className="w-full p-8 bg-[url('assets/img/background.png')] bg-cover bg-no-repeat">
        {children}
      </div>
    </div>
  )
}

export default Layout;
