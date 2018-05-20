import React from "react" 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'

import List from "./components/list/List"
import SingleContainer from "./components/single/SingleContainer"
import PageNotFound from "./components/pageNotFound/pageNotFound"
import CreateProductContainer from "./components/createProduct/createProductContainer"
import Header from "./components/header/header"
import Login from "./components/login/loginContainer"
import Register from "./components/register/register"   
import LogOut from "./components/login/logOut"
import Loading from "./components/reusable/loading/loading"
import passwrodResetContainer from "./components/passwordReset/passwrodResetContainer"
import LandingPage from "./components/landingPage/landingPage"
import Alert from 'react-s-alert'


const Routes = ({authenticated}) => <Router>
    <div>
        <Header />
        <Alert stack={{limit: 3}} />
        <div className="spaceBetween" />
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/page/:page" component={List} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logOut" component={LogOut} />
            <Route exact path="/register" component={Register} />
            <Route path="/createProduct" component={authenticated?CreateProductContainer:Login} />
            <Route path="/product/:id" component={SingleContainer} />
            <Route path="/resetpassword" component={passwrodResetContainer} />
            <Route component={PageNotFound}/>
        </Switch>
    </div>
    </Router>

export default Routes