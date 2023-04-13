import React from "react";
import { Link } from "react-router-dom";
// import socketIOClient from "socket.io-client";
import Layout from "../../components/Layout";
// import { API_URL } from "../../config/constants";

// const socket = socketIOClient(API_URL);

const DeFiTVL = () => {
  // const [coinData, setCoinData] = useState([]);
  // const [tableNumber, setTableNumber] = useState(0);
  // const [pageNum, setPageNum] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [startNum, setStartNum] = useState(0);

  // useEffect(() => {
    // setIsLoading(true);
    // socket.on('TotalCoinInfo', async (data) => {
    //   if (data.coinData) {
    //     setCoinData(data.coinData);
    //     setIsLoading(false);
    //   }
    //   setStartNum(data.startNum)
    // })
    // console.log("err")
    // // Remove the listener on unmount to prevent memory leaks
    // return () => {
    //   socket.off('TotalCoinInfo')
    // };
  // }, []);

  // useEffect(() => {
    // if (startNum !== pageNum) {
    //   setIsLoading(true)
    // }
    // socket.emit('NextCoinInfo', pageNum);
  // }, [coinData]);

  // const getNextCoins = () => {
  //   setIsLoading(true);
  //   let temp = pageNum;
  //   temp += 50;
  //   setPageNum(temp);
  // };

  // const getPrevCoins = () => {
  //   setIsLoading(true);
  //   let temp = pageNum;
  //   temp -= 50;
  //   if (temp < 0) temp = 0;
  //   setPageNum(temp);
  // };

  const coinBoxes = [
    { label: "Overview TVL", name:"TVL", link: "/defi/tvl" },
    { label: "Fees & Revenue", name:"Fee", link: "/defi/fee" },
    { label: "Yields", name:"Yield", link: "/defi/yield" },
    { label: "Bridge Overview", name:"Bridge", link: "/defi/bridge" },
    { label: "Dex Liquidations", name:"Dex liquidation", link: "/defi/dex" },
    { label: "Dex Overview", name:"Dex overview", link: "/defi/dexbreakdown" },
  ];

  return (
    <Layout>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {
          coinBoxes.map(item => (
            <Link key={item.label} to={item.link}>
              <div
                className="h-[200px] lg:h-[250px] xl:h-[350px] text-white text-lg lg:text-2xl rounded-[30px] p-5 transition border border-gray-500/0 hover:border-gray-500/100 bg-zoom-hover"
                style={{
                  backgroundImage: `url('/img/DefiImages/${item.name}.png')`,
                }}
              >
                <div className="bottom-10 font-semibold absolute">{item.label}</div>
              </div>
            </Link>
          ))
        }
      </div>
    </Layout>
  );
};

export default DeFiTVL;
