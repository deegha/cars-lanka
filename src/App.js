/**
 * Created by Deegha on 05/12/2018
 */

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from "react-redux"


import List from "./components/list/List"
import SingleContainer from "./components/single/SingleContainer"
import PageNotFound from "./components/pageNotFound/pageNotFound"
import CreateProductContainer from "./components/createProduct/createProductContainer"

import { fetchProductsList } from "./actions/productListActions"

import "./App.css"

class App extends Component {

  componentDidMount () {
    this.props.productsList()
  }

  render() {
    return <Router>
      <div>
        <Switch>
          <Route exact path="/" component={List} />
          <Route path="/createProduct" component={CreateProductContainer} />
          {/* <Route path="/productPage/:id" component={SingleContainer} /> */}
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dipatch => ({
  productsList : () => dipatch(fetchProductsList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 
