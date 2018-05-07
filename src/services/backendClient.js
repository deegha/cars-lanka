/**
 * Created by Deegha on 12/04/2018
 */

import Fire  from "./fire"
import FeedStore from "./feedStore"

export const getProductsList  = _ => FeedStore.loadItems()              
export const createProduct = product => Fire.database().ref("products").push(product)
export const getProduct = product_id => Fire.database().ref("products").orderByChild('id').equalTo(product_id).once("value") 
export const getMakesList  = _=> Fire.database().ref("make").once("value")

export const createUser = (id, username, email) => Fire.database().ref(`users/${id}`).set({
                                                        username,
                                                        email,
                                                    });

// export const getProductsList  = _=> FeedStore.getFeed()