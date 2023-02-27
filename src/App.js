import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path = "/" element ={<Navigate to = "/signup"/>} /> */}
        <Route path = "/" element = {<Dashboard />} />
        <Route path = "/signin" element = {<SignIn/>} />
        <Route path = "/signup" element = {<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
