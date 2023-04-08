import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
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
import TopCoins from './pages/coins/TopCoins';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path = "/" element ={<Navigate to = "/signup"/>} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/coins" element={<Coins />} />
        <Route exact path="/coins/rank" element={<TopCoins />} />
        <Route path="/defi" element={<DeFi />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/dapp" element={<Dapp />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/news" element={<News />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/research" element={<Research />} />
      </Routes>
    </div>
  );
}

export default App;
