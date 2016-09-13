import fetchJSON from '../utilis/fetchJSON'
import {onApiFail} from '../actions/AppActions'


const ROOT_URL = "http://localhost:8000"
const SIGN_IN_URL = '/account/login/'

export function userLogin(data, onSuccess, dispatch){
  return fetchJSON(`${ROOT_URL}${SIGN_IN_URL}`, {
    method: 'POST',
    body: data
  })
}
