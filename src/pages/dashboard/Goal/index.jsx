import React from 'react'

const Goal = () => {
  return (
    <div className='mt-24'>
      <p className='font-semibold text-4xl md:text-[56px] text-white ml-8 font-[DotBold]'>OUR GOAL</p>
      <div className='mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <div className='rounded-[34px] border-2 border-gray-600 p-10 hover:border-white text-white cursor-pointer transition ease-in-out'>
          <p className='text-2xl font-bold'>Education</p>
          <p className='mt-4 text-[14px]'>
            Aggregate and break down educational videos by topic and sector. Additionally, we will create beginner-friendly guides on both standard and nuanced questions translated in all languages
          </p>
          <div className='flex gap-4 mt-6 text-[14px] items-center hover:opacity-[0.5] transition ease-in-out cursor-pointer'>
            <p>Learn More</p>
            <img src="/icon/LinkIcon.png" alt="Link Icon" className='w-3 h-3' />
          </div>
        </div>
        <div className='rounded-[34px] border-2 border-gray-600 p-10 hover:border-white text-white cursor-pointer transition ease-in-out'>
          <p className='text-2xl font-bold'>Wallet Profiler</p>
          <p className='mt-4 text-[14px]'>
            Track analyze and manage your wallets. Receive alerts when a smart contract in your portfolio experience high volatility, Compare your positions to our ai prediction models to evaluate your risk
          </p>
          <div className='flex gap-4 mt-6 items-center text-[14px] hover:opacity-[0.5] transition ease-in-out cursor-pointer'>
            <p>Learn More</p>
            <img src="/icon/LinkIcon.png" alt="Link Icon" className='w-3 h-3' />
          </div>
        </div>
        <div className='rounded-[34px] border-2 border-gray-600 p-10 hover:border-white text-white cursor-pointer transition ease-in-out'>
          <p className='text-2xl font-bold'>Social Feed</p>
          <p className='mt-4 text-[14px]'>
            Live feed containing curated news, wallets & projects. See project updates, notifications, trending posts, conversations & threads. Track the top hedge funds, DAOs, and VC funds. Connect your Twitter to analyze and view your peers' positions and trades.
          </p>
          <div className='flex gap-4 mt-6 text-[14px] items-center hover:opacity-[0.5] transition ease-in-out cursor-pointer'>
            <p>Learn More</p>
            <img src="/icon/LinkIcon.png" alt="Link Icon" className='w-3 h-3' />
          </div>
        </div>
        <div className='rounded-[34px] border-2 border-gray-600 p-10 hover:border-white text-white cursor-pointer transition ease-in-out'>
          <p className='text-2xl font-bold'>Live data</p>
          <p className='mt-4 text-[14px]'>
            Discover new opportunities and trace transactions down to the most granular level. Explore indicators that use on-chain metrics to unveil fundamental analyses for more than 1000+ crypto assets. Access high performance price charts with advanced sub charting.
          </p>
          <div className='flex gap-4 mt-6 text-[14px] items-center hover:opacity-[0.5] transition ease-in-out cursor-pointer'>
            <p>Learn More</p>
            <img src="/icon/LinkIcon.png" alt="Link Icon" className='w-3 h-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Goal