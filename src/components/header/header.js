import React, { Component } from "react"
import { connect } from "react-redux"
import "./header.css"
import { Link } from "react-router-dom"
import Icon from "../reusable/icon/icon"
import FlatButton from 'material-ui/FlatButton'
import Logo from "./log"
import { mobileBrekPoint } from "../../services/breakPoints"
import {MenuItem, Drawer} from 'material-ui'


class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            drawer : false
        }
    }

    handleDrawer = _=> _=> this.setState({drawer : !this.state.drawer})

    componentdidupdate () { console.log("updated")
        if(!this.props.ismobile) {
            this.setState({drawer : false})
        }
    }

    render() {
        const {authenticated, ismobile, toggleDrawer} = this.props

        return <div className="headerMain">
        <div className="sitelogoArea">
            <Link to="/">
                <Logo />
            </Link>
        </div>
        {ismobile?<div className="postAdd"> 
            <Icon 
                onClick={this.handleDrawer()}
                styles={{fontSize:"36px", marginRight:"-11px"}} 
                className="fas fa-bars" name="menu" /> 
            </div> :
        <div>
        {authenticated? 
        <div className="postAdd">
            <Link to="/logout"><FlatButton labelStyle={{color:"#fff"}}  label="Logout" /></Link>
        </div>:null}
        <div className="postAdd">
            <Link to="/createProduct">
                <FlatButton labelStyle={{color:"#fff"}} label="Post add for free" />
            </Link>
        </div>
        </div>
        }
    
        <Drawer open={this.state.drawer} styles={{zIndex:6}}>
            <MenuItem>
                <Link to="/">
                    <FlatButton labelStyle={{color:"#000"}} label="Home" />
                </Link>
            </MenuItem>
            {authenticated?
            <MenuItem>
                <Link to="/logout"><FlatButton labelStyle={{color:"#000"}}  label="Logout" /></Link>
            </MenuItem>:null}
            <MenuItem>
                <Link to="/createProduct">
                    <FlatButton labelStyle={{color:"#000"}} label="Post add for free" />
                </Link>
            </MenuItem>
        </Drawer>
    </div>
    }
}

const mapStateToProps = ({ authentication,windowDim }) => ({
    authenticated : authentication.authenticated,
    ismobile : windowDim.width < mobileBrekPoint? true : false
})

export default connect(mapStateToProps)(Header)