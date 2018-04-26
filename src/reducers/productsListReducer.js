/**
 * Created by Deegha on 12/05/2018
 */

import * as Actions from "../actions/productListActions"

const initialState = {
    products : [],
    loading : false
}

export const productsListReducer = (state = initialState, action) => {
    switch (action.type) { 
        case Actions.GET_PRODUCTS_REQUEST : 
            return {
                ...state,
                loading : true
            }
        case Actions.GET_PRODUCTS_FAIL : 
            return {
                ...state,
                loading : false
            }
        case Actions.GET_PRODUCTS_SUCCESS :
            return {
                ...state,
                products : Object.keys(action.products).map(product => action.products[product]) ,
                loading : false
            }
        default :
            return state
    }
}
