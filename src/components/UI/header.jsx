import React from "react";
import { NavLink} from 'react-router-dom';
import styles from './header.module.css';

const Header = () =>{
    return (
        <header className={styles["header"]}>
        <div className={styles["header-logo"]}>
            Great Quotes
        </div>
        <nav className={styles["header-menu"]}>
            <ul className = {styles["header-menu__items"]}>
                <NavLink to="/quotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }><li>All Quotes</li></NavLink>
                <NavLink to="/addQuotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }><li>Add New Quote</li></NavLink>
            </ul>
        </nav>
        </header>
    );
}

export default Header;