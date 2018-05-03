import React from "react"
import { connect } from "react-redux"
import "./header.css"
import Logo from "../../asserts/carsLanka-logo-black.png"
import { Link } from "react-router-dom"
import Icon from "../reusable/icon/icon"
import FlatButton from 'material-ui/FlatButton'

const Header = ({authenticated}) => 
<div className="headerMain">
    <div className="sitelogoArea">
        
    </div>
    {authenticated? <div className="postAdd">
    <Link to="/logout"><FlatButton labelStyle={{color:"#fff"}}  label="Logout" /></Link></div>:null}
    <div className="postAdd">
        <Link to="/createProduct">
        <FlatButton labelStyle={{color:"#fff"}} label="Post add for free" />
        </Link>
    </div>
   
    
   
</div>


const mapStateToProps = ({ authentication }) => ({
    authenticated : authentication.authenticated
})

export default connect(mapStateToProps)(Header)