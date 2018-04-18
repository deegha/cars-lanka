/**
 * Created by Deegha on 05/13/2018
 */

import React from "react"
import {connect} from "react-redux"

import Single from "./Single"

import Loading from "../reusable/loading/loading"

class SingleContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal : false
        }
    }


    toggleModal = _=> _=> this.setState({showModal : !this.state.showModal})
    
    componentDidMount() {
        this.props.fetchActiveJob(this.props.match.params.id)
        window.scrollTo(0, 0)
    }

    render() { 
        return <Single/>
    }
}


export default SingleContainer