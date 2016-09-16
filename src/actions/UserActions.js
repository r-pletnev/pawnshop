import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../constants/User'
import {SubmissionError} from 'redux-form'
import {addToDate} from '../utilis'
import {appRequest, appSuccess, errorDispatcher, hideLoginWindow} from './AppActions'
import {userLogin, fetchUserInfo} from '../api/User'

function saveToken(token, expired=addToDate(37000, 's')){
  localStorage.setObject('token', {token, expired})
}

function setUserInfo(payload){
  return {
    type: LOGIN_SUCCESS,
    payload: {...payload}
  }
}

export function loginUser(payload){
  const {username, password} = payload
  return dispatch => {
    dispatch(appRequest())
    return userLogin({username, password})
      .then((data) => {
        dispatch(loginUserSuccess(data.token, username))
        dispatch(appSuccess())
        dispatch(hideLoginWindow())})
      .catch((error) => {
        errorDispatcher(dispatch)(error)
        throw new SubmissionError({_error: 'Введены неверные данные'})
      })
  }
}

export function loginUserSuccess(token, username){
  saveToken(token)
  return dispatch => {
    return fetchUserInfo(username)
      .then(data => {
        dispatch(setUserInfo(data))
      })
  }
}
