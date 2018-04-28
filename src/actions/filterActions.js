/**
 * Created by Deegha on 28/04/2018 
 * 
 * */

export const APPLY_FILTER = "APPLY_FILTER"
export const CLEAR_FILTER = "CLEAR_FILTER"

export const applyFilter = filter => ({
    type : APPLY_FILTER,
    filter
})

export const clearFilter = () => ({
    type : CLEAR_FILTER
})
