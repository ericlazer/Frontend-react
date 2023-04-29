import React from 'react'
import Layout from '../../components/Layout'
import LineChart from '../../components/Charts/LineChart'

const ResearchBoxes = [
  {
    title: 'Market Reports',
    chartData: [3, 5, 2, 3, 4, 2, 6, 4, 6, 7, 0, 3, 4, 3,]
  },
  {
    title: 'Sales Reports',
    chartData: [2, 3, 6, 8, 4, 2, 5, 4, 6, 7, 0, 3, 4, 3,]
  },
  {
    title: 'Volume Reports',
    chartData: [6, 2, 1, 93, 4, 2, 6, 4, 6, 7, 0, 3, 4, 3,]
  },
]

const Research = () => {

  return (
    <Layout>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
        {
          ResearchBoxes.map((item, index) => (
            <div
              key={index}
              className='h-[200px] lg:h-[250px] xl:h-[350px] text-white text-lg lg:text-2xl rounded-[30px] p-5 transition border border-gray-500/0 hover:border-gray-500/100 bg-zoom-hover relative'
              style={{
                backgroundImage: "linear-gradient(143.69deg, #323232 12.27%, #292929 92.01%)",
              }}
            >
              <div className='absolute bottom-0 left-0 w-full'>
                <LineChart
                  data={{
                    labels: item.chartData,
                    datasets: [
                      {
                        fill: true,
                        label: "Dataset",
                        data: item.chartData,
                        borderWidth: 1,
                        pointRadius: 0,
                        borderColor: "#28FF98",
                        backgroundColor: "#28FF9822",
                      },
                    ],
                  }}
                />
              </div>
              <div className='absolute bottom-3 left-0 w-full text-center z-10'>
                {item.title}
              </div>
            </div>
          ))
        }
      </div>
    </Layout>
  )
}

export default Research