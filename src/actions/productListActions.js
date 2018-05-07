/**
 * Created by Deegha Galkissa on 12/05/2018
 */

import { getProductsList } from "../services/backendClient"

/**
 * Action constants
*/

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_FAIL  = "GET_PRODUCTS_FAIL"


/**
 * Action creators
*/

export const getProductsRequest = () => ({
    type : GET_PRODUCTS_REQUEST,
    loading : true
})

export const getProductsFail = () => ({
    type : GET_PRODUCTS_FAIL,
    loading : false
})

export const getProductsSuccess = products => ({
    type : GET_PRODUCTS_SUCCESS,
    products
})

export const fetchProductsList = startAt => dispatch => { 
    dispatch(getProductsRequest())

    // console.log(getProductsList(startAt))

    getProductsList(startAt)
        .then(data => { dispatch(getProductsSuccess(data))} )
        .catch(err => getProductsFail())
}   
