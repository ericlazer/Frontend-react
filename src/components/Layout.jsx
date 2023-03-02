import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom'

const Layout = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();

  const clickedCSS = 'bg-gradient-to-br from-purple-800 to-indigo-900 text-white'

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location])

  return (
    <div className="flex">
      <div className="w-[300px] bg-[#14112C] min-h-screen py-3 px-5 flex flex-col text-xl text-white gap-1">
        <p className="text-center mt-4 mb-4">CONEXIO</p>
        <Link to="/coins">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/coins' ? clickedCSS : 'text-[#747474]'}`}>
            Coins
          </div>
        </Link>
        <Link to="/nft">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/nft' ? clickedCSS : 'text-[#747474]'}`}>
            NFT
          </div>
        </Link>
        <Link to="/dapp">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/dapp' ? clickedCSS : 'text-[#747474]'}`}>
            Dapp
          </div>
        </Link>
        <Link to="/defi">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/defi' ? clickedCSS : 'text-[#747474]'}`}>
            DeFi
          </div>
        </Link>
        <Link to="/news">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/news' ? clickedCSS : 'text-[#747474]'}`}>
            News
          </div>
        </Link>
        <Link to="/insights">
          <div className={`cursor-pointer transition ease-in-out duration-300 hover:text-white hover:bg-gradient-to-br hover:from-purple-800 hover:to-indigo-900 rounded-lg p-3 ${activeMenu === '/insights' ? clickedCSS : 'text-[#747474]'}`}>
            Insights
          </div>
        </Link>
      </div>
      <div className="w-full p-8 bg-[url('assets/img/background.png')] bg-cover bg-no-repeat">
        {children}
      </div>
    </div>
  );
};

export default Layout;
