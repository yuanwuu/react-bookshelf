import { useState } from "react";
import styles from '../styles/search.module.css'

export default function Search(props) {
    const [searchInput, setSearchInput] = useState({
        searchTerm: ''
    })

    const handleChange = (event) => {
        setSearchInput({ ...searchInput, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        props.booksearch(searchInput.searchTerm)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            const bookResult = document.getElementById('bookResult')
            if (bookResult) {
                bookResult.scrollIntoView({ behavior: 'smooth' })
            }
        }
    };


    return (
        <div className={styles.Search} >
            <form onSubmit={handleSubmit}
                className={styles.SearchInput}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={searchInput.searchTerm}
                    name="searchTerm"
                    placeholder="Enter book name "
                    onKeyDown={handleKeyDown}
                />
            </form>

        </div>
    )

}