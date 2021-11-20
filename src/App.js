import React,{useEffect} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Quotes from "./components/Quotes/quotes";
import Header from "./components/UI/header";
import QuotesDetail from "./components/QuotesDetail/QuotesDetail";
import AddQuote from "./components/AddQuote/AddQuote";
import useFirebase from "./hooks/use-firebase";
import { useDispatch } from 'react-redux';
import {quotesActions} from './store/quotesSlice';
import { commentsActions } from './store/commentsSlice';
import "./App.css";

function App() {

  const { getQuotes, getComments } = useFirebase();
  const dispatchFn = useDispatch();

  useEffect(() => {
    async function getAllQuotesToContext() {
      const quotesFromDB = await getQuotes();
      const commentsFromDB = await getComments();

      quotesFromDB.forEach((q) => {
        dispatchFn(quotesActions.addQuote({quotes: q}));
      });

      commentsFromDB.forEach((comments) => {
        dispatchFn(commentsActions.addComment({comment:comments}));
      });
    }
    getAllQuotesToContext();
  }, [getQuotes, getComments, dispatchFn]);


  return (
    <div className="App">
      <Header></Header>
        <main>
          <Routes>
            <Route path="/quotes" element={<Quotes></Quotes>} />

            <Route path="/addQuotes" element={<AddQuote />} />

            <Route
              path="quotes/:quoteID/*"
              element={<QuotesDetail></QuotesDetail>}
            />

            <Route path="/" element={<Navigate to="/quotes"></Navigate>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
