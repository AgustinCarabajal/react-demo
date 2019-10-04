import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import items from '../../data/menu'
import queryString from 'query-string'

import { FaUserAlt } from 'react-icons/fa'
import logo from '../Global/images/logos/b2.png'

import '../Global/css/Main.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { Card } from 'react-bootstrap'

class Search extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem('token')
    const user = JSON.parse(localStorage.getItem('user')) || ''
    let loggedIn = true

    if(!token) {
      loggedIn = false
    }

    this.state = {
      loggedIn,
      user
    }
  }

  click() {
    document.getElementById('wrapper').classList.toggle("toggled")
  }

  render() {

    const params = queryString.parse(this.props.location.search)
    if(!this.state.loggedIn) {
      return <Redirect to="/login" />
    }
    return (
      <div className="d-flex" id="wrapper">
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="sidebar-heading title-light"><img alt="logo" src={ logo } /></div>
        <div className="list-group list-group-flush item-light">
          { items && items.map((item, key) =>
            <Link to={ item.url } key={ key } className="list-group-item list-group-item-action bg-dark item-light">{ item.title }</Link>
          )}
        </div>
      </div>
      <div id="page-content-wrapper">  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {
            this.state.loggedIn && 
            <button className="btn" id="menu-toggle" onClick={ this.click }>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
            </button>
          }
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            { this.state &&
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle cursor" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    { this.state.user.ds_name } &nbsp;
                    <FaUserAlt className="rounded-circle" />
                  </span>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/logout">Logout</a>
                  </div>
                </li>
              </ul>
            }
          </div>
        </nav>
        <div className="container-fluid">
          <br />
            <div>
              <div className="row">
                <div className="col-md-8">
                  <Card>
                    <Card.Header><h5>{ params.t }</h5></Card.Header>
                    <Card.Body>
                      <h6>{ params.r }</h6>
                      <span>{ params.t } Complete Budget</span>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card>
                    <Card.Header><h6>Delegated To:</h6></Card.Header>
                    <Card.Body>
                      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                        <span>{ params.n }</span> <br />
                      </div>
                      <div className="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
                        <span>Direct Delegations made from this Task</span>
                        <p>1</p>
                        <span>Total (Delegations & Subdelegations) made from this Task</span>
                        <p>1</p>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search