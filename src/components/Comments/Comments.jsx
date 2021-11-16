import React,{useContext} from "react";
import context from '../../store/context-store';
import Comment from './Comment';
import styles from './Comments.module.css';

const Comments = (props) => {

    const comments = useContext(context).quotes.filter((quote) => quote.id === props.quoteID)[0].comments;

    return <div className= {styles["comments"]}>
        <ul>
            {comments && comments.map((comment) => {
                return <Comment key = {comment.id}>{comment.comment}</Comment> 
            })}
        </ul>
    </div>
}

export default Comments;