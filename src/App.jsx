import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
const App = () => {
  return  <Router>
  <div className="App">
   
  <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/cart' element={< Cart />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/Register' element={< Register />}></Route>
        <Route exact path='/ProductList' element={< ProductList />}></Route>


 </Routes>
 </div>
</Router>;
};

export default App;