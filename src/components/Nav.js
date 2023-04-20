import styles from '../styles/nav.module.css'
import Search from './Search'

export default function Nav () {
    return (
        <div className={styles.Nav}>
            <img style={{width:'50px', height:'50px'}} src='logo.svg' />
            <ul>
                <li>Shelf</li>
            </ul>
        </div>
    )
}