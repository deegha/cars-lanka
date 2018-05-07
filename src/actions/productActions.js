/**
 * Created by Deegha on 16/04/2018
 */

import { createProduct, getProduct } from "../services/backendClient"
import uuid from "uuid/v4"
import b64 from "base-64"
import  { Notifications } from "../components/reusable/notifications/notifications"
import Fire from "../services/fire"

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
export const ACTIVE_PRODUCT = "ACTIVE_PRODUCT"
export const ACTIVE_PRODUCT_INIT= "ACTIVE_PRODUCT_INIT"

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
        id : b64.encode(uuid()),
        user : Fire.auth().currentUser.email
    }
  
    dispatch(productRequest)
    createProduct(product)
        .then(res => {
            Notifications("success", "product created successfully")
            dispatch(createProductSuccess())
        })
        .catch(err =>{
            console.log(err)
            Notifications("error", "product created failed")
            dispatch(createProductFail())
        } )
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

export const setActiveProduct = productId => (dispatch, getState) => { 
    dispatch( productRequest())
    getProduct(productId).then(products => {
        dispatch(activeProduct(Object.keys(products.val()).map(product => products.val()[product])[0]))
    })
}

export const activeProduct = aproduct => ({
    type : ACTIVE_PRODUCT,
    activeProduct : aproduct
})

export const initializeActiveProduct = () => ({
    type :ACTIVE_PRODUCT_INIT
})