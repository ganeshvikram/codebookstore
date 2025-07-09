export const CartReducers = (state,action) =>{

    const {type,payload} = action;

    switch(type){

        case "Add_TO_CART":
            return {...state, cartList:payload.products, total:payload.total}
        case "REMOVE_FROM_CART":
            return  {...state, cartList:payload.products, total:payload.total}
        case "CLEAR_CART":
            return  {...state, cartList:payload.products, total:payload.total}  
        default:
            throw new Error("NO Case Found!")

    }

}