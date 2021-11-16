import React,{ useEffect, useReducer } from "react";
import useFirebase from "../hooks/use-firebase";
import context from "./context-store";

let initialState = {
    quotes: [
      {
        id:"quote1",
        title: "First Quote",
        author: "Max",
        description:
          "React is fun to Learn!!",
        },
      ],
      comments: [],
  };

const quotesReducer = (state,action) => {
    if(action.type === "AddComment")
    {
        const updatedComments = [...state.comments];
        updatedComments.push(action.quoteComment);

        const newState = {
          quotes: [...state.quotes],
          comments: [...updatedComments]
        };

        return newState;
    }

    if(action.type === "AddQuote")
    {
      const newQuote = action.quote;
      const updatedQuotes = [...state.quotes];
      updatedQuotes.push(newQuote);
      return {quotes:[...updatedQuotes], comments:[...state.comments]};
    }
    return initialState;
}
const ContextProvider = (props) => {
  
  const [quotesState,dispatchQuotes] = useReducer(quotesReducer, initialState);
  const {getQuotes,getComments} = useFirebase();
  
  useEffect(()=>
  {
    async function getAllQuotesToContext(){ 
      const quotesFromDB = await getQuotes();
      const commentsFromDB = await getComments();
    
      quotesFromDB.forEach((q)=>{
        addQuotesHandler(q);
      });
    
      commentsFromDB.forEach((comments) => {
        addCommentHandler(comments.id,comments.comment);
      });
    }
      getAllQuotesToContext();
    },[getQuotes,getComments]);

    const addCommentHandler = (quoteID,comment) => {
        dispatchQuotes({type:"AddComment",quoteComment:{id:quoteID,comment:comment}});
    }

    const addQuotesHandler = (quote) => {
      dispatchQuotes({
          type: "AddQuote", quote:quote
      });
    }

  


    const quotesContext = {
        quotes: quotesState.quotes,
        comments:quotesState.comments,
        addQuote: addQuotesHandler,
        addComment: addCommentHandler,
    }

    return <context.Provider value ={quotesContext} >
        {props.children}
    </context.Provider>
};

export default ContextProvider;

