import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BookDisplay from './components/BookDisplay';
import Featured from './components/Featured';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav'
import Search from './components/Search'

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [books,setBooks] = useState (null);

  const getBook = async (searchTerm) => {
    try {
      const response = await axios.get (`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResult=40`);
      console.log(response.data);
      setBooks(response.data)
    } catch (err) {
      console.error(err);
    }
  }
  // getBook();

  useEffect(() =>{
    getBook('Mastering React Native');
  },[])

  return (
    <div className="App">
      <Nav />
      <Search booksearch = {getBook} />
      <Featured />
      <BookDisplay book={books} />
    </div>
  );
}

export default App;
