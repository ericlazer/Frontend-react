import React from 'react'
import { CoinTableHeader } from '../../config/TableHeaders';

const Table = (props) => {

  const { CoinData } = props;

  return (
    <table>
      <thead>
        <tr className='text-white'>
          { CoinTableHeader.map((header, index) => <th key={index} className={`${header === "Name" ? 'text-left' : 'text-right'} px-4 border-b border-slate-800 pb-6`}>{header}</th>) }
        </tr>
      </thead>
      <tbody>
        {
          CoinData.map((data, index) => (
            <tr key={index} className='text-white border-b border-slate-800'>
              <td className='p-6 w-[50px] px-4 text-right'>{data.id}</td>
              <td className='w-[200px] px-4'>{data.name}</td>
              <td className='w-[200px] px-4 text-right'>{data.price}</td>
              <td className='w-[100px] px-4 text-right'>{data.hourlyChange}</td>
              <td className='w-[100px] px-4 text-right'>{data.dailyChange}</td>
              <td className='w-[100px] px-4 text-right'>{data.weeklyChange}</td>
              <td className='w-[200px] px-4 text-right'>{data.marketCap}</td>
              <td className='w-[200px] px-4 text-right'>{data.volume}</td>
              <td className='w-[200px] px-4 text-right'>{data.circulatingSupply}</td>
              <td className='w-[200px] px-4 text-right'>{data.lastSevenDays}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default Table