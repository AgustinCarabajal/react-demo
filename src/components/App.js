import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// import Header from './Global/Header'
import Content from './Global/Content'
// import Footer from './Global/Footer'

import items from '../data/menu'

import './Global/css/Main.css'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

class App extends Component {

  constructor(props) {
    super(props)
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      this.state = {
        user
      }
    }
  }

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  click() {
    document.getElementById('wrapper').classList.toggle("toggled")
  }
  
  render() {

    const { children } = this.props

    return (
      <div className="App">
        <div class="d-flex toggled" id="wrapper">
          <div class="bg-dark border-right" id="sidebar-wrapper">
            <div class="sidebar-heading title-light">Cargill</div>
            <div class="list-group list-group-flush item-light">
              { items && items.map((item, key) =>
                <Link to={ item.url } key={ key } class="list-group-item list-group-item-action bg-dark item-light">{ item.title }</Link>
              )}
            </div>
          </div>
          <div id="page-content-wrapper">  
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button class="btn" id="menu-toggle" onClick={ this.click }>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Profile
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                      { this.state && <span class="dropdown-item" href="#">{ this.state.user.ds_name }</span> }
                      <a className="dropdown-item" href="/logout">Logout</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="container-fluid">
              <br />
              <Content body={ children } />
              <br />
            </div>
          </div>
        </div>
        {/* <Footer copyright="&copy; Test - 2019" /> */}
      </div>
    )
  }
}

export default App;
