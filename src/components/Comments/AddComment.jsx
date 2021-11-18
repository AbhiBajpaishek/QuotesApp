import React,{useState} from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import styles from './AddComment.module.css';

const AddComment = (props) => {
    
    const [inputComment, setInputComment] = useState("");
    const dispatchFn = useDispatch();

    const postCommentHandler= (e) => {
        e.preventDefault();
        dispatchFn({
            type:"ADD_COMMENT",
            comment:
            {
                quoteId:props.quoteID,
                comment:inputComment
            }
        });
        //addComment(,addCommentToContext);
        setInputComment("");
    }

    const commentChangeHandler = (e) => {
        setInputComment(e.target.value);
    }
    
    return <div className= {styles["comments"]}>
        <h4>Your Comments</h4>
        <textarea className = {styles["inputText"]} onChange = {commentChangeHandler} value = {inputComment}></textarea>
        <Button type = "submit" className = {styles["post-comment-btn"]} onClick = {postCommentHandler}>Post Comment</Button>
    </div>
}

export default AddComment;
