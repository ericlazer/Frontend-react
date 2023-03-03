import React from 'react'
import Intro from './Intro'
import KnowMore from './KnowMore'
import Goal from './Goal'
import Plan from './Plan'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div className='min-h-screen dashboard-background'>
      <div className='max-w-[1500px] m-auto pt-10 px-10'>
        <Intro />
        <KnowMore />
        <Goal />
        <Plan />
        <Subscribe />
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard