import React,{useContext,useState} from "react";
import context from "../../store/context-store";
import Button from "../UI/Button";
import styles from './AddComment.module.css';

const AddComment = (props) => {
    
    const [inputComment, setInputComment] = useState("");
    const ctx = useContext(context);

    const postCommentHandler= (e) => {
        e.preventDefault();
        ctx.addComment(props.quoteID,inputComment);
        setInputComment("");
    }

    const commentChangeHandler = (e) => {
        setInputComment(e.target.value);
    }
    
    return <div className= {styles["comments"]}>
        <h4>Your Comments</h4>
        <textarea className = {styles["inputText"]} onChange = {commentChangeHandler} value = {inputComment}></textarea>
        <Button type = "submit" onClick = {postCommentHandler}>Post Comment</Button>
    </div>
}

export default AddComment;
