import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {routes} from './routes'
import {Provider} from 'react-redux'
import './styles/main.css'
import {loginUserSuccess} from './actions/UserActions'
import {tokenIsValid} from './utilis'
import configureStore from './store/configureStore'
import './rc'


// configure redux store
export const store = configureStore()

const tokenObj = localStorage.getObject('token')
if (tokenObj !== null && tokenIsValid(tokenObj)){
  store.dispatch(loginUserSuccess(tokenObj))
}

function hashLinkScroll(){
  const {hash} = window.location
  if (hash !== ''){
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById. 
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = document.getElementById(id)
      if (element) element.scrollIntoView()
    }, 0)
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} onUpdate={hashLinkScroll} />
  </Provider>,
  document.getElementById('root')
);
