import * as Actions from "../actions/authenticationActions"

const initial_state = {
    authenticated : false 
}

export const authenticationReducer = (state = initial_state, action) => {
    switch (action.type) {
        case Actions.AUTHENTICATE : 
            return {
                authenticated : action.authenticated
            }
        case Actions.LOG_OUT : 
            return {
                authenticated : action.authenticated
            }
        default :
            return state 
    }
}