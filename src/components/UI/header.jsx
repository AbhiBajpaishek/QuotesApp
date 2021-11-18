import React,{useState} from "react";
import { NavLink} from 'react-router-dom';
import styles from './header.module.css';
import SideNav from "./Side-Nav";
import ToggleMenu from "./Toggle-menu";

const Header = () =>{

    const [isSideNavVisible, setIsSideNavVisible] = useState(false);
    const toggleMenuHander= () => {
        setIsSideNavVisible((prevState) => !prevState);
    }

    return (
        <header className={styles["header"]}>
        {isSideNavVisible && <SideNav toggleNavMenu = {toggleMenuHander}/> }
        <div className={styles["header-logo"]}>
            Great Quotes
        </div>
        <ToggleMenu onClick = {toggleMenuHander}></ToggleMenu>
        <nav className={styles["header-menu"]}>
            <ul className = {styles["header-menu__items"]}>
                <li><NavLink to="/quotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>All Quotes</NavLink></li>
                <li><NavLink to="/addQuotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>Add New Quote</NavLink></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;