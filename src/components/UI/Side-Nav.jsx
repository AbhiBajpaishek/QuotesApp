import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Side-Nav.module.css';

const SideNav = (props) => {
    return <div className = {styles["side-nav"]} onClick = {props.toggleNavMenu}>
        <nav className={styles["header-menu"]}>
            <ul className = {styles["header-menu__items"]}>
               <li> <NavLink to="/quotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>All Quotes</NavLink></li>
               <li> <NavLink to="/addQuotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>Add New Quote</NavLink></li>
            </ul>

        </nav>
    </div>
}

export default SideNav;