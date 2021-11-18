import React,{useContext} from "react";
import context from '../../store/context-store';
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = (props) => {

    const comments = useContext(context).comments.filter((commentObj) => commentObj.comment.quoteId === props.quoteID);

    return <div className= {styles["comments"]}>
        <ul>
            {comments && comments.map((commentObj) => {
                return <Comment key = {commentObj.id}>{commentObj.comment.comment}</Comment> 
            })}
        </ul>
    </div>
}

export default Comments;