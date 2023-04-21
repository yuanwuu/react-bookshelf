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
  // const apiKey = process.env.REACT_APP_API_KEY;

  // const [books,setBooks] = useState (null);

  // const getBook = async (searchTerm) => {
  //   try {
  //     const response = await axios.get (`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResult=40`);
  //     console.log(response.data);
  //     setBooks(response.data)
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // // getBook();

  // useEffect(() =>{
  //   getBook('Mastering React Native');
  // },[])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/bookshelf' element={<Bookshelf/>}/>
      </Routes>

      {/* <Search booksearch = {getBook} />
      <Featured />
      <BookDisplay book={books} /> */}

      <Footer />
    </div>
  );
}

export default App;
