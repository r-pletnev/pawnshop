import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGOUT_SUCCESS
} from '../constants/User'
import {SubmissionError, reset} from 'redux-form'
import {addToDate} from '../utilis'
import {appRequest, appSuccess, errorDispatcher, hideLoginWindow} from './AppActions'
import {
  userLogin,
  fetchUserInfo,
  checkOldEmail as checkOldEmailApi,
  checkNewEmail as checkNewEmailApi,
  sendCodeToOldEmail,
  updatePassword as updatePasswordApi
} from '../api/User'
import {eraseQueries} from './DebtActions'

function saveToken(token, expired=addToDate(37000, 's')){
  const tokenObj = typeof(token) === 'object' ? token : {token, expired}
  localStorage.setObject('token', tokenObj)
}

function setUserInfo(payload){
  return {
    type: LOGIN_SUCCESS,
    payload: {...payload}
  }
}

function updateUserInfo(){
  return dispatch => {
    return fetchUserInfo()
      .then(data => {
        dispatch(setUserInfo(data))
      })
  }
}

export function logout(){
  localStorage.removeItem('token')
  return dispatch => {
    dispatch(eraseQueries())
    dispatch({
      type: LOGOUT_SUCCESS
    })
  }
}

export function loginUser(payload){
  const {username, password} = payload
  return dispatch => {
    dispatch(appRequest())
    return userLogin({username, password})
      .then((data) => {
        dispatch(loginUserSuccess(data.token))
        dispatch(appSuccess())
        dispatch(hideLoginWindow())})
      .catch((error) => {
        errorDispatcher(dispatch)(error)
        throw new SubmissionError({_error: 'Введены неверные данные'})
      })
  }
}

export function loginUserSuccess(token){
  saveToken(token)
  return dispatch => {
    return fetchUserInfo()
      .then(data => {
        dispatch(setUserInfo(data))
        dispatch(reset('debtForm'))
      })
  }
}

export function sendCode(){
  return () => {
    sendCodeToOldEmail()
  }
}

export function checkOldEmail(payload){
  return () => {
    return checkOldEmailApi(payload)
  }
}

export function checkNewEmail(payload){
  return (dispatch) => {
    return checkNewEmailApi(payload)
      .then(() => {
        dispatch(updateUserInfo())
      })
  }
}

export function updatePassword(payload){
  const {password, code} = payload
  return () => {
    return checkNewEmailApi({code})
      .then(() => {
        return updatePasswordApi({password})
      })
  }
}
