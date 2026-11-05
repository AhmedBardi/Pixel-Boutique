// ../reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Adjust this path to your actual auth reducer file



const rootReducer = combineReducers({
  // This key MUST match what you call in useSelector
  authReducer: authReducer, 
  // you can add other reducers here later, like:
  // postReducer: postReducer 
});

export default rootReducer;