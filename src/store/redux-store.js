import {createStore} from 'redux';

const initialState = {
    quotes: [
        {
          id: "quote1",
          title: "First Quote",
          author: "Max",
          description:
            "React is fun to Learn!!",
        },
      ],
    comments: [
        {
          id: "comment1",
          comment: 
          {
            quoteId:"quote1",
            comment:"Comment1"
          }
        },
        {
          id:"comment2",
          comment: 
          {
            quoteId:"quote1",
            comment:"Comment2"
          }
        }
      ]
  };
const reducerFn = (state = initialState,action) => {
    if(action.type === "ADD_COMMENT")
    {
        const updatedComments = [...state.comments];
        updatedComments.push(action.comment);
        return {...state,comments:[...updatedComments]};
    }

    if(action.type === "ADD_QUOTE")
    {
        const updatedQuotes = [...state.quotes];
        updatedQuotes.push(action.quote);
        return {quotes:updatedQuotes,comments:[...state.comments]};
    }
    return {...initialState};

}

const store = createStore(reducerFn);

export default store;
