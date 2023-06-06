import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Pins from './pages/pins';
import Coins from './pages/coins';
import NFT from './pages/nft';
import Dapp from './pages/dapp';
import DeFi from './pages/defi';
import News from './pages/news';
import Dao from './pages/dao';
import Videos from './pages/videos';
import Directory from './pages/directory';
import Exchange from './pages/exchange'
import Calendar from './pages/calendar';
import Research from './pages/research';
import Learning from './pages/learning';
import CoinRanks from './pages/coins/Ranks';
import TradingCoins from './pages/coins/TradingCoins';
import Liquidation from './pages/coins/Liquidation';
import CoinCharts from './pages/coins/Charts'
import CoinSocial from './pages/coins/Social'
import CoinExchange from './pages/coins/Exchange'
import Influencer from './pages/influencer';
import CoinBreakDown from './pages/coins/CoinBreakDown'
import CoinProfile from './pages/coins/Profile'
import NFTSocial from './pages/nft/Social'
import NFTMarketplace from './pages/nft/Marketplace'
import NFTOverview from './pages/nft/Overview'
import NFTTraders from './pages/nft/TopTraders'
import NFTMint from './pages/nft/Mint'
import DeFiTVL from './pages/defi/tvl';
import DefiFee from './pages/defi/fee';
import Bridge from './pages/defi/bridge'
import Yield from './pages/defi/yield'
import DexLiquidation from './pages/defi/dex'
import DexBreakDown from './pages/defi/breakdown'

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path = "/" element ={<Navigate to = "/signup"/>} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pins" element={<Pins />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route exact path="/coins/rank" element={<CoinRanks />} />
        <Route exact path="/coins/trading" element={<TradingCoins />} />
        <Route exact path="/coins/liquidation" element={<Liquidation />} />
        <Route exact path="/coins/charts" element={<CoinCharts />} />
        <Route exact path="/coins/social" element={<CoinSocial />} />
        <Route exact path="/influencers/:influencer" element={<Influencer />} />
        <Route exact path="/coins/exchange" element={<CoinExchange />} />
        <Route exact path="/coins/breakdown" element={<CoinBreakDown />} />
        <Route exact path="/coins/:coin" element={<CoinProfile />} />
        <Route exact path="/defi" element={<DeFi />} />
        <Route exact path="/defi/tvl" element={<DeFiTVL />} />
        <Route exact path="/defi/fee" element={<DefiFee />} />
        <Route exact path="/defi/bridge" element={<Bridge />} />
        <Route exact path="/defi/yield" element={<Yield />} />
        <Route exact path="/defi/liquidation" element={<DexLiquidation />} />
        <Route exact path="/defi/breakdown" element={<DexBreakDown />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/nft/social" element={<NFTSocial />} />
        <Route path="/nft/marketplace" element={<NFTMarketplace />} />
        <Route path="/nft/overview" element={<NFTOverview />} />
        <Route path="/nft/trader" element={<NFTTraders />} />
        <Route path="/nft/mint" element={<NFTMint />} />
        <Route path="/dapp" element={<Dapp />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/news" element={<News />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </div>
  );
}

export default App;
