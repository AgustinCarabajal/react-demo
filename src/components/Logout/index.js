import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  render() {
    return <Redirect to="/login" />
  }
}

export default Header;
