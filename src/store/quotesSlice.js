import { createSlice } from "@reduxjs/toolkit";

const quotesSlice = createSlice({
    name: "quotes",
    initialState: {
        quotes: [
        {
          id: "quote1",
          title: "First Quote",
          author: "Max",
          description:
            "React is fun to Learn!!",
        },
      ],
    },
    reducers:{
        addQuote(state,action)
        {
            state.quotes.push(action.payload.quotes);
        }
    } 
});

export const quotesActions = quotesSlice.actions; 

export default quotesSlice;

