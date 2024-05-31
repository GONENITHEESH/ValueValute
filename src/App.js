import './App.css';
import Home from "./Home";
import Header from "./Header";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
