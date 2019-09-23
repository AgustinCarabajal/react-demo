import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './css/Footer.css'

class Footer extends Component {

  static propTypes = {
    copyright: PropTypes.string.isRequired
  }
  
  render() {

    const { copyright } = this.props

    return (
      <footer id="sticky-footer" className="py-4 text-black-50">
        <div className="container text-center">
          <small>{ copyright }</small>
        </div>
      </footer>
    )
  }
}

export default Footer
