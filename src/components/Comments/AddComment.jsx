import React,{useState} from "react";
import Button from "../UI/Button";
import useFirebase from '../../hooks/use-firebase';
import styles from './AddComment.module.css';

const AddComment = (props) => {
    
    const [inputComment, setInputComment] = useState("");
    const {addComment} = useFirebase();

    const postCommentHandler= (e) => {
        e.preventDefault();
        addComment({
                quoteId:props.quoteID,
                comment:inputComment
        });
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
