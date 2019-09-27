import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import * as actions from '../../redux/actions'

import logo from '../Global/images/logos/Cargill_R_V_black_2c.png'

export default class Login extends Component {
  constructor(props) {
    super(props)
    
    const token = localStorage.getItem('token')
    let loggedIn = true

    if(!token) {
      loggedIn = false
    }

    this.state = {
      user: '',
      password: '',
      loggedIn
    }

    this.onChange = this.onChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitForm(e) {
    e.preventDefault()
    const { user, password } = this.state

    // Login action
    const res = actions.login({ user, password })
    res.payload.then(res => {
      // if (res.status.match(/successfully/i)) {
      if (true) {
        localStorage.setItem('token', 'res.token')
        localStorage.setItem('user', '{"ds_name": "test"}')
        this.setState({
          loggedIn: true
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  required = v => {
		if (!v || v === '') {
			return 'This field is required';
		}
		return undefined;
	}

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <div className="login-container">
        <img className="login-image" src={logo} alt="babylon-layout" />
        <h1>SIGN IN</h1>
        <h4>Welcome. Please use the form to sign-in.</h4>

        <div className="form-container">
          <form className="form" onSubmit={ this.submitForm }>
            <input type="text" placeholder="Username" name="user" value={ this.state.user } onChange={ this.onChange } />
            <br/>
            <input type="password" placeholder="Password" name="password" value={ this.state.password } onChange={ this.onChange } />
            <br/>
            <button className="login-btn btn-green" type="submit" >Sign in</button>
          </form>
        </div>
      </div>
    )
  }
}