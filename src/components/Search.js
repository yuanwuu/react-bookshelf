import { useState } from "react";

export default function Search(props) {
    const [searchInput, setSearchInput] = useState ({
        searchTerm: ''
    })

    const handleChange = (event) => {
        setSearchInput({...searchInput,[event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.booksearch(searchInput.searchTerm)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            onChange={handleChange}
            value={searchInput.searchTerm}
            name="searchTerm" 
            />
            <input type="submit" value='Submit Book' />
        </form>
        </>
    )

}