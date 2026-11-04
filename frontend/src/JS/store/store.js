import { createStore, compose, applyMiddleware,combineReducers } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// const rootReducer = combineReducers({
//   authReducer: authReducer, // This matches state.authReducer in your useSelector
// });



export default store;