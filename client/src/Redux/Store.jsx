import {createStore, combineReducers, applyMiddleware, compose} from "redux";

import { cartReducer } from "./Cart/Reducer";


import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       
    }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
   
);

const rootReducer = combineReducers({
   cart: cartReducer
});

export const store = createStore(rootReducer, enhancer);