/**
 * Created by Deegha on 18/04/2018
 */
 import * as Actions from "../actions/makeActions"

 const initailState = {
    makes : [],
    loading : false
 }

export const makesReducer = (state = initailState, action) => {
    switch (action.type) {
        case Actions.MAKES_REQUEST : 
            return {
                ...state,
                loading : true
            }
        case Actions.GET_MAKES_SUCCESS : 
            return {
                ...state,
                makes : [...action.makes],
                loading : false
            }
        default :
            return state 
        }
}

 