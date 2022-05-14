import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
 import {handleCart}  from "./cart/reducer"
 
export const rootReducer=combineReducers({
    
    handleCart
  
});

export const store =createStore(rootReducer, applyMiddleware(thunk))