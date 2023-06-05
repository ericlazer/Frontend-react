import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getNFTFeeds } from "../../../../services/nft.service";
import { formatUnixTimestamp } from "../../../../utils/format";
import { Default } from "react-awesome-spinners";

const FeedBox = ({ displayName, twitterName, time, avatarImg, bannerImg, title, description, link, socialSocre }) => {
  return (
    <Link to={link}>
      <div className='bg-zoom-hover border border-gray-500 p-5 rounded-lg h-[600px] relative'>
        <div className='flex gap-5'>
          <img src={avatarImg} className='w-20 h-20 rounded-full' />
          <div className='flex flex-col gap-1'>
            <span className='text-white'>{displayName}</span>
            <span className='text-gray-500 text-[12px]'>Post by @{twitterName}</span>
            <span className='text-gray-500 text-[12px]'>{formatUnixTimestamp(time)}</span>
          </div>
        </div>
        <p className='mt-5 text-white text-lg'>{title}</p>
        <span className='mt-5 text-gray-500'>{description}</span>
        <img src={bannerImg} className="h-[200px] w-full mt-5" />
        <div className='mt-3 flex absolute bottom-2'>
          <p className='text-sm text-gray-500'>Score: {socialSocre}</p>
        </div>
      </div>
    </Link>
  )
}

const Feeds = () => {
  const [feed, setFeed] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getNFTFeeds();
      setFeed(data);
      setIsLoading(false);
    };

    getData()
  }, []);

  return (
    <div
      className={`${isLoading ? "flex justify-center items-center" : ""} mt-5`}
      style={{ minHeight: "calc(100vh - 15rem)" }}
    >
      {isLoading ? <Default color="#a1a1a1" /> : <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          feed && feed.map((item, index) => (
            <FeedBox
              key={index}
              displayName={item.display_name}
              twitterName={item.twitter_screen_name}
              time={item.time}
              avatarImg={item.profile_image}
              bannerImg={item.image}
              title={item.title}
              description={item.description}
              link={item.url}
              socialSocre={item.social_score}
            />
          ))
        }
      </div>}
    </div>
  );
};

export default Feeds;
