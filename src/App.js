import React,{useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./components/UI/header";
import useFirebase from "./hooks/use-firebase";
import {quotesActions} from './store/quotesSlice';
import { commentsActions } from './store/commentsSlice';
import { userActions } from './store/userSlice';
import "./App.css";
import AppRoute from './components/Helper/AppRoute';

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
          <AppRoute status = {isLoggedIn}></AppRoute>
        </main>
    </div>
  );
}

export default App;
