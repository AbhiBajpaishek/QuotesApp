import {  useCallback } from "react";

const URL = "https://quotes-app-b30d6-default-rtdb.firebaseio.com/";

const useFirebase = () => {

    const getQuotes = useCallback(async () => {
        const response = await fetch(`${URL}quotes.json`);
        const quotes = await response.json();
        const newQuotes = [];
        quotes && Object.keys(quotes).forEach((key) => {
            newQuotes.push({
                id:key,
                title:quotes[key].title,
                author:quotes[key].author,
                description:quotes[key].description 
            });
        });
        return newQuotes;
    },[]);
    
    const addQuote = (quote) => {
        fetch(`${URL}quotes.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(quote),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Response of addQuote: ", data);
       });
    }

    const getComments = useCallback(async () => {

        const response = await fetch(`${URL}comments.json`);
        const comments = await response.json();
        const newComments = [];
        comments && Object.keys(comments).forEach((key) => {
            newComments.push({
                id:comments[key].id,
                comment:comments[key].comment
            });
        });
        return newComments;
    },[]);

    const addComment = (comment) => {
        fetch(`${URL}comments.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(comment),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Response of addQuote: ", data);
       });
    }
    

    return {
        addQuote,
        getQuotes,
        getComments,
        addComment
    };
};

export default useFirebase;
