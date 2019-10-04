import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import items from '../../data/menu'

import { FaUserAlt } from 'react-icons/fa'
import logo from '../Global/images/logos/b2.png'

import '../Global/css/Main.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

class Page404 extends Component {
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
            <div className="text-center">
              
              <br />
              <div className="loader">
                <div className="spinner-border" role="status"></div>
                <br />
                <span className="">Connectivity issues in Cargill network</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Page404