// ../reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Adjust this path to your actual auth reducer file
import prodReducer from "./prodReducer";


const rootReducer = combineReducers({
  // This key MUST match what you call in useSelector
  authReducer: authReducer, 
  prodReducer,
  // you can add other reducers here later, like:
  // postReducer: postReducer 
});

export default rootReducer;