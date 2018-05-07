/**
 * Created by Deegha on 05/12/2018
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import Alert from 'react-s-alert'

import List from "./components/list/List"
import SingleContainer from "./components/single/SingleContainer"
import PageNotFound from "./components/pageNotFound/pageNotFound"
import CreateProductContainer from "./components/createProduct/createProductContainer"
import Header from "./components/header/header"
import Login from "./components/login/loginContainer"
import Register from "./components/register/register"
import Fire from "./services/fire"
import LogOut from "./components/login/logOut"
import Loading from "./components/reusable/loading/loading"

import { getMakes } from "./actions/makeActions"
import { fetchProductsList } from "./actions/productListActions"
import * as Authenticate from "./actions/authenticationActions"
import { setWindowDimensions } from "./actions/windowActions"
import passwrodResetContainer from "./components/passwordReset/passwrodResetContainer"

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
    return <Router>
     
      <div>
        <Header />
        <Alert stack={{limit: 3}} />
        <div className="spaceBetween" />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logOut" component={LogOut} />
          <Route exact path="/register" component={Register} />
          <Route path="/createProduct" component={this.props.authenticated?CreateProductContainer:Login} />
          <Route path="/product/:id" component={SingleContainer} />
          <Route path="/resetpassword" component={passwrodResetContainer} />
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
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
