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
    
    const addQuote = (quote,addToContext) => {
        fetch(`${URL}quotes.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(quote),
        })
        .then((response) => response.json())
        .then((data) => {
            addToContext({id:data.name,...quote})
       });
    }

    const getComments = useCallback(async () => {

        const response = await fetch(`${URL}comments.json`);
        const comments = await response.json();
        const newComments = [];
        comments && Object.keys(comments).forEach((key) => {
            newComments.push({
                id:key,
                comment:{
                    quoteId:comments[key].id,
                    comment:comments[key].comment
                }
            });
        });
        return newComments;
    },[]);

    const addComment = (comment,addCommentToContext) => {
        fetch(`${URL}comments.json`, {
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(comment),
        })
        .then((response) => response.json())
        .then((data) => {
            const commentObj = {
                id:data.name,
                comment:comment
            }
            addCommentToContext(commentObj);
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
