import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Coins from './pages/coins';
import NFT from './pages/nft';
import Dapp from './pages/dapp';
import DeFi from './pages/defi';
import News from './pages/news';
import Insights from './pages/insights';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path = "/" element ={<Navigate to = "/signup"/>} /> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/dapp" element={<Dapp />} />
        <Route path="/defi" element={<DeFi />} />
        <Route path="/news" element={<News />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </div>
  );
}

export default App;
