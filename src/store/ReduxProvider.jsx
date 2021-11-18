import React from "react";
import { Provider } from "react-redux";
import store from "./redux-store";


const ReduxProvider = (props) => {
 

  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
