import axios from "axios";
import { useState,useEffect } from "react";
import { Carousel } from "react-bootstrap";


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
        <h1>BOOK OF THE DAY</h1>
        <Carousel />
        {books.map((book) => (
            <div key={book.id}>
                <div>
                    <img src={book.image_url} alt="#"/>
                    <h5>{book.title}</h5>
                    <button>Add to Shelf</button>
                </div>
            </div>
        ))}

        </>
    )
}