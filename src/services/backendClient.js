/**
 * Created by Deegha on 12/04/2018
 */

import Fire  from "./fire"

export const getProductsList  = _=> Fire.database().ref("products").once("value")                       
export const createProduct = product => Fire.database().ref("products").push(product)
export const getProduct = product_id => Fire.database().ref("products").orderByChild('id').equalTo(product_id).once("value") 
export const getMakesList  = _=> Fire.database().ref("make").once("value")