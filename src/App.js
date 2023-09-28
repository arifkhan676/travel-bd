import { Route, Routes } from 'react-router-dom';
import './App.css';
import Maincomp from './components/Maincomp/Maincomp';
import VisitPage from './components/VisitPage/VisitPage';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>

        <Routes>
          <Route exact path='/' element={<Maincomp />} > </Route>
          <Route path='/VisitPage' element={<VisitPage />} > </Route>

        </Routes>
      </React.Fragment>

    </div>
  );
}

export default App;
