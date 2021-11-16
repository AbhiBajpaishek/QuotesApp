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
          <h3>{props.title}</h3>
          <h6 className = {styles["quote-desc"]}>{props.author}</h6>
        </div>
        <div>
          <Button onClick = {viewFullscreenHandler} > View Fullscreen</Button>
        </div>
      </Card>
  );
};

export default Quote;
