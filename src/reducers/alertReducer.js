import * as Actions from "../actions/alertActions"
import { CREATE_PRODUCT_SUCCESS } from "../actions/productActions"

const initialState = {
    alert : { 
        message : "",
        messageType : "",
        open : false
    }
}

export const alertReducer = (state = initialState , action) => {
    switch (action.type) {
        case Actions.CLOSE_ALERT : 
            return {
                ...state,
                open : false
            }
        case Actions.SET_SUCESS_ALERT : 
            return {
                ...state,
                open : true,
                message : action.message,
                messageType : "SUCCESS"
            }
        
        case Actions.SET_ERROR_ALERT : 
            return {
                ...state,
                open : true,
                message : action.message,
                messageType : "ERROR"
            }
        case CREATE_PRODUCT_SUCCESS : 
            return {
                ...state,
                open : true,
                message : action.message,
                messageType : "SUCCESS"
            }
        default : 
            return state
    } 
}
