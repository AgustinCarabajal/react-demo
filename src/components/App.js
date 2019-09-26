import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import Header from './Global/Header'
import Content from './Global/Content'
// import Footer from './Global/Footer'

class App extends Component {

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
    children: PropTypes.object.isRequired
  }

  click() {
    document.getElementById('wrapper').classList.toggle("toggled")
  }
  
  render() {

    const { children } = this.props

    return (
      <Content body={ children } />        
    )
  }
}

export default App;
