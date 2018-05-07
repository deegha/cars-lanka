import firebase from 'firebase'
import fireConfig from "./fireConfig"

const Fire = firebase.initializeApp(fireConfig)
export const facebookProvider = new firebase.auth.FacebookAuthProvider() 

export const LogOut = ()  => Fire.auth().signOut()

export default Fire 