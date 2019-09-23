import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import logo from '../../components/Global/images/logos/Cargill_R_V_black_2c.png'

class Home extends Component {
  
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
  
  static propTypes = {
    isMobile: PropTypes.bool
  }

  openForm() {
    document.getElementById("myForm").style.display = "block"
  }
  
  closeForm() {
    document.getElementById("myForm").style.display = "none"
  }
  
  render() {
    if (this.state.loggedIn) {
      return (
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