import styles from '../styles/bookDisplay.module.css'

export default function BookDisplay ({book}) {
    const loaded = () => {
        console.log (book)
        return (
            <div className={styles.bookResult}
            id='bookResult' >
            <h1>{book.items[0].volumeInfo.title}</h1>
            <h2>{book.items[0].volumeInfo.authors.join(', ')}</h2>
            <img src={book.items[0].volumeInfo.imageLinks.thumbnail} />
            </div>
        )
    }

    const loading = () => {
        return <h1>No book found</h1>
    }

    return (
        book ? loaded () : loading ()
    )
}