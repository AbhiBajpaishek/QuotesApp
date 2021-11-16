import React from "react";
import styles from './Comment.module.css';

const Comment = (props) => {
    return <li className = {styles["comment"]}>
        {props.children}
        <hr/>
    </li>
}

export default Comment;