import styles from "../styles/nav.module.css";
// import Search from './Search'
import { Link } from "react-router-dom";
import logo from '../assets/logo-rec.svg'

export default function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.links}>
        <Link className = {styles.a} to="/">Home</Link>
        <Link className = {styles.a} to="/about">About</Link>
        {/* <Link className = {styles.a} to="/Bookshelf">Bookshelf</Link>
        <Link className = {styles.a} to="/contact">Contact</Link>
        <Link className = {styles.a} to="/faqs">FAQs</Link> */}
      </div>
    </div>
  );
}
