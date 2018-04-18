/**
 * Created by Deegha on 12/05/2018
 */

import * as Actions from "../actions/productListActions"

const initialState = {
    products : [
        {
            id : "",
            created_at : "",
            title : "",
            location : "",
            type : "",
            description : "",
            how_to_apply : "",
            company : "",
            company_url : "",
            company_logo : "",
            url : "",
            liked : false
        }
    ],
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
                products : [...action.products] ,
                loading : false
            }
        default :
            return state
    }
}
