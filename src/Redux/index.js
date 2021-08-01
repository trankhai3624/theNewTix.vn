import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import HomeReducer from "../Container/HomeTemplate/Home/modules/reducer";
import MovieDetailReducer from "../Container/HomeTemplate/MovieDetail/modules/reducer";

const rootReducer = combineReducers({ HomeReducer, MovieDetailReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
