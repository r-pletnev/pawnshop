import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Home from './containers/Home'
import Debt from './containers/Debt'
import Page from './containers/Page'
import Profile from './containers/Profile'

export const routes = (
  <div>
    <Route path='/' component={Page} >
      <IndexRoute component={Home} />
      <Route path='/debt' component={Debt} />
      <Route path='/profile' component={Profile} />
    </Route>
  </div>
)

