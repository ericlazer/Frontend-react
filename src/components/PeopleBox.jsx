import React from 'react'

const PeopleBox = ({name, imgURL, role, company, companyLogo}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="relative">
        <img src={imgURL} alt={name} className="w-[65px] h-[65px]" />
        <img src={companyLogo} alt={company} className="bottom-0 right-0 absolute" />
      </div>
      <div className="flex flex-col">
        <p className="text-white text-[14px]">{name}</p>
        <p className="text-white text-[12px] opacity-[0.5] leading-[20px]">{role}</p>
        <p className="text-white text-[12px] opacity-[0.5] leading-[20px]">{company}</p>
      </div>
    </div>
  )
}

export default PeopleBox