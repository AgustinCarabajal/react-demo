import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import App from './App';
import { persistor, store } from './store/Store';
import ApplicationRoutes from './Routes/Routes';
import AppRoute from './Routes/AppRoute';

const { Routes } = ApplicationRoutes;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <div>
          <App>
            <Switch>
              {Routes.map((route) => (
                <AppRoute
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  isPrivate={route.isPrivate}
                  key={`route_${route.path}`}
                />
              ))}
            </Switch>
          </App>
        </div>
      </HashRouter>
    </PersistGate>
  </Provider>, document.getElementById('root'),
);

