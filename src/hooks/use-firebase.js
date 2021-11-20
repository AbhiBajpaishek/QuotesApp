import {useCallback} from "react";
import {useDispatch} from "react-redux";
import { quotesActions } from "../store/quotesSlice";
import { commentsActions } from "../store/commentsSlice";

const URL = "https://quotes-app-b30d6-default-rtdb.firebaseio.com/";

const useFirebase = () => {

    const dispatchFn = useDispatch();

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
            // dispatchFn({type:"ADD_QUOTE",quote:{id:data.name,...quote}});
            dispatchFn(quotesActions.addQuote({quotes:{id:data.name,...quote}}));
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
                    quoteId:comments[key].quoteId,
                    comment:comments[key].comment
                }
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
            const commentObj = {
                id:data.name,
                comment:{...comment}
            }
            dispatchFn(commentsActions.addComment({comment:commentObj}));
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
