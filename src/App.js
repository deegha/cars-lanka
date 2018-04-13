import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from "react-redux"

import JobList from "./components/jobList/jobList"
import JobSingleContainer from "./components/jobSingle/jobSingleContainer"

import { fetchJobList } from "./actions/jobActions"

import "./App.css"

class App extends Component {

  componentDidMount () {
    this.props.fetchJobs()
  }

  render() {
    return <Router>
      <div>
        <Route exact path="/" component={JobList} />
        <Route path="/jobPage/:id" component={JobSingleContainer} />
      </div>
    </Router>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return state
}

const mapDispatchToProps = dipatch => ({
  fetchJobs : () => dipatch(fetchJobList())
})

export default connect(mapStateToProps, mapDispatchToProps)(App) 
