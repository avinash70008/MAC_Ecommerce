import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
 
import { cartReducer } from "./cart/reducer"
 
export const rootReducer=combineReducers({
    
    cart:cartReducer,
  
});

export const store =createStore(rootReducer, applyMiddleware(thunk))