/**
 * Created by Deegha on 05/12/2018
 */

import React, { Component } from 'react'

import { connect } from "react-redux"

import { getMakes } from "./actions/makeActions"
import { fetchProductsList } from "./actions/productListActions"
import * as Authenticate from "./actions/authenticationActions"
import { setWindowDimensions } from "./actions/windowActions"
import Fire from "./services/fire"
import Routes from "./routes"

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/scale.css'
import "./App.css"

class App extends Component {


  updateWindowDimensions = () => this.props.setDimentions(window.innerWidth, window.innerHeight)
  
  componentWillMount () {
    this.removeAuthenticateListner = Fire.auth().onAuthStateChanged( user => {
      
      if(user){
        this.props.authenticate()
      }else {
        this.props.logOut()
      }
      
    })
  }
  
  componentDidMount () { 
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions)
    this.props.productsList()
    this.props.getAllMakes()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowDimensions)
    this.removeAuthenticateListner()
  }

  render() {
    return <Routes authenticated={this.props.authenticated} />
  }
}

const mapStateToProps = ({authentication, products}) => ({
  authenticated :authentication.authenticated
})

const mapDispatchToProps = dispatch => ({
  productsList : _=> dispatch(fetchProductsList()),
  authenticate :  () => dispatch(Authenticate.authenticateWithFb()),
  logOut :  () => dispatch(Authenticate.logout()),
  getAllMakes : () => dispatch(getMakes()),
  setDimentions : (width, height) => dispatch(setWindowDimensions(width, height))
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 
