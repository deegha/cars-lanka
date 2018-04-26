/**
 * Action constants
*/

export const SET_ERROR_ALERT = "SET_ERROR_ALERT"
export const SET_SUCESS_ALERT = "SET_SUCESS_ALERT"
export const CLOSE_ALERT = "CLOSE_ALERT" 

/**
 * Action creators
*/


export const setSuccessAlert = (message, type) => ({
    type : SET_SUCESS_ALERT,
    message
})

export const closeAlert = _=> ({
    type : CLOSE_ALERT
})