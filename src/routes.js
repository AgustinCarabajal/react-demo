import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './components/App'
import Workflow from './components/Workflow'
import Report from './components/Report'
import Login from './components/Login'
import Logout from './components/Logout'
import Home from './containers/Home'
import Page404 from './components/Page404'
import Delegate from './components/Delegate'
import Search from './components/Search'
import Tree from './components/Tree'

const AppRoutes = () =>
  <App>
    <Switch>
      <Route path="/workflow" component={ Workflow } />
      <Route path="/delegate" component={ Delegate } />
      <Route path="/search" component={ Search } />
      <Route path="/tree" component={ Tree } />
      <Route path="/report" component={ Report } />
      <Route path="/login" component={ Login } />
      <Route path="/logout" component={ Logout } />
      <Route path="/" component={ Home } />
      <Route component={ Page404 } />
    </Switch>
  </App>

export default AppRoutes