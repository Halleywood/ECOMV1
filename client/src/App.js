import './App.css';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import ProductScreen from './components/ProductScreen';
import HomeScreen from './components/HomeScreen';
import CartScreen from './components/CartScreen';
import Necklaces from './components/Necklaces';
import Earrings from './components/Earrings';
import SubHeader from './components/SubHeader';
import Rings from './components/Rings';
import Custom from './components/Custom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const updateCart = (item) => {
    setCartItems([...cartItems, item])
  }
  const [cartItems, setCartItems] = useState([])


  return (
    <div>
      {/* {JSON.stringify(cartItems)} */}
      <Header />
      <SubHeader />
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/necklaces' element={<Necklaces />} />
          <Route path='/earrings' element={<Earrings />} />
          <Route path='/rings' element={<Rings />} />
          <Route path='/custom' element={<Custom />} />
          <Route path='/product/:id' element={<ProductScreen cartItems={cartItems} updateCart={updateCart} />} />
          <Route path='/cart' element={<CartScreen cartItems={cartItems} updateCart={updateCart} />} />
          <Route path='/checkout' />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
