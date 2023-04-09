import React, {
  useState,
  useEffect,
  useCallback,
} from 'react'
import ReactPaginate from 'react-paginate'
import Layout from '../../../components/Layout'
import LineChart from '../../../components/Charts/LineChart'
import ConexioTable from '../../../components/Tables/ConexioTable'
import ProgressBar from '../../..//components/ProgressBar'
import axios from 'axios'
import { API_BASE } from "../../../config/constants"

const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];

const lineChartData1 = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset',
      data: labels.map(() => Math.floor(Math.random() * 701) + 300),
      borderWidth: 1,
      pointRadius: 0,
      borderColor: '#FF3C3C',
      backgroundColor: '#FF3C3C22',
    },
  ],
};

const filter = {
  timeChanged: [
    {
      header: '1H',
      name: 'hourlyChanged'
    },
    {
      header: '1W',
      name: 'weeklyChanged'

    },
    {
      header: '1M',
      name: 'monthlyChanged'

    },
    {
      header: '1Y',
      name: 'yearlyChanged'

    }
  ],
  showCount: [25, 50, 100]
};

// const rows: [
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ],
//     [
//       'Avalance AVAX',
//       '$58.3k',
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       <label className='text-red-300'><i className='fa fa-sort-down'/> 0.04%</label>,
//       '$5,656,087,725',
//       '$165,585,252',
//       <div>
//         <label className='block text-left text-sm'>34,025,379,637,657 VVS</label>
//         <div className='flex'>
//           <ProgressBar 
//             options={{
//               parentClasses: 'bg-stone-300',
//               childClasses: 'bg-stone-700'
//             }}
//             percent={50}
//           />
//           <label className='ml-3 text-[0.6rem]'>VVS</label>
//         </div>
//       </div>,
//       <div className='max-w-[250px] h-[1rem] m-auto'><LineChart data={lineChartData1}/></div>,
//     ]
//   ]

let columns = [
  {
    header: 'No',
    name: 'no',
    align: 'left'
  },
  {
    header: 'Coin',
    name: 'coin',
    align: 'left'
  },
  {
    header: 'Name',
    name: 'name',
    align: 'center'
  },
  {
    header: 'Price',
    name: 'price',
    align: 'right'
  },
  {
    header: 'Market Cap',
    name: 'marketcup',
    align: 'right'
  },
  {
    header: filter.timeChanged[0].header,
    name: 'timeChanged',
    align: 'left'
  }
];

const Liquidation = () => {
  const [gainerLoserOption, setGainerLoserOption] = useState('gainers');
  const [timeChangedOption, setTimeChangedOption] = useState(0);
  const [showCountOption, setShowCountOption] = useState(filter.showCount[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [tableData, setTableData] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_BASE}/coin/${gainerLoserOption}?${filter.timeChanged[timeChangedOption].name}=true&page=${currentPage}}&pageSize=${showCountOption}`);
      drawTable(response.data);
    };
    fetchData();
  }, [
    gainerLoserOption,
    timeChangedOption,
    showCountOption,
    currentPage
  ]);

  // const fetchData = useCallback(async () => {
  //   const response = await axios.get(`${API_BASE}/coin/${gainerLoserOption}?${timeChangedOption}=true&page=2&pageSize=${showCountOption}`);
  //   setTableRows(response.data);
  // }, [
  //   handleGainLoserOption,
  //   handleSelectOption
  // ]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
    
  function drawTable(data) {
    let newData = {
      columns,
      rows: [],
      totalPages: 0
    };
    if(data[gainerLoserOption].length) {
      data[gainerLoserOption].map((row, key) => {
        newData.rows.push([
          (showCountOption * currentPage) + (key + 1),
          <>
            <img src={row.imgURL} className='inline-block w-[1.5rem] h-[1.5rem] mr-3' alt='CoinIcon'/>
            { row.symbol }
          </>,
          row.name,
          row.price,
          row.marketCap,
          <label className={`text-[#${row[filter.timeChanged[timeChangedOption].name] >= 1 ? '80FF9C' : 'FF8080'}]`}>
            <i className={`fa fa-sort-${row[filter.timeChanged[timeChangedOption].name] >= 1 ? 'up' : 'down'} mr-2`}/>
            { row[filter.timeChanged[timeChangedOption].name] }
          </label>
        ]);
      });
    }
    newData.totalPages = data.totalPages;
    setTableData(newData);
  }

  function handleGainLoserOption(status) {
    setGainerLoserOption(status);
  }
  
  function handleSelectOption(event, selectType)  {
    const { value } = event.target;
    switch (selectType) {
      case 'timeChanged':
        setTimeChangedOption(value);
        console.log(filter.timeChanged[value].name);
        const columnIndex = columns.findIndex(item => item.name === 'timeChanged');
        columns[columnIndex].header = filter.timeChanged[value].header;
        break;
      case 'showCount':
        setShowCountOption(value);
        break;
      default: break;
    }
  }

  function handlePageClick({ selected: selectedPage }) {
    console.log(selectedPage);
    setCurrentPage(selectedPage);
  }

  return (
    <Layout>
      {/* Filter */}
      <div>
        <h3 className='p-5 text-white text-xl'>Liquidation</h3>
        <div className='flex w-full justify-between'>
          <div className='flex w-max h-max text-lg'>
            <button
              type='button'
              className={`mr-8 px-8 py-3 rounded ${gainerLoserOption === 'gainers' ? 'bg-blue-700' : 'bg-gradient-btn'} text-white`}
              onClick={() => handleGainLoserOption('gainers')}
            >
              <i className='mr-3 fa fa-star'/>
              Gainers
            </button>
            <button
              type='button'
              className={`mr-8 px-8 py-3 rounded ${gainerLoserOption === 'losers' ? 'bg-blue-700' : 'bg-gradient-btn'} text-white`}
              onClick={() => handleGainLoserOption('losers')}
            >
              <i className='mr-3 fa fa-arrow-down'/>
              Losers
            </button>
          </div>
          <div className=''>
            <select
              className='px-8 py-3 rounded bg-gradient-btn text-white'
              onChange={(event) => handleSelectOption(event, 'timeChanged')}
            >
              {
                filter.timeChanged.map((item, key) => {
                  return(
                    <option
                      key={key}
                      className='bg-[#313131]'
                      value={key}
                    >
                      {item.header}
                    </option>
                  )
                })
              }
            </select>
            <select
              className='ml-5 px-8 py-3 rounded bg-gradient-btn text-white'
              onChange={(event) => handleSelectOption(event, 'showCount')}
            >
              {
                filter.showCount.map((item, key) => {
                  return(
                    <option
                      key={key}
                      className='bg-[#313131]'
                      value={item}
                    >
                      {item}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
      {/* Table */}
      <div className='mt-8 overflow-x-auto overflow-y-hidden'>
        <ConexioTable tableData={tableData}/>
        <ReactPaginate
          pageCount={tableData.totalPages}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={'flex justify-end mt-8 pagination'}
          pageClassName='px-4 py-2 border border-[#212121] rounded bg-[#323232] text-white hover:brightness-125'
          previousClassName='px-4 py-2 border border-[#212121] rounded bg-[#323232] text-white hover:brightness-125'
          nextClassName='px-4 py-2 border border-[#212121] rounded bg-[#323232] text-white hover:brightness-125'
          breakClassName='mx-1 text-white'
          activeClassName={'bg-blue-700 active'}
          disabledClassName='brightness-75 hover:brightness-75 hover:cursor-not-allowed'
      />
      </div>
    </Layout>
  )
}

export default Liquidation