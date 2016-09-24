import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './containers/Home'
import Debt from './containers/Debt'
import Page from './containers/Page'
import Profile from './containers/Profile'
import {UserIsAuthenticated} from './utilis'

const Authenticated = UserIsAuthenticated(props => props.children)

export const routes = (
  <div>
    <Route path='/' component={Page} >
      <IndexRoute component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/debt' component={Debt} />
      <Route component={Authenticated}>
        <Route path='/profile' component={Profile} />
      </Route>
    </Route>
  </div>
)

