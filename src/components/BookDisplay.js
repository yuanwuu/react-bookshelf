import styles from '../styles/bookDisplay.module.css'

export default function BookDisplay ({book}) {
    const loaded = () => {
        console.log (book)
        return (
            <div className={styles.bookResult}
            id='bookResult'>
                <div>
                    <h1>{book.items[0].volumeInfo.title}</h1>
                    <h4>{book.items[0].volumeInfo.authors.join(', ')}</h4>
                    <h6>{book.items[0].volumeInfo.categories.description}</h6>
                </div>
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