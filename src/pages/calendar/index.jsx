import React from 'react'
import Layout from '../../components/Layout'
import XBox from '../../components/XBox'

const Calendar = () => {

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10">
        <XBox isBackground={true} header="NFT Mints" imageURL="/img/calendar/nftmints.png">

        </XBox>
        <XBox isBackground={true} header="Economic Calendar" imageURL="/img/calendar/economic.png">

        </XBox>
        <XBox isBackground={true} header="Events" imageURL="/img/calendar/events.png">

        </XBox>
        <XBox isBackground={true} header="ICO, IDO, Presale" imageURL="/img/calendar/ico_ido.png">

        </XBox>
        <XBox isBackground={true} header="Major Events" imageURL="/img/calendar/majorevents.png">

        </XBox>
      </div>
    </Layout>
  )
}

export default Calendar