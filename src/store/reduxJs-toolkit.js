import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./commentsSlice";
import quotesSlice from  './quotesSlice';
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        quotes:quotesSlice.reducer,
        comments:commentsSlice.reducer,
        users:userSlice.reducer
    }
});

export default store;