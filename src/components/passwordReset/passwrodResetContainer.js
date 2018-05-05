import React from "react"
import { Link } from 'react-router-dom'
import Fire from "../../services/fire"
import PasswordReset from "./passwordReset"

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
})

const INITIAL_STATE = {
    email: '',
    error: null,
}

class passwrodResetContainer extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { ...INITIAL_STATE };
    }
  
    onSubmit = (event) => { console.log("sdf")
        
        const { email } = this.state;
        Fire.auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log("done")
                this.setState(() => ({ ...INITIAL_STATE }))
            })
            .catch(error => {
                console.log(error)
                this.setState(byPropKey('error', error))
            })
        event.preventDefault()
    }
  
    render() {
        const {
            email,
            error,
        } = this.state;
    
        const isInvalid = email === '';
  
        return <PasswordReset 
                    error={this.state.error}
                    onSubmit={this.onSubmit} 
                    email={this.state.email} 
                    isInvalid={isInvalid}
                    onChange={() => event => this.setState(byPropKey('email', event.target.value))} />
    }
}


export default passwrodResetContainer