import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import test from "./test";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        test,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
