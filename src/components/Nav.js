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
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Bookshelf">Bookshelf</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
    </div>
  );
}
