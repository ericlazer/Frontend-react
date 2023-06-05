import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { getInfluencers } from '../../services/coin.service';
import { Default } from "react-awesome-spinners";

const filter = {
  timeRange: [
    "1d", "1w", "1m", "3m", "6m", "1y", "2y", "all",
  ],
};

const InfluencerBox = ({followers, engagement, twitterName, displayName, following, profileImg, bannerImg}) => {
  return (
    <Link to={`/influencers/${twitterName}`}>
      <div className='border border-gray-500 rounded-lg bg-zoom-hover cursor-pointer'>
        <div>
          <img src={bannerImg} className='w-full h-[100px]' />
          <img src={profileImg} className='w-20 h-20 rounded-full absolute ml-10 -mt-10' />
        </div>
        <div className='mt-10 text-white p-5'>
          <p>{displayName} <span className='text-gray-400'>(@{twitterName})</span></p>
          <p className='mt-2 text-sm text-gray-400'>Followers: {followers}</p>
          <p className='text-sm text-gray-400'>Following: {following}</p>
          <p className='text-sm text-gray-400'>Engagement: {engagement}</p>
        </div>
      </div>
    </Link>
  )
}

const Influencers = () => {

  const [timeRange, setTimeRange] = useState(filter.timeRange[0]);
  const [influencers, setInfluencers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const handleSelectOption = (event, selectType) => {
    const { value } = event.target;
    switch (selectType) {
      case "timeRange":
        setTimeRange(value);
        break;
      default:
        break;
    }
  };

  useEffect(() => {

    const getData = async () => {
      setIsLoading(true);
      const data = await getInfluencers(timeRange)
      setInfluencers(data);
      setIsLoading(false);
    }

    getData()
  }, [timeRange])

  return (
    <div>
      <div className="flex justify-end mr-5">
        <select
          className="ml-5 px-8 py-3 rounded bg-gradient-btn text-white"
          onChange={(event) => handleSelectOption(event, "timeRange")}
        >
          {filter.timeRange.map((item, key) => {
            return (
              <option key={key} className="bg-[#313131]" value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div
        className={`${
          isLoading ? 'flex justify-center items-center' : ''
        } mt-5`}
        style={{ minHeight: 'calc(100vh - 15rem)' }}
      >
        {
          isLoading ?
            <Default color="#a1a1a1" />
            :
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
              {
                influencers && influencers.map((item, index) => (
                  <InfluencerBox
                    key={index}
                    followers={item.followers}
                    following={item.following}
                    engagement={item.engagement}
                    twitterName={item.twitter_screen_name}
                    displayName={item.display_name}
                    profileImg={item.profile_image}
                    bannerImg={item.banner_image}
                  />
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default Influencers