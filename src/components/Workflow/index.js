import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class About extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem('token')
    let loggedIn = true

    if(!token) {
      loggedIn = false
    }

    this.state = {
      loggedIn
    }
  }

  render() {
    if(!this.state.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div className="text-center">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
          <h1 className="h2">Workflow</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group mr-2">
              <button className="btn btn-sm btn-primary" disabled>Assigned</button>
              <button className="btn btn-sm btn-default" disabled>Delegated</button>
            </div>
          </div>
        </div>
        <div className="loader">
          <div className="spinner-border" role="status"></div>
          <br />
          <span className="">Connectivity issues in Cargill network</span>
        </div>
      </div>
    )
  }
}

export default About