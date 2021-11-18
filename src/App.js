import React,{useEffect} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Quotes from "./components/Quotes/quotes";
import Header from "./components/UI/header";
import QuotesDetail from "./components/QuotesDetail/QuotesDetail";
import AddQuote from "./components/AddQuote/AddQuote";
// import ContextProvider from "./store/context-provider";

import useFirebase from "./hooks/use-firebase"
import { useDispatch } from "react-redux";
import "./App.css";

function App() {

  const { getQuotes, getComments } = useFirebase();
  const dispatchFn = useDispatch();

  useEffect(() => {
    async function getAllQuotesToContext() {
      const quotesFromDB = await getQuotes();
      const commentsFromDB = await getComments();

      quotesFromDB.forEach((q) => {
        dispatchFn({ type: "ADD_QUOTE", quote: q });
      });

      commentsFromDB.forEach((comments) => {
        dispatchFn({ type: "ADD_COMMENT", comment: comments });
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
