import React from "react"
import { Redirect } from 'react-router-dom'

import { LogOut } from "../../services/fire"

class LogOutComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect : false
        }
    }

    componentDidMount () {
        LogOut().then(user => this.setState({redirect : true}))
    }

    render () {
        return this.state.redirect?<Redirect to="/" /> : <div />
    }
} 

export default LogOutComponent