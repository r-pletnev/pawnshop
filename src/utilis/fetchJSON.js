require('es6-promise').polyfill()
import fetch from 'isomorphic-fetch'
import _ from 'lodash'

function checkStatus(response) {
  if(response.ok) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export function parseJSON(response) {
  if (response.status == 204 || response.status == 201) return
  return response.json()
}

export default function fetchJSON(url, options) {
  options.headers = Object.assign({
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }, options.headers)
  const tokenObj = localStorage.getObject('token')
  if(!_.isEmpty(tokenObj)){
    options.headers = {
      ...options.headers, 
      ...{Authorization: `JWT ${tokenObj.token}`}
    }
  }

  if(typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body)
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
}

