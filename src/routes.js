import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/App'
import Workflow from './components/Workflow'
import Report from './components/Report'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './containers/Home'
import Page404 from './components/Page404'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/workflow" component={ Workflow } />
      <Route path="/report" component={ Report } />
      <Route path="/login" component={ Login } />
      <Route path="/logout" component={ Logout } />
      <Route path="/" component={ Home } />
      <Route component={ Page404 } />
    </Switch>
  </App>

export default AppRoutes