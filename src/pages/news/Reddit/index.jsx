import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatUnixTimestamp } from "../../../utils/format";
import { getRedditNews } from "../../../services/news.service";
import { Default } from "react-awesome-spinners";

const RedditBox = ({ time, title, link, bannerImg, socialSocre }) => {
  return (
    <Link to={link} onClick={(event) => {
      event.preventDefault();
      window.open(`${link}`);
    }}>
      <div className='bg-zoom-hover border border-gray-500 p-5 rounded-lg h-[450px] relative'>
        <div className='flex gap-5'>
          <div className='flex flex-col gap-1'>
            <span className='text-gray-500 text-[12px]'>{formatUnixTimestamp(time)}</span>
          </div>
        </div>
        <p className='mt-5 text-white text-lg'>{title}</p>
        <img src={bannerImg} className="h-[200px] w-full mt-5" />
        <div className='mt-3 flex absolute bottom-2'>
          <p className='text-sm text-gray-500'>Score: {socialSocre}</p>
        </div>
      </div>
    </Link>
  )
}

const Reddit = () => {

  const [redditNews, setRedditNews] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getRedditNews();
      setRedditNews(data);
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
          redditNews && redditNews.map((item, index) => (
            <RedditBox
              key={index}
              time={item.time}
              bannerImg={item.link}
              title={item.title}
              link={item.url}
              socialSocre={item.social_score}
            />
          ))
        }
      </div>}
    </div>
  );
}

export default Reddit