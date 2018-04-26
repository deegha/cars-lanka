import React from "react"
import { connect } from "react-redux"       

import { closeAlert } from "../../../actions/alertActions"

import { FlatButton, Dialog } from 'material-ui';

class AlertMessage extends React.Component{

    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        return <Dialog
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.closeModal}
            >
            {this.props.message}
        </Dialog>
    }
} 

const mapStateToProps = ({alert}) => {

    return ({
        message : alert.alert.message,
        messageType : alert.alert.messageType,
        open : alert.alert.open
    })
}

const mapDispatchToProps = dispatch => ({
    closeModal : () => dispatch(closeAlert())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(AlertMessage)