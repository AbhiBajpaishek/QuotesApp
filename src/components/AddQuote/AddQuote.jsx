import React, {useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import styles from './AddQuote.module.css';

const AddQuote = () => {
    const [quoteData,setQuoteData] = useState({quoteAuthor:"", quoteDescription:""});
    const navigate = useNavigate();
    // const ctx = useContext(context); 
    const dispathFn = useDispatch();

    const addQuoteHandler = (e) => {
        e.preventDefault();
        const quote = {
            title: quoteData.quoteDescription.length>5? quoteData.quoteDescription : "No Title",
            author: quoteData.quoteAuthor,
            description:
              quoteData.quoteDescription,
        }
        //addQuote(quote,ctx.addQuote);
        dispathFn({type:"ADD_QUOTE",quote:quote});
        navigate('../quotes');
    }

    const authorNameHandler = (e)=>{
        setQuoteData((prevState) => {
            return {quoteAuthor:e.target.value, quoteDescription: prevState.quoteDescription}
        });
    }

    const authorDescriptionHandler = (e) => {
        setQuoteData((prevState) => {
            return {quoteAuthor:prevState.quoteAuthor, quoteDescription: e.target.value}
        });
    }

    return <div className = {styles["add-quote"]}>
        <form className = {styles["add-quote__form"]} onSubmit = {addQuoteHandler}>
            <label htmlFor = "authorName"> Author </label>
            <input type = "text" id= "authorName"className = {styles["text-input"]} onBlur = {authorNameHandler}></input>
            
            <label htmlFor = "authorText"> Text </label>
            <textarea id= "authorText"className = {`${styles["text-input"]} ${styles["text-input__long"]}`} onBlur = {authorDescriptionHandler} ></textarea>

            <Button type = "button" className = {styles["add-quote__btn"]} onClick = {addQuoteHandler}>Add Quote</Button>
        </form>
    </div>
}

export default AddQuote;