import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink} from 'react-router-dom';
import styles from './header.module.css';
import SideNav from "./Side-Nav";
import ToggleMenu from "./Toggle-menu";
import { userActions } from "../../store/userSlice";
import Button from "./Button";

const Header = () =>{

    const [isSideNavVisible, setIsSideNavVisible] = useState(false);
    const userCtx = useSelector(ctx => ctx.users);
    const isLoggedIn = userCtx.token;
    const dispatchFn = useDispatch();

    const toggleMenuHander= () => {
        setIsSideNavVisible((prevState) => !prevState);
    }

    const logOutHandler = () => {
        dispatchFn(userActions.logout());
    }

    return (
        <header className={styles["header"]}>
        {isSideNavVisible && <SideNav toggleNavMenu = {toggleMenuHander}/> }
        <div className={styles["header-logo"]}>
            Great Quotes
        </div>
        <ToggleMenu onClick = {toggleMenuHander}></ToggleMenu>
        {isLoggedIn &&
        <nav className={styles["header-menu"]}>
            <ul className = {styles["header-menu__items"]}>
                <li><NavLink to="/quotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>All Quotes</NavLink></li>
                <li><NavLink to="/addQuotes" className = { navData => navData.isActive ? styles["active-link"] : styles["inactive-link"] }>Add New Quote</NavLink></li>
                <li><Button type="button" className = { styles["log-out__btn"] } onClick = {logOutHandler} >LogOut</Button></li>
            </ul>
        </nav>}
        </header>
    );
}

export default Header;