import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/menbanner.jpg';
import women_banner from './Component/Assets/women_banner.jpg';
import kids_banner from './Component/Assets/kiid_banner.jpg'
function App() {
  return (
    <>
    <div >
      <BrowserRouter>
      <Navbar/>
<Routes>
 <Route path='/'element={<Shop/>}/>
  <Route path='/mens' element={<ShopCategory banner={men_banner} category="Men"/>}/>
  <Route path='/womens' element={<ShopCategory banner={women_banner} category="Women"/>}/>
  <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kid"/>}/>
  <Route path='/Product' element={<Product/>}>
  <Route path=':ProductId' element={<Product/>}/>
  </Route>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<LoginSignup/>}/>
</Routes>
<Footer/>
      </BrowserRouter>
     
     
    </div>
    </>
  );
}

export default App;
