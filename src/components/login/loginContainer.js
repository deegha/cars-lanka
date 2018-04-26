import React from "react"
import { connect }  from "react-redux"

import Login from "./login"
import { authenticateWithFb } from "../../actions/authenticationActions"
import Fire from "../../services/fire"
import { facebookProvider } from "../../services/fire"

const mapStateToProps = ({authentication}) => ({
    authentication
})

const authFb = (dispatch) => {
    Fire.auth().signInWithPopup(facebookProvider).then((res , err) => {
        (err)? console.log(err):  dispatch(authenticateWithFb())
    })
}

const mapDispatchToProps = dispatch => ({
    loginWithFb : () => () => authFb(dispatch)  
})

export default connect (mapStateToProps, mapDispatchToProps)(Login)

