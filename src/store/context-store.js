import React from "react";

const context = React.createContext(
    {
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
              quoteId:"c1",
              comment:"Comment1"
            }
          },
          {
            id:"comment2",
            comment: 
            {
              quoteId:"c2",
              comment:"Comment2"
            }
          }
        ],
      addComment:()=>{},
      addQuote:()=>{}
    }
);

export default context;