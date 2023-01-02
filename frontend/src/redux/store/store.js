import {combineReducers, applyMiddleware } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import createBookReducer from '../reducers/books/createBookReducer.js'
const middlewares=[thunk];

const reducer= combineReducers({
    bookCreated: createBookReducer,
});

const store=configureStore({reducer},applyMiddleware(...middlewares));
console.log("hi")
export {store};