import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {comments: [
        {
          id: "comment1",
          comment:{
              quoteId:"quote1",
              comment:"comeent"
          }
        },
      ],
    },
    reducers:{
        addComment(state,action)
        {
            state.comments.push(action.payload.comment);
        }
    } 
});

export const commentsActions = commentsSlice.actions; 

export default commentsSlice;

