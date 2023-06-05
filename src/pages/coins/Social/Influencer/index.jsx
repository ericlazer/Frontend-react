import React, { useEffect, useState } from 'react'
import Layout from '../../../../components/Layout'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { getInfluencerProfile } from '../../../../services/coin.service'
import { formatUnixTimestamp } from '../../../../utils/format'
import { Default } from "react-awesome-spinners";

const ProfileBox = ({ time, displayName, twitterName, avatarImg, link, engagement, likes }) => {

  return (
    <Link to={`https://twitter.com/anyuser/status/${link}`}>
      <div className='bg-zoom-hover border border-gray-500 p-5'>
        <div className='flex gap-5'>
          <img src={avatarImg} className='w-20 h-20 rounded-full' />
          <div className='flex flex-col gap-1'>
            <p className='text-white'>{displayName}</p>
            <p className='text-gray-500 text-[12px]'>Post by @{twitterName}</p>
            <p className='text-gray-500 text-[12px]'>{formatUnixTimestamp(time)}</p>
          </div>
        </div>
        <p className='mt-5 text-white'>Read the Article</p>
        <div className='mt-3 flex gap-5'>
          <p className='text-sm text-gray-500'>engagement: {engagement}</p>
          <p className='text-sm text-gray-500'>likes: {likes}</p>
        </div>
      </div>
    </Link>
  )
}

const Influencer = () => {

  const [isLoading, setIsLoading] = useState()
  const [profile, setProfile] = useState()
  const [stats, setStats] = useState()
  const [tweets, setTweets] = useState()
  const [rank, setRank] = useState()
  const { influencer } = useParams()

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      const data = await getInfluencerProfile(influencer)
      setProfile(data.profile)
      setTweets(data.tweets)
      setStats(data.stats)
      setRank(data.rank)
      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <Layout>
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
            <>
              <div className='flex gap-5'>
                <img src={profile?.profile_image_url} className='w-20 h-20 rounded-full' />
                <div className='flex flex-col gap-2'>
                  <p className='text-white'>{profile?.name}</p>
                  <p className='text-gray-500 text-sm'>@{profile?.screen_name}</p>
                </div>
              </div>
              <img src={profile?.profile_banner_url} className='mt-5 w-50 h-20 rounded-lg' />
              <p className='text-lg mt-10 text-white'>Location: &nbsp;&nbsp; {profile?.location}</p>
              <p className='text-lg text-white'>About: &nbsp;&nbsp; {profile?.description}</p>
              <p className='text-2xl text-white mt-5 text-gray-500'>Coin mention frequency</p>
              <div className='flex gap-3 mt-5 ml-10'>
                {
                  stats && stats.symbolsSortedByInfluence.map((item, index) => (
                    <img key={index} src={`https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/${item.toLowerCase()}.png`} />
                  ))
                }
              </div>
              <div className='flex justify-between mt-5 border border-gray-500 p-5 rounded-lg'>
                <div className='flex flex-col gap-2'>
                  <p className='text-lg text-white'>Engagement Rank</p>
                  <p className='text-gray-500 text-md'>{rank?.engagement_rank}</p>
                  <p className='text-gray-500 text-md'>{rank?.engagement} Engagements</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-lg text-white'>Follower Rank</p>
                  <p className='text-gray-500 text-md'>{rank?.engagement_rank}</p>
                  <p className='text-gray-500 text-md'>{rank?.followers} Followers</p>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-lg text-white'>Post Rank</p>
                  <p className='text-gray-500 text-md'>{rank?.volume_rank}</p>
                  <p className='text-gray-500 text-md'>{rank?.volume} Posts</p>
                </div>
              </div>
              <div className='mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                  tweets && tweets.map((item, index) => (
                    <ProfileBox
                      key={index}
                      time={item.time}
                      displayName={profile.name}
                      twitterName={profile.screen_name}
                      avatarImg={profile.profile_image_url}
                      link={item.id}
                      engagement={item.engagement}
                      likes={item.likes}
                    />
                  ))
                }
              </div>
            </>
        }
      </div>
    </Layout>
  )
}

export default Influencer