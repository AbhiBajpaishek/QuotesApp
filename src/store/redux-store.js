import {createStore} from 'redux';

const initialiState = {
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
const reducerFn = (state = initialiState,action) => {
    if(action.type === "ADD_COMMENT")
    {
        const updatedComments = [...state.comments];
        const inputCommment = {
            id: "Comment" + Math.random(1).toFixed(2),
            comment: action.comment
        };
        updatedComments.push(inputCommment);
        return {...state,comments:[...updatedComments]};
    }

    if(action.type === "ADD_QUOTE")
    {
        const updatedQuotes = [...state.quotes];
        const inputQuotes = {
            id:"Quote" + Math.random(1).toFixed(2),
            ...action.quote
        };
        updatedQuotes.push(inputQuotes);
        return {quotes:updatedQuotes,comments:[...state.comments]};
    }
    return {...initialiState};

}

const store = createStore(reducerFn);

export default store;
