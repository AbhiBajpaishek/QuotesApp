import React from "react";
import Button from "../UI/Button";
import Card from "../UI/card";
import styles from "./Quote.module.css";
import {useNavigate} from 'react-router-dom';

const Quote = (props) => {
  const navigate = useNavigate();

  const viewFullscreenHandler = () => {
    navigate(`${props.id}`);
  }

  return (
      <Card className={styles.quote}>
        <div>
          <h3 className = {styles["quote-title"]}>{props.title}</h3>
          <div><h6 className = {styles["quote-author"]}>~{props.author}</h6></div>
        </div>
        <div>
          <Button onClick = {viewFullscreenHandler} > View Fullscreen</Button>
        </div>
      </Card>
  );
};

export default Quote;
