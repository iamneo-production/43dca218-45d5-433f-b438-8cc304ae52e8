import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from "./components/auth/Login";
import Navbar from './components/Navbar';
import Signup from './components/auth/Signup';
import Home from './components/Home';

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
                  </Routes>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
