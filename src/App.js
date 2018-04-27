/**
 * Created by Deegha on 05/12/2018
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"
import Notifications from 'react-notify-toast'

import List from "./components/list/List"
import SingleContainer from "./components/single/SingleContainer"
import PageNotFound from "./components/pageNotFound/pageNotFound"
import CreateProductContainer from "./components/createProduct/createProductContainer"
import Header from "./components/header/header"
import Login from "./components/login/loginContainer"
import Register from "./components/register/register"
import * as Authenticate from "./actions/authenticationActions"
import Fire from "./services/fire"
import LogOut from "./components/login/logOut"

import { fetchProductsList } from "./actions/productListActions"

import "./App.css"

class App extends Component {

  componentWillMount () {
    this.removeAuthenticateListner = Fire.auth().onAuthStateChanged( user => {
      
      if(user){
        console.log(user)
        this.props.authenticate()
      }else {
        this.props.logOut()
      }
      
    })
  }

  componentDidMount () {
    this.props.productsList()
  }

  componentWillUnmount () {
    this.removeAuthenticateListner()
  }

  render() {
    return <Router>
     
      <div>
        <Notifications />
        <Header />
        <div className="spaceBetween" />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logOut" component={LogOut} />
          <Route exact path="/register" component={Register} />
          <Route path="/createProduct" component={this.props.authenticated?CreateProductContainer:Login} />
          {/* <Route path="/productPage/:id" component={SingleContainer} /> */}
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  }
}

const mapStateToProps = ({authentication}) => ({
  authenticated :authentication.authenticated
})

const mapDispatchToProps = dipatch => ({
  productsList : () => dipatch(fetchProductsList()),
  authenticate :  () => dipatch(Authenticate.authenticateWithFb()),
  logOut :  () => dipatch(Authenticate.logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 
