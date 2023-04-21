import React from 'react'
import Featured from '../components/Featured'
import BookDisplay from '../components/BookDisplay'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Search from '../components/Search';

export default function Home() {
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
    <div>
      <Search booksearch = {getBook} />
      <Featured />
      
      <BookDisplay book={books} />
    </div>
  )
}
