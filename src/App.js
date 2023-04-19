import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';




function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const searchTerm = 'Harry Potter';
  
  const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => setBooks(data.items));
    }, []);
  
  
    return (
      <div className='App'>
        <Header />
        {books.map(book => (
          <div key={book.id}>
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors.join(', ')}</p>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          </div>
        ))}
        <Footer />
      </div>
    )
}

export default App;
