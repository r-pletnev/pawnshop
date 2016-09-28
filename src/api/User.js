import fetchJSON from '../utilis/fetchJSON'
import {onApiFail} from '../actions/AppActions'


const ROOT_URL = "http://localhost:8000"
const SIGN_IN_URL = '/account/login/'
const GET_USER_INFO_URL = '/account/profile/'
const GET_PERCENT_URL = '/api/percent/'
// const RESET_EMAIL = '/account/reset_email/'
const SET_NEW_EMAIL_URL = '/account/set_new_email/'
const CHECK_OLD_EMAIL_URL = '/account/check_old_email/'
const CHECK_NEW_EMAIL_URL = '/account/check_new_email/'
const SEND_CODE_TO_OLD_EMAIL = '/account/send_code_old_email/'

export function userLogin(data){
  return fetchJSON(`${ROOT_URL}${SIGN_IN_URL}`, {
    method: 'POST',
    body: data
  })
}

export function fetchUserInfo(){
  return fetchJSON(`${ROOT_URL}${GET_USER_INFO_URL}`, {
    method: 'GET'
  })
}

export function fetchPercent(data){
  return fetchJSON(`${ROOT_URL}${GET_PERCENT_URL}`, {
    method: 'POST',
    body: data
  })
}

export function checkOldEmail(data){
  return fetchJSON(`${ROOT_URL}${CHECK_OLD_EMAIL_URL}`, {
    method: 'POST',
    body: data
  })
}

export function checkNewEmail(data){
  return fetchJSON(`${ROOT_URL}${CHECK_NEW_EMAIL_URL}`, {
    method: 'POST',
    body: data
  })
}

// export function setNewEmail(data){
//   return fetchJSON(`${ROOT_URL}${SET_NEW_EMAIL_URL}`,{
//     method: 'POST',
//     body: data
//   })
// }

export function sendCodeToOldEmail(){
  return fetchJSON(`${ROOT_URL}${SEND_CODE_TO_OLD_EMAIL}`,{
    method: 'POST'
  })
}

