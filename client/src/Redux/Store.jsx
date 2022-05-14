import {createStore, combineReducers, applyMiddleware, compose} from "redux";

import { cartReducer } from "./Cart/Reducer";
import { shippingReducer } from "./Shiping/Reducer";

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
   cart: cartReducer,
   shippingDataInfo : shippingReducer
});

export const store = createStore(rootReducer, enhancer);