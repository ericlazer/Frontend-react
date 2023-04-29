import React from 'react'
import Layout from '../../components/Layout'

const CalendarBoxes = [
  "NFT Mints",
  "Economic  Calendar",
  "Events",
  "ICO, IDO, Presale",
  "Major Events"
]

const Calendar = () => {

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          CalendarBoxes.map(item => (
            <div key={item}>
              <div
                className="h-[200px] lg:h-[250px] xl:h-[350px] text-white text-lg lg:text-2xl rounded-[30px] p-5 transition border border-gray-500/0 hover:border-gray-500/100 bg-zoom-hover"
                style={{
                  backgroundImage: 'linear-gradient(143.69deg, #323232 12.27%, #292929 92.01%)',
                }}
              >
                <div className="bottom-10 font-semibold absolute">{item}</div>
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Calendar