import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../constants/User'
import {SubmissionError} from 'redux-form'

import {appRequest, appSuccess, errorDispatcher, hideLoginWindow} from './AppActions'
import {userLogin} from '../api/User'

export function loginUser(payload){
  const {username, password} = payload
  return dispatch => {
    dispatch(appRequest())
    return userLogin({username, password})
      .then((data) => {
        dispatch(loginUserSuccess({token: data.token}))
        dispatch(appSuccess())})
        dispatch(hideLoginWindow())
      .catch((error) => {
        errorDispatcher(dispatch)(error)
        throw new SubmissionError({_error: 'Введены неверные данные'})
        })
  }
}

export function loginUserSuccess(tokenObj){
  return dispatch => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: {
        token: tokenObj.token,
        name: 'admin',
        email: 'some_mail@actionCreator'
      }
    })
  }
}
