import React from "react"
import { connect } from "react-redux"
import "./header.css"
import Logo from "../../asserts/carsLanka-logo-black.png"
import { Link } from "react-router-dom";

const Header = ({authenticated}) => 
<div className="headerMain">
    <div className="sitelogoArea">
        <img src={Logo} alt="cars lanka logo"/>
    </div>
    <div>
        {authenticated?<Link to="/logout" >Logout</Link>:<Link to="/login" >Login</Link>}
    </div>
</div>


const mapStateToProps = ({ authentication }) => ({
    authenticated : authentication.authenticated
})

export default connect(mapStateToProps)(Header)