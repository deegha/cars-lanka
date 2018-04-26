/**
 * Created by Deegha on 16/04/2018
 */

import { createProduct } from "../services/backendClient"
import uuid from "uuid/v4"
import b64 from "base-64"


/**
 * Action constants
*/

export const PRODUCT_REQUEST = "PRODUCT_REQUEST"
export const PRODUCT_FAIL = "PRODUCT_FAIL"

export const CREATE_PRODUCT = "CREATE_PRODUCT"
export const CREATE_PRODUCT_FAIL = "CREATE_PRODUCT_FAIL"
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS"
export const HANDLE_FORM_VALUE = "HANDLE_FORM_VALUE"
export const HANDLE_FORM_VALUE_CONTACT = "HANDLE_FORM_VALUE_CONTACT"
export const ADD_PRODUCT_IMAGE = "ADD_PRODUCT_IMAGE"
export const REMOVE_PRODUCT_IMAGE = "REMOVE_PRODUCT_IMAGE"


export const productRequest = () => ({
    type : PRODUCT_REQUEST,
})

export const createProductFail = () => ({
    type : CREATE_PRODUCT_FAIL
})

export const createProductSuccess = _ => ({
    type : CREATE_PRODUCT_SUCCESS,
    message : "Product created Successfully",
})

export const createProductAction = _ => (dispatch, getState) => {
    const product = {
        ...getState().product.product,
        created_at :  Date.now(),
        id : b64.encode(uuid())
    }

    dispatch(productRequest)
    createProduct(product)
        .then(res => dispatch(createProductSuccess()))
        .catch(err => dispatch(createProductFail()))
}

export const handleChange = (feild, value) => ({
        type :HANDLE_FORM_VALUE,
        feild,
        value
    })

export const handleTextChangeContact = (feild, key, value) => ({
    type : HANDLE_FORM_VALUE_CONTACT,
    feild, 
    key,
    value
})

export const addProductImages = image => ({
    type : ADD_PRODUCT_IMAGE,
    image
})

export const removeProductImages = image => ({
    type : REMOVE_PRODUCT_IMAGE,
    image
})