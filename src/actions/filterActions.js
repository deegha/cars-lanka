/**
 * Created by Deegha on 28/04/2018 
 * 
 * */

import getProductsList from "../services/backendClient"
import {filterProducts} from "./productListActions"

export const APPLY_FILTER = "APPLY_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

export const applyFilter = filter => dispatch => {
    dispatch(filterProducts(filter))
    setFilter(filter)
} 

export const clearFilter = () => ({
    type : CLEAR_FILTER
})

export const setFilter = filter => ({
    type : APPLY_FILTER,
    filter
})