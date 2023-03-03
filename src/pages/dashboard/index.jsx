import React from 'react'
import Intro from './Intro'
import KnowMore from './KnowMore'
import Goal from './Goal'
import Plan from './Plan'
import Question from './Question'
import Subscribe from './Subscribe'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div className='min-h-screen dashboard-background'>
      <div className='max-w-[1500px] m-auto pt-10 px-4 md:px-10'>
        <Intro />
        <KnowMore />
        <Goal />
        <Plan />
        <Question />
        <Subscribe />
      </div>
      <div className='px-10 md:px-[100px] lg:px-[240px] bg-[#0A0A0A]'>
        <Footer />
      </div>
    </div>
  )
}

export default Dashboard