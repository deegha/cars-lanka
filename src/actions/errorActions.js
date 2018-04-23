/**
 * Action constants
*/

export const SET_VALIDATION_ERROR = "SET_VALIDATION_ERROR" 
export const CLEAR_VALIDATION_ERROR_MESSAGE = "CLEAR_VALIDATION_ERROR_MESSAGE"
export const SET_FORM_VALID = "SET_FORM_VALID"
export const CLEAR_ALL_VALIDATION = "CLEAR_ALL_VALIDATION"

/**
 * Action creators
*/

export const createValidationErrorMessage = (errorFeild, errorMessage) => ({
    type : SET_VALIDATION_ERROR,
    errorFeild,
    errorMessage
})

export const clearValidationErrorMessage = (errorFeild) => ({
    type : CLEAR_VALIDATION_ERROR_MESSAGE,
    errorFeild
})

export const setFormValidity = (validity) => {
    return ({
        type : SET_FORM_VALID,
        validity
    })
}

export const clearAllValidation = () => ({
    type : CLEAR_ALL_VALIDATION
}) 