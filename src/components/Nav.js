import styles from '../styles/nav.module.css'
// import Search from './Search'
import {Link} from 'react-router-dom'

export default function Nav () {
    return (
        <div className={styles.Nav}>
            <h1>THE BOOK SHOP</h1>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/about'>
                <div>About</div>
            </Link>
            <Link to='/Bookshelf'>
                <div>Bookshelf</div>
            </Link>
            <Link to='/contact'>
                <div>Contact</div>
            </Link>
            <Link to='/faqs'>
                <div>FAQs</div>
            </Link>

        </div>
    )
}