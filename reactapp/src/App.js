import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from "./components/auth/Login";
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import Credential from './components/Credential';
import BankInfo from './components/BankInfo';
import MediaLocker from './components/MediaLocker';
import AdminHome from './components/AdminHome';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar/>
          <Router>
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="/signup" element={<Signup/>}/>
                      <Route path="/cre" element={<Credential/>}/>
                      <Route path="/bankinfo" element={<BankInfo/>}/>
                      <Route path="/medialocker" element={<MediaLocker/>}/>
                      <Route path="/adhome" element={<AdminHome/>}/>



                  </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
