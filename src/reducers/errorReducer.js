import * as actions from "../actions/errorActions"

const initialState = {
    validation : {invalid : true}
}

export const errorReducer = (state=initialState, action) => {
    switch(action.type) {
        case actions.SET_VALIDATION_ERROR : console.log(action.errorFeild)
            return {
                ...state,
                validation : {
                    ...state.validation,
                    invalid : true,
                    [action.errorFeild] : action.errorMessage
                }
            }
        case actions.CLEAR_VALIDATION_ERROR_MESSAGE : 
            return {
                ...state,
                validation : {
                    ...state.validation,
                    invalid : false,
                    [action.errorFeild] : ""
                }
            }
        case actions.SET_FORM_VALID : 
            return {
                ...state,
                validation : {
                    ...state.validation,
                    invalid : action.validity
                }
            }
        case actions.CLEAR_ALL_VALIDATION : {
            return {
                ...state,
                validation : {
                    ...initialState
                }
            } 
        }
        default :
            return state 
    }   
}

