import React from "react";
import { useSelector } from "react-redux";
import Quote from "./Quote";
import styles from './quotes.module.css';


const Quotes = () => {

    const quotes = useSelector(context => context.quotes);
    return (<>
            <ul>
                {
                quotes.map((quote)=>{
                    return <li className={styles["quotes"]} key = {quote.id} ><Quote id = {quote.id} title={quote.title} description = {quote.description} author = {quote.author} ></Quote></li>;
                })
                }
            </ul>
          
            </>
    );
}

export default Quotes;