import React from "react";
import {Routes,Route, useParams,useNavigate } from "react-router";
import Button from "../UI/Button";
import AddComment from "../Comments/AddComment";
import styles from "./QuotesDetail.module.css";
import Comments from "../Comments/Comments";
import { useSelector } from "react-redux";


const QuotesDetail = () => {

  const quotes = useSelector(context => context.quotes.quotes);
  const navigation = useNavigate();
  const params = useParams();
  const quote = quotes.find((q) => q.id === params.quoteID);

  const addCommentHandler = () => {
    navigation('addComment');
  }
  return (<>
    <div className={styles["quote-detail"]}>
      <div className={styles["quote-detail__description"]}>
        <blockquote>{quote && quote.description}</blockquote>
      </div>
      <div className={styles["quote-detail__author"]}>
        <em> ~{quote && quote.author}</em>
      </div>

    </div>
    {quote && 
      <div className = {styles["quote-comments"]}>
            <Routes>
              <Route
                path="addComment"
                element={<AddComment quoteID = {quote.id}></AddComment>}
              />
              <Route
                path=""
                element={<Button onClick = {addCommentHandler} >Add a comment</Button>}
              />
            </Routes>
            <br/>
            <br/>
            <Comments quoteID = {params.quoteID} ></Comments>
      </div>
    }
      </>
  );
};

export default QuotesDetail;
