import React from 'react'
import Layout from '../../components/Layout'
import SmallChartCard from '../../components/Cards/SmallChartCard'
import AllNFTs from '../../components/NFT/AllNFTs'

const NFT = () => {

  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
        <SmallChartCard
          header="Market Captial"
          height={110}
          value="$2,176,324,184.04"
          change={3.2}
          chartData={[5, 3, 2, 4, 6, 7, 5, 3, 5, 6, 7, 5, 7, 8]}
        />
        <SmallChartCard
          header="Sales Volume (24h)"
          height={110}
          value="$73,530,923.89"
          change={-0.04}
          chartData={[7, 3, 1, 2, 5, 7, 5, 8, 9, 5, 4, 2, 5, 3]}
        />
        <SmallChartCard
          header="Total Sales (24h)"
          height={110}
          value="86,926"
          change={-2.2}
          chartData={[3, 3, 5, 2, 6, 5, 7, 4, 8, 5, 4, 2, 5, 3]}
        />
      </div>
      <div>
        <AllNFTs />
      </div>
    </Layout>
  )
}

export default NFT