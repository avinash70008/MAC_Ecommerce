export const ADD_ITEM = "ADD_ITEM";

export const DELETE_ITEM = "DELETE_ITEM";

 


export const additem = (payload) =>({
    type:ADD_ITEM,
    payload
})
export const removeitem = (payload) =>({
    type:DELETE_ITEM,
    payload
})

 