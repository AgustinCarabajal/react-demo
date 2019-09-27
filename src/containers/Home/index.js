import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import items from '../../data/menu'

import { FaUserAlt } from 'react-icons/fa'

import '../../components/Global/css/Main.css'
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import logo from '../../components/Global/images/logos/Cargill_R_V_black_2c.png'

class Home extends Component {
  
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
  
  static propTypes = {
    isMobile: PropTypes.bool
  }

  openForm() {
    document.getElementById("myForm").style.display = "block"
  }
  
  closeForm() {
    document.getElementById("myForm").style.display = "none"
  }
  
  click() {
    document.getElementById('wrapper').classList.toggle("toggled")
  }
  
  render() {
    if (this.state.loggedIn) {
      return (
        // <div className="App">
        <div className="d-flex" id="wrapper">
          <div className="bg-dark border-right" id="sidebar-wrapper">
            <div className="sidebar-heading title-light">Cargill</div>
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
              <div className="card text-center">
                <div className="card-body">
                  <img className="login-image" src={logo} alt="babylon-layout" />
                  <h1 className="display-5">Welcome to CID 2.0</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <a className="btn btn-primary btn-lg" href="/workflow" role="button">WORKFLOW</a>
                    </div>
                    <div className="col-md-6">
                      <a className="btn btn-primary btn-lg" href="/report" role="button">P&L REPORT</a>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-lg" disabled>PLANNING MODELING</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-lg" disabled>WHAT IF SCENARIO</button>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-primary btn-lg" disabled>BUDGET & FORECASTING</button>
                    </div>
                  </div>
                </div>

                {/* <div className="chat">
                  <button className="open-button" onClick={ this.openForm }>Chat</button>
                  <div className="chat-popup" id="myForm">
                    <form className="chat-form-container">
                      <h3>Chat</h3>

                      <label htmlFor="msg"><b>Message</b></label>
                      <textarea placeholder="Type message.." name="msg" required></textarea>
                      <div className="row">
                        <div className="col-md-6">
                          <button type="submit" className="btn btn-sm">Send</button>
                        </div>
                        <div className="col-md-6">
                          <button type="button" className="btn cancel" onClick={ this.closeForm }>Close</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}
              </div>       
            </div>       
          </div>       
        </div>       
        // </div>       
      )
    } else {
      return <Redirect to="/login" />
    }
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home)