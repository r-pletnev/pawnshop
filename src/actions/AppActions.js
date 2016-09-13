import {
  APP_REQUEST,
  APP_FAIL,
  APP_SUCCESS,
  APP_ON_LOGIN_MODAL,
  APP_OFF_LOGIN_MODAL
} from '../constants/App'

import {parseJSON} from '../utilis/fetchJSON'

export function appRequest(){
  return {
    type: APP_REQUEST
  }
}

export function appSuccess(){
  return {
    type: APP_SUCCESS
  }
}

export function appFail(payload){
  return {
    type: APP_FAIL,
    payload: {
      errorMsg: payload.errorMsg
    }
  }
}

export function showLoginWindow(){
  return {
    type: APP_ON_LOGIN_MODAL
  }
}

export function hideLoginWindow(){
  return {
    type: APP_OFF_LOGIN_MODAL
  }
}

export const errorDispatcher = dispatch => error => {
  if(typeof(error) !== 'object') return dispatch(appFail({errorMsg: error}))

  parseJSON(error.response)
  .then(er => {
    return dispatch(appFail({errorMsg: JSON.stringify(er)}))
  })
}

