import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

import items from '../data/menu'

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }
  
  render() {

    const { children } = this.props

    return (
      <div className="App">
        <Header title="Test" items={ items } />
        <Content body={ children } />
        <Footer copyright="&copy; Test - 2019" />
      </div>
    );
  }
}

export default App;
