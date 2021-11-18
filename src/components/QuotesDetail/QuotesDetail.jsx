import React,{useContext} from "react";
import {Routes,Route, useParams,useNavigate } from "react-router";
import context from "../../store/context-store";
import Button from "../UI/Button";
import AddComment from "../Comments/AddComment";
import styles from "./QuotesDetail.module.css";
import Comments from "../Comments/Comments";


const QuotesDetail = () => {

  const quotes = useContext(context).quotes;
  const navigation = useNavigate();
  const params = useParams();
  const quote = quotes.find((q) => q.id === params.quoteID);

  const addCommentHandler = () => {
    navigation('addComment');
  }
  return (<>
    <div className={styles["quote-detail"]}>
      <div className={styles["quote-detail__description"]}>
        {quote && quote.description}
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
            Comments...
            <Comments quoteID = {params.quoteID} ></Comments>
      </div>
    }
      </>
  );
};

export default QuotesDetail;
