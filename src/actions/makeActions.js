/**
 * Created by Deegha on 17/05/2018
 */

import { getMakesList } from "../services/backendClient"

export const MAKES_REQUEST = "MAKES_REQUEST"
export const GET_MAKES_FAIL = "GET_MAKES_FAIL" 
export const GET_MAKES_SUCCESS = "GET_MAKES_SUCCESS" 

export const makesRequest = _=> ({
    type : MAKES_REQUEST
}) 

export const makesFail = _=> ({
    type : GET_MAKES_FAIL
})

export const makesSuccess = makes=> ({
    type : GET_MAKES_SUCCESS,
    makes
})

export const getMakes = _=>dispatch => {
    getMakesList()
        .then(makes => console.log(makes.val()))
        .catch(err => console.log(err))
}