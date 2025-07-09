//initialstate

import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducers";


const filterInitialState = {
    productList: [],
    onlyInstock: false,
    bestSellerOnly: false,
    shortBy: null,
    rating: null
}


//context

 const FilterContext = createContext(filterInitialState);


//provider

export const FilterProvider = ({children})=>{
    const [state,dispatch] = useReducer(filterReducer, filterInitialState);


    function initialProductList(products){

        dispatch({
            type:'PRODUCT_LIST',
            payload:{
                products:products
            }
        })

    }

    function filterBestSeller(products){

        //console.log(state);
        return (state.bestSellerOnly)?products.filter(product => product.best_seller === true): products;


    }

    function filterInstock(products){
       // console.log(state);
        return (state.onlyInstock)?products.filter( product => product.in_stock === true): products;
    }

    function filterSort(products){
        if(state.shortBy === 'lowtohigh'){
            return products.sort((a,b)=>Number(a.price) - Number(b.price));
        }
        if(state.shortBy === 'hightolow'){
            return products.sort((a,b)=>Number(b.price) - Number(a.price));
        }

        return products;

    }

    function filterRatings(products){

        if(state.rating === '4STARABOVE'){
            return products.filter(product =>product.rating >= 4);
        }
        if(state.rating === '3STARABOVE'){
            return products.filter(product =>product.rating >= 3);
        }
        if(state.rating === '2STARABOVE'){
            return products.filter(product =>product.rating >= 2);
        }
        if(state.rating === '1STARABOVE'){
            return products.filter(product =>product.rating >= 1);
        }

            return products;



    }



    const filterResults = filterRatings(filterSort(filterInstock(filterBestSeller(state.productList))));

    const value = {
        state,
        dispatch,
        productList : filterResults,
        initialProductList
    }

    return(

        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )

}

//common use

export const useFilter = () =>{
    const context = useContext(FilterContext);
    return context;
}