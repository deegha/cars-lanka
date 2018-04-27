import React from "react"
import { connect } from "react-redux"
import "./header.css"
import Logo from "../../asserts/carsLanka-logo-black.png"
import { Link } from "react-router-dom"
import Icon from "../reusable/icon/icon"

const Header = ({authenticated}) => 
<div className="headerMain">
    <div className="sitelogoArea">
    <Link to="/" ><img src={Logo} alt="cars lanka logo"/></Link>
    </div>
    {authenticated? <div className="postAdd"><Link to="/logout" >Logout</Link> </div>:null}
    <div className="postAdd">
        <Link to="/createProduct" >Post add for free</Link>
    </div>
   
    
   
</div>


const mapStateToProps = ({ authentication }) => ({
    authenticated : authentication.authenticated
})

export default connect(mapStateToProps)(Header)