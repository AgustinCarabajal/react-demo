import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Styles/styles.scss';
import './Styles/font-awesome.css';
// import ErrorBoundary from './Common/Handlers/ErrorBoundary';
import errorHandler from './Common/Handlers/ErrorHandler';
// import sessionValidator from './Common/Handlers/SessionValidator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    errorHandler(this.props);
    // sessionValidator(this.props)
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
