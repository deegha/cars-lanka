/**
 * Created by Deegha on 13/04/2018
 */

import * as Actions from "../actions/productActions"

const initialState = {
    product : {
        id : "",
        category : "",
        sub_category : "",
        user : "",
        created_at : "",
        title : "",
        location : "",
        make : "",
        model : "",
        manufacture_year : "",
        condition : "",
        mileage : "",
        engine_capacity : "",
        description : "",
        images : [],
        contacts : [{
            number : ""
        }],
        views : 0
    },
    loading : false
}

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.PRODUCT_REQUEST :
            return {
                ...state,
                loading : true  
            }
        case Actions.HANDLE_FORM_VALUE : 
            return {
                ...state,
                product : {
                    ...state.product,
                    [action.feild] : action.value
                }
            }    
        case Actions.HANDLE_FORM_VALUE_CONTACT : 
            return {
                ...state,
                product : {
                    ...state.product,
                    contacts : [
                        ...state.contacts,
                        state.contacts[action.key] = action.value
                    ]
                }
            }
        case Actions.CREATE_PRODUCT_SUCCESS :
            return {
                ...state,
                product : initialState.product,
                laoding : false
            }
        case Actions.ADD_PRODUCT_IMAGE : 
            return {
                ...state,
                product : {
                    ...state.product,
                    images : [...state.product.images, action.image]
                }
            }
        default : 
            return state
    }
    
}
