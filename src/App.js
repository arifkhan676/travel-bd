import { Route, Routes } from 'react-router-dom';
import './App.css';
import VisitPage from './components/VisitPage/VisitPage';
import React, { createContext, useState } from 'react';
import NotFound from './components/NotFound/NotFound';
import Navbaar from './components/Navbaar/Navbaar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Sign/Login';
import ProductPage from './components/ProductPage/ProductPage';
import CartProducts from './components/CartProducts/CartProducts';

export const contextAPI = createContext();

export const contextAPI2 = createContext();


function App() {


  const [value, setValue] = useState(5);
  const [profile, setProfile] = useState(
    {
      name: 'arif',
      img: ''
    }
  )

  return (
    <div className="App">
      <contextAPI.Provider value={[value, setValue]} >
        <contextAPI2.Provider value={[profile, setProfile]} >
          <React.Fragment>
            <Navbaar />
            <Routes>
              <Route exact path='/' element={<Home />} > </Route>
              <Route path='/VisitPage/:id' element={<VisitPage />} > </Route>
              <Route path='/login' element={<Login />} > </Route>
              <Route path='/ProductPage/:proId' element={<ProductPage />} > </Route>
              <Route path='/CartProducts/:cartId' element={<CartProducts />} > </Route>

              <Route path='*' element={<NotFound />}  >  </Route>

            </Routes>
            <Footer />
          </React.Fragment>
        </contextAPI2.Provider>
      </contextAPI.Provider>

    </div>
  );
}

export default App;
