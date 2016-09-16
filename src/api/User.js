import fetchJSON from '../utilis/fetchJSON'
import {onApiFail} from '../actions/AppActions'


const ROOT_URL = "http://localhost:8000"
const SIGN_IN_URL = '/account/login/'
const GET_USER_INFO_URL = '/account/profile'

export function userLogin(data){
  return fetchJSON(`${ROOT_URL}${SIGN_IN_URL}`, {
    method: 'POST',
    body: data
  })
}

export function fetchUserInfo(username){
  return fetchJSON(`${ROOT_URL}${GET_USER_INFO_URL}/${username}`, {
    method: 'GET'
  })
}
