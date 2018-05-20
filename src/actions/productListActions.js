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
export const FILTER_PRODUCT_SUCCESS = "FILTER_PRODUCT_SUCCESS" 

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

export const filterProductSuccess = products => ({
    type : FILTER_PRODUCT_SUCCESS,
    products
})

export const fetchProductsList = filter => dispatch => { 
    dispatch(getProductsRequest())

    // console.log(getProductsList(startAt))

    getProductsList(filter)
        .then(data => { dispatch(getProductsSuccess(data))} )
        .catch(err => getProductsFail())
}   

export const filterProducts = filter => dispatch => { 
    dispatch(getProductsRequest())
    getProductsList(filter)
        .then(data => {dispatch(filterProductSuccess(data))} )
        .catch(err => getProductsFail())
}   
