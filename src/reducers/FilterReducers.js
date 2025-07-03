export const filterReducer = (state,action) =>{

    const {type,payload} = action;

    switch(type){

        case "PRODUCT_LIST":
            return {productList : payload.products}
        case "SHORT_BY":
            return {...state, shortBy: payload.shortBy}
        case "RATTINGS":
            return {...state, rating: payload.rating}
        case "BEST_SELLER_ONLY":
            return {...state, bestSellerOnly: payload.bestSellerOnly}
        case "ONLY_IN_STOCK":
            return {...state, onlyInstock: payload.onlyInstock}
        case "CLEAR_FILTER":
            return {...state,onlyInstock: false,
                        bestSellerOnly: false,
                        shortBy: null,
                        rating: null
                    }
        default:
            throw new Error("NO Case Found!")

    }

}