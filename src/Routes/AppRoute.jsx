
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const AppRoute = ({ exact, path, component }) => {
  const Component = component;

  return (
    <Route exact={exact} path={path} key={path} render={(props) => <Component {...props} />} />
  );
};

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({ });

const ConnectedAppRoute = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppRoute));

export default ConnectedAppRoute;
