import { combineReducers } from 'redux';
import {applyMiddleware, legacy_createStore} from 'redux';
// import {applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
// import thunk from 'redux-thunk';
import createBookReducer from '../reducers/books/createBookReducer.js'

// const middlewares=[thunk];

// const reducer=combineReducers({
//     bookCreated: createBookReducer,
// })

// const store=legacy_createStore(
    //     reducer,
    //     compose(applyMiddleware(...middlewares))
    // )
    // export  {store}
import thunk from 'redux-thunk'; 
const reducer=combineReducers({
    bookCreated: createBookReducer,
})

const store=legacy_createStore(reducer,applyMiddleware(thunk));

export {store}; 