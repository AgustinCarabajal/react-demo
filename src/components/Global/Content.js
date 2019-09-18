import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './css/Content.css';

class Content extends Component {
  
  // State
  // constructor() {
  //   super()

  //   this.state = {
  //     count: 0
  //   }

  //   this.handleButton = this.handleButton.bind(this)
  // }

  // componentDidMount() {
  //   this.setState({
  //     count: 1
  //   })
  // }

  // handleButton(e) {
  //   if (e.target.id === 'add') {
  //     this.setState({
  //       count: this.state.count + 1
  //     })
  //   } else {
  //     this.setState({
  //       count: 0
  //     })
  //   }
  // }

  // render() {
  //   return (
  //     <div className="Content">
  //       <h2> Counter: { this.state.count } </h2>
  //       <p>
  //         <button id="add" onClick={ this.handleButton }>Add</button>
  //         <button id="reset" onClick={ this.handleButton }>Reset</button>
  //       </p>
  //     </div>
  //   );
  // }

  static propTypes = {
    body: PropTypes.object.isRequired
  }

  render() {
    
    const { body } = this.props

    return (
      <div className="Content">
        { body  }
      </div>
    )
  }
}

export default Content;
