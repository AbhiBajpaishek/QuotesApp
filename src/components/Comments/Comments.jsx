import React,{useContext} from "react";
import context from '../../store/context-store';
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = (props) => {

    const comments = useContext(context).comments.filter((comment) => comment.id === props.quoteID);

    return <div className= {styles["comments"]}>
        <ul>
            {comments && comments.map((comment) => {
                return <Comment key = {comment.id}>{comment.comment}</Comment> 
            })}
        </ul>
    </div>
}

export default Comments;