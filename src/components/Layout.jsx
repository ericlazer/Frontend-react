import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faMagnifyingGlass,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faRedditAlien,
  faDiscord,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import Twitter from "./SocialBar/Twitter";
import Reddit from "./SocialBar/Reddit";
import Discord from "./SocialBar/Discord";
import Telegram from "./SocialBar/Telegram";

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
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSocialSlidebarCollapsed, setIsSocialSlideBarCollapsed] =
    useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState("");
  const leftBarRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(location.pathname);
    preventBodyScroll();
    handleResize();
    addEventListeners();

    return removeEventListeners;
  }, [location]);

  useEffect(() => {
    handleResize();
  }, [isMobile, isSidebarCollapsed]);

  // stop scroll
  const preventBodyScroll = () => {
    document.body.classList.add("overflow-hidden");
  };

  // get event for mobile device
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // add when component mount
  const addEventListeners = () => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
  };

  // remove when component unmount
  const removeEventListeners = () => {
    document.body.classList.remove("overflow-hidden");
    window.removeEventListener("resize", handleResize);
    document.removeEventListener("mousedown", handleClickOutside);
  };

  // when we click outside of sidebar
  const handleClickOutside = () => {
    if (isMobile && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
    if (!isSocialSlidebarCollapsed) {
      setIsSocialSlideBarCollapsed(true);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const handleSocialIconClick = (social) => (e) => {
    e.preventDefault();
    setIsSocialSlideBarCollapsed(!isSocialSlidebarCollapsed);
    setSelectedSocial(social);
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
    { path: "/learning", label: "Learning" },
    { path: "/research", label: "Research" },
  ];

  const SocialData = [
    { category: "twitter", component: <Twitter /> },
    { category: "reddit", component: <Reddit /> },
    { category: "discord", component: <Discord /> },
    { category: "telegram", component: <Telegram /> },
  ];

  return (
    <div className="overflow-y-hidden justify-between flex flex-col h-screen">
      <div
        className={`fixed inset-0 transition-opacity duration-300 ${
          (isMobile && !isSidebarCollapsed) || !isSocialSlidebarCollapsed
            ? "bg-[rgba(0,0,0,0.5)] backdrop-blur-[5px]"
            : "bg-opacity-0 pointer-events-none" } 
          ${isSocialSlidebarCollapsed ? "z-20" : "z-40"}
        `}
        onClick={handleClickOutside}
      ></div>

      <div className="light x1 -z-[10]"></div>
      <div className="light x3 -z-[10]"></div>
      <div className="light x4 -z-[10]"></div>
      <div className="light x6 -z-[10]"></div>
      <div className="light x7 -z-[10]"></div>
      <div className="light x9 -z-[10]"></div>
      <div className="flex justify-between px-5 py-10">
        <div className="ml-10 flex gap-4 items-center">
          <img
            src="/img/elon.jpg"
            alt="Elon Musk"
            width={54}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-xl text-white whitespace-nowrap">
              Elon Musk
            </span>
            <span className="text-[#747474]">BASIC PLAN</span>
          </div>
        </div>
        <div className="mr-10 items-center gap-4 hidden md:flex">
          <div className="flex bg-[#212121] rounded-2xl items-center px-4 py-3 gap-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white" />
            <input
              placeholder="Search"
              className="bg-transparent border-none outline-none text-white"
            />
          </div>
          <div className="flex gap-3 text-white cursor-pointer transition hover:bg-[#212121] px-5 py-4 rounded-2xl">
            <FontAwesomeIcon
              className="px-[2px] py-[1px] border-2 border-white rounded-full"
              icon={faEllipsisH}
            />
            More Options
          </div>
        </div>
      </div>
      <div className="flex h-[calc(100vh-100px)]">
        <div
          ref={leftBarRef}
          className={`flex flex-col text-xl text-white transition-all duration-500 ease-in-out rounded-r-xl 
            px-${isSidebarCollapsed || isMobile ? 0 : 5} 
            ${isMobile && !isSidebarCollapsed ? "z-20" : ""}   
            ${isMobile && "absolute"} 
            ${isMobile && "bg-[#323232]"}
          `}
          style={{
            width: isSidebarCollapsed ? 0 : "300px",
            opacity: isSidebarCollapsed ? 0 : 1,
            height: isMobile && !isSidebarCollapsed ? "80%" : "auto",
          }}
        >
          <div className="overflow-y-auto">
            {menuItems &&
              menuItems.map(({ path, label }) => (
                <Link key={path} to={path}>
                  <div
                    className={`cursor-pointer transition ease-in-out duration-300 hover:text-white rounded-lg p-3 
                      ${
                        activeMenu.includes(path)
                          ? "text-white font-semibold"
                          : "text-[#747474]"
                      }
                    `}
                    style={
                      activeMenu.includes(path) ? activeLinkStyle : linkStyle
                    }
                  >
                    {label}
                  </div>
                  <div
                    className={`${ label === "Research" && "mb-[50px]" } text-black rounded-lg `}
                    style={
                      activeMenu.includes(path)
                        ? activeContainerStyle
                        : containerStyle
                    }
                  >
                    {label === "Research & Insights" ? (
                      <img
                        src={`/img/menuImages/Research.png`}
                        alt="Category"
                      />
                    ) : (
                      <img
                        src={`/img/menuImages/${label}.png`}
                        alt="Category"
                      />
                    )}
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div
          style={{
            width:
              isSidebarCollapsed || isMobile ? "100vw" : "calc(100% - 300px)",
            paddingLeft: isMobile ? "16px" : "64px",
            paddingRight: isMobile ? "16px" : "64px",
            paddingTop: "32px",
            paddingBottom: "100px",
          }}
          className="h-full overflow-auto"
        >
          <div
            className={`absolute bottom-[70px] z-30 transition-all duration-500 ${
              isSidebarCollapsed
                ? "-ml-[15px]"
                : isMobile
                ? "ml-[200px]"
                : "-ml-[80px]"
            }`}
          >
            <button
              className="rounded-full border-2 border-white px-3 py-2 transition hover:bg-gray-600"
              onClick={toggleSidebar}
            >
              {isSidebarCollapsed ? (
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              ) : (
                <FontAwesomeIcon icon={faArrowLeft} className="text-white" />
              )}
            </button>
          </div>
          {children}
          <div className="fixed bottom-0 right-0 flex justify-center gap-6 py-4 px-4 backdrop-blur-md">
            <FontAwesomeIcon
              icon={faTwitter}
              size="2x"
              color="#1c9cea"
              className="bg-zoom-hover cursor-pointer"
              onClick={handleSocialIconClick("twitter")}
            />
            <FontAwesomeIcon
              icon={faRedditAlien}
              size="2x"
              color="#f74300"
              className="bg-zoom-hover cursor-pointer"
              onClick={handleSocialIconClick("reddit")}
            />
            <FontAwesomeIcon
              icon={faDiscord}
              size="2x"
              color="#5562ea"
              className="bg-zoom-hover cursor-pointer"
              onClick={handleSocialIconClick("discord")}
            />
            <FontAwesomeIcon
              icon={faTelegramPlane}
              size="2x"
              color="#0084c6"
              className="bg-zoom-hover cursor-pointer"
              onClick={handleSocialIconClick("telegram")}
            />
          </div>
        </div>
        <div
          className="fixed top-0 right-0 bottom-0 w-[300px] p-4 bg-[#323232] z-50 transition transition-all ease-in-out"
          style={{
            transform: !isSocialSlidebarCollapsed
              ? "translateX(0)"
              : "translateX(100%)",
          }}
        >
          {SocialData.map((item, index) => {
            return (
              <div key={index}>
                {item.category === selectedSocial && item.component}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
