import * as Actions from "../actions/windowActions"

const initialState = {
    width : 0,
    height : 0
}

export const windowReducer = (state= initialState ,action) => {
    switch (action.type) {
        case Actions.SET_WINDOW_DIMENTIONS : console.log(action, "DSfds")
            return {
                width : action.width,
                height : action.height
            }
        default :
            return state
    }
}