import React from "react";
import { useSelector } from "react-redux";
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = (props) => {

    const comments = useSelector(context => context.comments.comments).filter((commentObj) => commentObj.comment.quoteId === props.quoteID);

    return <div className= {styles["comments"]}>
        <ul>
            {comments && comments.map((commentObj) => {
                return <Comment key = {commentObj.id}>{commentObj.comment.comment}</Comment> 
            })}
        </ul>
    </div>
}

export default Comments;