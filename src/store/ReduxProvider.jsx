import React from "react";
import { Provider } from "react-redux";
import store from './redux-store';

const ReduxProvider = (props) => {
  
// useEffect(()=>
// {
//   async function getAllQuotesToContext(){ 
//     const quotesFromDB = await getQuotes();
//     const commentsFromDB = await getComments();
  
//     quotesFromDB.forEach((q)=>{
//       addQuotesHandler(q);
//     });
  
//     commentsFromDB.forEach((comments) => {
//       addCommentHandler(comments);
//     });
//   }
//     getAllQuotesToContext();
//   },[getQuotes,getComments]);

//   const addCommentHandler = (comment) => {
//       dispatchQuotes({type:"AddComment",quoteComment:comment});
//   }

//   const addQuotesHandler = (quote) => {
//     dispatchQuotes({
//         type: "AddQuote", quote:quote
//     });
//   }




    return <Provider store = {store}>
        {props.children}
    </Provider>
}

export default ReduxProvider;