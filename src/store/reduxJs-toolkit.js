import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";
import quotesSlice from  './quotesSlice';


const store = configureStore({
    reducer:{
        quotes:quotesSlice.reducer,
        comments:commentsSlice.reducer
    }
});

export default store;