/**
 * Created by deegha on 12/05/2018
*/

import { combineReducers } from "redux"

import { productsListReducer as products } from "./productsListReducer"
import { productReducer as product } from "./productReducer"
import { makesReducer as makes } from "./makesReducer"
import { errorReducer as validation } from "./errorReducer"
import { alertReducer as alert} from "./alertReducer" 
import { authenticationReducer as authentication} from "./authenticationReducer"
import { filterReducer as filter } from "./fliterReducer" 
import { windowReducer as windowDim } from "./windowReducer"

export const rootReducer = combineReducers({
    products,
    product,
    makes,
    validation,
    alert,
    authentication,
    filter,
    windowDim
})