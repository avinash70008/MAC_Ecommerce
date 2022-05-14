import { ADD_ITEM, DELETE_ITEM } from "./action";

const initState = {
    cart:[],
     
}

export const cartReducer = (store = initState, {type, payload})=>{
    switch(type){

        case ADD_ITEM:
            return {
                ...store,
                cart:[...store.cart,payload]
            }
        case DELETE_ITEM:
            const newStore = store.cart.filter((el)=> el.id !== payload)
            return {
                ...store,
                cart: newStore
            }
      
        default:
            return store;
    }
}