import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import FoodTypes from './Pages/Home/FoodTypes/FoodTypes';
import DisplayFood from './Pages/Home/DisplayFood/DisplayFood';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/Shared/NotFound/NotFound';
import FoodDetail from './Pages/FoodDetail/FoodDetail';
import { createContext } from 'react';
import useProducts from './hooks/useProducts';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import Order from './Pages/Order/Order';
export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useProducts();
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/foodtypes' element={<FoodTypes></FoodTypes>}>
            <Route path=':foodId' element={<DisplayFood></DisplayFood>}></Route>
          </Route>
          <Route path='fooddetail/:foodDetailId' element={<FoodDetail></FoodDetail>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
