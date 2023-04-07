import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'
import { SearchCircleIcon } from "@heroicons/react/outline";
import UserPNG from '../assets/img/user.png'

// Styles for animation
const containerStyle = {
  maxHeight: '0',
  overflow: 'hidden',
  padding: 0,
  transition: 'all 0.3s ease-in-out',
};

const activeContainerStyle = {
  ...containerStyle,
  padding: '20px',
  maxHeight: '200px',
};

const linkStyle = {
  fontSize: '1.1rem',
  transition: 'font-size 0.3s ease-in-out',
};

const activeLinkStyle = {
  ...linkStyle,
  fontSize: '1.5rem',
};

const Layout = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location])

  const menuItems = [
    { path: '/home', label: 'Home' },
    { path: '/coins', label: 'Coins' },
    { path: '/defi', label: 'DeFi' },
    { path: '/exchange', label: 'Exchange' },
    { path: '/nft', label: 'NFT' },
    { path: '/dapp', label: 'Dapps' },
    { path: '/dao', label: 'Dao' },
    { path: '/news', label: 'News' },
    { path: '/videos', label: 'Videos' },
    { path: '/directory', label: 'Directory' },
    { path: '/calender', label: 'Calender' },
    { path: '/research', label: 'Research & Insights' },
  ];
  
  return (
    <div className="bg-gradient-image">
      <div className="flex justify-between px-5 py-10">
        <div className="ml-10 flex gap-4 items-center">
          <img src={UserPNG} />
          <div className="flex flex-col">
            <span className="text-xl text-white whitespace-nowrap">James Mark</span>
            <span className="text-[#747474]">BASIC PLAN</span>
          </div>
        </div>
        <div className="flex mr-10 items-center gap-4">
          <div className="flex bg-[#212121] rounded-2xl items-center px-4 py-3 gap-2">
            <SearchCircleIcon className="text-white w-7" />
            <input placeholder="Search" className="bg-transparent border-none outline-none text-white" />
          </div>
          <div className="flex gap-3 text-white cursor-pointer transition hover:bg-[#212121] px-5 py-4 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            More Options
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="min-w-[300px] px-5 flex flex-col text-xl text-white gap-1" style={{ minHeight: "calc(100vh - 136px)" }}>
          {menuItems.map(({ path, label }) => (
            <Link key={path} to={path}>
              <div
                className={`cursor-pointer transition ease-in-out duration-300 hover:text-white rounded-lg p-3 ${
                  activeMenu === path ? 'text-white font-semibold' : "text-[#747474]"
                }`}
                style={activeMenu === path ? activeLinkStyle : linkStyle}
              >
                {label}
              </div>
              <div
                style={activeMenu === path ? activeContainerStyle : containerStyle}
                className="w-[200px] bg-white text-black rounded-lg"
              >
                {label} content
              </div>
            </Link>
          ))}
        </div>
        <div style={{ width: "calc(100% - 300px)" }} className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
