import React, {
  useState
} from 'react'
import Layout from '../../components/Layout'
import LineChart from '../../components/Charts/LineChart'
import ConexioTable from '../../components/Tables/ConexioTable'
import ProgressBar from '../../components/ProgressBar'
import CoinMainTable from '../../components/Tables/CoinMainTable'
import CoinMarketImg from '../../assets/img/CoinMarket.gif'
import { nearer } from 'q'

const filter = {
  menu1: [
    {
      name: 'Spot',
      selected: true
    },
    {
      name: 'Derivatives',
      selected: false
    },
    {
      name: 'DEX',
      selected: false
    },
    {
      name: 'Lending',
      selected: false
    }
  ],
  menu2: [
    {
      name: '1D',
      selected: true
    },
    {
      name: '7D',
      selected: false
    },
    {
      name: '1M',
      selected: false
    },
    {
      name: '3M',
      selected: false
    },
    {
      name: '1Y',
      selected: false
    }
  ]
};

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

const lineChartData = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset',
      data: labels.map(() => Math.floor(Math.random() * 701) + 300),
      borderWidth: 1,
      pointRadius: 0,
      borderColor: '#28FF98',
      backgroundColor: '#28FF9822',
    },
  ],
};

const Exchange = () => {
  const [cardsView, setCardsView] = useState(['origin', 'origin', 'origin', 'origin']);
  
  function changeCardView(index, status) {
    const newCardView = [...cardsView];
    newCardView[index] = status;
    setCardsView(newCardView);
  }
  
  return (
    <Layout>
      {/* Filter */}
      <div>
        <h3 className='p-5 text-white text-xl'>Exchange</h3>
        <div className='flex w-full justify-between'>
          <div className=''>
            <div className='flex w-max py-2 bg-transparent border rounded-md border-stone-700 text-sm'>
              {
                filter.menu1.map((item, key) => {
                  return (
                    <button
                      key={key}
                      type='button'
                      className={`mx-2 px-2 py-1 rounded ${item.selected ? 'bg-[#323232] text-white' : 'text-stone-500'}`}
                    >
                      {item.name}
                    </button>
                  )
                })
              }
            </div>
            <div className='flex w-max mt-2 py-2 bg-transparent border rounded-md border-stone-700 text-sm'>
              {
                filter.menu2.map((item, key) => {
                  return (
                    <button
                      key={key}
                      type='button'
                      className={`mx-2 px-2 py-1 rounded ${item.selected ? 'bg-[#323232] text-white' : 'text-stone-500'}`}
                    >
                      {item.name}
                    </button>
                  )
                })
              }
            </div>
          </div>
          <div className='flex w-max h-max text-lg'>
            <button
              type='button'
              className='mr-8 px-8 py-3 rounded bg-gradient-btn text-white'
            >
              <i className='mr-3 fa fa-star'/>
              Gainers
            </button>
            <button
              type='button'
              className='mr-8 px-8 py-3 rounded bg-gradient-btn text-white'
            >
              <i className='mr-3 fa fa-arrow-right'/>
              Losers
            </button>
            <button
              type='button'
              className='px-8 py-3 rounded bg-gradient-btn text-white'
            >
              <i className='mr-3 fa fa-table'/>
              Table View
            </button>
          </div>
        </div>
      </div>
      {/* Line Chart Cards */}
      <div className='flex w-full flex-wrap mt-14'>
        {
          cardsView.map((cardView, key) => {
            return (
              <div key={key} className='p-5 w-1/2'>
                <div className=' relative rounded-lg bg-gradient-card'>
                  <div className={`${cardView === 'detail' ? ' blur-sm' : ''}`}>
                    <div className='flex justify-between px-8 py-8'>
                      <div className='flex ml-5'>
                        <div>
                          <i className='fa fa-bitcoin px-3 py-2 bg-yellow-600 text-white text-[2rem] rotate-12 rounded-full'/>
                        </div>              
                        <div className='ml-3'>
                          <h5 className='text-white text-xl'>Bitcoins</h5>
                          <label className='text-stone-500 text-sm'>BTC</label>
                        </div>              
                      </div>
                      <div>
                        {
                          cardView === 'origin' ? <a class='text-white text-sm' onClick={() => changeCardView(key, 'detail')}><i className='fa fa-copy'/> View detail</a> : <></>
                        }
                      </div>
                    </div>
                    <div className="relative w-full pt-[25%] mt-6">
                      <div className='absolute left-0 top-0 w-full h-full'>
                        <LineChart data={lineChartData}/>
                      </div>
                    </div>
                  </div>
                  {
                    cardView === 'detail' ?
                    <div className='absolute w-full h-full top-0 left-0 pb-8 bg-[#313131d4] overflow-y-auto'>
                      <div className='text-right px-8 py-8'>
                        <a class='text-white text-sm' onClick={() => changeCardView(key, 'origin')}><i className='fa fa-copy'/> Show in table</a>
                      </div>
                      <div className='flex justify-center'>
                        <table className='w-[90%]'>
                          <tbody>
                            <tr className='w-full h-[4rem] bg-[#333333]'>
                              <td className='px-8 text-white'>Score</td>
                              <td className='px-8 text-right'><label className='px-[3rem] py-2 bg-[#1C4608] text-[#77FF36] rounded-[3rem] inline-block'>9.0</label></td>
                            </tr>
                            <tr className='w-full h-[4rem] bg-[#434343]'>
                              <td className='px-8 py-3 text-white'>Trading Value(24h)</td>
                              <td className='px-8 py-3 text-right'>
                                <label className='text-white'>$13,242,570,135</label><br/>
                                <label className='text-[#77FF36] text-[0.6rem]'>0.04%</label>
                              </td>
                            </tr>
                            <tr className='w-full h-[4rem] bg-[#333333]'>
                              <td className='px-8 py-3 text-white'>Avg Liquidity</td>
                              <td className='px-8 py-3 text-right'><label className='text-white'>864</label></td>
                            </tr>
                            <tr className='w-full h-[4rem] bg-[#434343]'>
                              <td className='px-8 py-3 text-white'>Weekly Visits</td>
                              <td className='px-8 py-3 text-right'><label className='text-white'>14,280,411</label></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div> : <></>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  )
}

export default Exchange;