import React from "react"
import { connect }  from "react-redux"
import {notify} from 'react-notify-toast'
import  { Notifications } from "../reusable/notifications/notifications"

import Login from "./login"
import { authenticateWithFb } from "../../actions/authenticationActions"
import Fire from "../../services/fire"
import { facebookProvider } from "../../services/fire"
import { isValidEmail } from "../../utils/validators"
import { createUser } from "../../services/backendClient"

class LoginContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email : "",
            password : "",
            invalidForm : true,
            validation : {
                email : "",
                password : ""
            }
        }
    }

    render() {
        return <Login 
                    loginWithFb = {this.props.loginWithFb} 
                    handleTextChange={this.handleTextChange} 
                    authentication={this.props.authentication} 
                    invalidForm = {this.state.invalidForm}
                    login = {this.login}
                    validation={this.state.validation}/>
    }

    handleTextChange = (field) => event =>{
        this.setState({[field] : event.target.value}, this.addValidation(field, event.target.value))
    } 

    addValidation = (feild, value) => {
        value === "" ? this.setState({validation : {...this.state.validation, [feild] : feild+" is required"}}, this.validateForm()) : 
            this.setState({validation : {...this.state.validation, [feild] : ""}}, this.validateForm())
        
    }
        
    resetForm = () => this.setState({
        email : "",
        password : "",
        invalidForm : true,
        validation : {
            email : "",
            password : ""
            
        }
    })

    validateForm = () =>  (this.state.validation.email === "" 
                                && this.state.validation.password === "" && this.state.email !== "" && this.state.password !== "")?
                            this.setState({invalidForm : false}):
                            this.setState({invalidForm : true})
    
    login = _ => _ => {
        
        if(!isValidEmail(this.state.email))
            this.setState({validation : {...this.state.validation, email : "Not a valid email"}})

        if(!this.state.invalidForm) {
            Fire.auth().fetchProvidersForEmail(this.state.email)
            .then(providers => { 
                if(providers.length === 0 ){
                    Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(user => {
                        createUser(user.uid, "", this.state.email)
                        .then(()=>{
                            console.log(this.state)
                            this.props.authenticate()
                            Notifications("success", "User created successfully")
                        }).catch(err => {
                            Notifications("error", err.message)
                        })
                    }).catch(err => {
                        Notifications("error", err.message)
                    })
                }else if (providers.indexOf("password") === -1) {
                    this.resetForm()
                    Notifications("warning", "You have created your account with facebook, use that to log in")
                }else {
                    return Fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
                }
            })
            .then(user => {
                this.resetForm()
                if(user && user.email) {
                    this.props.authenticate()
                    Notifications("success", "User signed successfully")
                }
            } )
            .catch(err => {
                Notifications("error", err.message)
                console.log(err)
            })
        } 
    }   
}

const mapStateToProps = ({authentication}) => ({
    authentication
})

const authFb = (dispatch) => {
    Fire.auth().signInWithPopup(facebookProvider).then((res , err) => {
        (err)? console.log(err):  dispatch(authenticateWithFb())
    })
}

const mapDispatchToProps = dispatch => ({
    loginWithFb : () => () => authFb(dispatch),
    authenticate : () => ()=> authFb(dispatch)
})

export default connect (mapStateToProps, mapDispatchToProps)(LoginContainer)

