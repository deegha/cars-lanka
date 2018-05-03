/**
 * Created by Deegha on 13/04/2018
 */

import * as Actions from "../actions/productActions"

const initialState = {
    product : {
        id : "",
        status : 1,
        category : "vehicles",
        sub_category : "cars",
        user : "",
        created_at : "",
        title : "",
        location : "",
        make : "",
        model : "",
        body_type : "",
        transmission : "",
        fuel_type : "",
        manufacture_year : "",
        condition : "",
        mileage : "",
        engine_capacity : "",
        description : "",
        price : "",
        nego : "",
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
                    contacts : state.product.contacts.map((contact ,key) => key===action.key? {number : action.value} : contact)                    
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
        case Actions.REMOVE_PRODUCT_IMAGE : 

            return {
                ...state,
                product : {
                    ...state.product,
                    images : state.product.images.filter( image => image !== action.image )
                }
            }
        
        case Actions.ACTIVE_PRODUCT : 
            return {
                ...state,
                product : action.activeProduct,
                loading : false
            }
        case Actions.ACTIVE_PRODUCT_INIT :
            return initialState
        default : 
            return state
    }
    
}
