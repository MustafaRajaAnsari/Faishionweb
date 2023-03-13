import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ShopFullWidth from './component/ShopFullWidth';
import ShopFullFiter from './component/ShopFullFiter';
import Cart from './component/Cart';
import Details from './component/Details';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Router>
    <Routes>
    <Route exact path="/" element={<Navbar/>}/>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/" element={<ShopFullWidth/>}/>
    <Route exact path="/" element={<ShopFullFiter/>}/>
    <Route exact path="/" element={<Cart/>}/>
    <Route exact path="/" element={<Details/>}/>
    </Routes>
    </Router>
    </>
  );
}

export default App;
