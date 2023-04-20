import axios from "axios";
import { useState,useEffect } from "react";
import { Carousel } from "react-bootstrap";
import styles from '../styles/featured.module.css'
import FeaturedBooksModal from './FeaturedBooksModal'
import FeaturedCarousel from "./FeaturedCarousel";
 


export default function Featured () {

    const [books,setBooks] = useState([]);
    
    useEffect (() => {
        axios.get(`https://example-data.draftbit.com/books?_limit=6`)
        .then (response =>{
            console.log(response.data)
            setBooks(response.data)
        }).catch(error => console.log(error))
    },[])

    return (
        <>
            <h1>CLASSIC BOOK OF THE DAY</h1>
        <div className={styles.featured}>
        <Carousel />
        {books.map((book) => (
            <div key={book.id} >
                {/* <FeaturedCarousel book = {book} /> */}
                <div className= {styles.card}>
                    <img className={styles.bookcover} src={book.image_url} alt="#"/>
                    <h5>{book.title}</h5>
                <FeaturedBooksModal book={book} />
                
                </div>
            </div>
        ))}

        </div>
        </>
    )
}