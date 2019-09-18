import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as actions from '../../redux/actions'

class Home extends Component {
  
  static propTypes = {
    isMobile: PropTypes.bool
  }

  componentDidMount() {
    console.log(actions.loadBooks())
  }
  
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, null)(Home)