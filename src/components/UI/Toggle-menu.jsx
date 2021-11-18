import React from "react";
import styles from './Toggle-menu.module.css';

const ToggleMenu = (props) => {

    const toggleMenuHandler= () => {
        props.onClick();
    }

    return <div className = {styles["menu"]} onClick = {toggleMenuHandler}>
            <div className = {styles["icon"]}></div>
            <div className = {styles["icon"]}></div>
            <div className = {styles["icon"]}></div>
    </div>
}

export default ToggleMenu;