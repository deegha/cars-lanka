/**
 * Created by Deegha 28/04/2018
 */
import * as Actions from "../actions/filterActions"

const initial_state = {
    filter : {
        make : "",
        model : "",
        max_price : "",
        min_price : "",
        location : {
            city : "",
            district : "",
            province : ""
        },
        transmission : "",
        condition : "",
        body_type : "",
        milage : ""
    }
}

export const filterReducer = (state=initial_state, action ) => {
    switch (action.type) {
        case Actions.APPLY_FILTER : 
            return {
                ...state,
                filter : {
                    ...state.filter,
                    ...action.filter
                }
            } 
        case Actions.CLEAR_FILTER : 
            return initial_state
        default :
            return state
    }
} 