import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH, faMagnifyingGlass, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Styles for animation
const containerStyle = {
  maxHeight: "0",
  overflow: "hidden",
  padding: 0,
  transition: "all 0.3s ease-in-out",
};

const activeContainerStyle = {
  ...containerStyle,
  padding: "10px",
  maxHeight: "200px",
};

const linkStyle = {
  fontSize: "1.1rem",
  transition: "font-size 0.3s ease-in-out",
};

const activeLinkStyle = {
  ...linkStyle,
  fontSize: "1.5rem",
};

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [isSlidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
    document.body.classList.add('overflow-hidden');

    handleResize();

    // Add an event listener for the window 'resize' event
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const toggleSlidebar = () => {
    setIsSidebarCollapsed(!isSlidebarCollapsed);
  };
  
  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/pins", label: "Pins" },
    { path: "/coins", label: "Coins" },
    { path: "/defi", label: "DeFi" },
    { path: "/exchange", label: "Exchange" },
    { path: "/nft", label: "NFT" },
    // { path: "/dapp", label: "Dapp" },
    // { path: "/dao", label: "Dao" },
    { path: "/news", label: "News" },
    { path: "/videos", label: "Videos" },
    { path: "/directory", label: "Directory" },
    { path: "/calendar", label: "Calendar" },
    { path: "/research", label: "Research" },
  ];

  return (
    <div className="overflow-y-hidden">
      <div className='light x1 -z-[10]'></div>
      <div className='light x3 -z-[10]'></div>
      <div className='light x4 -z-[10]'></div>
      <div className='light x6 -z-[10]'></div>
      <div className='light x7 -z-[10]'></div>
      <div className='light x9 -z-[10]'></div>
      <div className="flex justify-between px-5 py-10">
        <div className="ml-10 flex gap-4 items-center">
          <img src="/img/user.png" alt="user" />
          <div className="flex flex-col">
            <span className="text-xl text-white whitespace-nowrap">
              James Mark
            </span>
            <span className="text-[#747474]">BASIC PLAN</span>
          </div>
        </div>
        <div className="flex mr-10 items-center gap-4">
          <div className="flex bg-[#212121] rounded-2xl items-center px-4 py-3 gap-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white"/>
            <input
              placeholder="Search"
              className="bg-transparent border-none outline-none text-white"
            />
          </div>
          <div className="flex gap-3 text-white cursor-pointer transition hover:bg-[#212121] px-5 py-4 rounded-2xl">
            <FontAwesomeIcon className="px-[2px] py-[1px] border-2 border-white rounded-full" icon={faEllipsisH} />
            More Options
          </div>
        </div>
      </div>
      <div className="flex overflow-auto h-[calc(100vh-100px)] relative">
        <div
          className={`flex flex-col text-xl text-white transition-all duration-500 ease-in-out rounded-r-xl
            px-${ isSlidebarCollapsed || isMobile ? 0 : 5} 
            ${(isMobile && !isSlidebarCollapsed) ? 'z-20' : ''} 
            ${isMobile && 'absolute'} 
            ${isMobile && 'bg-[#323232]'}
          `}
          style={{
            width: (isSlidebarCollapsed) ? 0 : "300px",
            opacity: (isSlidebarCollapsed) ? 0 : 1,
            height: (isMobile && !isSlidebarCollapsed) ? '100%' : 'auto',
          }}
        >
          <div className="overflow-y-auto">
            {menuItems &&
              menuItems.map(({ path, label }) => (
                <Link key={path} to={path}>
                  <div
                    className={`cursor-pointer transition ease-in-out duration-300 hover:text-white rounded-lg p-3 
                      ${ activeMenu.includes(path) ? "text-white font-semibold" : "text-[#747474]" }
                    `}
                    style={
                      activeMenu.includes(path)
                        ? activeLinkStyle
                        : linkStyle
                    }
                  >
                    {label}
                  </div>
                  <div
                    style={
                      activeMenu.includes(path)
                        ? activeContainerStyle
                        : containerStyle
                    }
                    className="text-black rounded-lg"
                  >
                    {label === "Research & Insights" ? (
                      <img src={`/img/menuImages/Research.png`} alt="Category" />
                    ) : (
                      <img src={`/img/menuImages/${label}.png`} alt="Category" />
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div
          style={{
            width:
              (isSlidebarCollapsed || isMobile)
                ? "100vw"
                : "calc(100% - 300px)",
            padding: isMobile ? '32px 16px' : '32px 64px',
            paddingBottom: '50px'
          }}
          className="h-full overflow-auto"
        >
          <div
            className={`absolute bottom-[70px] z-[100] transition-all duration-500 ${
              isSlidebarCollapsed ? "-ml-[15px]" : ( isMobile ? "ml-[200px]" :  "-ml-[80px]")
            }`}
          >
            <button   
              className="rounded-full border-2 border-white px-3 py-2 transition hover:bg-gray-600"
              onClick={toggleSlidebar}
            >
              {isSlidebarCollapsed ? (
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              ) : (
                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
              )}
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
