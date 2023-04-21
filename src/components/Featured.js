import axios from "axios";
import { useState, useEffect } from "react";
// import { Carousel } from "react-bootstrap";
import styles from "../styles/featured.module.css";
import FeaturedBooksModal from "./FeaturedBooksModal";
// import FeaturedCarousel from "./FeaturedCarousel";

export default function Featured() {
  const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`https://example-data.draftbit.com/books?_limit=5`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setBooks(response.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  useEffect(() => {
    axios
      .get(`https://example-data.draftbit.com/books?_limit=50`)
      .then((response) => {
        console.log(response.data);
        const randomBooks = [];
        while (randomBooks.length < 5) {
          const book = response.data[Math.floor(Math.random() * response.data.length)];
          if (!randomBooks.includes(book)) {
            randomBooks.push(book);
          }
        }
        setBooks(randomBooks);
      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <div className={styles.Featured}>
      <h1>RANDOM BOOKS OF THE DAY</h1>
      <div className={styles.featured}>
        {/* <FeaturedCarousel book = {book} /> */}
        {books.map((book) => (
          <div key={book.id}>
            {/* <FeaturedCarousel book = {book} /> */}
            <div className={styles.card}>
              <img className={styles.bookcover} src={book.image_url} alt="#" />
              <h5>{book.title}</h5>
              <FeaturedBooksModal book={book} />
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
}
