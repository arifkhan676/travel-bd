import { Route, Routes } from 'react-router-dom';
import './App.css';
import VisitPage from './components/VisitPage/VisitPage';
import React from 'react';
import NotFound from './components/NotFound/NotFound';
import Navbaar from './components/Navbaar/Navbaar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Sign/Login';
import ProductPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Navbaar />
        <Routes>
          <Route exact path='/' element={<Home />} > </Route>
          <Route path='/VisitPage/:id' element={<VisitPage />} > </Route>
          <Route path='/login' element={<Login />} > </Route>
          <Route path='/ProductPage/:proId' element={<ProductPage />} > </Route>

          <Route path='*' element={<NotFound />}  >  </Route>

        </Routes>
        <Footer />
      </React.Fragment>

    </div>
  );
}

export default App;
