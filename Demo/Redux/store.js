import { configureStore,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import appReducer from "./reducers";
const middlewares =[thunk]
//import { counterReducer } from "./reducers/counterReducer";
const store = configureStore({reducer: appReducer},applyMiddleware(...middlewares))

export default store;