import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const Discord = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faDiscord}
          size="2x"
          color="#5562ea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faDiscord}
          size="2x"
          color="#5562ea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
      <div className='bg-[#292929] px-5 py-2 flex gap-3 items-center rounded-lg hover:opacity-[0.8] cursor-pointer'>
        <FontAwesomeIcon
          icon={faDiscord}
          size="2x"
          color="#5562ea"
        />
        <div className='text-white text-[13px]'>
          Lorem ipsum dolor sit amet consectetur. Velit placerat risus adipiscing aliquet .
        </div>
      </div>
      <div className="fixed flex justify-between bg-[#212121] rounded-2xl items-center px-4 py-3 gap-2 bottom-5 left-2 right-2">
        <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
        <input
          placeholder="Type Your Message..."
          className="bg-transparent border-none outline-none text-white text-[12px] flex-grow"
        />
      </div>
    </div>
  )
}

export default Discord