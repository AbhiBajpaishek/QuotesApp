import React,{useEffect, useCallback} from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Quotes from "./components/Quotes/quotes";
import Header from "./components/UI/header";
import QuotesDetail from "./components/QuotesDetail/QuotesDetail";
import AddQuote from "./components/AddQuote/AddQuote";
import Signup from './components/Signup/Signup';
import useFirebase from "./hooks/use-firebase";
import {quotesActions} from './store/quotesSlice';
import { commentsActions } from './store/commentsSlice';
import { userActions } from './store/userSlice';
import "./App.css";
import Login from './components/Login/Login';

function App() {

  const { getQuotes, getComments } = useFirebase();
  const dispatchFn = useDispatch();
  const loginCtx = useSelector(ctx => ctx.users);


  const isSessionAvailable = useCallback(() => {
      const expiresIn= localStorage.getItem("expiresIn");
      if(expiresIn)
      {
        const token = localStorage.getItem('token');
        dispatchFn(userActions.login({token,expiresIn}));
      }
  },[dispatchFn]);


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
    isSessionAvailable();
    getAllQuotesToContext();
  }, [getQuotes, getComments, dispatchFn,isSessionAvailable]);

  const isLoggedIn = !!loginCtx.token;
  return (
    <div className="App">
      <Header></Header>
        <main>
          <Routes>
            { isLoggedIn &&
              <Route path="/quotes" element={<Quotes></Quotes>} />
            }
            { isLoggedIn &&
              <Route path="/addQuotes" element={<AddQuote />} />
            }
            { isLoggedIn && 
            <Route
              path="quotes/:quoteID/*"
              element={<QuotesDetail></QuotesDetail>}
              />
            }
            { !isLoggedIn && 
              <Route path="/" element={<Navigate to="/login"></Navigate>} />
              &&
              <Route path = "/quotes" element = {<Navigate to = "/login"></Navigate>}/>
              &&
              <Route path = "/signup" element = {<Navigate to = "/signup"></Navigate>}/>
              &&
              <Route path = "*" element = {<Navigate to = "/login"></Navigate>}/>
              &&
              <Route path="/signup" element={<Signup />} />
            }
            {
              isLoggedIn &&
              <Route path="/" element={<Navigate to="/quotes"></Navigate>} />
              &&
              <Route path="/login" element={<Navigate to="/quotes"></Navigate>} />
            }
            { !isLoggedIn &&
              <Route path="/login" element={<Login />} />
            }
            { isLoggedIn && 
              <Route path="/signup" element={<Signup />} />
            }
            <Route path="*" element={<p>Page which you are looking for doesn't exist!!!!</p>} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
