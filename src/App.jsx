import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.scss';
import errorHandler from './Common/Handlers/ErrorHandler';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    errorHandler(this.props);
  }

  render() {
    const { children } = this.props;

    return (
      <div className="App">
        <div className="">
          { children }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(App);
