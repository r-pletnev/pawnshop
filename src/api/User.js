import fetchJSON from '../utilis/fetchJSON'
import {onApiFail} from '../actions/AppActions'


const ROOT_URL = "http://localhost:8000"
const SIGN_IN_URL = '/account/login/'
const GET_USER_INFO_URL = '/account/profile/'
const GET_PERCENT_URL = '/api/percent/'

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
