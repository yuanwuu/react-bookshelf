// import axios from 'axios';
// import BookDisplay from './components/BookDisplay';
// import Featured from './components/Featured';
// import Search from './components/Search'
// import { useState, useEffect } from 'react';


import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
import Bookshelf from './pages/Bookshelf'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookshelf' element={<Bookshelf/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
