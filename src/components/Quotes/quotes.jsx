import React, { useContext } from "react";
import context from "../../store/context-store";
import Quote from "./Quote";
import styles from './quotes.module.css';


const Quotes = () => {

    const quotes = useContext(context).quotes; 

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