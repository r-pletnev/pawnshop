import {
  APP_REQUEST,
  APP_FAIL,
  APP_SUCCESS
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

export const onApiFail = dispatch => error => {
  if(typeof(error) !== 'object') return dispatch(appFail({errorMsg: error}))

  parseJSON(error.response)
  .then(er => {
    return dispatch(appFail({errorMsg: er.error}))
  })
}

